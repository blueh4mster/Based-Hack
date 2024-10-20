import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";

// import { coinbaseWallet } from "wagmi/connectors";

import { WALLETCONNECT_PROJECT_ID } from "../constants/constants";

export const chains = [baseSepolia]; // for test
export const projectId = WALLETCONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  // connectors: coinbaseWallet({
  //   appName: "Create Wagmi",
  //   preference: "smartWalletOnly",
  // }),
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);
