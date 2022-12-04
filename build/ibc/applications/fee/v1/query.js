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
exports.QueryClientImpl = exports.QueryFeeEnabledChannelResponse = exports.QueryFeeEnabledChannelRequest = exports.QueryFeeEnabledChannelsResponse = exports.QueryFeeEnabledChannelsRequest = exports.QueryCounterpartyPayeeResponse = exports.QueryCounterpartyPayeeRequest = exports.QueryPayeeResponse = exports.QueryPayeeRequest = exports.QueryTotalTimeoutFeesResponse = exports.QueryTotalTimeoutFeesRequest = exports.QueryTotalAckFeesResponse = exports.QueryTotalAckFeesRequest = exports.QueryTotalRecvFeesResponse = exports.QueryTotalRecvFeesRequest = exports.QueryIncentivizedPacketsForChannelResponse = exports.QueryIncentivizedPacketsForChannelRequest = exports.QueryIncentivizedPacketResponse = exports.QueryIncentivizedPacketRequest = exports.QueryIncentivizedPacketsResponse = exports.QueryIncentivizedPacketsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseQueryIncentivizedPacketsRequest() {
    return {
        pagination: undefined,
        queryHeight: helpers_1.Long.UZERO,
    };
}
exports.QueryIncentivizedPacketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.queryHeight =
            object.queryHeight !== undefined && object.queryHeight !== null
                ? helpers_1.Long.fromValue(object.queryHeight)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsResponse() {
    return {
        incentivizedPackets: [],
    };
}
exports.QueryIncentivizedPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPackets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
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
        const message = createBaseQueryIncentivizedPacketsResponse();
        message.incentivizedPackets =
            ((_a = object.incentivizedPackets) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryIncentivizedPacketRequest() {
    return {
        packetId: undefined,
        queryHeight: helpers_1.Long.UZERO,
    };
}
exports.QueryIncentivizedPacketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketRequest();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        message.queryHeight =
            object.queryHeight !== undefined && object.queryHeight !== null
                ? helpers_1.Long.fromValue(object.queryHeight)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryIncentivizedPacketResponse() {
    return {
        incentivizedPacket: undefined,
    };
}
exports.QueryIncentivizedPacketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.incentivizedPacket !== undefined) {
            fee_1.IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPacket = fee_1.IdentifiedPacketFees.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketResponse();
        message.incentivizedPacket =
            object.incentivizedPacket !== undefined && object.incentivizedPacket !== null
                ? fee_1.IdentifiedPacketFees.fromPartial(object.incentivizedPacket)
                : undefined;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelRequest() {
    return {
        pagination: undefined,
        portId: "",
        channelId: "",
        queryHeight: helpers_1.Long.UZERO,
    };
}
exports.QueryIncentivizedPacketsForChannelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(32).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.queryHeight = reader.uint64();
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
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.queryHeight =
            object.queryHeight !== undefined && object.queryHeight !== null
                ? helpers_1.Long.fromValue(object.queryHeight)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelResponse() {
    return {
        incentivizedPackets: [],
    };
}
exports.QueryIncentivizedPacketsForChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPackets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
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
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        message.incentivizedPackets =
            ((_a = object.incentivizedPackets) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalRecvFeesRequest() {
    return {
        packetId: undefined,
    };
}
exports.QueryTotalRecvFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesRequest();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalRecvFeesResponse() {
    return {
        recvFees: [],
    };
}
exports.QueryTotalRecvFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recvFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recvFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQueryTotalRecvFeesResponse();
        message.recvFees = ((_a = object.recvFees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalAckFeesRequest() {
    return {
        packetId: undefined,
    };
}
exports.QueryTotalAckFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesRequest();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalAckFeesResponse() {
    return {
        ackFees: [],
    };
}
exports.QueryTotalAckFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ackFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ackFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQueryTotalAckFeesResponse();
        message.ackFees = ((_a = object.ackFees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesRequest() {
    return {
        packetId: undefined,
    };
}
exports.QueryTotalTimeoutFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesRequest();
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesResponse() {
    return {
        timeoutFees: [],
    };
}
exports.QueryTotalTimeoutFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.timeoutFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeoutFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseQueryTotalTimeoutFeesResponse();
        message.timeoutFees = ((_a = object.timeoutFees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPayeeRequest() {
    return {
        channelId: "",
        relayer: "",
    };
}
exports.QueryPayeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
        const message = createBaseQueryPayeeRequest();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryPayeeResponse() {
    return {
        payeeAddress: "",
    };
}
exports.QueryPayeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payeeAddress !== "") {
            writer.uint32(10).string(message.payeeAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payeeAddress = reader.string();
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
        const message = createBaseQueryPayeeResponse();
        message.payeeAddress = (_a = object.payeeAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeRequest() {
    return {
        channelId: "",
        relayer: "",
    };
}
exports.QueryCounterpartyPayeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
        const message = createBaseQueryCounterpartyPayeeRequest();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeResponse() {
    return {
        counterpartyPayee: "",
    };
}
exports.QueryCounterpartyPayeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.counterpartyPayee !== "") {
            writer.uint32(10).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var _a;
        const message = createBaseQueryCounterpartyPayeeResponse();
        message.counterpartyPayee = (_a = object.counterpartyPayee) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsRequest() {
    return {
        pagination: undefined,
        queryHeight: helpers_1.Long.UZERO,
    };
}
exports.QueryFeeEnabledChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (!message.queryHeight.isZero()) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.queryHeight =
            object.queryHeight !== undefined && object.queryHeight !== null
                ? helpers_1.Long.fromValue(object.queryHeight)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsResponse() {
    return {
        feeEnabledChannels: [],
    };
}
exports.QueryFeeEnabledChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.feeEnabledChannels) {
            genesis_1.FeeEnabledChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeEnabledChannels.push(genesis_1.FeeEnabledChannel.decode(reader, reader.uint32()));
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
        const message = createBaseQueryFeeEnabledChannelsResponse();
        message.feeEnabledChannels =
            ((_a = object.feeEnabledChannels) === null || _a === void 0 ? void 0 : _a.map((e) => genesis_1.FeeEnabledChannel.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFeeEnabledChannelRequest() {
    return {
        portId: "",
        channelId: "",
    };
}
exports.QueryFeeEnabledChannelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
        const message = createBaseQueryFeeEnabledChannelRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelResponse() {
    return {
        feeEnabled: false,
    };
}
exports.QueryFeeEnabledChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeEnabled === true) {
            writer.uint32(8).bool(message.feeEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeEnabled = reader.bool();
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
        const message = createBaseQueryFeeEnabledChannelResponse();
        message.feeEnabled = (_a = object.feeEnabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
        this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
        this.IncentivizedPacketsForChannel = this.IncentivizedPacketsForChannel.bind(this);
        this.TotalRecvFees = this.TotalRecvFees.bind(this);
        this.TotalAckFees = this.TotalAckFees.bind(this);
        this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
        this.Payee = this.Payee.bind(this);
        this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
        this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
        this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
    }
    IncentivizedPackets(request) {
        const data = exports.QueryIncentivizedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsResponse.decode(new _m0.Reader(data)));
    }
    IncentivizedPacket(request) {
        const data = exports.QueryIncentivizedPacketRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
        return promise.then((data) => exports.QueryIncentivizedPacketResponse.decode(new _m0.Reader(data)));
    }
    IncentivizedPacketsForChannel(request) {
        const data = exports.QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsForChannelResponse.decode(new _m0.Reader(data)));
    }
    TotalRecvFees(request) {
        const data = exports.QueryTotalRecvFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
        return promise.then((data) => exports.QueryTotalRecvFeesResponse.decode(new _m0.Reader(data)));
    }
    TotalAckFees(request) {
        const data = exports.QueryTotalAckFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
        return promise.then((data) => exports.QueryTotalAckFeesResponse.decode(new _m0.Reader(data)));
    }
    TotalTimeoutFees(request) {
        const data = exports.QueryTotalTimeoutFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
        return promise.then((data) => exports.QueryTotalTimeoutFeesResponse.decode(new _m0.Reader(data)));
    }
    Payee(request) {
        const data = exports.QueryPayeeRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
        return promise.then((data) => exports.QueryPayeeResponse.decode(new _m0.Reader(data)));
    }
    CounterpartyPayee(request) {
        const data = exports.QueryCounterpartyPayeeRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
        return promise.then((data) => exports.QueryCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
    }
    FeeEnabledChannels(request) {
        const data = exports.QueryFeeEnabledChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelsResponse.decode(new _m0.Reader(data)));
    }
    FeeEnabledChannel(request) {
        const data = exports.QueryFeeEnabledChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map