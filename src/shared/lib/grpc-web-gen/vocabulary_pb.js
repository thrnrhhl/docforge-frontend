// source: vocabulary.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.vocabulary.DirectoryRecord', null, global);
goog.exportSymbol('proto.vocabulary.DirectoryValueRecord', null, global);
goog.exportSymbol('proto.vocabulary.EntityDetailField', null, global);
goog.exportSymbol('proto.vocabulary.EntityRecord', null, global);
goog.exportSymbol('proto.vocabulary.EntityRecordRecord', null, global);
goog.exportSymbol('proto.vocabulary.EntityRecordValue', null, global);
goog.exportSymbol('proto.vocabulary.EntityRecordValueDetail', null, global);
goog.exportSymbol('proto.vocabulary.EntityRow', null, global);
goog.exportSymbol('proto.vocabulary.FieldDetail', null, global);
goog.exportSymbol('proto.vocabulary.FieldRecord', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryListDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryListDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityCreateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityCreateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityListDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityListDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityReadDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityReadDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldCreateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldCreateDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldListDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldListDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldReadDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldReadDefaultResponse', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest', null, global);
goog.exportSymbol('proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.DirectoryValueRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.DirectoryValueRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.DirectoryValueRecord.displayName = 'proto.vocabulary.DirectoryValueRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.DirectoryRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.DirectoryRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.DirectoryRecord.displayName = 'proto.vocabulary.DirectoryRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryListDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryListDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryListDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryListDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.FieldDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.FieldDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.FieldDetail.displayName = 'proto.vocabulary.FieldDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.FieldRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.FieldRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.FieldRecord.displayName = 'proto.vocabulary.FieldRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldCreateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyFieldCreateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldCreateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyFieldCreateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldReadDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldReadDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyFieldReadDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldReadDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldReadDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyFieldReadDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldListDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldListDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyFieldListDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyFieldListDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyFieldListDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyFieldListDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyFieldListDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.EntityRow.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.EntityRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityRow.displayName = 'proto.vocabulary.EntityRow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityDetailField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.EntityDetailField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityDetailField.displayName = 'proto.vocabulary.EntityDetailField';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.EntityRecord.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.EntityRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityRecord.displayName = 'proto.vocabulary.EntityRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityCreateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityCreateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityCreateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityCreateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityReadDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityReadDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityReadDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityReadDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityReadDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityReadDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityListDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityListDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityListDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityListDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityListDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityListDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityListDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityRecordRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.EntityRecordRecord.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.EntityRecordRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityRecordRecord.displayName = 'proto.vocabulary.EntityRecordRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityRecordValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.EntityRecordValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityRecordValue.displayName = 'proto.vocabulary.EntityRecordValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.EntityRecordValueDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.EntityRecordValueDetail.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.EntityRecordValueDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.EntityRecordValueDetail.displayName = 'proto.vocabulary.EntityRecordValueDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.displayName = 'proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.repeatedFields_, null);
};
goog.inherits(proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.displayName = 'proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.DirectoryValueRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.DirectoryValueRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.DirectoryValueRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.DirectoryValueRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    directoryid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.DirectoryValueRecord}
 */
proto.vocabulary.DirectoryValueRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.DirectoryValueRecord;
  return proto.vocabulary.DirectoryValueRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.DirectoryValueRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.DirectoryValueRecord}
 */
proto.vocabulary.DirectoryValueRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.DirectoryValueRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.DirectoryValueRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.DirectoryValueRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.DirectoryValueRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDirectoryid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.DirectoryValueRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.DirectoryValueRecord} returns this
 */
proto.vocabulary.DirectoryValueRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.DirectoryValueRecord.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.DirectoryValueRecord} returns this
 */
proto.vocabulary.DirectoryValueRecord.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string directoryId = 3;
 * @return {string}
 */
proto.vocabulary.DirectoryValueRecord.prototype.getDirectoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.DirectoryValueRecord} returns this
 */
proto.vocabulary.DirectoryValueRecord.prototype.setDirectoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.DirectoryRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.DirectoryRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.DirectoryRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.DirectoryRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.DirectoryRecord}
 */
