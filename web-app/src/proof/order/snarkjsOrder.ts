import { exportCallDataGroth16 } from "../snarkjsProof";

export async function orderCalldata(
  salt: string,
  amount: string,
  asset: string,
  price: string
) {
  const input = {
    salt: salt,
    amount: amount,
    asset: asset,
    price: price,
  };

  try {
    const dataResult: {
      a: string[];
      b: string[][];
      c: string[];
      Input: string[];
    } = await exportCallDataGroth16(
      input,
      "/proof/order.wasm",
      "/proof/order_final.zkey"
    );

    return dataResult;
  } catch (error) {
    console.log(error);
  }

  return null;
}
