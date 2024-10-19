import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { main_appABI } from "./../abi/main_app";
import { DEFAULT_CHAIN_ID,  MAIN_APP_CONTRACT_ADDRESS } from "~/constants";

interface orderParam {
  a: string[] | undefined;
  b: string[][] | undefined;
  c: string[] | undefined;
  input: string[] | undefined;
}
export const useContractOrder = ({ a, b, c, input }: orderParam) => {
  const { address } = useAccount();

  const {
    isLoading: prepareLoading,
    status: prepareStatus,
    fetchStatus: prepareFetchStatus,
    config,
  } = usePrepareContractWrite({
    chainId: DEFAULT_CHAIN_ID,
    address:  MAIN_APP_CONTRACT_ADDRESS,
    abi: main_appABI,
    functionName: "order",
    account: address,
    args: [a, b, c, input],
    enabled: !!a && !!b && !!c && !!input,
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
