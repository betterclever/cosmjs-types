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
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../google/protobuf/duration");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
exports.protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined,
    };
}
exports.ConsensusParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block =
            object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? exports.EvidenceParams.fromPartial(object.evidence)
                : undefined;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? exports.ValidatorParams.fromPartial(object.validator)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? exports.VersionParams.fromPartial(object.version)
                : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return {
        maxBytes: helpers_1.Long.ZERO,
        maxGas: helpers_1.Long.ZERO,
        timeIotaMs: helpers_1.Long.ZERO,
    };
}
exports.BlockParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxBytes.isZero()) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (!message.maxGas.isZero()) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (!message.timeIotaMs.isZero()) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                case 3:
                    message.timeIotaMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes =
            object.maxBytes !== undefined && object.maxBytes !== null ? helpers_1.Long.fromValue(object.maxBytes) : helpers_1.Long.ZERO;
        message.maxGas =
            object.maxGas !== undefined && object.maxGas !== null ? helpers_1.Long.fromValue(object.maxGas) : helpers_1.Long.ZERO;
        message.timeIotaMs =
            object.timeIotaMs !== undefined && object.timeIotaMs !== null
                ? helpers_1.Long.fromValue(object.timeIotaMs)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: helpers_1.Long.ZERO,
        maxAgeDuration: undefined,
        maxBytes: helpers_1.Long.ZERO,
    };
}
exports.EvidenceParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxAgeNumBlocks.isZero()) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (!message.maxBytes.isZero()) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks =
            object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null
                ? helpers_1.Long.fromValue(object.maxAgeNumBlocks)
                : helpers_1.Long.ZERO;
        message.maxAgeDuration =
            object.maxAgeDuration !== undefined && object.maxAgeDuration !== null
                ? duration_1.Duration.fromPartial(object.maxAgeDuration)
                : undefined;
        message.maxBytes =
            object.maxBytes !== undefined && object.maxBytes !== null ? helpers_1.Long.fromValue(object.maxBytes) : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: [],
    };
}
exports.ValidatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
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
        const message = createBaseValidatorParams();
        message.pubKeyTypes = ((_a = object.pubKeyTypes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseVersionParams() {
    return {
        appVersion: helpers_1.Long.UZERO,
    };
}
exports.VersionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appVersion.isZero()) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appVersion = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.appVersion =
            object.appVersion !== undefined && object.appVersion !== null
                ? helpers_1.Long.fromValue(object.appVersion)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: helpers_1.Long.ZERO,
        blockMaxGas: helpers_1.Long.ZERO,
    };
}
exports.HashedParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockMaxBytes.isZero()) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (!message.blockMaxGas.isZero()) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes =
            object.blockMaxBytes !== undefined && object.blockMaxBytes !== null
                ? helpers_1.Long.fromValue(object.blockMaxBytes)
                : helpers_1.Long.ZERO;
        message.blockMaxGas =
            object.blockMaxGas !== undefined && object.blockMaxGas !== null
                ? helpers_1.Long.fromValue(object.blockMaxGas)
                : helpers_1.Long.ZERO;
        return message;
    },
};
//# sourceMappingURL=params.js.map