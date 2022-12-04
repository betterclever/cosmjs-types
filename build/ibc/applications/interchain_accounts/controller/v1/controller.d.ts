import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
    /** controller_enabled enables or disables the controller submodule. */
    controllerEnabled: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial<I extends {
        controllerEnabled?: boolean | undefined;
    } & {
        controllerEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "controllerEnabled">, never>>(object: I): Params;
};
