/// <reference types="long" />
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long, Rpc } from "../../../../helpers";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId?: PacketId;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket?: IdentifiedPacketFees;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    encode(message: QueryIncentivizedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        queryHeight?: string | number | Long.Long | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        queryHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["queryHeight"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketsRequest>, never>>(object: I): QueryIncentivizedPacketsRequest;
};
export declare const QueryIncentivizedPacketsResponse: {
    encode(message: QueryIncentivizedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse;
    fromPartial<I extends {
        incentivizedPackets?: {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
    } & {
        incentivizedPackets?: ({
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
                sequence?: string | number | Long.Long | undefined;
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
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetId"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["recvFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["ackFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["timeoutFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refundAddress?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"], keyof {
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
        } & Record<Exclude<keyof I["incentivizedPackets"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"], keyof {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
    } & Record<Exclude<keyof I, "incentivizedPackets">, never>>(object: I): QueryIncentivizedPacketsResponse;
};
export declare const QueryIncentivizedPacketRequest: {
    encode(message: QueryIncentivizedPacketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest;
    fromPartial<I extends {
        packetId?: {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } | undefined;
        queryHeight?: string | number | Long.Long | undefined;
    } & {
        packetId?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
        queryHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["queryHeight"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketRequest>, never>>(object: I): QueryIncentivizedPacketRequest;
};
export declare const QueryIncentivizedPacketResponse: {
    encode(message: QueryIncentivizedPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse;
    fromPartial<I extends {
        incentivizedPacket?: {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
        } | undefined;
    } & {
        incentivizedPacket?: ({
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["incentivizedPacket"]["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPacket"]["packetId"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["recvFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["ackFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"]["timeoutFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refundAddress?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivizedPacket"]["packetFees"], keyof {
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
        } & Record<Exclude<keyof I["incentivizedPacket"], keyof IdentifiedPacketFees>, never>) | undefined;
    } & Record<Exclude<keyof I, "incentivizedPacket">, never>>(object: I): QueryIncentivizedPacketResponse;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        queryHeight?: string | number | Long.Long | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        queryHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["queryHeight"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketsForChannelRequest>, never>>(object: I): QueryIncentivizedPacketsForChannelRequest;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse;
    fromPartial<I extends {
        incentivizedPackets?: {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
    } & {
        incentivizedPackets?: ({
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
                sequence?: string | number | Long.Long | undefined;
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
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetId"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["recvFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["ackFee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"]["timeoutFee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refundAddress?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"][number]["packetFees"], keyof {
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
        } & Record<Exclude<keyof I["incentivizedPackets"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["incentivizedPackets"], keyof {
            packetId?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
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
    } & Record<Exclude<keyof I, "incentivizedPackets">, never>>(object: I): QueryIncentivizedPacketsForChannelResponse;
};
export declare const QueryTotalRecvFeesRequest: {
    encode(message: QueryTotalRecvFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest;
    fromPartial<I extends {
        packetId?: {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        packetId?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
    } & Record<Exclude<keyof I, "packetId">, never>>(object: I): QueryTotalRecvFeesRequest;
};
export declare const QueryTotalRecvFeesResponse: {
    encode(message: QueryTotalRecvFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse;
    fromPartial<I extends {
        recvFees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        recvFees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["recvFees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["recvFees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "recvFees">, never>>(object: I): QueryTotalRecvFeesResponse;
};
export declare const QueryTotalAckFeesRequest: {
    encode(message: QueryTotalAckFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest;
    fromPartial<I extends {
        packetId?: {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        packetId?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
    } & Record<Exclude<keyof I, "packetId">, never>>(object: I): QueryTotalAckFeesRequest;
};
export declare const QueryTotalAckFeesResponse: {
    encode(message: QueryTotalAckFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse;
    fromPartial<I extends {
        ackFees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        ackFees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["ackFees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["ackFees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ackFees">, never>>(object: I): QueryTotalAckFeesResponse;
};
export declare const QueryTotalTimeoutFeesRequest: {
    encode(message: QueryTotalTimeoutFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest;
    fromPartial<I extends {
        packetId?: {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        packetId?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | Long.Long | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
            sequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
    } & Record<Exclude<keyof I, "packetId">, never>>(object: I): QueryTotalTimeoutFeesRequest;
};
export declare const QueryTotalTimeoutFeesResponse: {
    encode(message: QueryTotalTimeoutFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse;
    fromPartial<I extends {
        timeoutFees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        timeoutFees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["timeoutFees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["timeoutFees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "timeoutFees">, never>>(object: I): QueryTotalTimeoutFeesResponse;
};
export declare const QueryPayeeRequest: {
    encode(message: QueryPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest;
    fromPartial<I extends {
        channelId?: string | undefined;
        relayer?: string | undefined;
    } & {
        channelId?: string | undefined;
        relayer?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryPayeeRequest>, never>>(object: I): QueryPayeeRequest;
};
export declare const QueryPayeeResponse: {
    encode(message: QueryPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse;
    fromPartial<I extends {
        payeeAddress?: string | undefined;
    } & {
        payeeAddress?: string | undefined;
    } & Record<Exclude<keyof I, "payeeAddress">, never>>(object: I): QueryPayeeResponse;
};
export declare const QueryCounterpartyPayeeRequest: {
    encode(message: QueryCounterpartyPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest;
    fromPartial<I extends {
        channelId?: string | undefined;
        relayer?: string | undefined;
    } & {
        channelId?: string | undefined;
        relayer?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCounterpartyPayeeRequest>, never>>(object: I): QueryCounterpartyPayeeRequest;
};
export declare const QueryCounterpartyPayeeResponse: {
    encode(message: QueryCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse;
    fromPartial<I extends {
        counterpartyPayee?: string | undefined;
    } & {
        counterpartyPayee?: string | undefined;
    } & Record<Exclude<keyof I, "counterpartyPayee">, never>>(object: I): QueryCounterpartyPayeeResponse;
};
export declare const QueryFeeEnabledChannelsRequest: {
    encode(message: QueryFeeEnabledChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        queryHeight?: string | number | Long.Long | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        queryHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["queryHeight"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryFeeEnabledChannelsRequest>, never>>(object: I): QueryFeeEnabledChannelsRequest;
};
export declare const QueryFeeEnabledChannelsResponse: {
    encode(message: QueryFeeEnabledChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse;
    fromPartial<I extends {
        feeEnabledChannels?: {
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
    } & {
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
    } & Record<Exclude<keyof I, "feeEnabledChannels">, never>>(object: I): QueryFeeEnabledChannelsResponse;
};
export declare const QueryFeeEnabledChannelRequest: {
    encode(message: QueryFeeEnabledChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest;
    fromPartial<I extends {
        portId?: string | undefined;
        channelId?: string | undefined;
    } & {
        portId?: string | undefined;
        channelId?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryFeeEnabledChannelRequest>, never>>(object: I): QueryFeeEnabledChannelRequest;
};
export declare const QueryFeeEnabledChannelResponse: {
    encode(message: QueryFeeEnabledChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse;
    fromPartial<I extends {
        feeEnabled?: boolean | undefined;
    } & {
        feeEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "feeEnabled">, never>>(object: I): QueryFeeEnabledChannelResponse;
};
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
