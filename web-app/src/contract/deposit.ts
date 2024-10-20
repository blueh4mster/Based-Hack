import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { veilTradeABI } from "./../abi/veilTrade";
import {
  DEFAULT_CHAIN_ID,
  VEILTRADE_CONTRACT_ADDRESS,
} from "../constants/constants";

interface depositParam {
  a: string[] | undefined;
  b: string[][] | undefined;
  c: string[] | undefined;
  input: string[] | undefined;
}
export const useContractDeposit = ({ a, b, c, input }: depositParam) => {
  const { address } = useAccount();
  // const {
  //   isLoading: prepareLoading,
  //   status: prepareStatus,
  //   fetchStatus: prepareFetchStatus,
  //   config,
  // } = usePrepareContractWrite({
  //   account: address,
  //   chainId: DEFAULT_CHAIN_ID,
  //   address: VEILTRADE_CONTRACT_ADDRESS,
  //   abi: veilTradeABI,
  //   functionName: "deposit",
  //   args: [a, b, c, input],
  //   enabled: !!a && !!b && !!c && !!input,
  // });
  const { config } = usePrepareContractWrite({
    account: address,
    chainId: DEFAULT_CHAIN_ID,
    functionName: "approve",
    address: VEILTRADE_CONTRACT_ADDRESS,
    abi: veilTradeABI,
    args: [
      VEILTRADE_CONTRACT_ADDRESS,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    ],
    enabled: true,
  });

  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, status, isSuccess, fetchStatus } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return {
    isLoading:
      prepareLoading ||
      prepareFetchStatus === "fetching" ||
      prepareStatus === "loading" ||
      isLoading ||
      fetchStatus === "fetching" ||
      status === "loading",
    isSuccess,
    data,
    writeAsync,
  };
};