proto.vocabulary.DirectoryRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.DirectoryRecord;
  return proto.vocabulary.DirectoryRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.DirectoryRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.DirectoryRecord}
 */
proto.vocabulary.DirectoryRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.DirectoryRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.DirectoryRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.DirectoryRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.DirectoryRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.DirectoryRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.DirectoryRecord} returns this
 */
proto.vocabulary.DirectoryRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.DirectoryRecord.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.DirectoryRecord} returns this
 */
proto.vocabulary.DirectoryRecord.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryCreateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryUpdateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryDeleteDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    directory: (f = msg.getDirectory()) && proto.vocabulary.DirectoryRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.DirectoryRecord;
      reader.readMessage(value,proto.vocabulary.DirectoryRecord.deserializeBinaryFromReader);
      msg.setDirectory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vocabulary.DirectoryRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional DirectoryRecord directory = 1;
 * @return {?proto.vocabulary.DirectoryRecord}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.getDirectory = function() {
  return /** @type{?proto.vocabulary.DirectoryRecord} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.DirectoryRecord, 1));
};


/**
 * @param {?proto.vocabulary.DirectoryRecord|undefined} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.setDirectory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.clearDirectory = function() {
  return this.setDirectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyDirectoryReadDefaultResponse.prototype.hasDirectory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryListDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    directoryList: jspb.Message.toObjectList(msg.getDirectoryList(),
    proto.vocabulary.DirectoryRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryListDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.DirectoryRecord;
      reader.readMessage(value,proto.vocabulary.DirectoryRecord.deserializeBinaryFromReader);
      msg.addDirectory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.DirectoryRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DirectoryRecord directory = 1;
 * @return {!Array<!proto.vocabulary.DirectoryRecord>}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.getDirectoryList = function() {
  return /** @type{!Array<!proto.vocabulary.DirectoryRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.DirectoryRecord, 1));
};


/**
 * @param {!Array<!proto.vocabulary.DirectoryRecord>} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.setDirectoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.DirectoryRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.DirectoryRecord}
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.addDirectory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.DirectoryRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyDirectoryListDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryListDefaultResponse.prototype.clearDirectoryList = function() {
  return this.setDirectoryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    directoryid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirectoryid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string directoryId = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.getDirectoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultRequest.prototype.setDirectoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueCreateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    directoryid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDirectoryid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string directoryId = 3;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.getDirectoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultRequest.prototype.setDirectoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueUpdateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueDeleteDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    directoryvalue: (f = msg.getDirectoryvalue()) && proto.vocabulary.DirectoryValueRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.DirectoryValueRecord;
      reader.readMessage(value,proto.vocabulary.DirectoryValueRecord.deserializeBinaryFromReader);
      msg.setDirectoryvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectoryvalue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vocabulary.DirectoryValueRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional DirectoryValueRecord directoryValue = 1;
 * @return {?proto.vocabulary.DirectoryValueRecord}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.getDirectoryvalue = function() {
  return /** @type{?proto.vocabulary.DirectoryValueRecord} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.DirectoryValueRecord, 1));
};


/**
 * @param {?proto.vocabulary.DirectoryValueRecord|undefined} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.setDirectoryvalue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.clearDirectoryvalue = function() {
  return this.setDirectoryvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyDirectoryValueReadDefaultResponse.prototype.hasDirectoryvalue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    directoryid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest;
  return proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectoryid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string directoryId = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.prototype.getDirectoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultRequest.prototype.setDirectoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    directoryvalueList: jspb.Message.toObjectList(msg.getDirectoryvalueList(),
    proto.vocabulary.DirectoryValueRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse;
  return proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.DirectoryValueRecord;
      reader.readMessage(value,proto.vocabulary.DirectoryValueRecord.deserializeBinaryFromReader);
      msg.addDirectoryvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectoryvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.DirectoryValueRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DirectoryValueRecord directoryValue = 1;
 * @return {!Array<!proto.vocabulary.DirectoryValueRecord>}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.getDirectoryvalueList = function() {
  return /** @type{!Array<!proto.vocabulary.DirectoryValueRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.DirectoryValueRecord, 1));
};


/**
 * @param {!Array<!proto.vocabulary.DirectoryValueRecord>} value
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.setDirectoryvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.DirectoryValueRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.DirectoryValueRecord}
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.addDirectoryvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.DirectoryValueRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyDirectoryValueListDefaultResponse.prototype.clearDirectoryvalueList = function() {
  return this.setDirectoryvalueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.FieldDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.FieldDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.FieldDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.FieldDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    placeholder: jspb.Message.getFieldWithDefault(msg, 2, ""),
    directoryid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.FieldDetail}
 */
proto.vocabulary.FieldDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.FieldDetail;
  return proto.vocabulary.FieldDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.FieldDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.FieldDetail}
 */
