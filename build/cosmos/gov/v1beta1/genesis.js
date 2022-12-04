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
const gov_1 = require("./gov");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.gov.v1beta1";
function createBaseGenesisState() {
    return {
        startingProposalId: helpers_1.Long.UZERO,
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: undefined,
        votingParams: undefined,
        tallyParams: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.startingProposalId.isZero()) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
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
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
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
        const message = createBaseGenesisState();
        message.startingProposalId =
            object.startingProposalId !== undefined && object.startingProposalId !== null
                ? helpers_1.Long.fromValue(object.startingProposalId)
                : helpers_1.Long.UZERO;
        message.deposits = ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map((e) => gov_1.Deposit.fromPartial(e))) || [];
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map((e) => gov_1.Vote.fromPartial(e))) || [];
        message.proposals = ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map((e) => gov_1.Proposal.fromPartial(e))) || [];
        message.depositParams =
            object.depositParams !== undefined && object.depositParams !== null
                ? gov_1.DepositParams.fromPartial(object.depositParams)
                : undefined;
        message.votingParams =
            object.votingParams !== undefined && object.votingParams !== null
                ? gov_1.VotingParams.fromPartial(object.votingParams)
                : undefined;
        message.tallyParams =
            object.tallyParams !== undefined && object.tallyParams !== null
                ? gov_1.TallyParams.fromPartial(object.tallyParams)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map