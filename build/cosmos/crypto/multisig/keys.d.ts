import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crypto.multisig";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
    threshold: number;
    publicKeys: Any[];
}
export declare const LegacyAminoPubKey: {
    encode(message: LegacyAminoPubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAminoPubKey;
    fromPartial<I extends {
        threshold?: number | undefined;
        publicKeys?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        threshold?: number | undefined;
        publicKeys?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["publicKeys"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["publicKeys"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LegacyAminoPubKey>, never>>(object: I): LegacyAminoPubKey;
};
