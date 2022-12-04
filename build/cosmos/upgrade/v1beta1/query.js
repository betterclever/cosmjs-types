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
exports.QueryClientImpl = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const upgrade_1 = require("./upgrade");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
};
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined,
    };
}
exports.QueryCurrentPlanResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan =
            object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseQueryAppliedPlanRequest() {
    return {
        name: "",
    };
}
exports.QueryAppliedPlanRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
        const message = createBaseQueryAppliedPlanRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAppliedPlanResponse() {
    return {
        height: helpers_1.Long.ZERO,
    };
}
exports.QueryAppliedPlanResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: helpers_1.Long.ZERO,
    };
}
exports.QueryUpgradedConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lastHeight.isZero()) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight =
            object.lastHeight !== undefined && object.lastHeight !== null
                ? helpers_1.Long.fromValue(object.lastHeight)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array(),
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgradedConsensusState = reader.bytes();
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
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = (_a = object.upgradedConsensusState) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: "",
    };
}
exports.QueryModuleVersionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
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
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: [],
    };
}
exports.QueryModuleVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.moduleVersions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleVersions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = ((_a = object.moduleVersions) === null || _a === void 0 ? void 0 : _a.map((e) => upgrade_1.ModuleVersion.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CurrentPlan = this.CurrentPlan.bind(this);
        this.AppliedPlan = this.AppliedPlan.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
        this.ModuleVersions = this.ModuleVersions.bind(this);
    }
    CurrentPlan(request = {}) {
        const data = exports.QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then((data) => exports.QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
    }
    AppliedPlan(request) {
        const data = exports.QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then((data) => exports.QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
    }
    UpgradedConsensusState(request) {
        const data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then((data) => exports.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
    }
    ModuleVersions(request) {
        const data = exports.QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then((data) => exports.QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map