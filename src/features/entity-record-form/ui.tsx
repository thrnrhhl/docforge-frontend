import {
  VocabularyEntityReadDefaultResponse,
  VocabularyEntityRecordCreateDefaultRequest,
  VocabularyEntityRecordReadDefaultResponse,
  VocabularyFieldListDefaultResponse,
  VocabularyFieldReadDefaultResponse,
  jsonRpcApi,
} from "@/shared/jsonrpc";
import {
  Button,
  EntityRecordFieldSelect,
  Field,
  Input,
  Label,
} from "@/shared/ui";

import { FC, useEffect, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

type Props = {
  recordId: string | null;
  entity?: VocabularyEntityReadDefaultResponse;
  onSubmitForm: () => void;
  onClose: () => void;
};

export const EntityRecordForm: FC<Props> = ({
  entity,
  recordId,
  onSubmitForm,
  onClose,
}) => {
  const [vocabularyEntityRecordCreateDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityRecordCreateDefaultQuery();
  const [vocabularyEntityRecordUpdateDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityRecordUpdateDefaultQuery();
  const [vocabularyEntityRecordReadDefaultQuery] =
    jsonRpcApi.useLazyVocabularyEntityRecordReadDefaultQuery();
  const { data: fieldList = [] } =
    jsonRpcApi.useVocabularyFieldListDefaultQuery({});
  const [entityRecord, setEntityRecord] =
    useState<VocabularyEntityRecordReadDefaultResponse>();

  const fieldRecordList = fieldList.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {} as Record<string, VocabularyFieldListDefaultResponse[number]>);

  const fetchData = async () => {
    try {
      if (recordId) {
        const entityRecord = await vocabularyEntityRecordReadDefaultQuery({
          id: recordId,
        }).unwrap();

        entityRecord.entityRecordValue.forEach((item) => {
          const fieldName = `${item.detail?.fieldMnemocode}_${item.fieldId}`;

          if (item.detail?.fieldMnemocode === "text") {
            methods.setValue(fieldName, item.detail.text);
          }

          if (item.detail?.fieldMnemocode === "select") {
            methods.setValue(fieldName, item.detail.directoryValueId);
          }
        });

        setEntityRecord(entityRecord);
      }

      entity?.rows.forEach((item) => {
        methods.register(`${item[0]}`);
      });
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      if (!entity) {
        return;
      }

      // Функция для создания списка значений записи сущности
      const createEntityRecordValueList = (
        values: Record<string, any>,
        isUpdate = false
      ): (
        | VocabularyEntityRecordCreateDefaultRequest["entityRecordValue"][number]
        | null
      )[] => {
        return Object.entries(values)
          .map(([key, value]) => {
            const [fieldMnemocode, fieldId] = key.split("_");

            // Если обновляем запись, проверяем, есть ли уже значение в entityRecord
            const entityRecordValueItem = entityRecord?.entityRecordValue.find(
              (item) => item.fieldId === fieldId
            );

            if (!entityRecordValueItem?.id) {
              return null;
            }

            let text = undefined;
            let directoryValueIds: string[] = [];
            let directoryValueId = undefined;

            if (fieldMnemocode === "text") {
              text = value;
            } else if (fieldMnemocode === "select") {
              directoryValueId = value;
            }

            return {
              id: isUpdate ? entityRecordValueItem.id : undefined,
              entityRecordId: entity.id,
              fieldId: fieldId,
              detail: {
                fieldMnemocode: fieldMnemocode,
                text,
                directoryValueIds,
                directoryValueId,
              },
            } as VocabularyEntityRecordCreateDefaultRequest["entityRecordValue"][number];
          })
          .filter(Boolean);
      };

      if (recordId) {
        await vocabularyEntityRecordUpdateDefaultQuery({
          id: recordId,
          entityId: entity.id,
          entityRecordValue: createEntityRecordValueList(
            values,
            true
          ) as VocabularyEntityRecordCreateDefaultRequest["entityRecordValue"],
        });

        return onSubmitForm();
      }

      await vocabularyEntityRecordCreateDefaultQuery({
        entityId: entity.id,
        entityRecordValue: createEntityRecordValueList(
          values,
          true
        ) as VocabularyEntityRecordCreateDefaultRequest["entityRecordValue"],
      });

      onSubmitForm();
    } catch (e) {
      console.error("Ошибка при отправке данных:", e);
    }
  });

  return (
    <FormProvider {...methods}>
      <form className="flex h-full w-full flex-col" onSubmit={onSubmit}>
        <div className="flex-1">
          {entity?.rows.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="grid grid-cols-12 gap-4">
                {row.map((block) => {
                  const field = fieldRecordList[block.fieldId];

                  return (
                    <div
                      id={`${field?.type}_${field?.id}`}
                      key={block.fieldId}
                      style={{ gridColumn: `${block.pos} / span ${block.col}` }}
                    >
                      {field?.type === "text" && (
                        <FieldText fieldId={field.id} detail={field?.detail} />
                      )}

                      {field?.type === "select" && (
                        <EntityRecordFieldSelect
                          fieldId={field.id}
                          detail={field?.detail}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Button variant="tertinary" onClick={onClose}>
            Отменить
          </Button>

          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </FormProvider>
  );
};

type FieldProps = {
  fieldId: string;
  detail: VocabularyFieldReadDefaultResponse["detail"];
};

export const FieldText: FC<FieldProps> = ({ fieldId, detail }) => {
  const { register, setValue, getValues } = useFormContext();

  const fieldName = `text_${fieldId}`;

  const value = getValues(fieldName);

  useEffect(() => {
    register(fieldName);
  }, []);

  return (
    <Field>
      <Label>{detail?.label}</Label>

      <Input
        type="text"
        placeholder={detail?.placeholder}
        value={value}
        onChange={(e) => setValue(fieldName, e.currentTarget.value)}
      />
    </Field>
  );
};
