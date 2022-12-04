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
exports.MsgClientImpl = exports.MsgPayPacketFeeAsyncResponse = exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFeeResponse = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayeeResponse = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayeeResponse = exports.MsgRegisterPayee = exports.protobufPackage = void 0;
/* eslint-disable */
const fee_1 = require("./fee");
const channel_1 = require("../../../core/channel/v1/channel");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseMsgRegisterPayee() {
    return {
        portId: "",
        channelId: "",
        relayer: "",
        payee: "",
    };
}
exports.MsgRegisterPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(34).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.relayer = reader.string();
                    break;
                case 4:
                    message.payee = reader.string();
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
        const message = createBaseMsgRegisterPayee();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.payee = (_d = object.payee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterPayeeResponse() {
    return {};
}
exports.MsgRegisterPayeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayeeResponse();
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
        const message = createBaseMsgRegisterPayeeResponse();
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayee() {
    return {
        portId: "",
        channelId: "",
        relayer: "",
        counterpartyPayee: "",
    };
}
exports.MsgRegisterCounterpartyPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(34).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.relayer = reader.string();
                    break;
                case 4:
                    message.counterpartyPayee = reader.string();
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
        const message = createBaseMsgRegisterCounterpartyPayee();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.counterpartyPayee = (_d = object.counterpartyPayee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
    return {};
}
exports.MsgRegisterCounterpartyPayeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFee() {
    return {
        fee: undefined,
        sourcePortId: "",
        sourceChannelId: "",
        signer: "",
        relayers: [],
    };
}
exports.MsgPayPacketFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            fee_1.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.sourcePortId !== "") {
            writer.uint32(18).string(message.sourcePortId);
        }
        if (message.sourceChannelId !== "") {
            writer.uint32(26).string(message.sourceChannelId);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = fee_1.Fee.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sourcePortId = reader.string();
                    break;
                case 3:
                    message.sourceChannelId = reader.string();
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                case 5:
                    message.relayers.push(reader.string());
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
        const message = createBaseMsgPayPacketFee();
        message.fee = object.fee !== undefined && object.fee !== null ? fee_1.Fee.fromPartial(object.fee) : undefined;
        message.sourcePortId = (_a = object.sourcePortId) !== null && _a !== void 0 ? _a : "";
        message.sourceChannelId = (_b = object.sourceChannelId) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        message.relayers = ((_d = object.relayers) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgPayPacketFeeResponse() {
    return {};
}
exports.MsgPayPacketFeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeResponse();
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
        const message = createBaseMsgPayPacketFeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFeeAsync() {
    return {
        packetId: undefined,
        packetFee: undefined,
    };
}
exports.MsgPayPacketFeeAsync = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (message.packetFee !== undefined) {
            fee_1.PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsync();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packetFee = fee_1.PacketFee.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPayPacketFeeAsync();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        message.packetFee =
            object.packetFee !== undefined && object.packetFee !== null
                ? fee_1.PacketFee.fromPartial(object.packetFee)
                : undefined;
        return message;
    },
};
function createBaseMsgPayPacketFeeAsyncResponse() {
    return {};
}
exports.MsgPayPacketFeeAsyncResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsyncResponse();
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
        const message = createBaseMsgPayPacketFeeAsyncResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterPayee = this.RegisterPayee.bind(this);
        this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
        this.PayPacketFee = this.PayPacketFee.bind(this);
        this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
    }
    RegisterPayee(request) {
        const data = exports.MsgRegisterPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
        return promise.then((data) => exports.MsgRegisterPayeeResponse.decode(new _m0.Reader(data)));
    }
    RegisterCounterpartyPayee(request) {
        const data = exports.MsgRegisterCounterpartyPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
        return promise.then((data) => exports.MsgRegisterCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
    }
    PayPacketFee(request) {
        const data = exports.MsgPayPacketFee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
        return promise.then((data) => exports.MsgPayPacketFeeResponse.decode(new _m0.Reader(data)));
    }
    PayPacketFeeAsync(request) {
        const data = exports.MsgPayPacketFeeAsync.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
        return promise.then((data) => exports.MsgPayPacketFeeAsyncResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map