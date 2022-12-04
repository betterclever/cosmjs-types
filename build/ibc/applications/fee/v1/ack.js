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
exports.IncentivizedAcknowledgement = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseIncentivizedAcknowledgement() {
    return {
        appAcknowledgement: new Uint8Array(),
        forwardRelayerAddress: "",
        underlyingAppSuccess: false,
    };
}
exports.IncentivizedAcknowledgement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.appAcknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.appAcknowledgement);
        }
        if (message.forwardRelayerAddress !== "") {
            writer.uint32(18).string(message.forwardRelayerAddress);
        }
        if (message.underlyingAppSuccess === true) {
            writer.uint32(24).bool(message.underlyingAppSuccess);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appAcknowledgement = reader.bytes();
                    break;
                case 2:
                    message.forwardRelayerAddress = reader.string();
                    break;
                case 3:
                    message.underlyingAppSuccess = reader.bool();
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
        const message = createBaseIncentivizedAcknowledgement();
        message.appAcknowledgement = (_a = object.appAcknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.forwardRelayerAddress = (_b = object.forwardRelayerAddress) !== null && _b !== void 0 ? _b : "";
        message.underlyingAppSuccess = (_c = object.underlyingAppSuccess) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
//# sourceMappingURL=ack.js.map