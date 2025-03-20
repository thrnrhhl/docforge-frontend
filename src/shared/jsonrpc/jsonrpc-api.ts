import { createApi } from "@reduxjs/toolkit/query/react";

import { JsonRpcMethodMnemocode, jsonRpcMethodBuilder } from "./jsonrpc-method";
import { jsonRpcBaseQuery } from "./base-query";
import { VocabularyDirectoryCreateDefaultRequest, VocabularyDirectoryCreateDefaultResponse, VocabularyDirectoryListDefaultRequest, VocabularyDirectoryListDefaultResponse, VocabularyDirectoryReadDefaultRequest, VocabularyDirectoryReadDefaultResponse, VocabularyDirectoryUpdateDefaultRequest, VocabularyDirectoryUpdateDefaultResponse, VocabularyDirectoryValueCreateDefaultRequest, VocabularyDirectoryValueCreateDefaultResponse, VocabularyDirectoryValueListDefaultRequest, VocabularyDirectoryValueListDefaultResponse, VocabularyDirectoryValueReadDefaultRequest, VocabularyDirectoryValueReadDefaultResponse, VocabularyDirectoryValueUpdateDefaultRequest, VocabularyDirectoryValueUpdateDefaultResponse, VocabularyEntityCreateDefaultRequest, VocabularyEntityCreateDefaultResponse, VocabularyEntityListDefaultRequest, VocabularyEntityListDefaultResponse, VocabularyEntityReadDefaultRequest, VocabularyEntityReadDefaultResponse, VocabularyEntityRecordCreateDefaultRequest, VocabularyEntityRecordCreateDefaultResponse, VocabularyEntityRecordListDefaultRequest, VocabularyEntityRecordListDefaultResponse, VocabularyEntityRecordReadDefaultRequest, VocabularyEntityRecordReadDefaultResponse, VocabularyEntityRecordUpdateDefaultRequest, VocabularyEntityRecordUpdateDefaultResponse, VocabularyEntityUpdateDefaultRequest, VocabularyEntityUpdateDefaultResponse, VocabularyFieldCreateDefaultRequest, VocabularyFieldCreateDefaultResponse, VocabularyFieldListDefaultRequest, VocabularyFieldListDefaultResponse, VocabularyFieldReadDefaultRequest, VocabularyFieldReadDefaultResponse, VocabularyFieldUpdateDefaultRequest, VocabularyFieldUpdateDefaultResponse } from ".";


export const jsonRpcApi = createApi({
  reducerPath: "jsonRpc",
  baseQuery: jsonRpcBaseQuery,
  tagTypes: ["UserNotification"],
  endpoints: builder => ({
    [jsonRpcMethodBuilder.vocabularyDirectoryCreateDefault]: builder.query<
    VocabularyDirectoryCreateDefaultResponse,
    VocabularyDirectoryCreateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryCreateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryListDefault]: builder.query<
    VocabularyDirectoryListDefaultResponse,
    VocabularyDirectoryListDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryListDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryReadDefault]: builder.query<
    VocabularyDirectoryReadDefaultResponse,
    VocabularyDirectoryReadDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryReadDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryUpdateDefault]: builder.query<
    VocabularyDirectoryUpdateDefaultResponse,
    VocabularyDirectoryUpdateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryUpdateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryValueCreateDefault]: builder.query<
    VocabularyDirectoryValueCreateDefaultResponse,
    VocabularyDirectoryValueCreateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryValueCreateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryValueListDefault]: builder.query<
    VocabularyDirectoryValueListDefaultResponse,
    VocabularyDirectoryValueListDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryValueListDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryValueReadDefault]: builder.query<
    VocabularyDirectoryValueReadDefaultResponse,
    VocabularyDirectoryValueReadDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryValueReadDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyDirectoryValueUpdateDefault]: builder.query<
    VocabularyDirectoryValueUpdateDefaultResponse,
    VocabularyDirectoryValueUpdateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyDirectoryValueUpdateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityCreateDefault]: builder.query<
    VocabularyEntityCreateDefaultResponse,
    VocabularyEntityCreateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityCreateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityListDefault]: builder.query<
    VocabularyEntityListDefaultResponse,
    VocabularyEntityListDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityListDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityReadDefault]: builder.query<
    VocabularyEntityReadDefaultResponse,
    VocabularyEntityReadDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityReadDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityUpdateDefault]: builder.query<
    VocabularyEntityUpdateDefaultResponse,
    VocabularyEntityUpdateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityUpdateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityRecordCreateDefault]: builder.query<
    VocabularyEntityRecordCreateDefaultResponse,
    VocabularyEntityRecordCreateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityRecordCreateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityRecordListDefault]: builder.query<
    VocabularyEntityRecordListDefaultResponse,
    VocabularyEntityRecordListDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityRecordListDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityRecordReadDefault]: builder.query<
    VocabularyEntityRecordReadDefaultResponse,
    VocabularyEntityRecordReadDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityRecordReadDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyEntityRecordUpdateDefault]: builder.query<
    VocabularyEntityRecordUpdateDefaultResponse,
    VocabularyEntityRecordUpdateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyEntityRecordUpdateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyFieldCreateDefault]: builder.query<
    VocabularyFieldCreateDefaultResponse,
    VocabularyFieldCreateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyFieldCreateDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyFieldListDefault]: builder.query<
    VocabularyFieldListDefaultResponse,
    VocabularyFieldListDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyFieldListDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyFieldReadDefault]: builder.query<
    VocabularyFieldReadDefaultResponse,
    VocabularyFieldReadDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyFieldReadDefault,
        params: { ...args },
      }),
    }),

    [jsonRpcMethodBuilder.vocabularyFieldUpdateDefault]: builder.query<
    VocabularyFieldUpdateDefaultResponse,
    VocabularyFieldUpdateDefaultRequest
    >({
      query: args => ({
        method: JsonRpcMethodMnemocode.VocabularyFieldUpdateDefault,
        params: { ...args },
      }),
    }),

  }),
});
