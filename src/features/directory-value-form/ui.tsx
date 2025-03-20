import { Controller, useForm } from "react-hook-form";
import { FormModel, defaultValues, schema } from "./model";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field, FormError, Input, Label, Text } from "@/shared/ui";
import { FC, useEffect } from "react";
import { jsonRpcApi } from "@/shared/jsonrpc";


type Props = {
  recordId: string | null;
  directoryId: string;
  onSubmitForm: () => void;
  onClose: () => void;
};

export const DirectoryValueForm: FC<Props> = ({
  directoryId,
  recordId,
  onSubmitForm,
  onClose,
}) => {
  const [vocabularyDirectoryValueReadDefaultQuery] = jsonRpcApi.useLazyVocabularyDirectoryValueReadDefaultQuery();
  const [vocabularyDirectoryValueCreateDefaultQuery] = jsonRpcApi.useLazyVocabularyDirectoryValueCreateDefaultQuery();
  const [vocabularyDirectoryValueUpdateDefaultQuery] = jsonRpcApi.useLazyVocabularyDirectoryValueUpdateDefaultQuery();


  const { control, handleSubmit, reset } = useForm<FormModel>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (recordId) {
        await vocabularyDirectoryValueUpdateDefaultQuery({
          id: recordId,
          name: values.name,
          directoryId: directoryId,
        }).unwrap()

        return onSubmitForm();
      }

      await vocabularyDirectoryValueCreateDefaultQuery({
        name: values.name,
        directoryId: directoryId,
      }).unwrap()

      onSubmitForm();
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    const handleEffect = async () => {
      try {
        if (!recordId) {
          return;
        }

        const response = await vocabularyDirectoryValueReadDefaultQuery({
          id: recordId
        }).unwrap()

        reset({
          name: response.name,
        });
      } catch (e) {
        console.log(e);
      }
    };

    handleEffect();
  }, [recordId]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col h-full">
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <Field className="flex-1">
            <Label>Наименование</Label>

            <Input type="text" {...field} />

            <FormError error={error} />
          </Field>
        )}
      />

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
