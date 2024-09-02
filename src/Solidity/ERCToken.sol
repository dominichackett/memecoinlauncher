// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
/// @notice OFT is an ERC-20 token that extends the OFTCore contract.
contract Token is ERC20, Ownable {
    constructor(
        string memory _name,
        string memory _symbol,
        address _delegate
    ) ERC20(_name, _symbol) Ownable(_delegate) {
        _mint(_delegate, type(uint256).max);
    }
}