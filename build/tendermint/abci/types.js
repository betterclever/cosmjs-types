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
exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceType = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_Result = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIApplicationClientImpl = exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = void 0;
/* eslint-disable */
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("../types/types");
const proof_1 = require("../crypto/proof");
const params_1 = require("../types/params");
const keys_1 = require("../crypto/keys");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
exports.protobufPackage = "tendermint.abci";
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType = exports.CheckTxType || (exports.CheckTxType = {}));
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case EvidenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.evidenceTypeToJSON = evidenceTypeToJSON;
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        setOption: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
    };
}
exports.Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.setOption = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.beginBlock = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliverTx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endBlock = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo =
            object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush =
            object.flush !== undefined && object.flush !== null
                ? exports.RequestFlush.fromPartial(object.flush)
                : undefined;
        message.info =
            object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.setOption =
            object.setOption !== undefined && object.setOption !== null
                ? exports.RequestSetOption.fromPartial(object.setOption)
                : undefined;
        message.initChain =
            object.initChain !== undefined && object.initChain !== null
                ? exports.RequestInitChain.fromPartial(object.initChain)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? exports.RequestQuery.fromPartial(object.query)
                : undefined;
        message.beginBlock =
            object.beginBlock !== undefined && object.beginBlock !== null
                ? exports.RequestBeginBlock.fromPartial(object.beginBlock)
                : undefined;
        message.checkTx =
            object.checkTx !== undefined && object.checkTx !== null
                ? exports.RequestCheckTx.fromPartial(object.checkTx)
                : undefined;
        message.deliverTx =
            object.deliverTx !== undefined && object.deliverTx !== null
                ? exports.RequestDeliverTx.fromPartial(object.deliverTx)
                : undefined;
        message.endBlock =
            object.endBlock !== undefined && object.endBlock !== null
                ? exports.RequestEndBlock.fromPartial(object.endBlock)
                : undefined;
        message.commit =
            object.commit !== undefined && object.commit !== null
                ? exports.RequestCommit.fromPartial(object.commit)
                : undefined;
        message.listSnapshots =
            object.listSnapshots !== undefined && object.listSnapshots !== null
                ? exports.RequestListSnapshots.fromPartial(object.listSnapshots)
                : undefined;
        message.offerSnapshot =
            object.offerSnapshot !== undefined && object.offerSnapshot !== null
                ? exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot)
                : undefined;
        message.loadSnapshotChunk =
            object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null
                ? exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
                : undefined;
        message.applySnapshotChunk =
            object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null
                ? exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
                : undefined;
        return message;
    },
};
function createBaseRequestEcho() {
    return {
        message: "",
    };
}
exports.RequestEcho = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
        const message = createBaseRequestEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
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
        const message = createBaseRequestFlush();
        return message;
    },
};
function createBaseRequestInfo() {
    return {
        version: "",
        blockVersion: helpers_1.Long.UZERO,
        p2pVersion: helpers_1.Long.UZERO,
    };
}
exports.RequestInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (!message.blockVersion.isZero()) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (!message.p2pVersion.isZero()) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.blockVersion = reader.uint64();
                    break;
                case 3:
                    message.p2pVersion = reader.uint64();
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
        const message = createBaseRequestInfo();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.blockVersion =
            object.blockVersion !== undefined && object.blockVersion !== null
                ? helpers_1.Long.fromValue(object.blockVersion)
                : helpers_1.Long.UZERO;
        message.p2pVersion =
            object.p2pVersion !== undefined && object.p2pVersion !== null
                ? helpers_1.Long.fromValue(object.p2pVersion)
                : helpers_1.Long.UZERO;
        return message;
    },
};
function createBaseRequestSetOption() {
    return {
        key: "",
        value: "",
    };
}
exports.RequestSetOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
        const message = createBaseRequestSetOption();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRequestInitChain() {
    return {
        time: undefined,
        chainId: "",
        consensusParams: undefined,
        validators: [],
        appStateBytes: new Uint8Array(),
        initialHeight: helpers_1.Long.ZERO,
    };
}
exports.RequestInitChain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (!message.initialHeight.isZero()) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appStateBytes = reader.bytes();
                    break;
                case 6:
                    message.initialHeight = reader.int64();
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
        const message = createBaseRequestInitChain();
        message.time =
            object.time !== undefined && object.time !== null ? timestamp_1.Timestamp.fromPartial(object.time) : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.consensusParams =
            object.consensusParams !== undefined && object.consensusParams !== null
                ? exports.ConsensusParams.fromPartial(object.consensusParams)
                : undefined;
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ValidatorUpdate.fromPartial(e))) || [];
        message.appStateBytes = (_c = object.appStateBytes) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.initialHeight =
            object.initialHeight !== undefined && object.initialHeight !== null
                ? helpers_1.Long.fromValue(object.initialHeight)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: helpers_1.Long.ZERO,
        prove: false,
    };
}
exports.RequestQuery = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
        const message = createBaseRequestQuery();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.prove = (_c = object.prove) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseRequestBeginBlock() {
    return {
        hash: new Uint8Array(),
        header: undefined,
        lastCommitInfo: undefined,
        byzantineValidators: [],
    };
}
exports.RequestBeginBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastCommitInfo !== undefined) {
            exports.LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantineValidators) {
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastCommitInfo = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantineValidators.push(exports.Evidence.decode(reader, reader.uint32()));
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
        const message = createBaseRequestBeginBlock();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.header =
            object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.lastCommitInfo =
            object.lastCommitInfo !== undefined && object.lastCommitInfo !== null
                ? exports.LastCommitInfo.fromPartial(object.lastCommitInfo)
                : undefined;
        message.byzantineValidators = ((_b = object.byzantineValidators) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Evidence.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0,
    };
}
exports.RequestCheckTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
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
        const message = createBaseRequestCheckTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseRequestDeliverTx() {
    return {
        tx: new Uint8Array(),
    };
}
exports.RequestDeliverTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
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
        const message = createBaseRequestDeliverTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRequestEndBlock() {
    return {
        height: helpers_1.Long.ZERO,
    };
}
exports.RequestEndBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEndBlock();
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
        const message = createBaseRequestEndBlock();
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
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
        const message = createBaseRequestCommit();
        return message;
    },
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
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
        const message = createBaseRequestListSnapshots();
        return message;
    },
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        appHash: new Uint8Array(),
    };
}
exports.RequestOfferSnapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appHash = reader.bytes();
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
        const message = createBaseRequestOfferSnapshot();
        message.snapshot =
            object.snapshot !== undefined && object.snapshot !== null
                ? exports.Snapshot.fromPartial(object.snapshot)
                : undefined;
        message.appHash = (_a = object.appHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: helpers_1.Long.UZERO,
        format: 0,
        chunk: 0,
    };
}
exports.RequestLoadSnapshotChunk = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
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
        const message = createBaseRequestLoadSnapshotChunk();
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunk = (_b = object.chunk) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: "",
    };
}
exports.RequestApplySnapshotChunk = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
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
        const message = createBaseRequestApplySnapshotChunk();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.chunk = (_b = object.chunk) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        setOption: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
    };
}
exports.Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.setOption = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.beginBlock = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliverTx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.endBlock = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception =
            object.exception !== undefined && object.exception !== null
                ? exports.ResponseException.fromPartial(object.exception)
                : undefined;
        message.echo =
            object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush =
            object.flush !== undefined && object.flush !== null
                ? exports.ResponseFlush.fromPartial(object.flush)
                : undefined;
        message.info =
            object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.setOption =
            object.setOption !== undefined && object.setOption !== null
                ? exports.ResponseSetOption.fromPartial(object.setOption)
                : undefined;
        message.initChain =
            object.initChain !== undefined && object.initChain !== null
                ? exports.ResponseInitChain.fromPartial(object.initChain)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? exports.ResponseQuery.fromPartial(object.query)
                : undefined;
        message.beginBlock =
            object.beginBlock !== undefined && object.beginBlock !== null
                ? exports.ResponseBeginBlock.fromPartial(object.beginBlock)
                : undefined;
        message.checkTx =
            object.checkTx !== undefined && object.checkTx !== null
                ? exports.ResponseCheckTx.fromPartial(object.checkTx)
                : undefined;
        message.deliverTx =
            object.deliverTx !== undefined && object.deliverTx !== null
                ? exports.ResponseDeliverTx.fromPartial(object.deliverTx)
                : undefined;
        message.endBlock =
            object.endBlock !== undefined && object.endBlock !== null
                ? exports.ResponseEndBlock.fromPartial(object.endBlock)
                : undefined;
        message.commit =
            object.commit !== undefined && object.commit !== null
                ? exports.ResponseCommit.fromPartial(object.commit)
                : undefined;
        message.listSnapshots =
            object.listSnapshots !== undefined && object.listSnapshots !== null
                ? exports.ResponseListSnapshots.fromPartial(object.listSnapshots)
                : undefined;
        message.offerSnapshot =
            object.offerSnapshot !== undefined && object.offerSnapshot !== null
                ? exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot)
                : undefined;
        message.loadSnapshotChunk =
            object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null
                ? exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
                : undefined;
        message.applySnapshotChunk =
            object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null
                ? exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
                : undefined;
        return message;
    },
};
function createBaseResponseException() {
    return {
        error: "",
    };
}
exports.ResponseException = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
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
        const message = createBaseResponseException();
        message.error = (_a = object.error) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseResponseEcho() {
    return {
        message: "",
    };
}
exports.ResponseEcho = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
        const message = createBaseResponseEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
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
        const message = createBaseResponseFlush();
        return message;
    },
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        appVersion: helpers_1.Long.UZERO,
        lastBlockHeight: helpers_1.Long.ZERO,
        lastBlockAppHash: new Uint8Array(),
    };
}
exports.ResponseInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (!message.appVersion.isZero()) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (!message.lastBlockHeight.isZero()) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.appVersion = reader.uint64();
                    break;
                case 4:
                    message.lastBlockHeight = reader.int64();
                    break;
                case 5:
                    message.lastBlockAppHash = reader.bytes();
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
        const message = createBaseResponseInfo();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.appVersion =
            object.appVersion !== undefined && object.appVersion !== null
                ? helpers_1.Long.fromValue(object.appVersion)
                : helpers_1.Long.UZERO;
        message.lastBlockHeight =
            object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
                ? helpers_1.Long.fromValue(object.lastBlockHeight)
                : helpers_1.Long.ZERO;
        message.lastBlockAppHash = (_c = object.lastBlockAppHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseResponseSetOption() {
    return {
        code: 0,
        log: "",
        info: "",
    };
}
exports.ResponseSetOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
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
        const message = createBaseResponseSetOption();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseResponseInitChain() {
    return {
        consensusParams: undefined,
        validators: [],
        appHash: new Uint8Array(),
    };
}
exports.ResponseInitChain = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appHash = reader.bytes();
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
        const message = createBaseResponseInitChain();
        message.consensusParams =
            object.consensusParams !== undefined && object.consensusParams !== null
                ? exports.ConsensusParams.fromPartial(object.consensusParams)
                : undefined;
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ValidatorUpdate.fromPartial(e))) || [];
        message.appHash = (_b = object.appHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: helpers_1.Long.ZERO,
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: helpers_1.Long.ZERO,
        codespace: "",
    };
}
exports.ResponseQuery = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.index.isZero()) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseResponseQuery();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        message.index =
            object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO;
        message.key = (_d = object.key) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.value = (_e = object.value) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofOps =
            object.proofOps !== undefined && object.proofOps !== null
                ? proof_1.ProofOps.fromPartial(object.proofOps)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseResponseBeginBlock() {
    return {
        events: [],
    };
}
exports.ResponseBeginBlock = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
        const message = createBaseResponseBeginBlock();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Event.fromPartial(e))) || [];
        return message;
    },
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: helpers_1.Long.ZERO,
        gasUsed: helpers_1.Long.ZERO,
        events: [],
        codespace: "",
    };
}
exports.ResponseCheckTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseResponseCheckTx();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gasWanted =
            object.gasWanted !== undefined && object.gasWanted !== null
                ? helpers_1.Long.fromValue(object.gasWanted)
                : helpers_1.Long.ZERO;
        message.gasUsed =
            object.gasUsed !== undefined && object.gasUsed !== null ? helpers_1.Long.fromValue(object.gasUsed) : helpers_1.Long.ZERO;
        message.events = ((_e = object.events) === null || _e === void 0 ? void 0 : _e.map((e) => exports.Event.fromPartial(e))) || [];
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: helpers_1.Long.ZERO,
        gasUsed: helpers_1.Long.ZERO,
        events: [],
        codespace: "",
    };
}
exports.ResponseDeliverTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseResponseDeliverTx();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gasWanted =
            object.gasWanted !== undefined && object.gasWanted !== null
                ? helpers_1.Long.fromValue(object.gasWanted)
                : helpers_1.Long.ZERO;
        message.gasUsed =
            object.gasUsed !== undefined && object.gasUsed !== null ? helpers_1.Long.fromValue(object.gasUsed) : helpers_1.Long.ZERO;
        message.events = ((_e = object.events) === null || _e === void 0 ? void 0 : _e.map((e) => exports.Event.fromPartial(e))) || [];
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseResponseEndBlock() {
    return {
        validatorUpdates: [],
        consensusParamUpdates: undefined,
        events: [],
    };
}
exports.ResponseEndBlock = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validatorUpdates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            exports.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensusParamUpdates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
        const message = createBaseResponseEndBlock();
        message.validatorUpdates = ((_a = object.validatorUpdates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ValidatorUpdate.fromPartial(e))) || [];
        message.consensusParamUpdates =
            object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null
                ? exports.ConsensusParams.fromPartial(object.consensusParamUpdates)
                : undefined;
        message.events = ((_b = object.events) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Event.fromPartial(e))) || [];
        return message;
    },
};
function createBaseResponseCommit() {
    return {
        data: new Uint8Array(),
        retainHeight: helpers_1.Long.ZERO,
    };
}
exports.ResponseCommit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (!message.retainHeight.isZero()) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retainHeight = reader.int64();
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
        const message = createBaseResponseCommit();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.retainHeight =
            object.retainHeight !== undefined && object.retainHeight !== null
                ? helpers_1.Long.fromValue(object.retainHeight)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: [],
    };
}
exports.ResponseListSnapshots = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
        const message = createBaseResponseListSnapshots();
        message.snapshots = ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Snapshot.fromPartial(e))) || [];
        return message;
    },
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0,
    };
}
exports.ResponseOfferSnapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
        const message = createBaseResponseOfferSnapshot();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array(),
    };
}
exports.ResponseLoadSnapshotChunk = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
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
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetchChunks: [],
        rejectSenders: [],
    };
}
exports.ResponseApplySnapshotChunk = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetchChunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.rejectSenders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetchChunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.rejectSenders.push(reader.string());
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
        const message = createBaseResponseApplySnapshotChunk();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.refetchChunks = ((_b = object.refetchChunks) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.rejectSenders = ((_c = object.rejectSenders) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
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
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
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
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
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
                ? params_1.EvidenceParams.fromPartial(object.evidence)
                : undefined;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? params_1.ValidatorParams.fromPartial(object.validator)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? params_1.VersionParams.fromPartial(object.version)
                : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return {
        maxBytes: helpers_1.Long.ZERO,
        maxGas: helpers_1.Long.ZERO,
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
        return message;
    },
};
function createBaseLastCommitInfo() {
    return {
        round: 0,
        votes: [],
    };
}
exports.LastCommitInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
        const message = createBaseLastCommitInfo();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map((e) => exports.VoteInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEvent() {
    return {
        type: "",
        attributes: [],
    };
}
exports.Event = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
        const message = createBaseEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EventAttribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEventAttribute() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        index: false,
    };
}
exports.EventAttribute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
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
        const message = createBaseEventAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseTxResult() {
    return {
        height: helpers_1.Long.ZERO,
        index: 0,
        tx: new Uint8Array(),
        result: undefined,
    };
}
exports.TxResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
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
        const message = createBaseTxResult();
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.tx = (_b = object.tx) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.result =
            object.result !== undefined && object.result !== null
                ? exports.ResponseDeliverTx.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: helpers_1.Long.ZERO,
    };
}
exports.Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
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
        const message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.power =
            object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseValidatorUpdate() {
    return {
        pubKey: undefined,
        power: helpers_1.Long.ZERO,
    };
}
exports.ValidatorUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? keys_1.PublicKey.fromPartial(object.pubKey)
                : undefined;
        message.power =
            object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseVoteInfo() {
    return {
        validator: undefined,
        signedLastBlock: false,
    };
}
exports.VoteInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedLastBlock === true) {
            writer.uint32(16).bool(message.signedLastBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedLastBlock = reader.bool();
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
        const message = createBaseVoteInfo();
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? exports.Validator.fromPartial(object.validator)
                : undefined;
        message.signedLastBlock = (_a = object.signedLastBlock) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseEvidence() {
    return {
        type: 0,
        validator: undefined,
        height: helpers_1.Long.ZERO,
        time: undefined,
        totalVotingPower: helpers_1.Long.ZERO,
    };
}
exports.Evidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalVotingPower = reader.int64();
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
        const message = createBaseEvidence();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? exports.Validator.fromPartial(object.validator)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.time =
            object.time !== undefined && object.time !== null ? timestamp_1.Timestamp.fromPartial(object.time) : undefined;
        message.totalVotingPower =
            object.totalVotingPower !== undefined && object.totalVotingPower !== null
                ? helpers_1.Long.fromValue(object.totalVotingPower)
                : helpers_1.Long.ZERO;
        return message;
    },
};
function createBaseSnapshot() {
    return {
        height: helpers_1.Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array(),
    };
}
exports.Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
        const message = createBaseSnapshot();
        message.height =
            object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunks = (_b = object.chunks) !== null && _b !== void 0 ? _b : 0;
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
class ABCIApplicationClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Echo = this.Echo.bind(this);
        this.Flush = this.Flush.bind(this);
        this.Info = this.Info.bind(this);
        this.SetOption = this.SetOption.bind(this);
        this.DeliverTx = this.DeliverTx.bind(this);
        this.CheckTx = this.CheckTx.bind(this);
        this.Query = this.Query.bind(this);
        this.Commit = this.Commit.bind(this);
        this.InitChain = this.InitChain.bind(this);
        this.BeginBlock = this.BeginBlock.bind(this);
        this.EndBlock = this.EndBlock.bind(this);
        this.ListSnapshots = this.ListSnapshots.bind(this);
        this.OfferSnapshot = this.OfferSnapshot.bind(this);
        this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
        this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
    }
    Echo(request) {
        const data = exports.RequestEcho.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Echo", data);
        return promise.then((data) => exports.ResponseEcho.decode(new _m0.Reader(data)));
    }
    Flush(request = {}) {
        const data = exports.RequestFlush.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Flush", data);
        return promise.then((data) => exports.ResponseFlush.decode(new _m0.Reader(data)));
    }
    Info(request) {
        const data = exports.RequestInfo.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Info", data);
        return promise.then((data) => exports.ResponseInfo.decode(new _m0.Reader(data)));
    }
    SetOption(request) {
        const data = exports.RequestSetOption.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "SetOption", data);
        return promise.then((data) => exports.ResponseSetOption.decode(new _m0.Reader(data)));
    }
    DeliverTx(request) {
        const data = exports.RequestDeliverTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", data);
        return promise.then((data) => exports.ResponseDeliverTx.decode(new _m0.Reader(data)));
    }
    CheckTx(request) {
        const data = exports.RequestCheckTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", data);
        return promise.then((data) => exports.ResponseCheckTx.decode(new _m0.Reader(data)));
    }
    Query(request) {
        const data = exports.RequestQuery.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Query", data);
        return promise.then((data) => exports.ResponseQuery.decode(new _m0.Reader(data)));
    }
    Commit(request = {}) {
        const data = exports.RequestCommit.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Commit", data);
        return promise.then((data) => exports.ResponseCommit.decode(new _m0.Reader(data)));
    }
    InitChain(request) {
        const data = exports.RequestInitChain.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", data);
        return promise.then((data) => exports.ResponseInitChain.decode(new _m0.Reader(data)));
    }
    BeginBlock(request) {
        const data = exports.RequestBeginBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", data);
        return promise.then((data) => exports.ResponseBeginBlock.decode(new _m0.Reader(data)));
    }
    EndBlock(request) {
        const data = exports.RequestEndBlock.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", data);
        return promise.then((data) => exports.ResponseEndBlock.decode(new _m0.Reader(data)));
    }
    ListSnapshots(request = {}) {
        const data = exports.RequestListSnapshots.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", data);
        return promise.then((data) => exports.ResponseListSnapshots.decode(new _m0.Reader(data)));
    }
    OfferSnapshot(request) {
        const data = exports.RequestOfferSnapshot.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", data);
        return promise.then((data) => exports.ResponseOfferSnapshot.decode(new _m0.Reader(data)));
    }
    LoadSnapshotChunk(request) {
        const data = exports.RequestLoadSnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", data);
        return promise.then((data) => exports.ResponseLoadSnapshotChunk.decode(new _m0.Reader(data)));
    }
    ApplySnapshotChunk(request) {
        const data = exports.RequestApplySnapshotChunk.encode(request).finish();
        const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", data);
        return promise.then((data) => exports.ResponseApplySnapshotChunk.decode(new _m0.Reader(data)));
    }
}
exports.ABCIApplicationClientImpl = ABCIApplicationClientImpl;
//# sourceMappingURL=types.js.map