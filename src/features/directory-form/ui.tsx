import { Controller, useForm } from "react-hook-form";
import { FormModel, defaultValues, schema } from "./model";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field, FormError, Input, Label, Text } from "@/shared/ui";
import { FC, useEffect } from "react";
import { vocabularyServiceClient, grpcQuery } from "@/shared/lib/grpc";
import {
  v1VocabularyDirectoryReadDefaultRequest,
  v1VocabularyDirectoryReadDefaultResponse,
  v1VocabularyDirectoryUpdateDefaultResponse,
  v1VocabularyDirectoryUpdateDefaultRequest,
  v1VocabularyDirectoryCreateDefaultRequest,
  v1VocabularyDirectoryCreateDefaultResponse,
} from "grpc-web-gen";

type Props = {
  recordId: string | null;
  onSubmitForm: () => void;
  onClose: () => void;
};

export const DirectoryForm: FC<Props> = ({
  recordId,
  onSubmitForm,
  onClose,
}) => {
  const { control, handleSubmit, reset } = useForm<FormModel>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (recordId) {
        const request = new v1VocabularyDirectoryUpdateDefaultRequest();
        request.setId(recordId);
        request.setName(values.name);

        await grpcQuery<
        v1VocabularyDirectoryUpdateDefaultRequest,
          v1VocabularyDirectoryUpdateDefaultResponse
        >(vocabularyServiceClient.v1VocabularyDirectoryUpdateDefault.bind(vocabularyServiceClient), request);

        return onSubmitForm();
      }

      const request = new v1VocabularyDirectoryCreateDefaultRequest();
      request.setName(values.name);

      await grpcQuery<
      v1VocabularyDirectoryCreateDefaultRequest,
      v1VocabularyDirectoryCreateDefaultResponse
      >(vocabularyServiceClient.v1VocabularyDirectoryCreateDefault.bind(vocabularyServiceClient), request);

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

        const request = new v1VocabularyDirectoryReadDefaultRequest();
        request.setId(recordId);

        const response: v1VocabularyDirectoryReadDefaultResponse = await grpcQuery<
        v1VocabularyDirectoryReadDefaultRequest,
        v1VocabularyDirectoryReadDefaultResponse
        >(vocabularyServiceClient.v1VocabularyDirectoryReadDefault.bind(vocabularyServiceClient), request);

        const responseObject = response.toObject().directory;

        if (!responseObject) {
          return;
        }

        reset({
          name: responseObject.name,
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
