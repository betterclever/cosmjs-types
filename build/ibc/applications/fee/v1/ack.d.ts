import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
    /** the underlying app acknowledgement bytes */
    appAcknowledgement: Uint8Array;
    /** the relayer address which submits the recv packet message */
    forwardRelayerAddress: string;
    /** success flag of the base application callback */
    underlyingAppSuccess: boolean;
}
export declare const IncentivizedAcknowledgement: {
    encode(message: IncentivizedAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement;
    fromPartial<I extends {
        appAcknowledgement?: Uint8Array | undefined;
        forwardRelayerAddress?: string | undefined;
        underlyingAppSuccess?: boolean | undefined;
    } & {
        appAcknowledgement?: Uint8Array | undefined;
        forwardRelayerAddress?: string | undefined;
        underlyingAppSuccess?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof IncentivizedAcknowledgement>, never>>(object: I): IncentivizedAcknowledgement;
};
