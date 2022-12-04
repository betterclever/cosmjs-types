import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.types";
export interface Block {
    header?: Header;
    data?: Data;
    evidence?: EvidenceList;
    lastCommit?: Commit;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromPartial<I extends {
        header?: {
            version?: {
                block?: string | number | import("long").Long | undefined;
                app?: string | number | import("long").Long | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: string | number | import("long").Long | undefined;
            time?: {
                seconds?: string | number | import("long").Long | undefined;
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
        data?: {
            txs?: Uint8Array[] | undefined;
        } | undefined;
        evidence?: {
            evidence?: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        lastCommit?: {
            height?: string | number | import("long").Long | undefined;
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
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        header?: ({
            version?: {
                block?: string | number | import("long").Long | undefined;
                app?: string | number | import("long").Long | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: string | number | import("long").Long | undefined;
            time?: {
                seconds?: string | number | import("long").Long | undefined;
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
                block?: string | number | import("long").Long | undefined;
                app?: string | number | import("long").Long | undefined;
            } & {
                block?: string | number | (import("long").Long & {
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
                } & Record<Exclude<keyof I["header"]["version"]["block"], keyof import("long").Long>, never>) | undefined;
                app?: string | number | (import("long").Long & {
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
                } & Record<Exclude<keyof I["header"]["version"]["app"], keyof import("long").Long>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
            chainId?: string | undefined;
            height?: string | number | (import("long").Long & {
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
            } & Record<Exclude<keyof I["header"]["height"], keyof import("long").Long>, never>) | undefined;
            time?: ({
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
                } & Record<Exclude<keyof I["header"]["time"]["seconds"], keyof import("long").Long>, never>) | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["header"]["time"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                } & Record<Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["lastBlockId"], keyof import("./types").BlockID>, never>) | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        data?: ({
            txs?: Uint8Array[] | undefined;
        } & {
            txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["data"]["txs"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"], "txs">, never>) | undefined;
        evidence?: ({
            evidence?: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            evidence?: ({
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                duplicateVoteEvidence?: ({
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    voteA?: ({
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | (import("long").Long & {
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof import("long").Long>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                        timestamp?: ({
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("./types").Vote>, never>) | undefined;
                    voteB?: ({
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | (import("long").Long & {
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof import("long").Long>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                        timestamp?: ({
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("./types").Vote>, never>) | undefined;
                    totalVotingPower?: string | number | (import("long").Long & {
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
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof import("long").Long>, never>) | undefined;
                    validatorPower?: string | number | (import("long").Long & {
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
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof import("long").Long>, never>) | undefined;
                    timestamp?: ({
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("./evidence").DuplicateVoteEvidence>, never>) | undefined;
                lightClientAttackEvidence?: ({
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    conflictingBlock?: ({
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } & {
                        signedHeader?: ({
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } | undefined;
                        } & {
                            header?: ({
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } & {
                                    block?: string | number | (import("long").Long & {
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof import("long").Long>, never>) | undefined;
                                    app?: string | number | (import("long").Long & {
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof import("long").Long>, never>) | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                                chainId?: string | undefined;
                                height?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof import("long").Long>, never>) | undefined;
                                time?: ({
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"]["seconds"], keyof import("long").Long>, never>) | undefined;
                                    nanos?: number | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["time"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>, never>) | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof Header>, never>) | undefined;
                            commit?: ({
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] | undefined;
                            } & {
                                height?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof import("long").Long>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
                                signatures?: ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] & ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                } & {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: ({
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
                                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                                        nanos?: number | undefined;
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                                    signature?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | number | import("long").Long | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof Commit>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>, never>) | undefined;
                        validatorSet?: ({
                            validators?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } & {
                            validators?: ({
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] & ({
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } & {
                                address?: Uint8Array | undefined;
                                pubKey?: ({
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } & {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                                votingPower?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof import("long").Long>, never>) | undefined;
                                proposerPriority?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof import("long").Long>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[]>, never>) | undefined;
                            proposer?: ({
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } & {
                                address?: Uint8Array | undefined;
                                pubKey?: ({
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } & {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                                votingPower?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof import("long").Long>, never>) | undefined;
                                proposerPriority?: string | number | (import("long").Long & {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof import("long").Long>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("./validator").Validator>, never>) | undefined;
                            totalVotingPower?: string | number | (import("long").Long & {
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof import("long").Long>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("./types").LightBlock>, never>) | undefined;
                    commonHeight?: string | number | (import("long").Long & {
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
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof import("long").Long>, never>) | undefined;
                    byzantineValidators?: ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] & ({
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        pubKey?: ({
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        votingPower?: string | number | (import("long").Long & {
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof import("long").Long>, never>) | undefined;
                        proposerPriority?: string | number | (import("long").Long & {
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof import("long").Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[]>, never>) | undefined;
                    totalVotingPower?: string | number | (import("long").Long & {
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
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof import("long").Long>, never>) | undefined;
                    timestamp?: ({
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("./evidence").LightClientAttackEvidence>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"]["evidence"][number], keyof import("./evidence").Evidence>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"], keyof {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    voteB?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | number | import("long").Long | undefined;
                        round?: number | undefined;
                        blockId?: {
                            hash?: Uint8Array | undefined;
                            partSetHeader?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | number | import("long").Long | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    validatorPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long | undefined;
                                    app?: string | number | import("long").Long | undefined;
                                } | undefined;
                                chainId?: string | undefined;
                                height?: string | number | import("long").Long | undefined;
                                time?: {
                                    seconds?: string | number | import("long").Long | undefined;
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
                                height?: string | number | import("long").Long | undefined;
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
                                        seconds?: string | number | import("long").Long | undefined;
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
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            }[] | undefined;
                            proposer?: {
                                address?: Uint8Array | undefined;
                                pubKey?: {
                                    ed25519?: Uint8Array | undefined;
                                    secp256k1?: Uint8Array | undefined;
                                } | undefined;
                                votingPower?: string | number | import("long").Long | undefined;
                                proposerPriority?: string | number | import("long").Long | undefined;
                            } | undefined;
                            totalVotingPower?: string | number | import("long").Long | undefined;
                        } | undefined;
                    } | undefined;
                    commonHeight?: string | number | import("long").Long | undefined;
                    byzantineValidators?: {
                        address?: Uint8Array | undefined;
                        pubKey?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        votingPower?: string | number | import("long").Long | undefined;
                        proposerPriority?: string | number | import("long").Long | undefined;
                    }[] | undefined;
                    totalVotingPower?: string | number | import("long").Long | undefined;
                    timestamp?: {
                        seconds?: string | number | import("long").Long | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["evidence"], "evidence">, never>) | undefined;
        lastCommit?: ({
            height?: string | number | import("long").Long | undefined;
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
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (import("long").Long & {
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
            } & Record<Exclude<keyof I["lastCommit"]["height"], keyof import("long").Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["lastCommit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["lastCommit"]["blockId"], keyof import("./types").BlockID>, never>) | undefined;
            signatures?: ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] & ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: ({
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
                    } & Record<Exclude<keyof I["lastCommit"]["signatures"][number]["timestamp"]["seconds"], keyof import("long").Long>, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["lastCommit"]["signatures"][number]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["lastCommit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["lastCommit"]["signatures"], keyof {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lastCommit"], keyof Commit>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Block>, never>>(object: I): Block;
};