proto.vocabulary.FieldDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaceholder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.FieldDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.FieldDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.FieldDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.FieldDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.vocabulary.FieldDetail.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.FieldDetail.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string placeholder = 2;
 * @return {string}
 */
proto.vocabulary.FieldDetail.prototype.getPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.setPlaceholder = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.clearPlaceholder = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.FieldDetail.prototype.hasPlaceholder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string directoryId = 3;
 * @return {string}
 */
proto.vocabulary.FieldDetail.prototype.getDirectoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.setDirectoryid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.FieldDetail} returns this
 */
proto.vocabulary.FieldDetail.prototype.clearDirectoryid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.FieldDetail.prototype.hasDirectoryid = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.FieldRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.FieldRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.FieldRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.FieldRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    detail: (f = msg.getDetail()) && proto.vocabulary.FieldDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.FieldRecord}
 */
proto.vocabulary.FieldRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.FieldRecord;
  return proto.vocabulary.FieldRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.FieldRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.FieldRecord}
 */
proto.vocabulary.FieldRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.vocabulary.FieldDetail;
      reader.readMessage(value,proto.vocabulary.FieldDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.FieldRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.FieldRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.FieldRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.FieldRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vocabulary.FieldDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.FieldRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldRecord} returns this
 */
proto.vocabulary.FieldRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.vocabulary.FieldRecord.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldRecord} returns this
 */
proto.vocabulary.FieldRecord.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.vocabulary.FieldRecord.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.FieldRecord} returns this
 */
proto.vocabulary.FieldRecord.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional FieldDetail detail = 4;
 * @return {?proto.vocabulary.FieldDetail}
 */
proto.vocabulary.FieldRecord.prototype.getDetail = function() {
  return /** @type{?proto.vocabulary.FieldDetail} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.FieldDetail, 4));
};


/**
 * @param {?proto.vocabulary.FieldDetail|undefined} value
 * @return {!proto.vocabulary.FieldRecord} returns this
*/
proto.vocabulary.FieldRecord.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.FieldRecord} returns this
 */
