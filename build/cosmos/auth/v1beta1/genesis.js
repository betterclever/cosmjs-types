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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const auth_1 = require("./auth");
const any_1 = require("../../../google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        accounts: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? auth_1.Params.fromPartial(object.params) : undefined;
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map