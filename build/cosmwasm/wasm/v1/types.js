"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.AbsoluteTxPosition = exports.ContractCodeHistoryEntry = exports.ContractInfo = exports.CodeInfo = exports.Params = exports.AccessConfig = exports.AccessTypeParam = exports.contractCodeHistoryOperationTypeToJSON = exports.contractCodeHistoryOperationTypeFromJSON = exports.ContractCodeHistoryOperationType = exports.accessTypeToJSON = exports.accessTypeFromJSON = exports.AccessType = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("../../../google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmwasm.wasm.v1";
/** AccessType permission types */
var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case 4:
        case "ACCESS_TYPE_ANY_OF_ADDRESSES":
            return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
exports.accessTypeFromJSON = accessTypeFromJSON;
function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
            return "ACCESS_TYPE_ANY_OF_ADDRESSES";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessTypeToJSON = accessTypeToJSON;
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType = exports.ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = {}));
function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
function createBaseAccessTypeParam() {
    return {
        value: 0,
    };
}
exports.AccessTypeParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccessTypeParam();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAccessConfig() {
    return {
        permission: 0,
        address: "",
        addresses: [],
    };
}
exports.AccessConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAccessConfig();
        message.permission = (_a = object.permission) !== null && _a !== void 0 ? _a : 0;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.addresses = ((_c = object.addresses) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        codeUploadAccess: undefined,
        instantiateDefaultPermission: 0,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.codeUploadAccess !== undefined) {
            exports.AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeUploadAccess = exports.AccessConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateDefaultPermission = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.codeUploadAccess =
            object.codeUploadAccess !== undefined && object.codeUploadAccess !== null
                ? exports.AccessConfig.fromPartial(object.codeUploadAccess)
                : undefined;
        message.instantiateDefaultPermission = (_a = object.instantiateDefaultPermission) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(),
        creator: "",
        instantiateConfig: undefined,
    };
}
exports.CodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            exports.AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeHash = reader.bytes();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.instantiateConfig = exports.AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCodeInfo();
        message.codeHash = (_a = object.codeHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : "";
        message.instantiateConfig =
            object.instantiateConfig !== undefined && object.instantiateConfig !== null
                ? exports.AccessConfig.fromPartial(object.instantiateConfig)
                : undefined;
        return message;
    },
};
function createBaseContractInfo() {
    return {
        codeId: helpers_1.Long.UZERO,
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined,
    };
}
exports.ContractInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            exports.AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.created = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ibcPortId = reader.string();
                    break;
                case 7:
                    message.extension = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseContractInfo();
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : "";
        message.created =
            object.created !== undefined && object.created !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.created)
                : undefined;
        message.ibcPortId = (_d = object.ibcPortId) !== null && _d !== void 0 ? _d : "";
        message.extension =
            object.extension !== undefined && object.extension !== null
                ? any_1.Any.fromPartial(object.extension)
                : undefined;
        return message;
    },
};
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: helpers_1.Long.UZERO,
        updated: undefined,
        msg: new Uint8Array(),
    };
}
exports.ContractCodeHistoryEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            exports.AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = reader.int32();
                    break;
                case 2:
                    message.codeId = reader.uint64();
                    break;
                case 3:
                    message.updated = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContractCodeHistoryEntry();
        message.operation = (_a = object.operation) !== null && _a !== void 0 ? _a : 0;
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.updated =
            object.updated !== undefined && object.updated !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.updated)
                : undefined;
        message.msg = (_b = object.msg) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseAbsoluteTxPosition() {
    return {
        blockHeight: helpers_1.Long.UZERO,
        txIndex: helpers_1.Long.UZERO,
    };
}
exports.AbsoluteTxPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (!message.txIndex.isZero()) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                case 2:
                    message.txIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? helpers_1.Long.fromValue(object.blockHeight)
                : helpers_1.Long.UZERO;
        message.txIndex =
            object.txIndex !== undefined && object.txIndex !== null ? helpers_1.Long.fromValue(object.txIndex) : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseModel() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
    };
}
exports.Model = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModel();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=types.js.map