proto.vocabulary.FieldRecord.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.FieldRecord.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    detail: (f = msg.getDetail()) && proto.vocabulary.FieldDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldCreateDefaultRequest;
  return proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.vocabulary.FieldDetail;
      reader.readMessage(value,proto.vocabulary.FieldDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vocabulary.FieldDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional FieldDetail detail = 3;
 * @return {?proto.vocabulary.FieldDetail}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.getDetail = function() {
  return /** @type{?proto.vocabulary.FieldDetail} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.FieldDetail, 3));
};


/**
 * @param {?proto.vocabulary.FieldDetail|undefined} value
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultRequest.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldCreateDefaultResponse;
  return proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldCreateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyFieldCreateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    detail: (f = msg.getDetail()) && proto.vocabulary.FieldDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest;
  return proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.vocabulary.FieldDetail;
      reader.readMessage(value,proto.vocabulary.FieldDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vocabulary.FieldDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional FieldDetail detail = 4;
 * @return {?proto.vocabulary.FieldDetail}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.getDetail = function() {
  return /** @type{?proto.vocabulary.FieldDetail} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.FieldDetail, 4));
};


/**
 * @param {?proto.vocabulary.FieldDetail|undefined} value
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultRequest.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse;
  return proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyFieldUpdateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldReadDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldReadDefaultRequest;
  return proto.vocabulary.v1VocabularyFieldReadDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldReadDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyFieldReadDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldReadDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: (f = msg.getField()) && proto.vocabulary.FieldRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldReadDefaultResponse;
  return proto.vocabulary.v1VocabularyFieldReadDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.FieldRecord;
      reader.readMessage(value,proto.vocabulary.FieldRecord.deserializeBinaryFromReader);
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldReadDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vocabulary.FieldRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional FieldRecord field = 1;
 * @return {?proto.vocabulary.FieldRecord}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.getField = function() {
  return /** @type{?proto.vocabulary.FieldRecord} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.FieldRecord, 1));
};


/**
 * @param {?proto.vocabulary.FieldRecord|undefined} value
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.setField = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyFieldReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.clearField = function() {
  return this.setField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyFieldReadDefaultResponse.prototype.hasField = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldListDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldListDefaultRequest;
  return proto.vocabulary.v1VocabularyFieldListDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultRequest}
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldListDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldListDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyFieldListDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldList: jspb.Message.toObjectList(msg.getFieldList(),
    proto.vocabulary.FieldRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyFieldListDefaultResponse;
  return proto.vocabulary.v1VocabularyFieldListDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultResponse}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.FieldRecord;
      reader.readMessage(value,proto.vocabulary.FieldRecord.deserializeBinaryFromReader);
      msg.addField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyFieldListDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyFieldListDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.FieldRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FieldRecord field = 1;
 * @return {!Array<!proto.vocabulary.FieldRecord>}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.getFieldList = function() {
  return /** @type{!Array<!proto.vocabulary.FieldRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.FieldRecord, 1));
};


/**
 * @param {!Array<!proto.vocabulary.FieldRecord>} value
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.setFieldList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.FieldRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.FieldRecord}
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.addField = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.FieldRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyFieldListDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyFieldListDefaultResponse.prototype.clearFieldList = function() {
  return this.setFieldList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.EntityRow.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityRow.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRow.toObject = function(includeInstance, msg) {
  var f, obj = {
    detailfieldList: jspb.Message.toObjectList(msg.getDetailfieldList(),
    proto.vocabulary.EntityDetailField.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityRow}
 */
proto.vocabulary.EntityRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityRow;
  return proto.vocabulary.EntityRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityRow}
 */
proto.vocabulary.EntityRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.EntityDetailField;
      reader.readMessage(value,proto.vocabulary.EntityDetailField.deserializeBinaryFromReader);
      msg.addDetailfield(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetailfieldList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.EntityDetailField.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EntityDetailField detailField = 1;
 * @return {!Array<!proto.vocabulary.EntityDetailField>}
 */
proto.vocabulary.EntityRow.prototype.getDetailfieldList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityDetailField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityDetailField, 1));
};


/**
 * @param {!Array<!proto.vocabulary.EntityDetailField>} value
 * @return {!proto.vocabulary.EntityRow} returns this
*/
proto.vocabulary.EntityRow.prototype.setDetailfieldList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.EntityDetailField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityDetailField}
 */
proto.vocabulary.EntityRow.prototype.addDetailfield = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.EntityDetailField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.EntityRow} returns this
 */
proto.vocabulary.EntityRow.prototype.clearDetailfieldList = function() {
  return this.setDetailfieldList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityDetailField.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityDetailField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityDetailField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityDetailField.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    col: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityDetailField}
 */
proto.vocabulary.EntityDetailField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityDetailField;
  return proto.vocabulary.EntityDetailField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityDetailField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityDetailField}
 */
proto.vocabulary.EntityDetailField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityDetailField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityDetailField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityDetailField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityDetailField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCol();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string fieldId = 1;
 * @return {string}
 */
proto.vocabulary.EntityDetailField.prototype.getFieldid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityDetailField} returns this
 */
proto.vocabulary.EntityDetailField.prototype.setFieldid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 pos = 2;
 * @return {number}
 */
proto.vocabulary.EntityDetailField.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vocabulary.EntityDetailField} returns this
 */
proto.vocabulary.EntityDetailField.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 col = 3;
 * @return {number}
 */
proto.vocabulary.EntityDetailField.prototype.getCol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vocabulary.EntityDetailField} returns this
 */
proto.vocabulary.EntityDetailField.prototype.setCol = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.EntityRecord.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.vocabulary.EntityRow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityRecord}
 */
proto.vocabulary.EntityRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityRecord;
  return proto.vocabulary.EntityRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityRecord}
 */
