//SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./Token.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
interface IOwnable {
    function owner() external view returns (address);
}

contract TokenLauncher is Ownable {

    address public _lzEndpoint;
    constructor (address lzEndpoint) Ownable(msg.sender){
       _lzEndpoint = lzEndpoint;
    }

    event TokenCreated(address user,address token,string  symbol,string  name,string  description,string  image);
    event TokenDeployed(address user,address token,address peer,uint256 chain);
    function launchToken(string calldata symbol,string calldata name,string calldata description,string calldata image ) public {
         Token deployedToken = new Token(name,symbol,_lzEndpoint,msg.sender);
          emit TokenCreated(msg.sender,address(deployedToken), symbol,  name, description,image);

    }

    function registerCrossChain(address token,address peer,uint256 chain) public {
      IOwnable _token =  IOwnable(token);  
      require(_token.owner() == msg.sender,"Unauthorized. You must be token owner");
      emit TokenDeployed(msg.sender, token,peer, chain);

    }

    function setEndpoint(address endpoint) public onlyOwner {
        _lzEndpoint = endpoint;
    }
}
