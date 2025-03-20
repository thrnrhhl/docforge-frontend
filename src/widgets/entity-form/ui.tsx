import { EntityRow } from "@/features/entity-row";
import { Button, Drawer, Field, FormError, Input, Label } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useRef, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import {
  DrawerFieldListType,
  FieldRecord,
  FormModel,
  defaultValues,
  schema,
} from "./model";
import { jsonRpcApi } from "@/shared/jsonrpc";

type Props = {
  recordId: string | null;
  onSubmitForm: () => void;
  onClose: () => void;
};

function getFieldIds(data: FormModel["rows"]): string[] {
  return data.flatMap((innerArray) => innerArray.map((item) => item.fieldId));
}

export const EntityForm: FC<Props> = ({ recordId, onSubmitForm }) => {
  const [vocabularyEntityReadDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityReadDefaultQuery();
  const { data: fieldList = [] } =
    jsonRpcApi.useVocabularyFieldListDefaultQuery({});
  const [vocabularyEntityCreateDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityCreateDefaultQuery();
  const [vocabularyEntityUpdateDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityUpdateDefaultQuery();

  const containerRef = useRef<null | HTMLDivElement>(null);

  const [drawerFieldList, setDrawerFieldList] = useState<DrawerFieldListType>({
    isOpen: false,
    data: undefined,
  });
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  const { control, handleSubmit, reset, setValue, getValues } =
    useForm<FormModel>({
      mode: "onChange",
      resolver: yupResolver(schema),
      defaultValues: defaultValues,
    });

  const formRowsValue = useWatch({
    control: control,
    name: "rows",
  });

  const selectedFields = getFieldIds(formRowsValue);

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (recordId) {
        await vocabularyEntityUpdateDefaultQuery({
          id: recordId,
          name: values.name,
          rows: values.rows,
        });

        return onSubmitForm();
      }

      await vocabularyEntityCreateDefaultQuery({
        name: values.name,
        rows: values.rows,
      });

      onSubmitForm();
    } catch (e) {
      //
    }
  });

  // Функция, добавляющая новое поле в ряд
  const handleAddNewField = (field: FieldRecord) => {
    // Определяем, было ли это поле уже выбрано
    const isAlreadySelected = selectedFields.includes(field.id);

    if (isAlreadySelected) return;

    if (!drawerFieldList.data) return;

    const rowListConcat = formRowsValue.concat();

    // Вставляем новое поле в текущий ряд
    rowListConcat[drawerFieldList.data.rowIndex].push({
      fieldId: field.id,
      pos: 1,
      col: 2,
    });

    setDrawerFieldList({ isOpen: false, data: undefined });
    setValue("rows", rowListConcat);
  };

  // Функция, удаляющая выбранный ряд
  const handleRemoveRow = (idx: number) => {
    setValue(
      "rows",
      getValues("rows").filter((_, index) => index !== idx)
    );
  };

  // Функция, получения данных
  const fetchData = async () => {
    try {
      if (recordId) {
        const response = await vocabularyEntityReadDefaultQuery({
          id: recordId,
        }).unwrap();

        reset({
          name: response.name,
          rows: response.rows,
        });
      }
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    fetchData();
  }, []);

  if (!containerWidth) {
    return <div ref={containerRef}></div>;
  }

  return (
    <form className="flex flex-col h-full" onSubmit={onSubmit}>
      <div ref={containerRef} className="w-full h-full flex-1">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <Field>
              <Label>Наименование</Label>

              <Input
                type="text"
                placeholder="Введите наименование сущности"
                {...field}
              />

              <FormError error={error} />
            </Field>
          )}
        />

        <div className="flex flex-col gap-2 mt-4">
          {formRowsValue.map((key, index) => (
            <EntityRow
              key={index}
              fields={[...key]}
              fieldList={fieldList}
              containerWidth={containerWidth - 60}
              onChange={(data) => {
                setValue(
                  `rows.${index}`,
                  data.map((key) => ({
                    fieldId: key.id,
                    pos: key.gridPos,
                    col: key.gridCol,
                  }))
                );
              }}
              onCreate={() => {
                setDrawerFieldList({
                  isOpen: true,
                  data: {
                    rowIndex: index,
                  },
                });
              }}
              onRemoveRow={() => handleRemoveRow(index)}
            />
          ))}

          <Button
            variant="tertinary"
            className=""
            onClick={() => {
              setValue("rows", [...formRowsValue, []]);
            }}
          >
            Добавить ряд
          </Button>
        </div>
      </div>

      <Button type="submit">Сохранить</Button>

      <Drawer
        header="Поля"
        open={drawerFieldList.isOpen}
        onOpenChange={() =>
          setDrawerFieldList((prev) => ({ ...prev, isOpen: false }))
        }
      >
        <div className="flex flex-col gap-3">
          {fieldList.map((key) => {
            const isSelected = selectedFields.includes(key.id);

            return (
              <div key={key.id} className="flex items-center gap-1">
                <Button
                  variant="unstyled"
                  disabled={isSelected}
                  onClick={() => handleAddNewField(key)}
                >
                  {key.name}
                </Button>

                {isSelected && (
                  <span className="text-neutral-700 text-xs">
                    (Поле уже выбрано)
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </Drawer>
    </form>
  );
};
