import { Controller, useForm } from "react-hook-form";
import { FormModel, defaultValues, schema } from "./model";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Field, FormError, Input, Label, Text } from "@/shared/ui";
import { FC, useEffect } from "react";
import { vocabularyServiceClient, grpcQuery } from "@/shared/lib/grpc";
import {
  v1VocabularyDirectoryValueUpdateDefaultRequest,
  v1VocabularyDirectoryValueUpdateDefaultResponse,
  v1VocabularyDirectoryValueCreateDefaultRequest,
  v1VocabularyDirectoryValueCreateDefaultResponse,
  v1VocabularyDirectoryValueReadDefaultRequest,
  v1VocabularyDirectoryValueReadDefaultResponse,
} from "grpc-web-gen";

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
  const { control, handleSubmit, reset } = useForm<FormModel>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      if (recordId) {
        const request = new v1VocabularyDirectoryValueUpdateDefaultRequest();
        request.setId(recordId);
        request.setName(values.name);
        request.setDirectoryid(directoryId);
        console.log(recordId, values.name);

        await grpcQuery<
        v1VocabularyDirectoryValueUpdateDefaultRequest,
        v1VocabularyDirectoryValueUpdateDefaultResponse
        >(vocabularyServiceClient.v1VocabularyDirectoryValueUpdateDefault.bind(vocabularyServiceClient), request);

        return onSubmitForm();
      }

      const request = new v1VocabularyDirectoryValueCreateDefaultRequest();
      request.setName(values.name);
      request.setDirectoryid(directoryId);

      await grpcQuery<
      v1VocabularyDirectoryValueCreateDefaultRequest,
      v1VocabularyDirectoryValueCreateDefaultResponse
      >(vocabularyServiceClient.v1VocabularyDirectoryValueCreateDefault.bind(vocabularyServiceClient), request);

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

        const request = new v1VocabularyDirectoryValueReadDefaultRequest();
        request.setId(recordId);

        const response: v1VocabularyDirectoryValueReadDefaultResponse = await grpcQuery<
        v1VocabularyDirectoryValueReadDefaultRequest,
        v1VocabularyDirectoryValueReadDefaultResponse
        >(vocabularyServiceClient.v1VocabularyDirectoryValueReadDefault.bind(vocabularyServiceClient), request);

        const responseObject = response.toObject().directoryvalue;

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
