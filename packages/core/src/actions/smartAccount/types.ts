<<<<<<< Updated upstream
import type { Hex, RpcTransactionRequest } from "viem";
=======
import type {
  Chain,
  DeriveChain,
  FormattedTransactionRequest,
  Hex,
  RpcTransactionRequest,
} from "viem";
import type { UnionOmit } from "viem/_types/types/utils";
>>>>>>> Stashed changes
import type {
  GetAccountParameter,
  SmartContractAccount,
} from "../../account/smartContractAccount";
import type { UpgradeToData } from "../../client/types";
import type {
  BatchUserOperationCallData,
  UserOperationCallData,
  UserOperationOverrides,
  UserOperationRequest,
} from "../../types";

export type UpgradeAccountParams<
  TAccount extends SmartContractAccount | undefined
> = {
  upgradeTo: UpgradeToData;
  overrides?: UserOperationOverrides;
  waitForTx?: boolean;
} & GetAccountParameter<TAccount>;

export type SendUserOperationParameters<
  TAccount extends SmartContractAccount | undefined
> = {
  uo: UserOperationCallData | BatchUserOperationCallData;
  overrides?: UserOperationOverrides;
} & GetAccountParameter<TAccount>;

<<<<<<< Updated upstream
=======
export type SignUserOperationParameters<
  TAccount extends SmartContractAccount | undefined
> = {
  uoStruct: UserOperationStruct;
} & GetAccountParameter<TAccount>;

export type SendRawUserOperationParameters<
  TAccount extends SmartContractAccount | undefined
> = {
  request: UserOperationRequest;
} & GetAccountParameter<TAccount>;

export type SendUserOperationFromTxParameters<
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
  TChainOverride extends Chain | undefined = Chain | undefined,
  ///
  derivedChain extends Chain | undefined = DeriveChain<TChain, TChainOverride>
> = {
  request:
    | UnionOmit<FormattedTransactionRequest<derivedChain>, "from">
    | UnionOmit<FormattedTransactionRequest<derivedChain>, "from">[];
  overrides?: UserOperationOverrides;
} & GetAccountParameter<TAccount>;

/** @deprecated use SendUserOperationFromTxParameters instead */
>>>>>>> Stashed changes
export type SendTransactionsParameters<
  TAccount extends SmartContractAccount | undefined
> = {
  requests: RpcTransactionRequest[];
  overrides?: UserOperationOverrides;
} & GetAccountParameter<TAccount>;

export type DropAndReplaceUserOperationParameters<
  TAccount extends SmartContractAccount | undefined
> = {
  uoToDrop: UserOperationRequest;
  overrides?: UserOperationOverrides;
} & GetAccountParameter<TAccount>;

export type WaitForUserOperationTxParameters = {
  hash: Hex;
};

export type BuildUserOperationFromTransactionsResult = {
  batch: BatchUserOperationCallData;
  overrides: UserOperationOverrides;
};
