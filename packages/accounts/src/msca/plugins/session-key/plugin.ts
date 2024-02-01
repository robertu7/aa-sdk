import {
  getContract,
  encodePacked,
  encodeAbiParameters,
  encodeFunctionData,
  type Address,
  type GetContractReturnType,
  type Transport,
  type PublicClient,
  type Client,
  type EncodeFunctionDataParameters,
  type Chain,
  type Hex,
} from 'viem'
import { type Plugin } from '../types.js'
import {
  AccountNotFoundError,
  isSmartAccountClient,
  IncompatibleClientError,
  type SmartContractAccount,
  type UserOperationOverrides,
  type GetAccountParameter,
  type SendUserOperationResult,
} from '@alchemy/aa-core'
import { MultiOwnerPlugin } from '../multi-owner/plugin.js'
import { installPlugin as installPlugin_ } from '../../plugin-manager/installPlugin.js'
import { type FunctionReference } from '../../account-loupe/types.js'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6900PluginGen: This file is auto-generated by plugingen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ExecutionActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = {
  executeWithSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'executeWithSessionKey'
      >,
      'args'
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>

  addSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'addSessionKey'
      >,
      'args'
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>

  removeSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'removeSessionKey'
      >,
      'args'
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>

  rotateSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'rotateSessionKey'
      >,
      'args'
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>

  updateKeyPermissions: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'updateKeyPermissions'
      >,
      'args'
    > & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>
}

type InstallArgs = [
  { type: 'address[]'; name: 'initialKeys' },
  { type: 'bytes32[]'; name: 'tags' },
  { type: 'bytes[][]'; name: 'initialPermissions' },
]

export type InstallSessionKeyPluginParams = {
  args: Parameters<typeof encodeAbiParameters<InstallArgs>>[1]
  pluginAddress?: Address
  dependencyOverrides?: FunctionReference[]
}

type ManagementActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = {
  installSessionKeyPlugin: (
    args: {
      overrides?: UserOperationOverrides
    } & InstallSessionKeyPluginParams &
      GetAccountParameter<TAccount>,
  ) => Promise<SendUserOperationResult>
}

type ReadAndEncodeActions = {
  encodeExecuteWithSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'executeWithSessionKey'
      >,
      'args'
    >,
  ) => Hex

  encodeAddSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'addSessionKey'
      >,
      'args'
    >,
  ) => Hex

  encodeRemoveSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'removeSessionKey'
      >,
      'args'
    >,
  ) => Hex

  encodeRotateSessionKey: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'rotateSessionKey'
      >,
      'args'
    >,
  ) => Hex

  encodeUpdateKeyPermissions: (
    args: Pick<
      EncodeFunctionDataParameters<
        typeof SessionKeyPluginExecutionFunctionAbi,
        'updateKeyPermissions'
      >,
      'args'
    >,
  ) => Hex
}

export type SessionKeyPluginActions<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
> = ExecutionActions<TAccount> &
  ManagementActions<TAccount> &
  ReadAndEncodeActions

const addresses = {
  11155111: '0x70a64501Fd1398b0A236b69006936009d31C1520' as Address,
} as Record<number, Address>

export const SessionKeyPlugin: Plugin<typeof SessionKeyPluginAbi> = {
  meta: {
    name: 'Session Key Plugin',
    version: '1.0.0',
    addresses,
  },
  getContract: <C extends Client>(
    client: C,
    address?: Address,
  ): GetContractReturnType<
    typeof SessionKeyPluginAbi,
    PublicClient,
    Address
  > => {
    if (!client.chain) throw new Error('Missing chain on client')

    return getContract({
      address: address || addresses[client.chain.id],
      abi: SessionKeyPluginAbi,
      client: client,
    })
  },
}

