export const CHAIN_ID = {
  ETH: 1,
  GOERLI: 5,
  BASE_SEPOLIA: 84532,
};
export const DEFAULT_CHAIN_ID = CHAIN_ID.BASE_SEPOLIA; // for testnet

// wallet connect project id
export const WALLETCONNECT_PROJECT_ID = "1ae21fc432cc940cbf1d2aa515ceb794";
export const CHAINLINK_ETH_USD = "0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1"; // on base sepolia
export const CHAINLINK_DAI_USD = "0xd1092a65338d049db68d7be6bd89d17a0929945e"; // on base sepolia
export const CONTRACT_ADDRESS: Record<string, `0x${string}`> = {
  CHAINLINK_ETH_DAI: "0x773616e4d11a78f511299002da57a0a94577f1f4",
};

export const API_URL = "http://localhost:8080";
// contract address for `veilTrade.sol`
export const VEILTRADE_CONTRACT_ADDRESS =
  "0xCFF2D66B5a3315993466a46ea8975A0366d14433"; // example addresses , not meant for the final app
export const DAI = "0x7D90bB8638EED8D8D7624643927FbC9984750360"; // DAI on base sepolia
export const WETH = "0x999B45BB215209e567FaF486515af43b8353e393"; // WETH on base sepolia
export const MATCHER = "0xD5D56F27A592F2E9A008647eeAa390cc353dfc36";

export const LOCALSTORAGE_KEYS = {
  BALANCES: "BALANCES",
  ORDERS: "ORDERS",
};
