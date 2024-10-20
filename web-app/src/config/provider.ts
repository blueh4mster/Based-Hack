// getLatestPrice.ts
import { createPublicClient, http } from "viem";
import { mainnet, baseSepolia } from "viem/chains";

export const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http("https://cloudflare-eth.com"),
});
