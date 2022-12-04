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
exports.ForwardRelayerAddress = exports.RegisteredCounterpartyPayee = exports.RegisteredPayee = exports.FeeEnabledChannel = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const fee_1 = require("./fee");
const channel_1 = require("../../../core/channel/v1/channel");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseGenesisState() {
    return {
        identifiedFees: [],
        feeEnabledChannels: [],
        registeredPayees: [],
        registeredCounterpartyPayees: [],
        forwardRelayers: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.identifiedFees) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeEnabledChannels) {
            exports.FeeEnabledChannel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.registeredPayees) {
            exports.RegisteredPayee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.registeredCounterpartyPayees) {
            exports.RegisteredCounterpartyPayee.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.forwardRelayers) {
            exports.ForwardRelayerAddress.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.identifiedFees.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.feeEnabledChannels.push(exports.FeeEnabledChannel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.registeredPayees.push(exports.RegisteredPayee.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.registeredCounterpartyPayees.push(exports.RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.forwardRelayers.push(exports.ForwardRelayerAddress.decode(reader, reader.uint32()));
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
        const message = createBaseGenesisState();
        message.identifiedFees = ((_a = object.identifiedFees) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        message.feeEnabledChannels =
            ((_b = object.feeEnabledChannels) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FeeEnabledChannel.fromPartial(e))) || [];
        message.registeredPayees = ((_c = object.registeredPayees) === null || _c === void 0 ? void 0 : _c.map((e) => exports.RegisteredPayee.fromPartial(e))) || [];
        message.registeredCounterpartyPayees =
            ((_d = object.registeredCounterpartyPayees) === null || _d === void 0 ? void 0 : _d.map((e) => exports.RegisteredCounterpartyPayee.fromPartial(e))) || [];
        message.forwardRelayers = ((_e = object.forwardRelayers) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ForwardRelayerAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeEnabledChannel() {
    return {
        portId: "",
        channelId: "",
    };
}
exports.FeeEnabledChannel = {
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
        const message = createBaseFeeEnabledChannel();
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
        const message = createBaseFeeEnabledChannel();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegisteredPayee() {
    return {
        channelId: "",
        relayer: "",
        payee: "",
    };
}
exports.RegisteredPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(26).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
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
        var _a, _b, _c;
        const message = createBaseRegisteredPayee();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.payee = (_c = object.payee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredCounterpartyPayee() {
    return {
        channelId: "",
        relayer: "",
        counterpartyPayee: "",
    };
}
exports.RegisteredCounterpartyPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(26).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
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
        var _a, _b, _c;
        const message = createBaseRegisteredCounterpartyPayee();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.counterpartyPayee = (_c = object.counterpartyPayee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseForwardRelayerAddress() {
    return {
        address: "",
        packetId: undefined,
    };
}
exports.ForwardRelayerAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwardRelayerAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        var _a;
        const message = createBaseForwardRelayerAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.packetId =
            object.packetId !== undefined && object.packetId !== null
                ? channel_1.PacketId.fromPartial(object.packetId)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map