import { type Address, type GetFunctionArgs, encodeFunctionData } from "viem";
import type { Plugin } from "./types";
import type { IMSCA } from "../builder";
import type {
  ISmartAccountProvider,
  SupportedTransports,
} from "@alchemy/aa-core";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6900PluginGen: This file is auto-generated by plugingen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MultiOwnerPlugin_ = {
  meta: {
    name: "Multi Owner Plugin",
    version: "1.0.0",
    addresses: {
      11155111: "0x56bC629F342821FBe91C5273880792dFECBE7920" as Address,
    },
  },
  accountMethods: (account: IMSCA<any, any>) => ({
    encodeUpdateOwnersData: ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "updateOwners"
    >) => {
      return encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "updateOwners",
        args,
      });
    },

    encodeOwnersData: () => {
      return encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "owners",
      });
    },

    readOwners: async () => {
      return account.rpcProvider.readContract({
        address: await account.getAddress(),
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "owners",
      });
    },

    encodeIsOwnerData: ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "isOwner"
    >) => {
      return encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "isOwner",
        args,
      });
    },

    readIsOwner: async ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "isOwner"
    >) => {
      return account.rpcProvider.readContract({
        address: await account.getAddress(),
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "isOwner",
        args,
      });
    },

    encodeEip712DomainData: () => {
      return encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "eip712Domain",
      });
    },

    readEip712Domain: async () => {
      return account.rpcProvider.readContract({
        address: await account.getAddress(),
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "eip712Domain",
      });
    },

    encodeIsValidSignatureData: ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "isValidSignature"
    >) => {
      return encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "isValidSignature",
        args,
      });
    },

    readIsValidSignature: async ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "isValidSignature"
    >) => {
      return account.rpcProvider.readContract({
        address: await account.getAddress(),
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "isValidSignature",
        args,
      });
    },
  }),
  providerMethods: <
    TTransport extends SupportedTransports,
    P extends ISmartAccountProvider<TTransport> & {
      account: IMSCA<TTransport>;
    }
  >(
    provider: P
  ) => ({
    updateOwners: ({
      args,
    }: GetFunctionArgs<
      typeof MultiOwnerPluginExecutionFunctionAbi,
      "updateOwners"
    >) => {
      const callData = encodeFunctionData({
        abi: MultiOwnerPluginExecutionFunctionAbi,
        functionName: "updateOwners",
        args,
      });

      return provider.sendUserOperation(callData);
    },
  }),
};

export const MultiOwnerPlugin: Plugin<
  ReturnType<(typeof MultiOwnerPlugin_)["accountMethods"]>,
  ReturnType<(typeof MultiOwnerPlugin_)["providerMethods"]>
> = MultiOwnerPlugin_;

export const MultiOwnerPluginExecutionFunctionAbi = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "ownersToAdd", internalType: "address[]", type: "address[]" },
      { name: "ownersToRemove", internalType: "address[]", type: "address[]" },
    ],
    name: "updateOwners",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owners",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "ownerToCheck", internalType: "address", type: "address" },
    ],
    name: "isOwner",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "digest", internalType: "bytes32", type: "bytes32" },
      { name: "signature", internalType: "bytes", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
] as const;
