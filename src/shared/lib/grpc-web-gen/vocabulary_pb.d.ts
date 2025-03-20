import * as jspb from 'google-protobuf'



export class DirectoryValueRecord extends jspb.Message {
  getId(): string;
  setId(value: string): DirectoryValueRecord;

  getName(): string;
  setName(value: string): DirectoryValueRecord;

  getDirectoryid(): string;
  setDirectoryid(value: string): DirectoryValueRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryValueRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryValueRecord): DirectoryValueRecord.AsObject;
  static serializeBinaryToWriter(message: DirectoryValueRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryValueRecord;
  static deserializeBinaryFromReader(message: DirectoryValueRecord, reader: jspb.BinaryReader): DirectoryValueRecord;
}

export namespace DirectoryValueRecord {
  export type AsObject = {
    id: string,
    name: string,
    directoryid: string,
  }
}

export class DirectoryRecord extends jspb.Message {
  getId(): string;
  setId(value: string): DirectoryRecord;

  getName(): string;
  setName(value: string): DirectoryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryRecord): DirectoryRecord.AsObject;
  static serializeBinaryToWriter(message: DirectoryRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryRecord;
  static deserializeBinaryFromReader(message: DirectoryRecord, reader: jspb.BinaryReader): DirectoryRecord;
}

export namespace DirectoryRecord {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class v1VocabularyDirectoryCreateDefaultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): v1VocabularyDirectoryCreateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryCreateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryCreateDefaultRequest): v1VocabularyDirectoryCreateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryCreateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryCreateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryCreateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryCreateDefaultRequest;
}

export namespace v1VocabularyDirectoryCreateDefaultRequest {
  export type AsObject = {
    name: string,
  }
}

export class v1VocabularyDirectoryCreateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryCreateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryCreateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryCreateDefaultResponse): v1VocabularyDirectoryCreateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryCreateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryCreateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryCreateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryCreateDefaultResponse;
}

export namespace v1VocabularyDirectoryCreateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryUpdateDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryUpdateDefaultRequest;

  getName(): string;
  setName(value: string): v1VocabularyDirectoryUpdateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryUpdateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryUpdateDefaultRequest): v1VocabularyDirectoryUpdateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryUpdateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryUpdateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryUpdateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryUpdateDefaultRequest;
}

export namespace v1VocabularyDirectoryUpdateDefaultRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class v1VocabularyDirectoryUpdateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryUpdateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryUpdateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryUpdateDefaultResponse): v1VocabularyDirectoryUpdateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryUpdateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryUpdateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryUpdateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryUpdateDefaultResponse;
}

export namespace v1VocabularyDirectoryUpdateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryDeleteDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryDeleteDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryDeleteDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryDeleteDefaultRequest): v1VocabularyDirectoryDeleteDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryDeleteDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryDeleteDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryDeleteDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryDeleteDefaultRequest;
}

export namespace v1VocabularyDirectoryDeleteDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryDeleteDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryDeleteDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryDeleteDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryDeleteDefaultResponse): v1VocabularyDirectoryDeleteDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryDeleteDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryDeleteDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryDeleteDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryDeleteDefaultResponse;
}

export namespace v1VocabularyDirectoryDeleteDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryReadDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryReadDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryReadDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryReadDefaultRequest): v1VocabularyDirectoryReadDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryReadDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryReadDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryReadDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryReadDefaultRequest;
}

export namespace v1VocabularyDirectoryReadDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryReadDefaultResponse extends jspb.Message {
  getDirectory(): DirectoryRecord | undefined;
  setDirectory(value?: DirectoryRecord): v1VocabularyDirectoryReadDefaultResponse;
  hasDirectory(): boolean;
  clearDirectory(): v1VocabularyDirectoryReadDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryReadDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryReadDefaultResponse): v1VocabularyDirectoryReadDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryReadDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryReadDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryReadDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryReadDefaultResponse;
}

export namespace v1VocabularyDirectoryReadDefaultResponse {
  export type AsObject = {
    directory?: DirectoryRecord.AsObject,
  }
}

export class v1VocabularyDirectoryListDefaultRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryListDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryListDefaultRequest): v1VocabularyDirectoryListDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryListDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryListDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryListDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryListDefaultRequest;
}

export namespace v1VocabularyDirectoryListDefaultRequest {
  export type AsObject = {
  }
}

export class v1VocabularyDirectoryListDefaultResponse extends jspb.Message {
  getDirectoryList(): Array<DirectoryRecord>;
  setDirectoryList(value: Array<DirectoryRecord>): v1VocabularyDirectoryListDefaultResponse;
  clearDirectoryList(): v1VocabularyDirectoryListDefaultResponse;
  addDirectory(value?: DirectoryRecord, index?: number): DirectoryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryListDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryListDefaultResponse): v1VocabularyDirectoryListDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryListDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryListDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryListDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryListDefaultResponse;
}

export namespace v1VocabularyDirectoryListDefaultResponse {
  export type AsObject = {
    directoryList: Array<DirectoryRecord.AsObject>,
  }
}

export class v1VocabularyDirectoryValueCreateDefaultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): v1VocabularyDirectoryValueCreateDefaultRequest;

  getDirectoryid(): string;
  setDirectoryid(value: string): v1VocabularyDirectoryValueCreateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueCreateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueCreateDefaultRequest): v1VocabularyDirectoryValueCreateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueCreateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueCreateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueCreateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryValueCreateDefaultRequest;
}

export namespace v1VocabularyDirectoryValueCreateDefaultRequest {
  export type AsObject = {
    name: string,
    directoryid: string,
  }
}

export class v1VocabularyDirectoryValueCreateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueCreateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueCreateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueCreateDefaultResponse): v1VocabularyDirectoryValueCreateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueCreateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueCreateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueCreateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryValueCreateDefaultResponse;
}

export namespace v1VocabularyDirectoryValueCreateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryValueUpdateDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueUpdateDefaultRequest;

  getName(): string;
  setName(value: string): v1VocabularyDirectoryValueUpdateDefaultRequest;

  getDirectoryid(): string;
  setDirectoryid(value: string): v1VocabularyDirectoryValueUpdateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueUpdateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueUpdateDefaultRequest): v1VocabularyDirectoryValueUpdateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueUpdateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueUpdateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueUpdateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryValueUpdateDefaultRequest;
}

export namespace v1VocabularyDirectoryValueUpdateDefaultRequest {
  export type AsObject = {
    id: string,
    name: string,
    directoryid: string,
  }
}

export class v1VocabularyDirectoryValueUpdateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueUpdateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueUpdateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueUpdateDefaultResponse): v1VocabularyDirectoryValueUpdateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueUpdateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueUpdateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueUpdateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryValueUpdateDefaultResponse;
}

export namespace v1VocabularyDirectoryValueUpdateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryValueDeleteDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueDeleteDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueDeleteDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueDeleteDefaultRequest): v1VocabularyDirectoryValueDeleteDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueDeleteDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueDeleteDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueDeleteDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryValueDeleteDefaultRequest;
}

export namespace v1VocabularyDirectoryValueDeleteDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryValueDeleteDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueDeleteDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueDeleteDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueDeleteDefaultResponse): v1VocabularyDirectoryValueDeleteDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueDeleteDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueDeleteDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueDeleteDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryValueDeleteDefaultResponse;
}

export namespace v1VocabularyDirectoryValueDeleteDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryValueReadDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyDirectoryValueReadDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueReadDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueReadDefaultRequest): v1VocabularyDirectoryValueReadDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueReadDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueReadDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueReadDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryValueReadDefaultRequest;
}

export namespace v1VocabularyDirectoryValueReadDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyDirectoryValueReadDefaultResponse extends jspb.Message {
  getDirectoryvalue(): DirectoryValueRecord | undefined;
  setDirectoryvalue(value?: DirectoryValueRecord): v1VocabularyDirectoryValueReadDefaultResponse;
  hasDirectoryvalue(): boolean;
  clearDirectoryvalue(): v1VocabularyDirectoryValueReadDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueReadDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueReadDefaultResponse): v1VocabularyDirectoryValueReadDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueReadDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueReadDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueReadDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryValueReadDefaultResponse;
}

