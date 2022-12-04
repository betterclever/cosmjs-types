import * as _m0 from "protobufjs/minimal";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "cosmos.crisis.v1beta1";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    sender: string;
    invariantModuleName: string;
    invariantRoute: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
export declare const MsgVerifyInvariant: {
    encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromPartial<I extends {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgVerifyInvariant>, never>>(object: I): MsgVerifyInvariant;
};
export declare const MsgVerifyInvariantResponse: {
    encode(_: MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgVerifyInvariantResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** VerifyInvariant defines a method to verify a particular invariance. */
    VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
