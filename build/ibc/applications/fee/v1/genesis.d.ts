import { IdentifiedPacketFees } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identifiedFees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** list of registered payees */
    registeredPayees: RegisteredPayee[];
    /** list of registered counterparty payees */
    registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
    /** list of forward relayer addresses */
    forwardRelayers: ForwardRelayerAddress[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        identifiedFees?: {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
            packetFees?: {
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[] | undefined;
        }[] | undefined;
        feeEnabledChannels?: {
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
        registeredPayees?: {
            channelId?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[] | undefined;
        registeredCounterpartyPayees?: {
            channelId?: string | undefined;
            relayer?: string | undefined;
            counterpartyPayee?: string | undefined;
        }[] | undefined;
        forwardRelayers?: {
            address?: string | undefined;
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        identifiedFees?: ({
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
            packetFees?: {
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[] | undefined;
        }[] & ({
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
            packetFees?: {
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[] | undefined;
        } & {
            packetId?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (import("long").Long & {
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
                } & Record<Exclude<keyof I["identifiedFees"][number]["packetId"]["sequence"], keyof import("long").Long>, never>) | undefined;
            } & Record<Exclude<keyof I["identifiedFees"][number]["packetId"], keyof PacketId>, never>) | undefined;
            packetFees?: ({
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[] & ({
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            } & {
                fee?: ({
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    recvFee?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["recvFee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["recvFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    ackFee?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["ackFee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["ackFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    timeoutFee?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["timeoutFee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"]["timeoutFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refundAddress?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["identifiedFees"][number]["packetFees"], keyof {
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["identifiedFees"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["identifiedFees"], keyof {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
            packetFees?: {
                fee?: {
                    recvFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    ackFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    timeoutFee?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } | undefined;
                refundAddress?: string | undefined;
                relayers?: string[] | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        feeEnabledChannels?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] & ({
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
        } & Record<Exclude<keyof I["feeEnabledChannels"][number], keyof FeeEnabledChannel>, never>)[] & Record<Exclude<keyof I["feeEnabledChannels"], keyof {
            portId?: string | undefined;
            channelId?: string | undefined;
        }[]>, never>) | undefined;
        registeredPayees?: ({
            channelId?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[] & ({
            channelId?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        } & {
            channelId?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        } & Record<Exclude<keyof I["registeredPayees"][number], keyof RegisteredPayee>, never>)[] & Record<Exclude<keyof I["registeredPayees"], keyof {
            channelId?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[]>, never>) | undefined;
        registeredCounterpartyPayees?: ({
            channelId?: string | undefined;
            relayer?: string | undefined;
            counterpartyPayee?: string | undefined;
        }[] & ({
            channelId?: string | undefined;
            relayer?: string | undefined;
            counterpartyPayee?: string | undefined;
        } & {
            channelId?: string | undefined;
            relayer?: string | undefined;
            counterpartyPayee?: string | undefined;
        } & Record<Exclude<keyof I["registeredCounterpartyPayees"][number], keyof RegisteredCounterpartyPayee>, never>)[] & Record<Exclude<keyof I["registeredCounterpartyPayees"], keyof {
            channelId?: string | undefined;
            relayer?: string | undefined;
            counterpartyPayee?: string | undefined;
        }[]>, never>) | undefined;
        forwardRelayers?: ({
            address?: string | undefined;
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
        }[] & ({
            address?: string | undefined;
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            packetId?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (import("long").Long & {
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
                } & Record<Exclude<keyof I["forwardRelayers"][number]["packetId"]["sequence"], keyof import("long").Long>, never>) | undefined;
            } & Record<Exclude<keyof I["forwardRelayers"][number]["packetId"], keyof PacketId>, never>) | undefined;
        } & Record<Exclude<keyof I["forwardRelayers"][number], keyof ForwardRelayerAddress>, never>)[] & Record<Exclude<keyof I["forwardRelayers"], keyof {
            address?: string | undefined;
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | import("long").Long | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const FeeEnabledChannel: {
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel;
    fromPartial<I extends {
        portId?: string | undefined;
        channelId?: string | undefined;
    } & {
        portId?: string | undefined;
        channelId?: string | undefined;
    } & Record<Exclude<keyof I, keyof FeeEnabledChannel>, never>>(object: I): FeeEnabledChannel;
};
export declare const RegisteredPayee: {
    encode(message: RegisteredPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee;
    fromPartial<I extends {
        channelId?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & {
        channelId?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredPayee>, never>>(object: I): RegisteredPayee;
};
export declare const RegisteredCounterpartyPayee: {
    encode(message: RegisteredCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee;
    fromPartial<I extends {
        channelId?: string | undefined;
        relayer?: string | undefined;
        counterpartyPayee?: string | undefined;
    } & {
        channelId?: string | undefined;
        relayer?: string | undefined;
        counterpartyPayee?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredCounterpartyPayee>, never>>(object: I): RegisteredCounterpartyPayee;
};
export declare const ForwardRelayerAddress: {
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress;
    fromPartial<I extends {
        address?: string | undefined;
        packetId?: {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | import("long").Long | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        packetId?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | import("long").Long | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | (import("long").Long & {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof import("long").Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ForwardRelayerAddress>, never>>(object: I): ForwardRelayerAddress;
};