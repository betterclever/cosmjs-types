import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Timestamp;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset?: Timestamp;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and filtered fee allowance. */
    allowance?: Any;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic and filtered fee allowance. */
    allowance?: Any;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromPartial<I extends {
        spendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        expiration?: {
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        spendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["spendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["spendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        expiration?: ({
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["expiration"]["seconds"], keyof import("long").Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BasicAllowance>, never>>(object: I): BasicAllowance;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromPartial<I extends {
        basic?: {
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        period?: {
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        periodSpendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodCanSpend?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodReset?: {
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        basic?: ({
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            spendLimit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["basic"]["spendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["basic"]["spendLimit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            expiration?: ({
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["basic"]["expiration"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["basic"]["expiration"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["basic"], keyof BasicAllowance>, never>) | undefined;
        period?: ({
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["period"]["seconds"], keyof import("long").Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["period"], keyof Duration>, never>) | undefined;
        periodSpendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["periodSpendLimit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["periodSpendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        periodCanSpend?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["periodCanSpend"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["periodCanSpend"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        periodReset?: ({
            seconds?: string | number | import("long").Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (import("long").Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long").Long) => import("long").Long;
                and: (other: string | number | import("long").Long) => import("long").Long;
                compare: (other: string | number | import("long").Long) => number;
                comp: (other: string | number | import("long").Long) => number;
                divide: (divisor: string | number | import("long").Long) => import("long").Long;
                div: (divisor: string | number | import("long").Long) => import("long").Long;
                equals: (other: string | number | import("long").Long) => boolean;
                eq: (other: string | number | import("long").Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long").Long) => boolean;
                gt: (other: string | number | import("long").Long) => boolean;
                greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                gte: (other: string | number | import("long").Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | import("long").Long) => boolean;
                lt: (other: string | number | import("long").Long) => boolean;
                lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                lte: (other: string | number | import("long").Long) => boolean;
                modulo: (other: string | number | import("long").Long) => import("long").Long;
                mod: (other: string | number | import("long").Long) => import("long").Long;
                multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                negate: () => import("long").Long;
                neg: () => import("long").Long;
                not: () => import("long").Long;
                notEquals: (other: string | number | import("long").Long) => boolean;
                neq: (other: string | number | import("long").Long) => boolean;
                or: (other: string | number | import("long").Long) => import("long").Long;
                shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                shl: (numBits: number | import("long").Long) => import("long").Long;
                shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                shr: (numBits: number | import("long").Long) => import("long").Long;
                shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                shru: (numBits: number | import("long").Long) => import("long").Long;
                subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long").Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => import("long").Long;
                xor: (other: string | number | import("long").Long) => import("long").Long;
            } & Record<Exclude<keyof I["periodReset"]["seconds"], keyof import("long").Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["periodReset"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PeriodicAllowance>, never>>(object: I): PeriodicAllowance;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromPartial<I extends {
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        allowedMessages?: string[] | undefined;
    } & {
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>) | undefined;
        allowedMessages?: (string[] & string[] & Record<Exclude<keyof I["allowedMessages"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AllowedMsgAllowance>, never>>(object: I): AllowedMsgAllowance;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Grant>, never>>(object: I): Grant;
};