proto.vocabulary.EntityRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.vocabulary.EntityRow;
      reader.readMessage(value,proto.vocabulary.EntityRow.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vocabulary.EntityRow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.EntityRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecord} returns this
 */
proto.vocabulary.EntityRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.vocabulary.EntityRecord.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecord} returns this
 */
proto.vocabulary.EntityRecord.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated EntityRow rows = 4;
 * @return {!Array<!proto.vocabulary.EntityRow>}
 */
proto.vocabulary.EntityRecord.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRow, 4));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRow>} value
 * @return {!proto.vocabulary.EntityRecord} returns this
*/
proto.vocabulary.EntityRecord.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vocabulary.EntityRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRow}
 */
proto.vocabulary.EntityRecord.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vocabulary.EntityRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.EntityRecord} returns this
 */
proto.vocabulary.EntityRecord.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.vocabulary.EntityRow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityCreateDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.vocabulary.EntityRow;
      reader.readMessage(value,proto.vocabulary.EntityRow.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vocabulary.EntityRow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EntityRow rows = 2;
 * @return {!Array<!proto.vocabulary.EntityRow>}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRow, 2));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRow>} value
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vocabulary.EntityRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRow}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vocabulary.EntityRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultRequest.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityCreateDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityCreateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityCreateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.vocabulary.EntityRow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.vocabulary.EntityRow;
      reader.readMessage(value,proto.vocabulary.EntityRow.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vocabulary.EntityRow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntityRow rows = 3;
 * @return {!Array<!proto.vocabulary.EntityRow>}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRow, 3));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRow>} value
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vocabulary.EntityRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRow}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vocabulary.EntityRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultRequest.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityUpdateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityReadDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityReadDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityReadDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityReadDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityReadDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityReadDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.vocabulary.EntityRecord.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityReadDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityReadDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.EntityRecord;
      reader.readMessage(value,proto.vocabulary.EntityRecord.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityReadDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vocabulary.EntityRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional EntityRecord entity = 1;
 * @return {?proto.vocabulary.EntityRecord}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.getEntity = function() {
  return /** @type{?proto.vocabulary.EntityRecord} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.EntityRecord, 1));
};


/**
 * @param {?proto.vocabulary.EntityRecord|undefined} value
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyEntityReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyEntityReadDefaultResponse.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityListDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityListDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityListDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityListDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityListDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityListDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityList: jspb.Message.toObjectList(msg.getEntityList(),
    proto.vocabulary.EntityRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityListDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityListDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.EntityRecord;
      reader.readMessage(value,proto.vocabulary.EntityRecord.deserializeBinaryFromReader);
      msg.addEntity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityListDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityListDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.EntityRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EntityRecord entity = 1;
 * @return {!Array<!proto.vocabulary.EntityRecord>}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.getEntityList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecord, 1));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecord>} value
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.setEntityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.EntityRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecord}
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.addEntity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.EntityRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityListDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityListDefaultResponse.prototype.clearEntityList = function() {
  return this.setEntityList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.EntityRecordRecord.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityRecordRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityRecordRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityRecordRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entity: (f = msg.getEntity()) && proto.vocabulary.EntityRecord.toObject(includeInstance, f),
    entityrecordvalueList: jspb.Message.toObjectList(msg.getEntityrecordvalueList(),
    proto.vocabulary.EntityRecordValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityRecordRecord}
 */
proto.vocabulary.EntityRecordRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityRecordRecord;
  return proto.vocabulary.EntityRecordRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityRecordRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityRecordRecord}
 */
proto.vocabulary.EntityRecordRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = new proto.vocabulary.EntityRecord;
      reader.readMessage(value,proto.vocabulary.EntityRecord.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 4:
      var value = new proto.vocabulary.EntityRecordValue;
      reader.readMessage(value,proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader);
      msg.addEntityrecordvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityRecordRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityRecordRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityRecordRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vocabulary.EntityRecord.serializeBinaryToWriter
    );
  }
  f = message.getEntityrecordvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vocabulary.EntityRecordValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.EntityRecordRecord.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
 */
proto.vocabulary.EntityRecordRecord.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.vocabulary.EntityRecordRecord.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
 */
