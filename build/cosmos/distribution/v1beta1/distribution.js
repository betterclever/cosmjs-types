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
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.communityTax !== "") {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
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
                    message.communityTax = reader.string();
                    break;
                case 2:
                    message.baseProposerReward = reader.string();
                    break;
                case 3:
                    message.bonusProposerReward = reader.string();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseParams();
        message.communityTax = (_a = object.communityTax) !== null && _a !== void 0 ? _a : "";
        message.baseProposerReward = (_b = object.baseProposerReward) !== null && _b !== void 0 ? _b : "";
        message.bonusProposerReward = (_c = object.bonusProposerReward) !== null && _c !== void 0 ? _c : "";
        message.withdrawAddrEnabled = (_d = object.withdrawAddrEnabled) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0,
    };
}
exports.ValidatorHistoricalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulativeRewardRatio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeRewardRatio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
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
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = ((_a = object.cumulativeRewardRatio) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.referenceCount = (_b = object.referenceCount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: helpers_1.Long.UZERO,
    };
}
exports.ValidatorCurrentRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
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
        const message = createBaseValidatorCurrentRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.period =
            object.period !== undefined && object.period !== null ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: [],
    };
}
exports.ValidatorAccumulatedCommission = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = ((_a = object.commission) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: [],
    };
}
exports.ValidatorOutstandingRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: helpers_1.Long.UZERO,
        fraction: "",
    };
}
exports.ValidatorSlashEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.validatorPeriod.isZero()) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorPeriod = reader.uint64();
                    break;
                case 2:
                    message.fraction = reader.string();
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
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod =
            object.validatorPeriod !== undefined && object.validatorPeriod !== null
                ? helpers_1.Long.fromValue(object.validatorPeriod)
                : helpers_1.Long.UZERO;
        message.fraction = (_a = object.fraction) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: [],
    };
}
exports.ValidatorSlashEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents =
            ((_a = object.validatorSlashEvents) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ValidatorSlashEvent.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeePool() {
    return {
        communityPool: [],
    };
}
exports.FeePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.communityPool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityPool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        const message = createBaseFeePool();
        message.communityPool = ((_a = object.communityPool) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: [],
    };
}
exports.CommunityPoolSpendProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = ((_d = object.amount) === null || _d === void 0 ? void 0 : _d.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: helpers_1.Long.UZERO,
        stake: "",
        height: helpers_1.Long.UZERO,
    };
}
exports.DelegatorStartingInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.previousPeriod.isZero()) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousPeriod = reader.uint64();
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = reader.uint64();
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
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod =
            object.previousPeriod !== undefined && object.previousPeriod !== null
                ? helpers_1.Long.fromValue(object.previousPeriod)
                : helpers_1.Long.UZERO;
        message.stake = (_a = object.stake) !== null && _a !== void 0 ? _a : "";
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: [],
    };
}
exports.DelegationDelegatorReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.reward = ((_b = object.reward) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: "",
    };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.deposit = (_e = object.deposit) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
//# sourceMappingURL=distribution.js.map