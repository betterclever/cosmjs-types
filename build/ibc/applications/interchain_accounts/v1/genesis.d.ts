import { Params as Params1 } from "../controller/v1/controller";
import { Params as Params2 } from "../host/v1/host";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState?: ControllerGenesisState;
    hostGenesisState?: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params1;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params2;
}
/** ActiveChannel contains a connection ID, port ID and associated active channel ID */
export interface ActiveChannel {
    connectionId: string;
    portId: string;
    channelId: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connectionId: string;
    portId: string;
    accountAddress: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial<I extends {
        controllerGenesisState?: {
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controllerEnabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        hostGenesisState?: {
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        controllerGenesisState?: ({
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controllerEnabled?: boolean | undefined;
            } | undefined;
        } & {
            activeChannels?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["activeChannels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["controllerGenesisState"]["activeChannels"], keyof {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[]>, never>) | undefined;
            interchainAccounts?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["interchainAccounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["controllerGenesisState"]["interchainAccounts"], keyof {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[]>, never>) | undefined;
            ports?: (string[] & string[] & Record<Exclude<keyof I["controllerGenesisState"]["ports"], keyof string[]>, never>) | undefined;
            params?: ({
                controllerEnabled?: boolean | undefined;
            } & {
                controllerEnabled?: boolean | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["params"], "controllerEnabled">, never>) | undefined;
        } & Record<Exclude<keyof I["controllerGenesisState"], keyof ControllerGenesisState>, never>) | undefined;
        hostGenesisState?: ({
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } | undefined;
        } & {
            activeChannels?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["activeChannels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["hostGenesisState"]["activeChannels"], keyof {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[]>, never>) | undefined;
            interchainAccounts?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["interchainAccounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["hostGenesisState"]["interchainAccounts"], keyof {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[]>, never>) | undefined;
            port?: string | undefined;
            params?: ({
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } & {
                hostEnabled?: boolean | undefined;
                allowMessages?: (string[] & string[] & Record<Exclude<keyof I["hostGenesisState"]["params"]["allowMessages"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["params"], keyof Params2>, never>) | undefined;
        } & Record<Exclude<keyof I["hostGenesisState"], keyof HostGenesisState>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const ControllerGenesisState: {
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState;
    fromPartial<I extends {
        activeChannels?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
        interchainAccounts?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] | undefined;
        ports?: string[] | undefined;
        params?: {
            controllerEnabled?: boolean | undefined;
        } | undefined;
    } & {
        activeChannels?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & Record<Exclude<keyof I["activeChannels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["activeChannels"], keyof {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[]>, never>) | undefined;
        interchainAccounts?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & Record<Exclude<keyof I["interchainAccounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["interchainAccounts"], keyof {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[]>, never>) | undefined;
        ports?: (string[] & string[] & Record<Exclude<keyof I["ports"], keyof string[]>, never>) | undefined;
        params?: ({
            controllerEnabled?: boolean | undefined;
        } & {
            controllerEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], "controllerEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ControllerGenesisState>, never>>(object: I): ControllerGenesisState;
};
export declare const HostGenesisState: {
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState;
    fromPartial<I extends {
        activeChannels?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
        interchainAccounts?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] | undefined;
        port?: string | undefined;
        params?: {
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } | undefined;
    } & {
        activeChannels?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & Record<Exclude<keyof I["activeChannels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["activeChannels"], keyof {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[]>, never>) | undefined;
        interchainAccounts?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & Record<Exclude<keyof I["interchainAccounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["interchainAccounts"], keyof {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[]>, never>) | undefined;
        port?: string | undefined;
        params?: ({
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } & {
            hostEnabled?: boolean | undefined;
            allowMessages?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowMessages"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params2>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof HostGenesisState>, never>>(object: I): HostGenesisState;
};
export declare const ActiveChannel: {
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel;
    fromPartial<I extends {
        connectionId?: string | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
    } & {
        connectionId?: string | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
    } & Record<Exclude<keyof I, keyof ActiveChannel>, never>>(object: I): ActiveChannel;
};
export declare const RegisteredInterchainAccount: {
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount;
    fromPartial<I extends {
        connectionId?: string | undefined;
        portId?: string | undefined;
        accountAddress?: string | undefined;
    } & {
        connectionId?: string | undefined;
        portId?: string | undefined;
        accountAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredInterchainAccount>, never>>(object: I): RegisteredInterchainAccount;
};