proto.vocabulary.EntityRecordRecord.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EntityRecord entity = 3;
 * @return {?proto.vocabulary.EntityRecord}
 */
proto.vocabulary.EntityRecordRecord.prototype.getEntity = function() {
  return /** @type{?proto.vocabulary.EntityRecord} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.EntityRecord, 3));
};


/**
 * @param {?proto.vocabulary.EntityRecord|undefined} value
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
*/
proto.vocabulary.EntityRecordRecord.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
 */
proto.vocabulary.EntityRecordRecord.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordRecord.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated EntityRecordValue entityRecordValue = 4;
 * @return {!Array<!proto.vocabulary.EntityRecordValue>}
 */
proto.vocabulary.EntityRecordRecord.prototype.getEntityrecordvalueList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecordValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecordValue, 4));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecordValue>} value
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
*/
proto.vocabulary.EntityRecordRecord.prototype.setEntityrecordvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vocabulary.EntityRecordValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.EntityRecordRecord.prototype.addEntityrecordvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vocabulary.EntityRecordValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.EntityRecordRecord} returns this
 */
proto.vocabulary.EntityRecordRecord.prototype.clearEntityrecordvalueList = function() {
  return this.setEntityrecordvalueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityRecordValue.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityRecordValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityRecordValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityrecordid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    detail: (f = msg.getDetail()) && proto.vocabulary.EntityRecordValueDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.EntityRecordValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityRecordValue;
  return proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityRecordValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityrecordid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldid(value);
      break;
    case 4:
      var value = new proto.vocabulary.EntityRecordValueDetail;
      reader.readMessage(value,proto.vocabulary.EntityRecordValueDetail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityRecordValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityRecordValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityRecordValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityrecordid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vocabulary.EntityRecordValueDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.EntityRecordValue.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValue} returns this
 */
proto.vocabulary.EntityRecordValue.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValue} returns this
 */
proto.vocabulary.EntityRecordValue.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValue.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string entityRecordId = 2;
 * @return {string}
 */
proto.vocabulary.EntityRecordValue.prototype.getEntityrecordid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValue} returns this
 */
proto.vocabulary.EntityRecordValue.prototype.setEntityrecordid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fieldId = 3;
 * @return {string}
 */
proto.vocabulary.EntityRecordValue.prototype.getFieldid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValue} returns this
 */
proto.vocabulary.EntityRecordValue.prototype.setFieldid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EntityRecordValueDetail detail = 4;
 * @return {?proto.vocabulary.EntityRecordValueDetail}
 */
proto.vocabulary.EntityRecordValue.prototype.getDetail = function() {
  return /** @type{?proto.vocabulary.EntityRecordValueDetail} */ (
    jspb.Message.getWrapperField(this, proto.vocabulary.EntityRecordValueDetail, 4));
};


/**
 * @param {?proto.vocabulary.EntityRecordValueDetail|undefined} value
 * @return {!proto.vocabulary.EntityRecordValue} returns this
*/
proto.vocabulary.EntityRecordValue.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValue} returns this
 */
proto.vocabulary.EntityRecordValue.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValue.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.EntityRecordValueDetail.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.EntityRecordValueDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.EntityRecordValueDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordValueDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldmnemocode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    directoryvalueid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    directoryvalueidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    number: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    date: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.EntityRecordValueDetail}
 */
proto.vocabulary.EntityRecordValueDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.EntityRecordValueDetail;
  return proto.vocabulary.EntityRecordValueDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.EntityRecordValueDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.EntityRecordValueDetail}
 */
