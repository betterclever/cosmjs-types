/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  Params,
  ValidatorOutstandingRewards,
  ValidatorAccumulatedCommission,
  ValidatorSlashEvent,
  DelegationDelegatorReward,
} from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, Long, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

export interface QueryValidatorOutstandingRewardsResponse {
  rewards?: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */

export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */

export interface QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission?: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */

export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */

  startingHeight: Long;
  /** starting_height defines the optional ending height to query the slashes. */

  endingHeight: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */

export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */

export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */

  validatorAddress: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */

export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */

export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */

export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */

  total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */

export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */

export interface QueryCommunityPoolRequest {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */

export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validatorAddress: "",
  };
}

export const QueryValidatorOutstandingRewardsRequest = {
  encode(
    message: QueryValidatorOutstandingRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsRequest>, I>>(
    object: I,
  ): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: undefined,
  };
}

export const QueryValidatorOutstandingRewardsResponse = {
  encode(
    message: QueryValidatorOutstandingRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsResponse>, I>>(
    object: I,
  ): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards =
      object.rewards !== undefined && object.rewards !== null
        ? ValidatorOutstandingRewards.fromPartial(object.rewards)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validatorAddress: "",
  };
}

export const QueryValidatorCommissionRequest = {
  encode(message: QueryValidatorCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionRequest>, I>>(
    object: I,
  ): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: undefined,
  };
}

export const QueryValidatorCommissionResponse = {
  encode(message: QueryValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionResponse>, I>>(
    object: I,
  ): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? ValidatorAccumulatedCommission.fromPartial(object.commission)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validatorAddress: "",
    startingHeight: Long.UZERO,
    endingHeight: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryValidatorSlashesRequest = {
  encode(message: QueryValidatorSlashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (!message.startingHeight.isZero()) {
      writer.uint32(16).uint64(message.startingHeight);
    }

    if (!message.endingHeight.isZero()) {
      writer.uint32(24).uint64(message.endingHeight);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.startingHeight = reader.uint64() as Long;
          break;

        case 3:
          message.endingHeight = reader.uint64() as Long;
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesRequest>, I>>(
    object: I,
  ): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingHeight =
      object.startingHeight !== undefined && object.startingHeight !== null
        ? Long.fromValue(object.startingHeight)
        : Long.UZERO;
    message.endingHeight =
      object.endingHeight !== undefined && object.endingHeight !== null
        ? Long.fromValue(object.endingHeight)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined,
  };
}

export const QueryValidatorSlashesResponse = {
  encode(message: QueryValidatorSlashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesResponse>, I>>(
    object: I,
  ): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}

export const QueryDelegationRewardsRequest = {
  encode(message: QueryDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(
    object: I,
  ): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: [],
  };
}

export const QueryDelegationRewardsResponse = {
  encode(message: QueryDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(
    object: I,
  ): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegatorAddress: "",
  };
}

export const QueryDelegationTotalRewardsRequest = {
  encode(message: QueryDelegationTotalRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsRequest>, I>>(
    object: I,
  ): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: [],
  };
}

export const QueryDelegationTotalRewardsResponse = {
  encode(message: QueryDelegationTotalRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;

        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsResponse>, I>>(
    object: I,
  ): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddress: "",
  };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
  };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: "",
  };
}

export const QueryDelegatorWithdrawAddressRequest = {
  encode(
    message: QueryDelegatorWithdrawAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>>(
    object: I,
  ): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: "",
  };
}

export const QueryDelegatorWithdrawAddressResponse = {
  encode(
    message: QueryDelegatorWithdrawAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>>(
    object: I,
  ): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}

export const QueryCommunityPoolRequest = {
  encode(_: QueryCommunityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(_: I): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: [],
  };
}

export const QueryCommunityPoolResponse = {
  encode(message: QueryCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(
    object: I,
  ): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service for distribution module. */

export interface Query {
  /** Params queries params of the distribution module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */

  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */

  CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Query",
      "ValidatorOutstandingRewards",
      data,
    );
    return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data) => QueryValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data) => QueryValidatorSlashesResponse.decode(new _m0.Reader(data)));
  }

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data) => QueryDelegationRewardsResponse.decode(new _m0.Reader(data)));
  }

  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  CommunityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}