export namespace v1VocabularyDirectoryValueReadDefaultResponse {
  export type AsObject = {
    directoryvalue?: DirectoryValueRecord.AsObject,
  }
}

export class v1VocabularyDirectoryValueListDefaultRequest extends jspb.Message {
  getDirectoryid(): string;
  setDirectoryid(value: string): v1VocabularyDirectoryValueListDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueListDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueListDefaultRequest): v1VocabularyDirectoryValueListDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueListDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueListDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueListDefaultRequest, reader: jspb.BinaryReader): v1VocabularyDirectoryValueListDefaultRequest;
}

export namespace v1VocabularyDirectoryValueListDefaultRequest {
  export type AsObject = {
    directoryid: string,
  }
}

export class v1VocabularyDirectoryValueListDefaultResponse extends jspb.Message {
  getDirectoryvalueList(): Array<DirectoryValueRecord>;
  setDirectoryvalueList(value: Array<DirectoryValueRecord>): v1VocabularyDirectoryValueListDefaultResponse;
  clearDirectoryvalueList(): v1VocabularyDirectoryValueListDefaultResponse;
  addDirectoryvalue(value?: DirectoryValueRecord, index?: number): DirectoryValueRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyDirectoryValueListDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyDirectoryValueListDefaultResponse): v1VocabularyDirectoryValueListDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyDirectoryValueListDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyDirectoryValueListDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyDirectoryValueListDefaultResponse, reader: jspb.BinaryReader): v1VocabularyDirectoryValueListDefaultResponse;
}

export namespace v1VocabularyDirectoryValueListDefaultResponse {
  export type AsObject = {
    directoryvalueList: Array<DirectoryValueRecord.AsObject>,
  }
}

export class FieldDetail extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): FieldDetail;
  hasLabel(): boolean;
  clearLabel(): FieldDetail;

  getPlaceholder(): string;
  setPlaceholder(value: string): FieldDetail;
  hasPlaceholder(): boolean;
  clearPlaceholder(): FieldDetail;

  getDirectoryid(): string;
  setDirectoryid(value: string): FieldDetail;
  hasDirectoryid(): boolean;
  clearDirectoryid(): FieldDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDetail.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDetail): FieldDetail.AsObject;
  static serializeBinaryToWriter(message: FieldDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDetail;
  static deserializeBinaryFromReader(message: FieldDetail, reader: jspb.BinaryReader): FieldDetail;
}

export namespace FieldDetail {
  export type AsObject = {
    label?: string,
    placeholder?: string,
    directoryid?: string,
  }

  export enum LabelCase { 
    _LABEL_NOT_SET = 0,
    LABEL = 1,
  }

  export enum PlaceholderCase { 
    _PLACEHOLDER_NOT_SET = 0,
    PLACEHOLDER = 2,
  }

  export enum DirectoryidCase { 
    _DIRECTORYID_NOT_SET = 0,
    DIRECTORYID = 3,
  }
}

export class FieldRecord extends jspb.Message {
  getId(): string;
  setId(value: string): FieldRecord;

  getType(): string;
  setType(value: string): FieldRecord;

  getName(): string;
  setName(value: string): FieldRecord;

  getDetail(): FieldDetail | undefined;
  setDetail(value?: FieldDetail): FieldRecord;
  hasDetail(): boolean;
  clearDetail(): FieldRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldRecord.AsObject;
  static toObject(includeInstance: boolean, msg: FieldRecord): FieldRecord.AsObject;
  static serializeBinaryToWriter(message: FieldRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldRecord;
  static deserializeBinaryFromReader(message: FieldRecord, reader: jspb.BinaryReader): FieldRecord;
}

export namespace FieldRecord {
  export type AsObject = {
    id: string,
    type: string,
    name: string,
    detail?: FieldDetail.AsObject,
  }
}

export class v1VocabularyFieldCreateDefaultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): v1VocabularyFieldCreateDefaultRequest;

  getType(): string;
  setType(value: string): v1VocabularyFieldCreateDefaultRequest;

  getDetail(): FieldDetail | undefined;
  setDetail(value?: FieldDetail): v1VocabularyFieldCreateDefaultRequest;
  hasDetail(): boolean;
  clearDetail(): v1VocabularyFieldCreateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldCreateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldCreateDefaultRequest): v1VocabularyFieldCreateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldCreateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldCreateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyFieldCreateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyFieldCreateDefaultRequest;
}

