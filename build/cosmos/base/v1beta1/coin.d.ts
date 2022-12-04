import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.v1beta1";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
    denom: string;
    amount: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProto {
    int: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProto {
    dec: string;
}
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromPartial<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof Coin>, never>>(object: I): Coin;
};
export declare const DecCoin: {
    encode(message: DecCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecCoin;
    fromPartial<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof DecCoin>, never>>(object: I): DecCoin;
};
export declare const IntProto: {
    encode(message: IntProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntProto;
    fromPartial<I extends {
        int?: string | undefined;
    } & {
        int?: string | undefined;
    } & Record<Exclude<keyof I, "int">, never>>(object: I): IntProto;
};
export declare const DecProto: {
    encode(message: DecProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecProto;
    fromPartial<I extends {
        dec?: string | undefined;
    } & {
        dec?: string | undefined;
    } & Record<Exclude<keyof I, "dec">, never>>(object: I): DecProto;
};
