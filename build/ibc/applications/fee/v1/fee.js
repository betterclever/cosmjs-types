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
exports.IdentifiedPacketFees = exports.PacketFees = exports.PacketFee = exports.Fee = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const channel_1 = require("../../../core/channel/v1/channel");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseFee() {
    return {
        recvFee: [],
        ackFee: [],
        timeoutFee: [],
    };
}
exports.Fee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recvFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ackFee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.timeoutFee) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recvFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ackFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timeoutFee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseFee();
        message.recvFee = ((_a = object.recvFee) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.ackFee = ((_b = object.ackFee) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.timeoutFee = ((_c = object.timeoutFee) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePacketFee() {
    return {
        fee: undefined,
        refundAddress: "",
        relayers: [],
    };
}
exports.PacketFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.refundAddress !== "") {
            writer.uint32(18).string(message.refundAddress);
        }
        for (const v of message.relayers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.refundAddress = reader.string();
                    break;
                case 3:
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
        var _a, _b;
        const message = createBasePacketFee();
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.refundAddress = (_a = object.refundAddress) !== null && _a !== void 0 ? _a : "";
        message.relayers = ((_b = object.relayers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBasePacketFees() {
    return {
        packetFees: [],
    };
}
exports.PacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.packetFees) {
            exports.PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetFees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
        const message = createBasePacketFees();
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIdentifiedPacketFees() {
    return {
        packetId: undefined,
        packetFees: [],
    };
}
exports.IdentifiedPacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.packetFees) {
            exports.PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedPacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packetFees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
        const message = createBaseIdentifiedPacketFees();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        message.packetFees = ((_a = object.packetFees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
//# sourceMappingURL=fee.js.map