export const sessionKeyPluginActions: <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined,
>(
  client: Client<TTransport, TChain, TAccount>,
) => SessionKeyPluginActions<TAccount> = (client) => ({
  executeWithSessionKey({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError()
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        'SmartAccountClient',
        'executeWithSessionKey',
      )
    }

    const uo = encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'executeWithSessionKey',
      args,
    })

    return client.sendUserOperation({ uo, overrides, account })
  },
  addSessionKey({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError()
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError('SmartAccountClient', 'addSessionKey')
    }

    const uo = encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'addSessionKey',
      args,
    })

    return client.sendUserOperation({ uo, overrides, account })
  },
  removeSessionKey({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError()
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        'SmartAccountClient',
        'removeSessionKey',
      )
    }

    const uo = encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'removeSessionKey',
      args,
    })

    return client.sendUserOperation({ uo, overrides, account })
  },
  rotateSessionKey({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError()
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        'SmartAccountClient',
        'rotateSessionKey',
      )
    }

    const uo = encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'rotateSessionKey',
      args,
    })

    return client.sendUserOperation({ uo, overrides, account })
  },
  updateKeyPermissions({ args, overrides, account = client.account }) {
    if (!account) {
      throw new AccountNotFoundError()
    }
    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        'SmartAccountClient',
        'updateKeyPermissions',
      )
    }

    const uo = encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'updateKeyPermissions',
      args,
    })

    return client.sendUserOperation({ uo, overrides, account })
  },
  installSessionKeyPlugin({ account = client.account, overrides, ...params }) {
    if (!account) {
      throw new AccountNotFoundError()
    }

    if (!isSmartAccountClient(client)) {
      throw new IncompatibleClientError(
        'SmartAccountClient',
        'installSessionKeyPlugin',
      )
    }

    const chain = client.chain
    if (!chain) {
      throw new Error('Chain is required')
    }

    const dependencies = params.dependencyOverrides ?? [
      (() => {
        const pluginAddress = MultiOwnerPlugin.meta.addresses[chain.id]
        if (!pluginAddress) {
          throw new Error(
            'missing MultiOwnerPlugin address for chain ' + chain.name,
          )
        }

        return encodePacked(['address', 'uint8'], [pluginAddress, 0x0])
      })(),

      (() => {
        const pluginAddress = MultiOwnerPlugin.meta.addresses[chain.id]
        if (!pluginAddress) {
          throw new Error(
            'missing MultiOwnerPlugin address for chain ' + chain.name,
          )
        }

        return encodePacked(['address', 'uint8'], [pluginAddress, 0x1])
      })(),
    ]
    const pluginAddress =
      params.pluginAddress ??
      (SessionKeyPlugin.meta.addresses[chain.id] as Address | undefined)

    if (!pluginAddress) {
      throw new Error(
        'missing SessionKeyPlugin address for chain ' + chain.name,
      )
    }

    return installPlugin_(client, {
      pluginAddress,
      pluginInitData: encodeAbiParameters(
        [
          { type: 'address[]', name: 'initialKeys' },
          { type: 'bytes32[]', name: 'tags' },
          { type: 'bytes[][]', name: 'initialPermissions' },
        ],
        params.args,
      ),
      dependencies,
      overrides,
      account,
    })
  },
  encodeExecuteWithSessionKey({ args }) {
    return encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'executeWithSessionKey',
      args,
    })
  },
  encodeAddSessionKey({ args }) {
    return encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'addSessionKey',
      args,
    })
  },
  encodeRemoveSessionKey({ args }) {
    return encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'removeSessionKey',
      args,
    })
  },
  encodeRotateSessionKey({ args }) {
    return encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'rotateSessionKey',
      args,
    })
  },
  encodeUpdateKeyPermissions({ args }) {
    return encodeFunctionData({
      abi: SessionKeyPluginExecutionFunctionAbi,
      functionName: 'updateKeyPermissions',
      args,
    })
  },
})

export const SessionKeyPluginExecutionFunctionAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'executeWithSessionKey',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'tag', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permissionUpdates', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'oldSessionKey', internalType: 'address', type: 'address' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newSessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'rotateSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'updates', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'updateKeyPermissions',
    outputs: [],
  },
] as const