export namespace v1VocabularyFieldCreateDefaultRequest {
  export type AsObject = {
    name: string,
    type: string,
    detail?: FieldDetail.AsObject,
  }
}

export class v1VocabularyFieldCreateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyFieldCreateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldCreateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldCreateDefaultResponse): v1VocabularyFieldCreateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldCreateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldCreateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyFieldCreateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyFieldCreateDefaultResponse;
}

export namespace v1VocabularyFieldCreateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyFieldUpdateDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyFieldUpdateDefaultRequest;

  getName(): string;
  setName(value: string): v1VocabularyFieldUpdateDefaultRequest;

  getType(): string;
  setType(value: string): v1VocabularyFieldUpdateDefaultRequest;

  getDetail(): FieldDetail | undefined;
  setDetail(value?: FieldDetail): v1VocabularyFieldUpdateDefaultRequest;
  hasDetail(): boolean;
  clearDetail(): v1VocabularyFieldUpdateDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldUpdateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldUpdateDefaultRequest): v1VocabularyFieldUpdateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldUpdateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldUpdateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyFieldUpdateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyFieldUpdateDefaultRequest;
}

export namespace v1VocabularyFieldUpdateDefaultRequest {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    detail?: FieldDetail.AsObject,
  }
}

export class v1VocabularyFieldUpdateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyFieldUpdateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldUpdateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldUpdateDefaultResponse): v1VocabularyFieldUpdateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldUpdateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldUpdateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyFieldUpdateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyFieldUpdateDefaultResponse;
}

export namespace v1VocabularyFieldUpdateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyFieldReadDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyFieldReadDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldReadDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldReadDefaultRequest): v1VocabularyFieldReadDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldReadDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldReadDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyFieldReadDefaultRequest, reader: jspb.BinaryReader): v1VocabularyFieldReadDefaultRequest;
}

export namespace v1VocabularyFieldReadDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyFieldReadDefaultResponse extends jspb.Message {
  getField(): FieldRecord | undefined;
  setField(value?: FieldRecord): v1VocabularyFieldReadDefaultResponse;
  hasField(): boolean;
  clearField(): v1VocabularyFieldReadDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldReadDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldReadDefaultResponse): v1VocabularyFieldReadDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldReadDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldReadDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyFieldReadDefaultResponse, reader: jspb.BinaryReader): v1VocabularyFieldReadDefaultResponse;
}

export namespace v1VocabularyFieldReadDefaultResponse {
  export type AsObject = {
    field?: FieldRecord.AsObject,
  }
}

export class v1VocabularyFieldListDefaultRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldListDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldListDefaultRequest): v1VocabularyFieldListDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldListDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldListDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyFieldListDefaultRequest, reader: jspb.BinaryReader): v1VocabularyFieldListDefaultRequest;
}

export namespace v1VocabularyFieldListDefaultRequest {
  export type AsObject = {
  }
}

export class v1VocabularyFieldListDefaultResponse extends jspb.Message {
  getFieldList(): Array<FieldRecord>;
  setFieldList(value: Array<FieldRecord>): v1VocabularyFieldListDefaultResponse;
  clearFieldList(): v1VocabularyFieldListDefaultResponse;
  addField(value?: FieldRecord, index?: number): FieldRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyFieldListDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyFieldListDefaultResponse): v1VocabularyFieldListDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyFieldListDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyFieldListDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyFieldListDefaultResponse, reader: jspb.BinaryReader): v1VocabularyFieldListDefaultResponse;
}

export namespace v1VocabularyFieldListDefaultResponse {
  export type AsObject = {
    fieldList: Array<FieldRecord.AsObject>,
  }
}

