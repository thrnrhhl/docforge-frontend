import { InferType, object, string } from "yup";

export const schema = object({
  name: string().default("").required("Поле является обязательным."),
  type: string().default("").required("Поле является обязательным."),
  detail: object({
    label: string().default(undefined),
    placeholder: string().default(undefined),
    directoryId: string().default(undefined),
  })
});

export type FormModel = InferType<typeof schema>;

export const defaultValues = schema.getDefault();