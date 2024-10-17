pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";

template Order() {
  signal input salt;
  signal input amount;
  signal input asset;
  signal input price;
  signal output no[2]; // no[0] = n, no[1] = o

  component poseidonN = Poseidon(3);
  poseidonN.inputs[0] <-- salt + 1;
  poseidonN.inputs[1] <-- amount;
  poseidonN.inputs[2] <-- asset;

  no[0] <-- poseidonN.out;

  component poseidonO = Poseidon(4);
  poseidonO.inputs[0] <-- salt;
  poseidonO.inputs[1] <-- amount;
  poseidonO.inputs[2] <-- asset;
  poseidonO.inputs[3] <-- price;

  no[1] <-- poseidonO.out;
}

component main = Order();