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
exports.AcceptedMessagesFilter = exports.AcceptedMessageKeysFilter = exports.AllowAllMessagesFilter = exports.CombinedLimit = exports.MaxFundsLimit = exports.MaxCallsLimit = exports.ContractGrant = exports.ContractMigrationAuthorization = exports.ContractExecutionAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseContractExecutionAuthorization() {
    return {
        grants: [],
    };
}
exports.ContractExecutionAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractExecutionAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
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
        const message = createBaseContractExecutionAuthorization();
        message.grants = ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractMigrationAuthorization() {
    return {
        grants: [],
    };
}
exports.ContractMigrationAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractMigrationAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
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
        const message = createBaseContractMigrationAuthorization();
        message.grants = ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractGrant() {
    return {
        contract: "",
        limit: undefined,
        filter: undefined,
    };
}
exports.ContractGrant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            any_1.Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            any_1.Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.limit = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.filter = any_1.Any.decode(reader, reader.uint32());
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
        const message = createBaseContractGrant();
        message.contract = (_a = object.contract) !== null && _a !== void 0 ? _a : "";
        message.limit =
            object.limit !== undefined && object.limit !== null ? any_1.Any.fromPartial(object.limit) : undefined;
        message.filter =
            object.filter !== undefined && object.filter !== null ? any_1.Any.fromPartial(object.filter) : undefined;
        return message;
    },
};
function createBaseMaxCallsLimit() {
    return {
        remaining: helpers_1.Long.UZERO,
    };
}
exports.MaxCallsLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.remaining.isZero()) {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxCallsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.remaining = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxCallsLimit();
        message.remaining =
            object.remaining !== undefined && object.remaining !== null
                ? helpers_1.Long.fromValue(object.remaining)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseMaxFundsLimit() {
    return {
        amounts: [],
    };
}
exports.MaxFundsLimit = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxFundsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseMaxFundsLimit();
        message.amounts = ((_a = object.amounts) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCombinedLimit() {
    return {
        callsRemaining: helpers_1.Long.UZERO,
        amounts: [],
    };
}
exports.CombinedLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.callsRemaining.isZero()) {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCombinedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callsRemaining = reader.uint64();
                    break;
                case 2:
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseCombinedLimit();
        message.callsRemaining =
            object.callsRemaining !== undefined && object.callsRemaining !== null
                ? helpers_1.Long.fromValue(object.callsRemaining)
                : helpers_1.Long.UZERO;
        message.amounts = ((_a = object.amounts) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAllowAllMessagesFilter() {
    return {};
}
exports.AllowAllMessagesFilter = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowAllMessagesFilter();
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
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
};
function createBaseAcceptedMessageKeysFilter() {
    return {
        keys: [],
    };
}
exports.AcceptedMessageKeysFilter = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessageKeysFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.string());
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
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseAcceptedMessagesFilter() {
    return {
        messages: [],
    };
}
exports.AcceptedMessagesFilter = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(reader.bytes());
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
        const message = createBaseAcceptedMessagesFilter();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
//# sourceMappingURL=authz.js.map