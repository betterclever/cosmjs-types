import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crypto.secp256k1";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
    key: Uint8Array;
}
export declare const PubKey: {
    encode(message: PubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKey;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "key">, never>>(object: I): PubKey;
};
export declare const PrivKey: {
    encode(message: PrivKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "key">, never>>(object: I): PrivKey;
};