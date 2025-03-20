export interface JSONRPCRequest {
  jsonrpc: "2.0";
  method: string;
  params?: unknown;
  id: number | string;
}

export interface JSONRPCResponse<T> {
  jsonrpc: "2.0";
  result?: T;
  error?: JsonRpcError;
  id: number | string;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data: any;
  errorTypeMnemocode: string;
}

export enum JsonRpcMethodMnemocode {
  VocabularyDirectoryCreateDefault = "Vocabulary.Directory.Create.Default",
  VocabularyDirectoryListDefault = "Vocabulary.Directory.List.Default",
  VocabularyDirectoryReadDefault = "Vocabulary.Directory.Read.Default",
  VocabularyDirectoryUpdateDefault = "Vocabulary.Directory.Update.Default",

  VocabularyDirectoryValueCreateDefault = "Vocabulary.DirectoryValue.Create.Default",
  VocabularyDirectoryValueListDefault = "Vocabulary.DirectoryValue.List.Default",
  VocabularyDirectoryValueReadDefault = "Vocabulary.DirectoryValue.Read.Default",
  VocabularyDirectoryValueUpdateDefault = "Vocabulary.DirectoryValue.Update.Default",

  VocabularyEntityCreateDefault = "Vocabulary.Entity.Create.Default",
  VocabularyEntityListDefault = "Vocabulary.Entity.List.Default",
  VocabularyEntityReadDefault = "Vocabulary.Entity.Read.Default",
  VocabularyEntityUpdateDefault = "Vocabulary.Entity.Update.Default",

  VocabularyEntityRecordCreateDefault = "Vocabulary.EntityRecord.Create.Default",
  VocabularyEntityRecordListDefault = "Vocabulary.EntityRecord.List.Default",
  VocabularyEntityRecordReadDefault = "Vocabulary.EntityRecord.Read.Default",
  VocabularyEntityRecordUpdateDefault = "Vocabulary.EntityRecord.Update.Default",

  VocabularyFieldCreateDefault = "Vocabulary.Field.Create.Default",
  VocabularyFieldListDefault = "Vocabulary.Field.List.Default",
  VocabularyFieldReadDefault = "Vocabulary.Field.Read.Default",
  VocabularyFieldUpdateDefault = "Vocabulary.Field.Update.Default",
}

type CamelCase<S extends string> = S extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : S;

type EnumObject<T extends { [key: string]: string }> = {
  [K in keyof T as CamelCase<K & string>]: CamelCase<K & string>;
};

function convertEnumToCamelCase<T extends { [key: string]: string }>(enumObj: T): EnumObject<T> {
  const result = {} as any;
  Object.keys(enumObj).forEach(key => {
    const newKey = key.charAt(0).toLowerCase() + key.slice(1);
    result[newKey] = newKey;
  });
  return result;
}

export const jsonRpcMethodBuilder = convertEnumToCamelCase(JsonRpcMethodMnemocode);
