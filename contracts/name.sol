//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.15;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

interface IVerifier {
    function verifyProof(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[3] memory input
    ) external view returns (bool);
}

interface IOrderVerifier {
    function verifyProof(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) external view returns (bool);
}

interface ISettleVerifier {
    function verifyProof(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[4] memory input
    ) external view returns (bool);
}

contract name {
    address public WETHAddr;
    address public DAIAddr;
    address public matcherAddr;
    address public depositVerifierAddr;
    address public withdrawVerifierAddr;
    address public orderVerifierAddr;
    address public settleVerifierAddr;
    address public cancelVerifierAddr;
    uint[] public zArr;
    uint[] public nArr;
    uint[] public oArr;
    uint[] public mArr; 
    uint[] public cArr; 
    uint[] public onArr;
    uint public settlementPrice;

    constructor(address _WETHAddr, address _DAIAddr, address _matcherAddr, address _depositVerifierAddr, address _withdrawVerifierAddr, address _orderVerifierAddr, address _settleVerifierAddr, address _cancelVerifierAddr) {
        WETHAddr = _WETHAddr;
        DAIAddr = _DAIAddr;
        matcherAddr = _matcherAddr;
        depositVerifierAddr = _depositVerifierAddr;
        withdrawVerifierAddr = _withdrawVerifierAddr;
        orderVerifierAddr = _orderVerifierAddr;
        settleVerifierAddr = _settleVerifierAddr;
        cancelVerifierAddr = _cancelVerifierAddr;
    }
}