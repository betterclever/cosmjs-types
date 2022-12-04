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
exports.Params = exports.ValidatorSigningInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: helpers_1.Long.ZERO,
        indexOffset: helpers_1.Long.ZERO,
        jailedUntil: undefined,
        tombstoned: false,
        missedBlocksCounter: helpers_1.Long.ZERO,
    };
}
exports.ValidatorSigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_1.Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
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
        const message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.startHeight =
            object.startHeight !== undefined && object.startHeight !== null
                ? helpers_1.Long.fromValue(object.startHeight)
                : helpers_1.Long.ZERO;
        message.indexOffset =
            object.indexOffset !== undefined && object.indexOffset !== null
                ? helpers_1.Long.fromValue(object.indexOffset)
                : helpers_1.Long.ZERO;
        message.jailedUntil =
            object.jailedUntil !== undefined && object.jailedUntil !== null
                ? timestamp_1.Timestamp.fromPartial(object.jailedUntil)
                : undefined;
        message.tombstoned = (_b = object.tombstoned) !== null && _b !== void 0 ? _b : false;
        message.missedBlocksCounter =
            object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null
                ? helpers_1.Long.fromValue(object.missedBlocksCounter)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseParams() {
    return {
        signedBlocksWindow: helpers_1.Long.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: undefined,
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array(),
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
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
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
        const message = createBaseParams();
        message.signedBlocksWindow =
            object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null
                ? helpers_1.Long.fromValue(object.signedBlocksWindow)
                : helpers_1.Long.ZERO;
        message.minSignedPerWindow = (_a = object.minSignedPerWindow) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.downtimeJailDuration =
            object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null
                ? duration_1.Duration.fromPartial(object.downtimeJailDuration)
                : undefined;
        message.slashFractionDoubleSign = (_b = object.slashFractionDoubleSign) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.slashFractionDowntime = (_c = object.slashFractionDowntime) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=slashing.js.map