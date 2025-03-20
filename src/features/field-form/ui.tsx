
import {
  Button,
  Field,
  FormError,
  Input,
  Label,
  Select,
  SelectLabel,
  SelectOption,
  Text,
} from "@/shared/ui";

import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormModel, defaultValues, schema } from "./model";
import { yupResolver } from "@hookform/resolvers/yup";
import { VocabularyFieldCreateDefaultRequest, VocabularyFieldReadDefaultResponse, jsonRpcApi } from "@/shared/jsonrpc";

export type FieldProps = {
  detail: VocabularyFieldCreateDefaultRequest["detail"]
  onChange: (
    data: FormModel["detail"]
  ) => void;
};

const fieldList = [
  { id: "text", name: "Текстовое поле" },
  { id: "select", name: "Выпадающий список" },
  { id: "select_multiple", name: "Множественный выпадающий список" },
  { id: "checkbox", name: "Чекбокс" },
  { id: "checkbox_list", name: "Список чекбоксов" },
];

type Props = {
  recordId: string | null;
  onSubmitForm: () => void;
  onClose: () => void;
};

export const FieldForm: FC<Props> = ({ recordId,  onSubmitForm, onClose}) => {
  const [vocabularyFieldCreateDefaultQuery] = jsonRpcApi.useLazyVocabularyFieldCreateDefaultQuery();
  const [vocabularyFieldUpdateDefaultQuery] = jsonRpcApi.useLazyVocabularyFieldUpdateDefaultQuery();
  const [vocabularyFieldReadDefaultQuery] = jsonRpcApi.useLazyVocabularyFieldReadDefaultQuery();

  const [fieldRecord, setFieldRecord] =
    useState<VocabularyFieldReadDefaultResponse>();

  const { control, handleSubmit, watch, reset, setValue } = useForm<FormModel>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const typeWatch = watch("type");
  const detailWatch = watch("detail");

  const handleFieldChange = (
    data: FormModel["detail"]
  ) => {
    if (data?.directoryId) {
      setValue("detail.directoryId", data.directoryId);
    }

    if (data?.label) {
      setValue("detail.label", data.label);
    }

    if (data?.placeholder) {
      setValue("detail.placeholder", data.placeholder);
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (recordId) {
        await vocabularyFieldUpdateDefaultQuery({
          id: recordId,
          name: values.name,
          type: values.type,
          detail: {
            label: values.detail.label,
            placeholder: values.detail.placeholder,
            directoryId: values.detail.directoryId ?? undefined
          }
        });

        return  onSubmitForm();
      }

      await vocabularyFieldCreateDefaultQuery({
        name: values.name,
        type: values.type,
        detail: {
          label: values.detail.label,
            placeholder: values.detail.placeholder,
            directoryId: values.detail.directoryId ?? undefined
        }
      });

      onSubmitForm();
    } catch (e) {
      //
    }
  });

  const fetchData = async () => {
    try {
      if (!recordId) {
        return;
      }

      const response = await vocabularyFieldReadDefaultQuery({
        id: recordId
      }).unwrap()

      setFieldRecord(response);

      reset({
        name: response.name ?? "",
        type: response.type ?? "",
        detail: response.detail,
      });
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    fetchData();
  }, [recordId]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col h-full">
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => {
          return (
            <Field>
              <Label>Наименование</Label>

              <Input type="text" {...field} />

              <FormError error={error} />
            </Field>
          );
        }}
      />

      {fieldRecord && (
        <Field>
          <Label>Тип поля</Label>

          <p className="text-sm">{fieldRecord.type}</p>
        </Field>
      )}

      {!fieldRecord && (
        <Controller
          control={control}
          name="type"
          render={({ field: {  onChange }, fieldState: { error } }) => {
            return (
              <Field>
                <Label>Тип поля</Label>

                <Select
                  onChange={(selected) => {
                    if (selected && !Array.isArray(selected)) {
                      onChange(selected.id);
                    }
                  }}
                >
                  {fieldList.map((key) => (
                    <SelectOption key={key.id} value={key}>
                      <SelectLabel>{key.name}</SelectLabel>
                    </SelectOption>
                  ))}
                </Select>

                <FormError error={error} />
              </Field>
            );
          }}
        />
      )}

      <div className="flex-1">
        {typeWatch === "text" && (
          <FieldTextField detail={detailWatch} onChange={handleFieldChange} />
        )}

        {typeWatch === "select" && (
          <FieldSelect detail={detailWatch} onChange={handleFieldChange} />
        )}

        {typeWatch === "select_multiple" && (
          <FieldSelectMultiple
            detail={detailWatch}
            onChange={handleFieldChange}
          />
        )}

        {typeWatch === "checkbox" && (
          <FieldCheckbox detail={detailWatch} onChange={handleFieldChange} />
        )}

        {typeWatch === "checkbox_list" && (
          <FieldCheckboxList
            detail={detailWatch}
            onChange={handleFieldChange}
          />
        )}
      </div>

      <div className="flex items-center gap-2 justify-end">
        <Button variant="tertinary" onClick={onClose}>
          <Text as="span">Отменить</Text>
        </Button>

        <Button type="submit">
          <Text as="span">Сохранить</Text>
        </Button>
      </div>
    </form>
  );
};

