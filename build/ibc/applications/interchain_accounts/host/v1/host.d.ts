import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
    /** host_enabled enables or disables the host submodule. */
    hostEnabled: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allowMessages: string[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial<I extends {
        hostEnabled?: boolean | undefined;
        allowMessages?: string[] | undefined;
    } & {
        hostEnabled?: boolean | undefined;
        allowMessages?: (string[] & string[] & Record<Exclude<keyof I["allowMessages"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
