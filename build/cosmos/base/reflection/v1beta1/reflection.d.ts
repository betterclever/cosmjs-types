import * as _m0 from "protobufjs/minimal";
import { Rpc } from "../../../../helpers";
export declare const protobufPackage = "cosmos.base.reflection.v1beta1";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interfaceNames: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interfaceName: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementationMessageNames: string[];
}
export declare const ListAllInterfacesRequest: {
    encode(_: ListAllInterfacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ListAllInterfacesRequest;
};
export declare const ListAllInterfacesResponse: {
    encode(message: ListAllInterfacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponse;
    fromPartial<I extends {
        interfaceNames?: string[] | undefined;
    } & {
        interfaceNames?: (string[] & string[] & Record<Exclude<keyof I["interfaceNames"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "interfaceNames">, never>>(object: I): ListAllInterfacesResponse;
};
export declare const ListImplementationsRequest: {
    encode(message: ListImplementationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest;
    fromPartial<I extends {
        interfaceName?: string | undefined;
    } & {
        interfaceName?: string | undefined;
    } & Record<Exclude<keyof I, "interfaceName">, never>>(object: I): ListImplementationsRequest;
};
export declare const ListImplementationsResponse: {
    encode(message: ListImplementationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponse;
    fromPartial<I extends {
        implementationMessageNames?: string[] | undefined;
    } & {
        implementationMessageNames?: (string[] & string[] & Record<Exclude<keyof I["implementationMessageNames"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "implementationMessageNames">, never>>(object: I): ListImplementationsResponse;
};
/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
    /**
     * ListAllInterfaces lists all the interfaces registered in the interface
     * registry.
     */
    ListAllInterfaces(request?: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    /**
     * ListImplementations list all the concrete types that implement a given
     * interface.
     */
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListAllInterfaces(request?: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}