proto.vocabulary.EntityRecordValueDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldmnemocode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectoryvalueid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDirectoryvalueids(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.EntityRecordValueDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.EntityRecordValueDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.EntityRecordValueDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldmnemocode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDirectoryvalueidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string fieldMnemocode = 1;
 * @return {string}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getFieldmnemocode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setFieldmnemocode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string directoryValueId = 2;
 * @return {string}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getDirectoryvalueid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setDirectoryvalueid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.clearDirectoryvalueid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.hasDirectoryvalueid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string directoryValueIds = 3;
 * @return {!Array<string>}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getDirectoryvalueidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setDirectoryvalueidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.addDirectoryvalueids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.clearDirectoryvalueidsList = function() {
  return this.setDirectoryvalueidsList([]);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setText = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.clearText = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.hasText = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double number = 5;
 * @return {number}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setNumber = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.clearNumber = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string date = 6;
 * @return {string}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.setDate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.EntityRecordValueDetail} returns this
 */
proto.vocabulary.EntityRecordValueDetail.prototype.clearDate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.EntityRecordValueDetail.prototype.hasDate = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityrecordvalueList: jspb.Message.toObjectList(msg.getEntityrecordvalueList(),
    proto.vocabulary.EntityRecordValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 2:
      var value = new proto.vocabulary.EntityRecordValue;
      reader.readMessage(value,proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader);
      msg.addEntityrecordvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityrecordvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vocabulary.EntityRecordValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string entityId = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EntityRecordValue entityRecordValue = 2;
 * @return {!Array<!proto.vocabulary.EntityRecordValue>}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.getEntityrecordvalueList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecordValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecordValue, 2));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecordValue>} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.setEntityrecordvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vocabulary.EntityRecordValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.addEntityrecordvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vocabulary.EntityRecordValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultRequest.prototype.clearEntityrecordvalueList = function() {
  return this.setEntityrecordvalueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordCreateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityrecordvalueList: jspb.Message.toObjectList(msg.getEntityrecordvalueList(),
    proto.vocabulary.EntityRecordValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = new proto.vocabulary.EntityRecordValue;
      reader.readMessage(value,proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader);
      msg.addEntityrecordvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityrecordvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vocabulary.EntityRecordValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntityRecordValue entityRecordValue = 3;
 * @return {!Array<!proto.vocabulary.EntityRecordValue>}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.getEntityrecordvalueList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecordValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecordValue, 3));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecordValue>} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} returns this
*/
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.setEntityrecordvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vocabulary.EntityRecordValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.addEntityrecordvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vocabulary.EntityRecordValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultRequest.prototype.clearEntityrecordvalueList = function() {
  return this.setEntityrecordvalueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordUpdateDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityrecordvalueList: jspb.Message.toObjectList(msg.getEntityrecordvalueList(),
    proto.vocabulary.EntityRecordValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = new proto.vocabulary.EntityRecordValue;
      reader.readMessage(value,proto.vocabulary.EntityRecordValue.deserializeBinaryFromReader);
      msg.addEntityrecordvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityrecordvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vocabulary.EntityRecordValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntityRecordValue entityRecordValue = 3;
 * @return {!Array<!proto.vocabulary.EntityRecordValue>}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.getEntityrecordvalueList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecordValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecordValue, 3));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecordValue>} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.setEntityrecordvalueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vocabulary.EntityRecordValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordValue}
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.addEntityrecordvalue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vocabulary.EntityRecordValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordReadDefaultResponse.prototype.clearEntityrecordvalueList = function() {
  return this.setEntityrecordvalueList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest;
  return proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string entityId = 1;
 * @return {string}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.setEntityid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.clearEntityid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultRequest.prototype.hasEntityid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityrecordList: jspb.Message.toObjectList(msg.getEntityrecordList(),
    proto.vocabulary.EntityRecordRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse;
  return proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vocabulary.EntityRecordRecord;
      reader.readMessage(value,proto.vocabulary.EntityRecordRecord.deserializeBinaryFromReader);
      msg.addEntityrecord(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityrecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vocabulary.EntityRecordRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EntityRecordRecord entityRecord = 1;
 * @return {!Array<!proto.vocabulary.EntityRecordRecord>}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.getEntityrecordList = function() {
  return /** @type{!Array<!proto.vocabulary.EntityRecordRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vocabulary.EntityRecordRecord, 1));
};


/**
 * @param {!Array<!proto.vocabulary.EntityRecordRecord>} value
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse} returns this
*/
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.setEntityrecordList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vocabulary.EntityRecordRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vocabulary.EntityRecordRecord}
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.addEntityrecord = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vocabulary.EntityRecordRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse} returns this
 */
proto.vocabulary.v1VocabularyEntityRecordListDefaultResponse.prototype.clearEntityrecordList = function() {
  return this.setEntityrecordList([]);
};


goog.object.extend(exports, proto.vocabulary);
