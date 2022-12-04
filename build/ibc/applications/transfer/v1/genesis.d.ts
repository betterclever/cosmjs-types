import { DenomTrace, Params } from "./transfer";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        portId?: string | undefined;
        denomTraces?: {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] | undefined;
        params?: {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } | undefined;
    } & {
        portId?: string | undefined;
        denomTraces?: ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] & ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & {
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & Record<Exclude<keyof I["denomTraces"][number], keyof DenomTrace>, never>)[] & Record<Exclude<keyof I["denomTraces"], keyof {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[]>, never>) | undefined;
        params?: ({
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};