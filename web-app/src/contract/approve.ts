import { useMemo, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { TOKEN_ABI } from "../abi/token";
import {
  DAI,
  DEFAULT_CHAIN_ID,
  VEILTRADE_CONTRACT_ADDRESS,
} from "../constants/constants";

export const useTokenApprove = () => {
  const [allowance, setAllowance] = useState(false);

  const { isConnected, address: walletAddress } = useAccount();
  const enabled = useMemo(() => !!walletAddress, [walletAddress]);

  useContractRead({
    address: DAI,
    abi: TOKEN_ABI,
    functionName: "allowance",
    args: [walletAddress, VEILTRADE_CONTRACT_ADDRESS],
    enabled,
    onSuccess: (data) => {
      const bigInt = BigInt(data?.toString() ?? "0");

      setAllowance(bigInt > 0);
    },
  });

  const { config } = usePrepareContractWrite({
    account: walletAddress,
    chainId: DEFAULT_CHAIN_ID,
    address: DAI,
    abi: TOKEN_ABI,
    functionName: "approve",
    args: [
      VEILTRADE_CONTRACT_ADDRESS,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    ],
    enabled: true,
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return {
    allowance: isConnected && allowance,
    isLoading: isLoading || isFetching,
    isSuccess,
    data,
    writeAsync,
  };
};
