import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crisis.v1beta1";
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
    /**
     * constant_fee is the fee used to verify the invariant in the crisis
     * module.
     */
    constantFee?: Coin;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        constantFee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        constantFee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["constantFee"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "constantFee">, never>>(object: I): GenesisState;
};