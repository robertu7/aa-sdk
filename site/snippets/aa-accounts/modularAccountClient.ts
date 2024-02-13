import { createMultiOwnerModularAccountClient } from "@alchemy/aa-accounts";
import { LocalAccountSigner, sepolia } from "@alchemy/aa-core";
import { http } from "viem";

export const smartAccountClient = createMultiOwnerModularAccountClient({
  transport: http("RPC_URL"),
  chain: sepolia,
  // or any other SmartAccountSigner
  owner: LocalAccountSigner.mnemonicToAccountSigner("YOUR_MNEMONIC"),
});
