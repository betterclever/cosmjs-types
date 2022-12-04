/// <reference types="long" />
import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    lightClientAttackEvidence?: LightClientAttackEvidence;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    totalVotingPower: Long;
    validatorPower: Long;
    timestamp?: Timestamp;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock;
    commonHeight: Long;
    byzantineValidators: Validator[];
    totalVotingPower: Long;
    timestamp?: Timestamp;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromPartial<I extends {
        duplicateVoteEvidence?: {
            voteA?: {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            voteB?: {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            totalVotingPower?: string | number | Long.Long | undefined;
            validatorPower?: string | number | Long.Long | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        lightClientAttackEvidence?: {
            conflictingBlock?: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long.Long | undefined;
                        time?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    commit?: {
                        height?: string | number | Long.Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long.Long | undefined;
                } | undefined;
            } | undefined;
            commonHeight?: string | number | Long.Long | undefined;
            byzantineValidators?: {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long.Long | undefined;
                proposerPriority?: string | number | Long.Long | undefined;
            }[] | undefined;
            totalVotingPower?: string | number | Long.Long | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        duplicateVoteEvidence?: ({
            voteA?: {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            voteB?: {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            totalVotingPower?: string | number | Long.Long | undefined;
            validatorPower?: string | number | Long.Long | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            voteA?: ({
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["height"], keyof Long.Long>, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteA"], keyof Vote>, never>) | undefined;
            voteB?: ({
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("./types").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["height"], keyof Long.Long>, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["voteB"], keyof Vote>, never>) | undefined;
            totalVotingPower?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
            validatorPower?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["validatorPower"], keyof Long.Long>, never>) | undefined;
            timestamp?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["duplicateVoteEvidence"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["duplicateVoteEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["duplicateVoteEvidence"], keyof DuplicateVoteEvidence>, never>) | undefined;
        lightClientAttackEvidence?: ({
            conflictingBlock?: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long.Long | undefined;
                        time?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    commit?: {
                        height?: string | number | Long.Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long.Long | undefined;
                } | undefined;
            } | undefined;
            commonHeight?: string | number | Long.Long | undefined;
            byzantineValidators?: {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long.Long | undefined;
                proposerPriority?: string | number | Long.Long | undefined;
            }[] | undefined;
            totalVotingPower?: string | number | Long.Long | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            conflictingBlock?: ({
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long.Long | undefined;
                        time?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    commit?: {
                        height?: string | number | Long.Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long.Long | undefined;
                } | undefined;
            } & {
                signedHeader?: ({
                    header?: {
                        version?: {
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long.Long | undefined;
                        time?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } | undefined;
                    commit?: {
                        height?: string | number | Long.Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    header?: ({
                        version?: {
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } | undefined;
                        chainId?: string | undefined;
                        height?: string | number | Long.Long | undefined;
                        time?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        lastBlockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } & {
                        version?: ({
                            block?: string | number | Long.Long | undefined;
                            app?: string | number | Long.Long | undefined;
                        } & {
                            block?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long.Long>, never>) | undefined;
                            app?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long.Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                        chainId?: string | undefined;
                        height?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long.Long>, never>) | undefined;
                        time?: ({
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"]["seconds"], keyof Long.Long>, never>) | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
                        lastBlockId?: ({
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } & {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: ({
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } & {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>, never>) | undefined;
                        lastCommitHash?: Uint8Array | undefined;
                        dataHash?: Uint8Array | undefined;
                        validatorsHash?: Uint8Array | undefined;
                        nextValidatorsHash?: Uint8Array | undefined;
                        consensusHash?: Uint8Array | undefined;
                        appHash?: Uint8Array | undefined;
                        lastResultsHash?: Uint8Array | undefined;
                        evidenceHash?: Uint8Array | undefined;
                        proposerAddress?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("./types").Header>, never>) | undefined;
                    commit?: ({
                        height?: string | number | Long.Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        signatures?: {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        height?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long.Long>, never>) | undefined;
                        round?: number | undefined;
                        blockId?: ({
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } & {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: ({
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } & {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                        signatures?: ({
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[] & ({
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: ({
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | number | (Long.Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long.Long) => Long.Long;
                                    and: (other: string | number | Long.Long) => Long.Long;
                                    compare: (other: string | number | Long.Long) => number;
                                    comp: (other: string | number | Long.Long) => number;
                                    divide: (divisor: string | number | Long.Long) => Long.Long;
                                    div: (divisor: string | number | Long.Long) => Long.Long;
                                    equals: (other: string | number | Long.Long) => boolean;
                                    eq: (other: string | number | Long.Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long.Long) => boolean;
                                    gt: (other: string | number | Long.Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    gte: (other: string | number | Long.Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    lessThan: (other: string | number | Long.Long) => boolean;
                                    lt: (other: string | number | Long.Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    lte: (other: string | number | Long.Long) => boolean;
                                    modulo: (other: string | number | Long.Long) => Long.Long;
                                    mod: (other: string | number | Long.Long) => Long.Long;
                                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                                    negate: () => Long.Long;
                                    neg: () => Long.Long;
                                    not: () => Long.Long;
                                    notEquals: (other: string | number | Long.Long) => boolean;
                                    neq: (other: string | number | Long.Long) => boolean;
                                    or: (other: string | number | Long.Long) => Long.Long;
                                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                    shl: (numBits: number | Long.Long) => Long.Long;
                                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                                    shr: (numBits: number | Long.Long) => Long.Long;
                                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                    shru: (numBits: number | Long.Long) => Long.Long;
                                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long.Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long.Long;
                                    xor: (other: string | number | Long.Long) => Long.Long;
                                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: import("./types").BlockIDFlag | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            timestamp?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("./types").Commit>, never>) | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>, never>) | undefined;
                validatorSet?: ({
                    validators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[] | undefined;
                    proposer?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | Long.Long | undefined;
                } & {
                    validators?: ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[] & ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        pubKey?: ({
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        votingPower?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
                        proposerPriority?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    }[]>, never>) | undefined;
                    proposer?: ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | Long.Long | undefined;
                        proposerPriority?: string | number | Long.Long | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        pubKey?: ({
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        votingPower?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long.Long>, never>) | undefined;
                        proposerPriority?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                    totalVotingPower?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>, never>) | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["conflictingBlock"], keyof LightBlock>, never>) | undefined;
            commonHeight?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["commonHeight"], keyof Long.Long>, never>) | undefined;
            byzantineValidators?: ({
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long.Long | undefined;
                proposerPriority?: string | number | Long.Long | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long.Long | undefined;
                proposerPriority?: string | number | Long.Long | undefined;
            } & {
                address?: Uint8Array | undefined;
                pubKey?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                votingPower?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
                proposerPriority?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                address?: Uint8Array | undefined;
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                votingPower?: string | number | Long.Long | undefined;
                proposerPriority?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            totalVotingPower?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
            timestamp?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["lightClientAttackEvidence"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["lightClientAttackEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["lightClientAttackEvidence"], keyof LightClientAttackEvidence>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Evidence>, never>>(object: I): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromPartial<I extends {
        voteA?: {
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        voteB?: {
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        totalVotingPower?: string | number | Long.Long | undefined;
        validatorPower?: string | number | Long.Long | undefined;
        timestamp?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        voteA?: ({
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["voteA"]["height"], keyof Long.Long>, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["voteA"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["voteA"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["voteA"], keyof Vote>, never>) | undefined;
        voteB?: ({
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("./types").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["voteB"]["height"], keyof Long.Long>, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["voteB"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["voteB"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["voteB"], keyof Vote>, never>) | undefined;
        totalVotingPower?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["totalVotingPower"], keyof Long.Long>, never>) | undefined;
        validatorPower?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["validatorPower"], keyof Long.Long>, never>) | undefined;
        timestamp?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DuplicateVoteEvidence>, never>>(object: I): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromPartial<I extends {
        conflictingBlock?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string | number | Long.Long | undefined;
                        app?: string | number | Long.Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long.Long | undefined;
                    time?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                commit?: {
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
            } | undefined;
        } | undefined;
        commonHeight?: string | number | Long.Long | undefined;
        byzantineValidators?: {
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] | undefined;
        totalVotingPower?: string | number | Long.Long | undefined;
        timestamp?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        conflictingBlock?: ({
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string | number | Long.Long | undefined;
                        app?: string | number | Long.Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long.Long | undefined;
                    time?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                commit?: {
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
            } | undefined;
        } & {
            signedHeader?: ({
                header?: {
                    version?: {
                        block?: string | number | Long.Long | undefined;
                        app?: string | number | Long.Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long.Long | undefined;
                    time?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } | undefined;
                commit?: {
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                header?: ({
                    version?: {
                        block?: string | number | Long.Long | undefined;
                        app?: string | number | Long.Long | undefined;
                    } | undefined;
                    chainId?: string | undefined;
                    height?: string | number | Long.Long | undefined;
                    time?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    lastBlockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } & {
                    version?: ({
                        block?: string | number | Long.Long | undefined;
                        app?: string | number | Long.Long | undefined;
                    } & {
                        block?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long.Long>, never>) | undefined;
                        app?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long.Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                    chainId?: string | undefined;
                    height?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long.Long>, never>) | undefined;
                    time?: ({
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["time"]["seconds"], keyof Long.Long>, never>) | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
                    lastBlockId?: ({
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: ({
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>, never>) | undefined;
                    lastCommitHash?: Uint8Array | undefined;
                    dataHash?: Uint8Array | undefined;
                    validatorsHash?: Uint8Array | undefined;
                    nextValidatorsHash?: Uint8Array | undefined;
                    consensusHash?: Uint8Array | undefined;
                    appHash?: Uint8Array | undefined;
                    lastResultsHash?: Uint8Array | undefined;
                    evidenceHash?: Uint8Array | undefined;
                    proposerAddress?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["header"], keyof import("./types").Header>, never>) | undefined;
                commit?: ({
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    height?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long.Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: ({
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                    signatures?: ({
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] & ({
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: ({
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                        blockIdFlag?: import("./types").BlockIDFlag | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | number | Long.Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"]["commit"], keyof import("./types").Commit>, never>) | undefined;
            } & Record<Exclude<keyof I["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>, never>) | undefined;
            validatorSet?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long.Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                totalVotingPower?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>, never>) | undefined;
        } & Record<Exclude<keyof I["conflictingBlock"], keyof LightBlock>, never>) | undefined;
        commonHeight?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["commonHeight"], keyof Long.Long>, never>) | undefined;
        byzantineValidators?: ({
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        } & {
            address?: Uint8Array | undefined;
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
            votingPower?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
            proposerPriority?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["byzantineValidators"], keyof {
            address?: Uint8Array | undefined;
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
        totalVotingPower?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["totalVotingPower"], keyof Long.Long>, never>) | undefined;
        timestamp?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LightClientAttackEvidence>, never>>(object: I): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromPartial<I extends {
        evidence?: {
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                validatorPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long.Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        evidence?: ({
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                validatorPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long.Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                validatorPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long.Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            duplicateVoteEvidence?: ({
                voteA?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                validatorPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                voteA?: ({
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long.Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: ({
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof Vote>, never>) | undefined;
                voteB?: ({
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long.Long>, never>) | undefined;
                    round?: number | undefined;
                    blockId?: ({
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: ({
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof Vote>, never>) | undefined;
                totalVotingPower?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
                validatorPower?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long.Long>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"][number]["duplicateVoteEvidence"], keyof DuplicateVoteEvidence>, never>) | undefined;
            lightClientAttackEvidence?: ({
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long.Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                conflictingBlock?: ({
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } & {
                    signedHeader?: ({
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        header?: ({
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } & {
                            version?: ({
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } & {
                                block?: string | number | (Long.Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long.Long) => Long.Long;
                                    and: (other: string | number | Long.Long) => Long.Long;
                                    compare: (other: string | number | Long.Long) => number;
                                    comp: (other: string | number | Long.Long) => number;
                                    divide: (divisor: string | number | Long.Long) => Long.Long;
                                    div: (divisor: string | number | Long.Long) => Long.Long;
                                    equals: (other: string | number | Long.Long) => boolean;
                                    eq: (other: string | number | Long.Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long.Long) => boolean;
                                    gt: (other: string | number | Long.Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    gte: (other: string | number | Long.Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    lessThan: (other: string | number | Long.Long) => boolean;
                                    lt: (other: string | number | Long.Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    lte: (other: string | number | Long.Long) => boolean;
                                    modulo: (other: string | number | Long.Long) => Long.Long;
                                    mod: (other: string | number | Long.Long) => Long.Long;
                                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                                    negate: () => Long.Long;
                                    neg: () => Long.Long;
                                    not: () => Long.Long;
                                    notEquals: (other: string | number | Long.Long) => boolean;
                                    neq: (other: string | number | Long.Long) => boolean;
                                    or: (other: string | number | Long.Long) => Long.Long;
                                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                    shl: (numBits: number | Long.Long) => Long.Long;
                                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                                    shr: (numBits: number | Long.Long) => Long.Long;
                                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                    shru: (numBits: number | Long.Long) => Long.Long;
                                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long.Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long.Long;
                                    xor: (other: string | number | Long.Long) => Long.Long;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long.Long>, never>) | undefined;
                                app?: string | number | (Long.Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long.Long) => Long.Long;
                                    and: (other: string | number | Long.Long) => Long.Long;
                                    compare: (other: string | number | Long.Long) => number;
                                    comp: (other: string | number | Long.Long) => number;
                                    divide: (divisor: string | number | Long.Long) => Long.Long;
                                    div: (divisor: string | number | Long.Long) => Long.Long;
                                    equals: (other: string | number | Long.Long) => boolean;
                                    eq: (other: string | number | Long.Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long.Long) => boolean;
                                    gt: (other: string | number | Long.Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    gte: (other: string | number | Long.Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    lessThan: (other: string | number | Long.Long) => boolean;
                                    lt: (other: string | number | Long.Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    lte: (other: string | number | Long.Long) => boolean;
                                    modulo: (other: string | number | Long.Long) => Long.Long;
                                    mod: (other: string | number | Long.Long) => Long.Long;
                                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                                    negate: () => Long.Long;
                                    neg: () => Long.Long;
                                    not: () => Long.Long;
                                    notEquals: (other: string | number | Long.Long) => boolean;
                                    neq: (other: string | number | Long.Long) => boolean;
                                    or: (other: string | number | Long.Long) => Long.Long;
                                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                    shl: (numBits: number | Long.Long) => Long.Long;
                                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                                    shr: (numBits: number | Long.Long) => Long.Long;
                                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                    shru: (numBits: number | Long.Long) => Long.Long;
                                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long.Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long.Long;
                                    xor: (other: string | number | Long.Long) => Long.Long;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long.Long>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                            chainId?: string | undefined;
                            height?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long.Long>, never>) | undefined;
                            time?: ({
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | number | (Long.Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long.Long) => Long.Long;
                                    and: (other: string | number | Long.Long) => Long.Long;
                                    compare: (other: string | number | Long.Long) => number;
                                    comp: (other: string | number | Long.Long) => number;
                                    divide: (divisor: string | number | Long.Long) => Long.Long;
                                    div: (divisor: string | number | Long.Long) => Long.Long;
                                    equals: (other: string | number | Long.Long) => boolean;
                                    eq: (other: string | number | Long.Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long.Long) => boolean;
                                    gt: (other: string | number | Long.Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    gte: (other: string | number | Long.Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    lessThan: (other: string | number | Long.Long) => boolean;
                                    lt: (other: string | number | Long.Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                    lte: (other: string | number | Long.Long) => boolean;
                                    modulo: (other: string | number | Long.Long) => Long.Long;
                                    mod: (other: string | number | Long.Long) => Long.Long;
                                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                                    negate: () => Long.Long;
                                    neg: () => Long.Long;
                                    not: () => Long.Long;
                                    notEquals: (other: string | number | Long.Long) => boolean;
                                    neq: (other: string | number | Long.Long) => boolean;
                                    or: (other: string | number | Long.Long) => Long.Long;
                                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                    shl: (numBits: number | Long.Long) => Long.Long;
                                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                                    shr: (numBits: number | Long.Long) => Long.Long;
                                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                    shru: (numBits: number | Long.Long) => Long.Long;
                                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long.Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long.Long;
                                    xor: (other: string | number | Long.Long) => Long.Long;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"]["seconds"], keyof Long.Long>, never>) | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"], keyof Timestamp>, never>) | undefined;
                            lastBlockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>, never>) | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("./types").Header>, never>) | undefined;
                        commit?: ({
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            height?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long.Long>, never>) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                            signatures?: ({
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] & ({
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            } & {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: ({
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } & {
                                    seconds?: string | number | (Long.Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long.Long) => Long.Long;
                                        and: (other: string | number | Long.Long) => Long.Long;
                                        compare: (other: string | number | Long.Long) => number;
                                        comp: (other: string | number | Long.Long) => number;
                                        divide: (divisor: string | number | Long.Long) => Long.Long;
                                        div: (divisor: string | number | Long.Long) => Long.Long;
                                        equals: (other: string | number | Long.Long) => boolean;
                                        eq: (other: string | number | Long.Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long.Long) => boolean;
                                        gt: (other: string | number | Long.Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                        gte: (other: string | number | Long.Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        lessThan: (other: string | number | Long.Long) => boolean;
                                        lt: (other: string | number | Long.Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                        lte: (other: string | number | Long.Long) => boolean;
                                        modulo: (other: string | number | Long.Long) => Long.Long;
                                        mod: (other: string | number | Long.Long) => Long.Long;
                                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                                        negate: () => Long.Long;
                                        neg: () => Long.Long;
                                        not: () => Long.Long;
                                        notEquals: (other: string | number | Long.Long) => boolean;
                                        neq: (other: string | number | Long.Long) => boolean;
                                        or: (other: string | number | Long.Long) => Long.Long;
                                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                        shl: (numBits: number | Long.Long) => Long.Long;
                                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                                        shr: (numBits: number | Long.Long) => Long.Long;
                                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                        shru: (numBits: number | Long.Long) => Long.Long;
                                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long.Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long.Long;
                                        xor: (other: string | number | Long.Long) => Long.Long;
                                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                                    nanos?: number | undefined;
                                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                                signature?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("./types").Commit>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>, never>) | undefined;
                    validatorSet?: ({
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } & {
                        validators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                            votingPower?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
                            proposerPriority?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[]>, never>) | undefined;
                        proposer?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                            votingPower?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long.Long>, never>) | undefined;
                            proposerPriority?: string | number | (Long.Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long.Long) => Long.Long;
                                and: (other: string | number | Long.Long) => Long.Long;
                                compare: (other: string | number | Long.Long) => number;
                                comp: (other: string | number | Long.Long) => number;
                                divide: (divisor: string | number | Long.Long) => Long.Long;
                                div: (divisor: string | number | Long.Long) => Long.Long;
                                equals: (other: string | number | Long.Long) => boolean;
                                eq: (other: string | number | Long.Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long.Long) => boolean;
                                gt: (other: string | number | Long.Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                                gte: (other: string | number | Long.Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                lessThan: (other: string | number | Long.Long) => boolean;
                                lt: (other: string | number | Long.Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                                lte: (other: string | number | Long.Long) => boolean;
                                modulo: (other: string | number | Long.Long) => Long.Long;
                                mod: (other: string | number | Long.Long) => Long.Long;
                                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                                mul: (multiplier: string | number | Long.Long) => Long.Long;
                                negate: () => Long.Long;
                                neg: () => Long.Long;
                                not: () => Long.Long;
                                notEquals: (other: string | number | Long.Long) => boolean;
                                neq: (other: string | number | Long.Long) => boolean;
                                or: (other: string | number | Long.Long) => Long.Long;
                                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                                shl: (numBits: number | Long.Long) => Long.Long;
                                shiftRight: (numBits: number | Long.Long) => Long.Long;
                                shr: (numBits: number | Long.Long) => Long.Long;
                                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                                shru: (numBits: number | Long.Long) => Long.Long;
                                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long.Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long.Long;
                                xor: (other: string | number | Long.Long) => Long.Long;
                            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof Validator>, never>) | undefined;
                        totalVotingPower?: string | number | (Long.Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long.Long) => Long.Long;
                            and: (other: string | number | Long.Long) => Long.Long;
                            compare: (other: string | number | Long.Long) => number;
                            comp: (other: string | number | Long.Long) => number;
                            divide: (divisor: string | number | Long.Long) => Long.Long;
                            div: (divisor: string | number | Long.Long) => Long.Long;
                            equals: (other: string | number | Long.Long) => boolean;
                            eq: (other: string | number | Long.Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long.Long) => boolean;
                            gt: (other: string | number | Long.Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                            gte: (other: string | number | Long.Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            lessThan: (other: string | number | Long.Long) => boolean;
                            lt: (other: string | number | Long.Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                            lte: (other: string | number | Long.Long) => boolean;
                            modulo: (other: string | number | Long.Long) => Long.Long;
                            mod: (other: string | number | Long.Long) => Long.Long;
                            multiply: (multiplier: string | number | Long.Long) => Long.Long;
                            mul: (multiplier: string | number | Long.Long) => Long.Long;
                            negate: () => Long.Long;
                            neg: () => Long.Long;
                            not: () => Long.Long;
                            notEquals: (other: string | number | Long.Long) => boolean;
                            neq: (other: string | number | Long.Long) => boolean;
                            or: (other: string | number | Long.Long) => Long.Long;
                            shiftLeft: (numBits: number | Long.Long) => Long.Long;
                            shl: (numBits: number | Long.Long) => Long.Long;
                            shiftRight: (numBits: number | Long.Long) => Long.Long;
                            shr: (numBits: number | Long.Long) => Long.Long;
                            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                            shru: (numBits: number | Long.Long) => Long.Long;
                            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                            sub: (subtrahend: string | number | Long.Long) => Long.Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long.Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long.Long;
                            xor: (other: string | number | Long.Long) => Long.Long;
                        } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof LightBlock>, never>) | undefined;
                commonHeight?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long.Long>, never>) | undefined;
                byzantineValidators?: ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pubKey?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                    votingPower?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long.Long>, never>) | undefined;
                    proposerPriority?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[]>, never>) | undefined;
                totalVotingPower?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long.Long>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["timestamp"]["seconds"], keyof Long.Long>, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"]["timestamp"], keyof Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"][number]["lightClientAttackEvidence"], keyof LightClientAttackEvidence>, never>) | undefined;
        } & Record<Exclude<keyof I["evidence"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["evidence"], keyof {
            duplicateVoteEvidence?: {
                voteA?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                voteB?: {
                    type?: import("./types").SignedMsgType | undefined;
                    height?: string | number | Long.Long | undefined;
                    round?: number | undefined;
                    blockId?: {
                        hash?: Uint8Array | undefined;
                        partSetHeader?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    timestamp?: {
                        seconds?: string | number | Long.Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    validatorIndex?: number | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                validatorPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            lightClientAttackEvidence?: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | Long.Long | undefined;
                                app?: string | number | Long.Long | undefined;
                            } | undefined;
                            chainId?: string | undefined;
                            height?: string | number | Long.Long | undefined;
                            time?: {
                                seconds?: string | number | Long.Long | undefined;
                                nanos?: number | undefined;
                            } | undefined;
                            lastBlockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            lastCommitHash?: Uint8Array | undefined;
                            dataHash?: Uint8Array | undefined;
                            validatorsHash?: Uint8Array | undefined;
                            nextValidatorsHash?: Uint8Array | undefined;
                            consensusHash?: Uint8Array | undefined;
                            appHash?: Uint8Array | undefined;
                            lastResultsHash?: Uint8Array | undefined;
                            evidenceHash?: Uint8Array | undefined;
                            proposerAddress?: Uint8Array | undefined;
                        } | undefined;
                        commit?: {
                            height?: string | number | Long.Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            signatures?: {
                                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                validatorAddress?: Uint8Array | undefined;
                                timestamp?: {
                                    seconds?: string | number | Long.Long | undefined;
                                    nanos?: number | undefined;
                                } | undefined;
                                signature?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        proposer?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                    } | undefined;
                } | undefined;
                commonHeight?: string | number | Long.Long | undefined;
                byzantineValidators?: {
                    address?: Uint8Array | undefined;
                    pubKey?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    votingPower?: string | number | Long.Long | undefined;
                    proposerPriority?: string | number | Long.Long | undefined;
                }[] | undefined;
                totalVotingPower?: string | number | Long.Long | undefined;
                timestamp?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "evidence">, never>>(object: I): EvidenceList;
};