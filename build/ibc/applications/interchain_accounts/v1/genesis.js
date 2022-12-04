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
exports.RegisteredInterchainAccount = exports.ActiveChannel = exports.HostGenesisState = exports.ControllerGenesisState = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const controller_1 = require("../controller/v1/controller");
const host_1 = require("../host/v1/host");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseGenesisState() {
    return {
        controllerGenesisState: undefined,
        hostGenesisState: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.controllerGenesisState !== undefined) {
            exports.ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostGenesisState !== undefined) {
            exports.HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
                    message.controllerGenesisState = exports.ControllerGenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hostGenesisState = exports.HostGenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.controllerGenesisState =
            object.controllerGenesisState !== undefined && object.controllerGenesisState !== null
                ? exports.ControllerGenesisState.fromPartial(object.controllerGenesisState)
                : undefined;
        message.hostGenesisState =
            object.hostGenesisState !== undefined && object.hostGenesisState !== null
                ? exports.HostGenesisState.fromPartial(object.hostGenesisState)
                : undefined;
        return message;
    },
};
function createBaseControllerGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        ports: [],
        params: undefined,
    };
}
exports.ControllerGenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activeChannels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ports.push(reader.string());
                    break;
                case 4:
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
        const message = createBaseControllerGenesisState();
        message.activeChannels = ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchainAccounts =
            ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) || [];
        message.ports = ((_c = object.ports) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.params =
            object.params !== undefined && object.params !== null ? controller_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
};
function createBaseHostGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        port: "",
        params: undefined,
    };
}
exports.HostGenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activeChannels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            host_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                case 4:
                    message.params = host_1.Params.decode(reader, reader.uint32());
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
        const message = createBaseHostGenesisState();
        message.activeChannels = ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchainAccounts =
            ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) || [];
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : "";
        message.params =
            object.params !== undefined && object.params !== null ? host_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
};
function createBaseActiveChannel() {
    return {
        connectionId: "",
        portId: "",
        channelId: "",
    };
}
exports.ActiveChannel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
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
        const message = createBaseActiveChannel();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.channelId = (_c = object.channelId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredInterchainAccount() {
    return {
        connectionId: "",
        portId: "",
        accountAddress: "",
    };
}
exports.RegisteredInterchainAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.accountAddress = reader.string();
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
        const message = createBaseRegisteredInterchainAccount();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
//# sourceMappingURL=genesis.js.map