export const FieldCheckbox: FC<FieldProps> = ({ detail, onChange }) => {
  return (
    <div className="border-b border-b-neutral-300 border-dashed py-4">
      <Text as="p" className="text-lg font-medium">
        Чекбокс
      </Text>

      <div className="flex flex-col gap-2">
        <Field>
          <Label>Подпись для чекбокса</Label>

          <Input
            type="text"
            value={detail?.label ?? ""}
            placeholder="Введите название поля"
            onChange={(e) => {
              onChange({ label: e.currentTarget.value });
            }}
          />
        </Field>
      </div>
    </div>
  );
};

export const FieldCheckboxList: FC<FieldProps> = ({ detail, onChange }) => {
  const {data: directoryList = []} = jsonRpcApi.useVocabularyDirectoryListDefaultQuery({});


  return (
    <div className="border-b border-b-neutral-300 border-dashed py-4">
      <Text as="p" className="text-lg font-medium">
        Список чекбоксов
      </Text>

      <div className="flex flex-col gap-2">
        <Field>
          <Label>Подпись для поля</Label>

          <Input
            type="text"
            value={detail?.label ?? ""}
            placeholder="Введите название поля"
            onChange={(e) => {
              onChange({ label: e.currentTarget.value });
            }}
          />
        </Field>

        <Field>
          <Label>Справочник для подписей</Label>

          <Select
            onChange={(selected) => {
              if (selected && !Array.isArray(selected)) {
                onChange({ directoryId: selected.id });
              }
            }}
          >
            {directoryList.map((key) => (
              <SelectOption key={key.id} value={key}>
                <SelectLabel>{key.name}</SelectLabel>
              </SelectOption>
            ))}
          </Select>
        </Field>
      </div>
    </div>
  );
};

export const FieldTextField: FC<FieldProps> = ({ detail, onChange }) => {
  return (
    <div className="border-b border-b-neutral-300 border-dashed py-4">
      <Text as="p" className="text-lg font-medium">
        Текстовое поле
      </Text>

      <div className="flex flex-col gap-2">
        <Field>
          <Label>Название поля</Label>

          <Input
            type="text"
            value={detail?.label ?? ""}
            placeholder="Введите название поля"
            onChange={(e) => {
              onChange({ ...detail, label: e.currentTarget.value });
            }}
          />
        </Field>

        <Field>
          <Label>Заполнитель поля</Label>

          <Input
            type="text"
            value={detail?.placeholder ?? ""}
            placeholder="Введите заполнитель поля"
            onChange={(e) => {
              onChange({ ...detail, placeholder: e.currentTarget.value });
            }}
          />
        </Field>
      </div>
    </div>
  );
};

export const FieldSelect: FC<FieldProps> = ({detail, onChange}) => {
  const {data: directoryList = []} = jsonRpcApi.useVocabularyDirectoryListDefaultQuery({});

  return (
    <div className="border-b border-b-neutral-300 border-dashed py-4">
      <Text as="p" className="text-lg font-medium">
        Выпадающий список
      </Text>

      <div className="flex flex-col gap-2">
        <Field>
          <Label>Название поля</Label>

          <Input type="text" placeholder="Введите название поля" onChange={(e) => {
              onChange({ ...detail, label: e.currentTarget.value });
            }}/>
        </Field>

        <Field>
          <Label>Заполнитель поля</Label>

          <Input type="text" placeholder="Введите заполнитель поля" onChange={(e) => {
              onChange({ ...detail, placeholder: e.currentTarget.value });
            }}/>
        </Field>

        <Field>
          <Label>Справочник для значений</Label>

          <Select onChange={(value) => {
            if(value && !Array.isArray(value)) {
              onChange({ ...detail, directoryId: value.id });
            }
          }}>
            {directoryList.map((key) => (
              <SelectOption key={key.id} value={key}>
                <SelectLabel>{key.name}</SelectLabel>
              </SelectOption>
            ))}
          </Select>
        </Field>
      </div>
    </div>
  );
};

export const FieldSelectMultiple: FC<FieldProps> = () => {
  const {data: directoryList = []} = jsonRpcApi.useVocabularyDirectoryListDefaultQuery({});


  return (
    <div className="border-b border-b-neutral-300 border-dashed py-4">
      <Text as="p" className="text-lg font-medium">
        Множественный выпадающий список
      </Text>

      <div className="flex flex-col gap-2">
        <Field>
          <Label>Название поля</Label>

          <Input type="text" placeholder="Введите название поля" />
        </Field>

        <Field>
          <Label>Заполнитель поля</Label>

          <Input type="text" placeholder="Введите заполнитель поля" />
        </Field>

        <Field>
          <Label>Справочник для значений</Label>

          <Select>
            {directoryList.map((key) => (
              <SelectOption key={key.id} value={key}>
                <SelectLabel>{key.name}</SelectLabel>
              </SelectOption>
            ))}
          </Select>
        </Field>
      </div>
    </div>
  );
};
