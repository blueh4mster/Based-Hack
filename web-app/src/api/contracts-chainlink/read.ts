import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { formatEther } from "viem";

import { aggregatorV3InterfaceABI } from "../../abi/chainlink";
import { publicClient } from "../../config/provider";
import {
  CONTRACT_ADDRESS,
  CHAINLINK_DAI_USD,
  CHAINLINK_ETH_USD,
} from "../../constants/constants";

import { ReadLatestRoundDataEthDaiResponse } from "./read-interfaces";

const readLatestRoundDataEthDai = () => {
  const dai_usd = publicClient.readContract({
    address: CHAINLINK_DAI_USD,
    abi: aggregatorV3InterfaceABI,
    functionName: "latestRoundData",
  });
  console.log(dai_usd);

  const eth_usd = publicClient.readContract({
    address: CHAINLINK_ETH_USD,
    abi: aggregatorV3InterfaceABI,
    functionName: "latestRoundData",
  });
  console.log(eth_usd);
  return dai_usd;
};

export const useReadLatestRoundDataEthDai = (
  options?: UseQueryOptions<
    bigint[],
    unknown,
    ReadLatestRoundDataEthDaiResponse
  >
) =>
  useQuery<bigint[], unknown, ReadLatestRoundDataEthDaiResponse>(
    ["contract", "read", "latest-round-data-eth-dai"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => readLatestRoundDataEthDai() as any,
    {
      ...options,
      select: (data) => {
        return {
          ethDai: 1 / Number(formatEther(data[1])),
          daiEth: Number(formatEther(data[1])),
          startedAt: new Date(Number(data[2]) * 1000),
          updatedAt: new Date(Number(data[3]) * 1000),
        };
      },
    }
  );
