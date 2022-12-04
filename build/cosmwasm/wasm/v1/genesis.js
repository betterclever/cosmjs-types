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
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState_GenMsgs = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const tx_1 = require("./tx");
const types_1 = require("./types");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseGenesisState() {
    return {
        params: undefined,
        codes: [],
        contracts: [],
        sequences: [],
        genMsgs: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.genMsgs) {
            exports.GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genMsgs.push(exports.GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        message.codes = ((_a = object.codes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Code.fromPartial(e))) || [];
        message.contracts = ((_b = object.contracts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Contract.fromPartial(e))) || [];
        message.sequences = ((_c = object.sequences) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Sequence.fromPartial(e))) || [];
        message.genMsgs = ((_d = object.genMsgs) === null || _d === void 0 ? void 0 : _d.map((e) => exports.GenesisState_GenMsgs.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState_GenMsgs() {
    return {
        storeCode: undefined,
        instantiateContract: undefined,
        executeContract: undefined,
    };
}
exports.GenesisState_GenMsgs = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storeCode !== undefined) {
            tx_1.MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateContract !== undefined) {
            tx_1.MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
        }
        if (message.executeContract !== undefined) {
            tx_1.MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_GenMsgs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeCode = tx_1.MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateContract = tx_1.MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.executeContract = tx_1.MsgExecuteContract.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState_GenMsgs();
        message.storeCode =
            object.storeCode !== undefined && object.storeCode !== null
                ? tx_1.MsgStoreCode.fromPartial(object.storeCode)
                : undefined;
        message.instantiateContract =
            object.instantiateContract !== undefined && object.instantiateContract !== null
                ? tx_1.MsgInstantiateContract.fromPartial(object.instantiateContract)
                : undefined;
        message.executeContract =
            object.executeContract !== undefined && object.executeContract !== null
                ? tx_1.MsgExecuteContract.fromPartial(object.executeContract)
                : undefined;
        return message;
    },
};
function createBaseCode() {
    return {
        codeId: helpers_1.Long.UZERO,
        codeInfo: undefined,
        codeBytes: new Uint8Array(),
        pinned: false,
    };
}
exports.Code = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            types_1.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = types_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
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
        const message = createBaseCode();
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.codeInfo =
            object.codeInfo !== undefined && object.codeInfo !== null
                ? types_1.CodeInfo.fromPartial(object.codeInfo)
                : undefined;
        message.codeBytes = (_a = object.codeBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pinned = (_b = object.pinned) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: undefined,
        contractState: [],
        contractCodeHistory: [],
    };
}
exports.Contract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            types_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.contractCodeHistory) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(types_1.Model.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.contractCodeHistory.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
        const message = createBaseContract();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.contractInfo =
            object.contractInfo !== undefined && object.contractInfo !== null
                ? types_1.ContractInfo.fromPartial(object.contractInfo)
                : undefined;
        message.contractState = ((_b = object.contractState) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.Model.fromPartial(e))) || [];
        message.contractCodeHistory =
            ((_c = object.contractCodeHistory) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.ContractCodeHistoryEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: helpers_1.Long.UZERO,
    };
}
exports.Sequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
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
        const message = createBaseSequence();
        message.idKey = (_a = object.idKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value =
            object.value !== undefined && object.value !== null ? helpers_1.Long.fromValue(object.value) : helpers_1.Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map