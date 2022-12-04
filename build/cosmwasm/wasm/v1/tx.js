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
exports.MsgClientImpl = exports.MsgClearAdminResponse = exports.MsgClearAdmin = exports.MsgUpdateAdminResponse = exports.MsgUpdateAdmin = exports.MsgMigrateContractResponse = exports.MsgMigrateContract = exports.MsgExecuteContractResponse = exports.MsgExecuteContract = exports.MsgInstantiateContract2Response = exports.MsgInstantiateContractResponse = exports.MsgInstantiateContract2 = exports.MsgInstantiateContract = exports.MsgStoreCodeResponse = exports.MsgStoreCode = exports.protobufPackage = void 0;
/* eslint-disable */
const types_1 = require("./types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseMsgStoreCode() {
    return {
        sender: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
    };
}
exports.MsgStoreCode = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(18).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
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
        const message = createBaseMsgStoreCode();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.wasmByteCode = (_b = object.wasmByteCode) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.instantiatePermission =
            object.instantiatePermission !== undefined && object.instantiatePermission !== null
                ? types_1.AccessConfig.fromPartial(object.instantiatePermission)
                : undefined;
        return message;
    },
};
function createBaseMsgStoreCodeResponse() {
    return {
        codeId: helpers_1.Long.UZERO,
        checksum: new Uint8Array(),
    };
}
exports.MsgStoreCodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(18).bytes(message.checksum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.checksum = reader.bytes();
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
        const message = createBaseMsgStoreCodeResponse();
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.checksum = (_a = object.checksum) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMsgInstantiateContract() {
    return {
        sender: "",
        admin: "",
        codeId: helpers_1.Long.UZERO,
        label: "",
        msg: new Uint8Array(),
        funds: [],
    };
}
exports.MsgInstantiateContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgInstantiateContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : "";
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.funds = ((_e = object.funds) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgInstantiateContract2() {
    return {
        sender: "",
        admin: "",
        codeId: helpers_1.Long.UZERO,
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false,
    };
}
exports.MsgInstantiateContract2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(58).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(64).bool(message.fixMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.salt = reader.bytes();
                    break;
                case 8:
                    message.fixMsg = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgInstantiateContract2();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : "";
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.funds = ((_e = object.funds) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.salt = (_f = object.salt) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.fixMsg = (_g = object.fixMsg) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseMsgInstantiateContractResponse() {
    return {
        address: "",
        data: new Uint8Array(),
    };
}
exports.MsgInstantiateContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
        const message = createBaseMsgInstantiateContractResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgInstantiateContract2Response() {
    return {
        address: "",
        data: new Uint8Array(),
    };
}
exports.MsgInstantiateContract2Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract2Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
        const message = createBaseMsgInstantiateContract2Response();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgExecuteContract() {
    return {
        sender: "",
        contract: "",
        msg: new Uint8Array(),
        funds: [],
    };
}
exports.MsgExecuteContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                case 5:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseMsgExecuteContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.funds = ((_d = object.funds) === null || _d === void 0 ? void 0 : _d.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgExecuteContractResponse() {
    return {
        data: new Uint8Array(),
    };
}
exports.MsgExecuteContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
        const message = createBaseMsgExecuteContractResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMsgMigrateContract() {
    return {
        sender: "",
        contract: "",
        codeId: helpers_1.Long.UZERO,
        msg: new Uint8Array(),
    };
}
exports.MsgMigrateContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.codeId = reader.uint64();
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
        var _a, _b, _c;
        const message = createBaseMsgMigrateContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? helpers_1.Long.fromValue(object.codeId) : helpers_1.Long.UZERO;
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseMsgMigrateContractResponse() {
    return {
        data: new Uint8Array(),
    };
}
exports.MsgMigrateContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
        const message = createBaseMsgMigrateContractResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMsgUpdateAdmin() {
    return {
        sender: "",
        newAdmin: "",
        contract: "",
    };
}
exports.MsgUpdateAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newAdmin = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
        const message = createBaseMsgUpdateAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.newAdmin = (_b = object.newAdmin) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateAdminResponse() {
    return {};
}
exports.MsgUpdateAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
};
function createBaseMsgClearAdmin() {
    return {
        sender: "",
        contract: "",
    };
}
exports.MsgClearAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
        const message = createBaseMsgClearAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgClearAdminResponse() {
    return {};
}
exports.MsgClearAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.StoreCode = this.StoreCode.bind(this);
        this.InstantiateContract = this.InstantiateContract.bind(this);
        this.InstantiateContract2 = this.InstantiateContract2.bind(this);
        this.ExecuteContract = this.ExecuteContract.bind(this);
        this.MigrateContract = this.MigrateContract.bind(this);
        this.UpdateAdmin = this.UpdateAdmin.bind(this);
        this.ClearAdmin = this.ClearAdmin.bind(this);
    }
    StoreCode(request) {
        const data = exports.MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
        return promise.then((data) => exports.MsgStoreCodeResponse.decode(new _m0.Reader(data)));
    }
    InstantiateContract(request) {
        const data = exports.MsgInstantiateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
        return promise.then((data) => exports.MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
    }
    InstantiateContract2(request) {
        const data = exports.MsgInstantiateContract2.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
        return promise.then((data) => exports.MsgInstantiateContract2Response.decode(new _m0.Reader(data)));
    }
    ExecuteContract(request) {
        const data = exports.MsgExecuteContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
        return promise.then((data) => exports.MsgExecuteContractResponse.decode(new _m0.Reader(data)));
    }
    MigrateContract(request) {
        const data = exports.MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
        return promise.then((data) => exports.MsgMigrateContractResponse.decode(new _m0.Reader(data)));
    }
    UpdateAdmin(request) {
        const data = exports.MsgUpdateAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
        return promise.then((data) => exports.MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
    }
    ClearAdmin(request) {
        const data = exports.MsgClearAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
        return promise.then((data) => exports.MsgClearAdminResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map