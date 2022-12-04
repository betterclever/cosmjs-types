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
exports.Params = exports.Minter = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.mint.v1beta1";
function createBaseMinter() {
    return {
        inflation: "",
        annualProvisions: "",
    };
}
exports.Minter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annualProvisions !== "") {
            writer.uint32(18).string(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annualProvisions = reader.string();
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
        const message = createBaseMinter();
        message.inflation = (_a = object.inflation) !== null && _a !== void 0 ? _a : "";
        message.annualProvisions = (_b = object.annualProvisions) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseParams() {
    return {
        mintDenom: "",
        inflationRateChange: "",
        inflationMax: "",
        inflationMin: "",
        goalBonded: "",
        blocksPerYear: helpers_1.Long.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.inflationRateChange !== "") {
            writer.uint32(18).string(message.inflationRateChange);
        }
        if (message.inflationMax !== "") {
            writer.uint32(26).string(message.inflationMax);
        }
        if (message.inflationMin !== "") {
            writer.uint32(34).string(message.inflationMin);
        }
        if (message.goalBonded !== "") {
            writer.uint32(42).string(message.goalBonded);
        }
        if (!message.blocksPerYear.isZero()) {
            writer.uint32(48).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.inflationRateChange = reader.string();
                    break;
                case 3:
                    message.inflationMax = reader.string();
                    break;
                case 4:
                    message.inflationMin = reader.string();
                    break;
                case 5:
                    message.goalBonded = reader.string();
                    break;
                case 6:
                    message.blocksPerYear = reader.uint64();
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
        const message = createBaseParams();
        message.mintDenom = (_a = object.mintDenom) !== null && _a !== void 0 ? _a : "";
        message.inflationRateChange = (_b = object.inflationRateChange) !== null && _b !== void 0 ? _b : "";
        message.inflationMax = (_c = object.inflationMax) !== null && _c !== void 0 ? _c : "";
        message.inflationMin = (_d = object.inflationMin) !== null && _d !== void 0 ? _d : "";
        message.goalBonded = (_e = object.goalBonded) !== null && _e !== void 0 ? _e : "";
        message.blocksPerYear =
            object.blocksPerYear !== undefined && object.blocksPerYear !== null
                ? helpers_1.Long.fromValue(object.blocksPerYear)
                : helpers_1.Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=mint.js.map