export class EntityRow extends jspb.Message {
  getDetailfieldList(): Array<EntityDetailField>;
  setDetailfieldList(value: Array<EntityDetailField>): EntityRow;
  clearDetailfieldList(): EntityRow;
  addDetailfield(value?: EntityDetailField, index?: number): EntityDetailField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRow.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRow): EntityRow.AsObject;
  static serializeBinaryToWriter(message: EntityRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRow;
  static deserializeBinaryFromReader(message: EntityRow, reader: jspb.BinaryReader): EntityRow;
}

export namespace EntityRow {
  export type AsObject = {
    detailfieldList: Array<EntityDetailField.AsObject>,
  }
}

export class EntityDetailField extends jspb.Message {
  getFieldid(): string;
  setFieldid(value: string): EntityDetailField;

  getPos(): number;
  setPos(value: number): EntityDetailField;

  getCol(): number;
  setCol(value: number): EntityDetailField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityDetailField.AsObject;
  static toObject(includeInstance: boolean, msg: EntityDetailField): EntityDetailField.AsObject;
  static serializeBinaryToWriter(message: EntityDetailField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityDetailField;
  static deserializeBinaryFromReader(message: EntityDetailField, reader: jspb.BinaryReader): EntityDetailField;
}

export namespace EntityDetailField {
  export type AsObject = {
    fieldid: string,
    pos: number,
    col: number,
  }
}

export class EntityRecord extends jspb.Message {
  getId(): string;
  setId(value: string): EntityRecord;

  getName(): string;
  setName(value: string): EntityRecord;

  getRowsList(): Array<EntityRow>;
  setRowsList(value: Array<EntityRow>): EntityRecord;
  clearRowsList(): EntityRecord;
  addRows(value?: EntityRow, index?: number): EntityRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRecord.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRecord): EntityRecord.AsObject;
  static serializeBinaryToWriter(message: EntityRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRecord;
  static deserializeBinaryFromReader(message: EntityRecord, reader: jspb.BinaryReader): EntityRecord;
}

export namespace EntityRecord {
  export type AsObject = {
    id: string,
    name: string,
    rowsList: Array<EntityRow.AsObject>,
  }
}

export class v1VocabularyEntityCreateDefaultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): v1VocabularyEntityCreateDefaultRequest;

  getRowsList(): Array<EntityRow>;
  setRowsList(value: Array<EntityRow>): v1VocabularyEntityCreateDefaultRequest;
  clearRowsList(): v1VocabularyEntityCreateDefaultRequest;
  addRows(value?: EntityRow, index?: number): EntityRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityCreateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityCreateDefaultRequest): v1VocabularyEntityCreateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityCreateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityCreateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityCreateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityCreateDefaultRequest;
}

export namespace v1VocabularyEntityCreateDefaultRequest {
  export type AsObject = {
    name: string,
    rowsList: Array<EntityRow.AsObject>,
  }
}

export class v1VocabularyEntityCreateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityCreateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityCreateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityCreateDefaultResponse): v1VocabularyEntityCreateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityCreateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityCreateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityCreateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityCreateDefaultResponse;
}

export namespace v1VocabularyEntityCreateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityUpdateDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityUpdateDefaultRequest;

  getName(): string;
  setName(value: string): v1VocabularyEntityUpdateDefaultRequest;

  getRowsList(): Array<EntityRow>;
  setRowsList(value: Array<EntityRow>): v1VocabularyEntityUpdateDefaultRequest;
  clearRowsList(): v1VocabularyEntityUpdateDefaultRequest;
  addRows(value?: EntityRow, index?: number): EntityRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityUpdateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityUpdateDefaultRequest): v1VocabularyEntityUpdateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityUpdateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityUpdateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityUpdateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityUpdateDefaultRequest;
}

export namespace v1VocabularyEntityUpdateDefaultRequest {
  export type AsObject = {
    id: string,
    name: string,
    rowsList: Array<EntityRow.AsObject>,
  }
}

export class v1VocabularyEntityUpdateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityUpdateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityUpdateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityUpdateDefaultResponse): v1VocabularyEntityUpdateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityUpdateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityUpdateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityUpdateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityUpdateDefaultResponse;
}

