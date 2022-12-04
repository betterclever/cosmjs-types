import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.params.v1beta1";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParameterChangeProposal;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        changes?: {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        changes?: ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["changes"][number], keyof ParamChange>, never>)[] & Record<Exclude<keyof I["changes"], keyof {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ParameterChangeProposal>, never>>(object: I): ParameterChangeProposal;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange;
    fromPartial<I extends {
        subspace?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
    } & {
        subspace?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof ParamChange>, never>>(object: I): ParamChange;
};
