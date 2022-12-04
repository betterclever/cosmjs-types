import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.crypto";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export declare const PublicKey: {
    encode(message: PublicKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicKey;
    fromPartial<I extends {
        ed25519?: Uint8Array | undefined;
        secp256k1?: Uint8Array | undefined;
    } & {
        ed25519?: Uint8Array | undefined;
        secp256k1?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PublicKey>, never>>(object: I): PublicKey;
};