export namespace v1VocabularyEntityUpdateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityReadDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityReadDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityReadDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityReadDefaultRequest): v1VocabularyEntityReadDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityReadDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityReadDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityReadDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityReadDefaultRequest;
}

export namespace v1VocabularyEntityReadDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityReadDefaultResponse extends jspb.Message {
  getEntity(): EntityRecord | undefined;
  setEntity(value?: EntityRecord): v1VocabularyEntityReadDefaultResponse;
  hasEntity(): boolean;
  clearEntity(): v1VocabularyEntityReadDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityReadDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityReadDefaultResponse): v1VocabularyEntityReadDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityReadDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityReadDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityReadDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityReadDefaultResponse;
}

export namespace v1VocabularyEntityReadDefaultResponse {
  export type AsObject = {
    entity?: EntityRecord.AsObject,
  }
}

export class v1VocabularyEntityListDefaultRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityListDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityListDefaultRequest): v1VocabularyEntityListDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityListDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityListDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityListDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityListDefaultRequest;
}

export namespace v1VocabularyEntityListDefaultRequest {
  export type AsObject = {
  }
}

export class v1VocabularyEntityListDefaultResponse extends jspb.Message {
  getEntityList(): Array<EntityRecord>;
  setEntityList(value: Array<EntityRecord>): v1VocabularyEntityListDefaultResponse;
  clearEntityList(): v1VocabularyEntityListDefaultResponse;
  addEntity(value?: EntityRecord, index?: number): EntityRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityListDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityListDefaultResponse): v1VocabularyEntityListDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityListDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityListDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityListDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityListDefaultResponse;
}

export namespace v1VocabularyEntityListDefaultResponse {
  export type AsObject = {
    entityList: Array<EntityRecord.AsObject>,
  }
}

export class EntityRecordRecord extends jspb.Message {
  getId(): string;
  setId(value: string): EntityRecordRecord;

  getEntityid(): string;
  setEntityid(value: string): EntityRecordRecord;

  getEntity(): EntityRecord | undefined;
  setEntity(value?: EntityRecord): EntityRecordRecord;
  hasEntity(): boolean;
  clearEntity(): EntityRecordRecord;

  getEntityrecordvalueList(): Array<EntityRecordValue>;
  setEntityrecordvalueList(value: Array<EntityRecordValue>): EntityRecordRecord;
  clearEntityrecordvalueList(): EntityRecordRecord;
  addEntityrecordvalue(value?: EntityRecordValue, index?: number): EntityRecordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRecordRecord.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRecordRecord): EntityRecordRecord.AsObject;
  static serializeBinaryToWriter(message: EntityRecordRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRecordRecord;
  static deserializeBinaryFromReader(message: EntityRecordRecord, reader: jspb.BinaryReader): EntityRecordRecord;
}

export namespace EntityRecordRecord {
  export type AsObject = {
    id: string,
    entityid: string,
    entity?: EntityRecord.AsObject,
    entityrecordvalueList: Array<EntityRecordValue.AsObject>,
  }

  export enum EntityCase { 
    _ENTITY_NOT_SET = 0,
    ENTITY = 3,
  }
}

export class EntityRecordValue extends jspb.Message {
  getId(): string;
  setId(value: string): EntityRecordValue;
  hasId(): boolean;
  clearId(): EntityRecordValue;

  getEntityrecordid(): string;
  setEntityrecordid(value: string): EntityRecordValue;

  getFieldid(): string;
  setFieldid(value: string): EntityRecordValue;

  getDetail(): EntityRecordValueDetail | undefined;
  setDetail(value?: EntityRecordValueDetail): EntityRecordValue;
  hasDetail(): boolean;
  clearDetail(): EntityRecordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRecordValue.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRecordValue): EntityRecordValue.AsObject;
  static serializeBinaryToWriter(message: EntityRecordValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRecordValue;
  static deserializeBinaryFromReader(message: EntityRecordValue, reader: jspb.BinaryReader): EntityRecordValue;
}

export namespace EntityRecordValue {
  export type AsObject = {
    id?: string,
    entityrecordid: string,
    fieldid: string,
    detail?: EntityRecordValueDetail.AsObject,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }
}

