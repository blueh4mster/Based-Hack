export const CHAIN_ID = {
  ETH: 1,
  GOERLI: 5,
  BASE_SEPOLIA: 84532,
};
export const DEFAULT_CHAIN_ID = CHAIN_ID.BASE_SEPOLIA; // for testnet

// wallet connect project id
export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;

export const CONTRACT_ADDRESS: Record<string, `0x${string}`> = {
  CHAINLINK_ETH_DAI: "0x773616e4d11a78f511299002da57a0a94577f1f4",
};

export const API_URL = "http://localhost:8080";
// contract address for `veilTrade.sol`
export const VEILTRADE_CONTRACT_ADDRESS =
  "0x5d64848D57fa2263827b07E7caC38FC9b1E0B19E"; // exmaple addresses , not meant for the final app
export const DAI = "0x5d64848D57fa2263827b07E7caC38FC9b1E0B19E";
export const WETH = "0x83A0C51E2D292b46C38126b6BebF570F49a41FE9";
export const MATCHER = "0xD5D56F27A592F2E9A008647eeAa390cc353dfc36";

export const LOCALSTORAGE_KEYS = {
  BALANCES: "BALANCES",
  ORDERS: "ORDERS",
};
