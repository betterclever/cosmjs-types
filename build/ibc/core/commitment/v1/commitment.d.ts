import { CommitmentProof } from "../../../../proofs";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePrefix;
    fromPartial<I extends {
        keyPrefix?: Uint8Array | undefined;
    } & {
        keyPrefix?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "keyPrefix">, never>>(object: I): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath;
    fromPartial<I extends {
        keyPath?: string[] | undefined;
    } & {
        keyPath?: (string[] & string[] & Record<Exclude<keyof I["keyPath"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "keyPath">, never>>(object: I): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof;
    fromPartial<I extends {
        proofs?: {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        proofs?: ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            exist?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: ({
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                path?: ({
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["exist"]["path"], keyof {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["exist"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
            nonexist?: ({
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                key?: Uint8Array | undefined;
                left?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"], keyof {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
                right?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"], keyof {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["nonexist"], keyof import("../../../../proofs").NonExistenceProof>, never>) | undefined;
            batch?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                        path?: ({
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] & ({
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../../../../proofs").ExistenceProof>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../../../../proofs").NonExistenceProof>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number], keyof import("../../../../proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["batch"], "entries">, never>) | undefined;
            compressed?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                        path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../../../../proofs").CompressedExistenceProof>, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../../../../proofs").CompressedExistenceProof>, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../proofs").LeafOp>, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../../../../proofs").CompressedExistenceProof>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../../../../proofs").CompressedNonExistenceProof>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number], keyof import("../../../../proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                lookupInners?: ({
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../../../../proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"], keyof {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["compressed"], keyof import("../../../../proofs").CompressedBatchProof>, never>) | undefined;
        } & Record<Exclude<keyof I["proofs"][number], keyof CommitmentProof>, never>)[] & Record<Exclude<keyof I["proofs"], keyof {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prehashKey?: import("../../../../proofs").HashOp | undefined;
                    prehashValue?: import("../../../../proofs").HashOp | undefined;
                    length?: import("../../../../proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prehashKey?: import("../../../../proofs").HashOp | undefined;
                        prehashValue?: import("../../../../proofs").HashOp | undefined;
                        length?: import("../../../../proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../proofs").HashOp | undefined;
                            prehashKey?: import("../../../../proofs").HashOp | undefined;
                            prehashValue?: import("../../../../proofs").HashOp | undefined;
                            length?: import("../../../../proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../proofs").HashOp | undefined;
                                prehashKey?: import("../../../../proofs").HashOp | undefined;
                                prehashValue?: import("../../../../proofs").HashOp | undefined;
                                length?: import("../../../../proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "proofs">, never>>(object: I): MerkleProof;
};