export class EntityRecordValueDetail extends jspb.Message {
  getFieldmnemocode(): string;
  setFieldmnemocode(value: string): EntityRecordValueDetail;

  getDirectoryvalueid(): string;
  setDirectoryvalueid(value: string): EntityRecordValueDetail;
  hasDirectoryvalueid(): boolean;
  clearDirectoryvalueid(): EntityRecordValueDetail;

  getDirectoryvalueidsList(): Array<string>;
  setDirectoryvalueidsList(value: Array<string>): EntityRecordValueDetail;
  clearDirectoryvalueidsList(): EntityRecordValueDetail;
  addDirectoryvalueids(value: string, index?: number): EntityRecordValueDetail;

  getText(): string;
  setText(value: string): EntityRecordValueDetail;
  hasText(): boolean;
  clearText(): EntityRecordValueDetail;

  getNumber(): number;
  setNumber(value: number): EntityRecordValueDetail;
  hasNumber(): boolean;
  clearNumber(): EntityRecordValueDetail;

  getDate(): string;
  setDate(value: string): EntityRecordValueDetail;
  hasDate(): boolean;
  clearDate(): EntityRecordValueDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRecordValueDetail.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRecordValueDetail): EntityRecordValueDetail.AsObject;
  static serializeBinaryToWriter(message: EntityRecordValueDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRecordValueDetail;
  static deserializeBinaryFromReader(message: EntityRecordValueDetail, reader: jspb.BinaryReader): EntityRecordValueDetail;
}

export namespace EntityRecordValueDetail {
  export type AsObject = {
    fieldmnemocode: string,
    directoryvalueid?: string,
    directoryvalueidsList: Array<string>,
    text?: string,
    number?: number,
    date?: string,
  }

  export enum DirectoryvalueidCase { 
    _DIRECTORYVALUEID_NOT_SET = 0,
    DIRECTORYVALUEID = 2,
  }

  export enum TextCase { 
    _TEXT_NOT_SET = 0,
    TEXT = 4,
  }

  export enum NumberCase { 
    _NUMBER_NOT_SET = 0,
    NUMBER = 5,
  }

  export enum DateCase { 
    _DATE_NOT_SET = 0,
    DATE = 6,
  }
}

export class v1VocabularyEntityRecordCreateDefaultRequest extends jspb.Message {
  getEntityid(): string;
  setEntityid(value: string): v1VocabularyEntityRecordCreateDefaultRequest;

  getEntityrecordvalueList(): Array<EntityRecordValue>;
  setEntityrecordvalueList(value: Array<EntityRecordValue>): v1VocabularyEntityRecordCreateDefaultRequest;
  clearEntityrecordvalueList(): v1VocabularyEntityRecordCreateDefaultRequest;
  addEntityrecordvalue(value?: EntityRecordValue, index?: number): EntityRecordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordCreateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordCreateDefaultRequest): v1VocabularyEntityRecordCreateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordCreateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordCreateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordCreateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityRecordCreateDefaultRequest;
}

export namespace v1VocabularyEntityRecordCreateDefaultRequest {
  export type AsObject = {
    entityid: string,
    entityrecordvalueList: Array<EntityRecordValue.AsObject>,
  }
}

export class v1VocabularyEntityRecordCreateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityRecordCreateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordCreateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordCreateDefaultResponse): v1VocabularyEntityRecordCreateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordCreateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordCreateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordCreateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityRecordCreateDefaultResponse;
}

export namespace v1VocabularyEntityRecordCreateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityRecordUpdateDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityRecordUpdateDefaultRequest;

  getEntityid(): string;
  setEntityid(value: string): v1VocabularyEntityRecordUpdateDefaultRequest;

  getEntityrecordvalueList(): Array<EntityRecordValue>;
  setEntityrecordvalueList(value: Array<EntityRecordValue>): v1VocabularyEntityRecordUpdateDefaultRequest;
  clearEntityrecordvalueList(): v1VocabularyEntityRecordUpdateDefaultRequest;
  addEntityrecordvalue(value?: EntityRecordValue, index?: number): EntityRecordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordUpdateDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordUpdateDefaultRequest): v1VocabularyEntityRecordUpdateDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordUpdateDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordUpdateDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordUpdateDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityRecordUpdateDefaultRequest;
}

