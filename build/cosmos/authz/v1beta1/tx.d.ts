import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant?: Grant;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
    results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
    grantee: string;
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: Any[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msgTypeUrl: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
}
export declare const MsgGrant: {
    encode(message: MsgGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        grant?: {
            authorization?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        grant?: ({
            authorization?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            authorization?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["grant"]["authorization"], keyof Any>, never>) | undefined;
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
                } & Record<Exclude<keyof I["grant"]["expiration"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["grant"]["expiration"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["grant"], keyof Grant>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgGrant>, never>>(object: I): MsgGrant;
};
export declare const MsgExecResponse: {
    encode(message: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromPartial<I extends {
        results?: Uint8Array[] | undefined;
    } & {
        results?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["results"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "results">, never>>(object: I): MsgExecResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromPartial<I extends {
        grantee?: string | undefined;
        msgs?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        grantee?: string | undefined;
        msgs?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["msgs"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["msgs"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgExec>, never>>(object: I): MsgExec;
};
export declare const MsgGrantResponse: {
    encode(_: MsgGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgGrantResponse;
};
export declare const MsgRevoke: {
    encode(message: MsgRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        msgTypeUrl?: string | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        msgTypeUrl?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRevoke>, never>>(object: I): MsgRevoke;
};
export declare const MsgRevokeResponse: {
    encode(_: MsgRevokeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRevokeResponse;
};
/** Msg defines the authz Msg service. */
export interface Msg {
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     */
    Grant(request: MsgGrant): Promise<MsgGrantResponse>;
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     */
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     */
    Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Grant(request: MsgGrant): Promise<MsgGrantResponse>;
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
