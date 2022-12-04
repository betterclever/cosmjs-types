import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.evidence.v1beta1";
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
    /** evidence defines all the evidence at genesis. */
    evidence: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        evidence?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        evidence?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["evidence"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["evidence"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "evidence">, never>>(object: I): GenesisState;
};
