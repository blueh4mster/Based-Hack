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

const readLatestRoundDataEthDai = async () => {
  const dai_usd: bigint = await publicClient.readContract({
    address: CHAINLINK_DAI_USD,
    abi: aggregatorV3InterfaceABI,
    functionName: "latestRoundData",
  });
  // .then((res) => {
  //   formatEther(res);
  // });
  // console.log(typeof dai_usd);
  console.log(Number(formatEther(dai_usd[1])));

  const eth_usd = await publicClient.readContract({
    address: CHAINLINK_ETH_USD,
    abi: aggregatorV3InterfaceABI,
    functionName: "latestRoundData",
  });
  console.log(Number(formatEther(eth_usd[1])));
  return [
    1,
    Number(formatEther(dai_usd[1])) / Number(formatEther(eth_usd[1])),
    eth_usd[2],
    eth_usd[3],
  ];
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
          ethDai: 1 / data[1],
          daiEth: data[1],
          startedAt: new Date(Number(data[2]) * 1000),
          updatedAt: new Date(Number(data[3]) * 1000),
        };
      },
    }
  );
