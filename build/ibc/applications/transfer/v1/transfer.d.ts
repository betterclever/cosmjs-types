import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    baseDenom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    sendEnabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receiveEnabled: boolean;
}
export declare const DenomTrace: {
    encode(message: DenomTrace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace;
    fromPartial<I extends {
        path?: string | undefined;
        baseDenom?: string | undefined;
    } & {
        path?: string | undefined;
        baseDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof DenomTrace>, never>>(object: I): DenomTrace;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial<I extends {
        sendEnabled?: boolean | undefined;
        receiveEnabled?: boolean | undefined;
    } & {
        sendEnabled?: boolean | undefined;
        receiveEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