export const SessionKeyPluginAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'tag', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permissionUpdates', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'executeWithSessionKey',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'findPredecessor',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getAccessControlEntry',
    outputs: [
      { name: 'isOnList', internalType: 'bool', type: 'bool' },
      { name: 'checkSelectors', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'getAccessControlType',
    outputs: [
      {
        name: '',
        internalType: 'enum ISessionKeyPlugin.ContractAccessControlType',
        type: 'uint8',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'getERC20SpendLimitInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct ISessionKeyPlugin.SpendLimitInfo',
        type: 'tuple',
        components: [
          { name: 'hasLimit', internalType: 'bool', type: 'bool' },
          { name: 'limit', internalType: 'uint256', type: 'uint256' },
          { name: 'limitUsed', internalType: 'uint256', type: 'uint256' },
          { name: 'refreshInterval', internalType: 'uint48', type: 'uint48' },
          { name: 'lastUsedTime', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'getGasSpendLimit',
    outputs: [
      {
        name: 'info',
        internalType: 'struct ISessionKeyPlugin.SpendLimitInfo',
        type: 'tuple',
        components: [
          { name: 'hasLimit', internalType: 'bool', type: 'bool' },
          { name: 'limit', internalType: 'uint256', type: 'uint256' },
          { name: 'limitUsed', internalType: 'uint256', type: 'uint256' },
          { name: 'refreshInterval', internalType: 'uint48', type: 'uint48' },
          { name: 'lastUsedTime', internalType: 'uint48', type: 'uint48' },
        ],
      },
      { name: 'shouldReset', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'getKeyTimeRange',
    outputs: [
      { name: 'validAfter', internalType: 'uint48', type: 'uint48' },
      { name: 'validUntil', internalType: 'uint48', type: 'uint48' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'getNativeTokenSpendLimitInfo',
    outputs: [
      {
        name: 'info',
        internalType: 'struct ISessionKeyPlugin.SpendLimitInfo',
        type: 'tuple',
        components: [
          { name: 'hasLimit', internalType: 'bool', type: 'bool' },
          { name: 'limit', internalType: 'uint256', type: 'uint256' },
          { name: 'limitUsed', internalType: 'uint256', type: 'uint256' },
          { name: 'refreshInterval', internalType: 'uint48', type: 'uint48' },
          { name: 'lastUsedTime', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'getRequiredPaymaster',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'selector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'isSelectorOnAccessControlList',
    outputs: [{ name: 'isOnList', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'isSessionKeyOf',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'onInstall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'onUninstall',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'pluginManifest',
    outputs: [
      {
        name: '',
        internalType: 'struct PluginManifest',
        type: 'tuple',
        components: [
          { name: 'interfaceIds', internalType: 'bytes4[]', type: 'bytes4[]' },
          {
            name: 'dependencyInterfaceIds',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
          {
            name: 'executionFunctions',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
          {
            name: 'permittedExecutionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
          {
            name: 'permitAnyExternalAddress',
            internalType: 'bool',
            type: 'bool',
          },
          { name: 'canSpendNativeToken', internalType: 'bool', type: 'bool' },
          {
            name: 'permittedExternalCalls',
            internalType: 'struct ManifestExternalCallPermission[]',
            type: 'tuple[]',
            components: [
              {
                name: 'externalAddress',
                internalType: 'address',
                type: 'address',
              },
              { name: 'permitAnySelector', internalType: 'bool', type: 'bool' },
              { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
            ],
          },
          {
            name: 'userOpValidationFunctions',
            internalType: 'struct ManifestAssociatedFunction[]',
            type: 'tuple[]',
            components: [
              {
                name: 'executionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'associatedFunction',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'runtimeValidationFunctions',
            internalType: 'struct ManifestAssociatedFunction[]',
            type: 'tuple[]',
            components: [
              {
                name: 'executionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'associatedFunction',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'preUserOpValidationHooks',
            internalType: 'struct ManifestAssociatedFunction[]',
            type: 'tuple[]',
            components: [
              {
                name: 'executionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'associatedFunction',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'preRuntimeValidationHooks',
            internalType: 'struct ManifestAssociatedFunction[]',
            type: 'tuple[]',
            components: [
              {
                name: 'executionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'associatedFunction',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'executionHooks',
            internalType: 'struct ManifestExecutionHook[]',
            type: 'tuple[]',
            components: [
              {
                name: 'executionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'preExecHook',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
              {
                name: 'postExecHook',
                internalType: 'struct ManifestFunction',
                type: 'tuple',
                components: [
                  {
                    name: 'functionType',
                    internalType: 'enum ManifestAssociatedFunctionType',
                    type: 'uint8',
                  },
                  { name: 'functionId', internalType: 'uint8', type: 'uint8' },
                  {
                    name: 'dependencyIndex',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'pluginMetadata',
    outputs: [
      {
        name: '',
        internalType: 'struct PluginMetadata',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'version', internalType: 'string', type: 'string' },
          { name: 'author', internalType: 'string', type: 'string' },
          {
            name: 'permissionDescriptors',
            internalType: 'struct SelectorPermission[]',
            type: 'tuple[]',
            components: [
              {
                name: 'functionSelector',
                internalType: 'bytes4',
                type: 'bytes4',
              },
              {
                name: 'permissionDescription',
                internalType: 'string',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      { name: 'preExecHookData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'postExecutionHook',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'preExecutionHook',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'preRuntimeValidationHook',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      {
        name: 'userOp',
        internalType: 'struct UserOperation',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'initCode', internalType: 'bytes', type: 'bytes' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
          { name: 'callGasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'verificationGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preVerificationGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymasterAndData', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'userOpHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'preUserOpValidationHook',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'resetSessionKeyGasLimitTimestamp',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'oldSessionKey', internalType: 'address', type: 'address' },
      { name: 'predecessor', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newSessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'rotateSessionKey',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'runtimeValidationFunction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'sessionKeysOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'updates', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'updateKeyPermissions',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
      {
        name: 'userOp',
        internalType: 'struct UserOperation',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'initCode', internalType: 'bytes', type: 'bytes' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
          { name: 'callGasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'verificationGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preVerificationGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymasterAndData', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'userOpHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'userOpValidationFunction',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionKey',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'updates',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
    ],
    name: 'PermissionsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionKey',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'tag', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'SessionKeyAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionKey',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SessionKeyRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldSessionKey',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newSessionKey',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SessionKeyRotated',
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'ERC20SpendLimitExceeded',
  },
  { type: 'error', inputs: [], name: 'InvalidAction' },
  {
    type: 'error',
    inputs: [
      { name: 'updateSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'InvalidPermissionsUpdate',
  },
  {
    type: 'error',
    inputs: [{ name: 'sessionKey', internalType: 'address', type: 'address' }],
    name: 'InvalidSessionKey',
  },
  {
    type: 'error',
    inputs: [{ name: 'sessionKey', internalType: 'address', type: 'address' }],
    name: 'InvalidSignature',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'InvalidToken',
  },
  { type: 'error', inputs: [], name: 'LengthMismatch' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'sessionKey', internalType: 'address', type: 'address' },
    ],
    name: 'NativeTokenSpendLimitExceeded',
  },
  {
    type: 'error',
    inputs: [{ name: 'caller', internalType: 'address', type: 'address' }],
    name: 'NotContractCaller',
  },
  {
    type: 'error',
    inputs: [
      { name: 'selector', internalType: 'bytes4', type: 'bytes4' },
      { name: 'functionId', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'NotImplemented',
  },
  { type: 'error', inputs: [], name: 'NotInitialized' },
  {
    type: 'error',
    inputs: [{ name: 'sessionKey', internalType: 'address', type: 'address' }],
    name: 'SessionKeyNotFound',
  },
] as const