export namespace v1VocabularyEntityRecordUpdateDefaultRequest {
  export type AsObject = {
    id: string,
    entityid: string,
    entityrecordvalueList: Array<EntityRecordValue.AsObject>,
  }
}

export class v1VocabularyEntityRecordUpdateDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityRecordUpdateDefaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordUpdateDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordUpdateDefaultResponse): v1VocabularyEntityRecordUpdateDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordUpdateDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordUpdateDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordUpdateDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityRecordUpdateDefaultResponse;
}

export namespace v1VocabularyEntityRecordUpdateDefaultResponse {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityRecordReadDefaultRequest extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityRecordReadDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordReadDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordReadDefaultRequest): v1VocabularyEntityRecordReadDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordReadDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordReadDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordReadDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityRecordReadDefaultRequest;
}

export namespace v1VocabularyEntityRecordReadDefaultRequest {
  export type AsObject = {
    id: string,
  }
}

export class v1VocabularyEntityRecordReadDefaultResponse extends jspb.Message {
  getId(): string;
  setId(value: string): v1VocabularyEntityRecordReadDefaultResponse;

  getEntityid(): string;
  setEntityid(value: string): v1VocabularyEntityRecordReadDefaultResponse;

  getEntityrecordvalueList(): Array<EntityRecordValue>;
  setEntityrecordvalueList(value: Array<EntityRecordValue>): v1VocabularyEntityRecordReadDefaultResponse;
  clearEntityrecordvalueList(): v1VocabularyEntityRecordReadDefaultResponse;
  addEntityrecordvalue(value?: EntityRecordValue, index?: number): EntityRecordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordReadDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordReadDefaultResponse): v1VocabularyEntityRecordReadDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordReadDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordReadDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordReadDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityRecordReadDefaultResponse;
}

export namespace v1VocabularyEntityRecordReadDefaultResponse {
  export type AsObject = {
    id: string,
    entityid: string,
    entityrecordvalueList: Array<EntityRecordValue.AsObject>,
  }
}

export class v1VocabularyEntityRecordListDefaultRequest extends jspb.Message {
  getEntityid(): string;
  setEntityid(value: string): v1VocabularyEntityRecordListDefaultRequest;
  hasEntityid(): boolean;
  clearEntityid(): v1VocabularyEntityRecordListDefaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordListDefaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordListDefaultRequest): v1VocabularyEntityRecordListDefaultRequest.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordListDefaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordListDefaultRequest;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordListDefaultRequest, reader: jspb.BinaryReader): v1VocabularyEntityRecordListDefaultRequest;
}

export namespace v1VocabularyEntityRecordListDefaultRequest {
  export type AsObject = {
    entityid?: string,
  }

  export enum EntityidCase { 
    _ENTITYID_NOT_SET = 0,
    ENTITYID = 1,
  }
}

export class v1VocabularyEntityRecordListDefaultResponse extends jspb.Message {
  getEntityrecordList(): Array<EntityRecordRecord>;
  setEntityrecordList(value: Array<EntityRecordRecord>): v1VocabularyEntityRecordListDefaultResponse;
  clearEntityrecordList(): v1VocabularyEntityRecordListDefaultResponse;
  addEntityrecord(value?: EntityRecordRecord, index?: number): EntityRecordRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): v1VocabularyEntityRecordListDefaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: v1VocabularyEntityRecordListDefaultResponse): v1VocabularyEntityRecordListDefaultResponse.AsObject;
  static serializeBinaryToWriter(message: v1VocabularyEntityRecordListDefaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): v1VocabularyEntityRecordListDefaultResponse;
  static deserializeBinaryFromReader(message: v1VocabularyEntityRecordListDefaultResponse, reader: jspb.BinaryReader): v1VocabularyEntityRecordListDefaultResponse;
}

export namespace v1VocabularyEntityRecordListDefaultResponse {
  export type AsObject = {
    entityrecordList: Array<EntityRecordRecord.AsObject>,
  }
}

