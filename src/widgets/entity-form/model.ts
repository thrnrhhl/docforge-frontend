import { VocabularyFieldListDefaultResponse } from "@/shared/jsonrpc";
import { InferType, array, number, object, string } from "yup";

export type DrawerFieldListType = {
  isOpen: boolean;
  data?: {
    rowIndex: number;
  };
};

export type FieldRecord =
  VocabularyFieldListDefaultResponse[number]

const entityDetailFieldSchema = object({
  fieldId: string().default("").required(),
  pos: number().default(0).required(),
  col: number().default(2).required(),
});

export const schema = object().shape({
  name: string().default("").required("Поле является обязательным."),
  rows: array()
    .of(array().of(entityDetailFieldSchema).required())
    .default([])
    .required(),
});

export type FormModel = InferType<typeof schema>;

export const defaultValues = schema.getDefault();

export const defaultValueEntityDetailField = entityDetailFieldSchema.getDefault();
