import { InferType, object, string } from 'yup';

export const schema = object({
  name: string().default("").required("Поле является обязательным.")
});

export type FormModel = InferType<typeof schema>;

export const defaultValues = schema.getDefault();