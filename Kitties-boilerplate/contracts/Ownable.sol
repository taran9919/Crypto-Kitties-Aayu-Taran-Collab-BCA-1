// SPDX-License-Identifier: MIT
pragma solidity ^0.5.12;
contract Ownable{
    address internal owner;
    modifier onlyOwner{
        require(msg.sender==owner);
        _;//run the function
    }
    constructor() public{
        owner=msg.sender;
    }
}