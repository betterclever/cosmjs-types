/* eslint-disable */
import { GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.authz.v1beta1";
/** GenesisState defines the authz module's genesis state. */

export interface GenesisState {
  authorization: GrantAuthorization[];
}

function createBaseGenesisState(): GenesisState {
  return {
    authorization: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map((e) => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
};
