pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";

template Withdraw() {
  signal input salt;
  signal input amount;
  signal input asset;

  signal output n;

  component poseidon = Poseidon(3);
  poseidon.inputs[0] <-- salt + 1;
  poseidon.inputs[1] <-- amount;
  poseidon.inputs[2] <-- asset;

  n <-- poseidon.out;
}

component main {public [amount, asset]} = Withdraw();