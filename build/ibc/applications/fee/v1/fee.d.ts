import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the refund address for unspent fees */
    refundAddress: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
    /** list of packet fees */
    packetFees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
    /** list of packet fees */
    packetFees: PacketFee[];
}
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["recvFee"], keyof {
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
        } & Record<Exclude<keyof I["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["ackFee"], keyof {
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
        } & Record<Exclude<keyof I["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["timeoutFee"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Fee>, never>>(object: I): Fee;
};
export declare const PacketFee: {
    encode(message: PacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["recvFee"], keyof {
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
            } & Record<Exclude<keyof I["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["ackFee"], keyof {
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
            } & Record<Exclude<keyof I["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["timeoutFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["fee"], keyof Fee>, never>) | undefined;
        refundAddress?: string | undefined;
        relayers?: (string[] & string[] & Record<Exclude<keyof I["relayers"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PacketFee>, never>>(object: I): PacketFee;
};
export declare const PacketFees: {
    encode(message: PacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["recvFee"], keyof {
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["ackFee"], keyof {
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["timeoutFee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["packetFees"][number]["fee"], keyof Fee>, never>) | undefined;
            refundAddress?: string | undefined;
            relayers?: (string[] & string[] & Record<Exclude<keyof I["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["packetFees"][number], keyof PacketFee>, never>)[] & Record<Exclude<keyof I["packetFees"], keyof {
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
    } & Record<Exclude<keyof I, "packetFees">, never>>(object: I): PacketFees;
};
export declare const IdentifiedPacketFees: {
    encode(message: IdentifiedPacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["packetId"]["sequence"], keyof import("long").Long>, never>) | undefined;
        } & Record<Exclude<keyof I["packetId"], keyof PacketId>, never>) | undefined;
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["recvFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["recvFee"], keyof {
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["ackFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["ackFee"], keyof {
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
                } & Record<Exclude<keyof I["packetFees"][number]["fee"]["timeoutFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packetFees"][number]["fee"]["timeoutFee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["packetFees"][number]["fee"], keyof Fee>, never>) | undefined;
            refundAddress?: string | undefined;
            relayers?: (string[] & string[] & Record<Exclude<keyof I["packetFees"][number]["relayers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["packetFees"][number], keyof PacketFee>, never>)[] & Record<Exclude<keyof I["packetFees"], keyof {
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
    } & Record<Exclude<keyof I, keyof IdentifiedPacketFees>, never>>(object: I): IdentifiedPacketFees;
};
