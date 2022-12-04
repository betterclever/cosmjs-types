import { Params } from "./host";
import * as _m0 from "protobufjs/minimal";
import { Rpc } from "../../../../../helpers";
export declare const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial<I extends {
        params?: {
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } & {
            hostEnabled?: boolean | undefined;
            allowMessages?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowMessages"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params queries all parameters of the ICA host submodule. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
