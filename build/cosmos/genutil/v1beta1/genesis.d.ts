import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.genutil.v1beta1";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
    /** gen_txs defines the genesis transactions. */
    genTxs: Uint8Array[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        genTxs?: Uint8Array[] | undefined;
    } & {
        genTxs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["genTxs"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "genTxs">, never>>(object: I): GenesisState;
};
