// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/oft-evm/contracts/OFT.sol";
import { ISPHook } from "@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { ISP } from "@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "@ethsign/sign-protocol-evm/src/models/Attestation.sol";

// @dev This contract implements the actual schema hook.
contract Vault is ISPHook ,Ownable {
    
    struct TokenVault{
        address token;
        address owner;
        uint256 amount;
        uint256 dateCreated;
        uint256 tokensLocked;
        uint256 lockPeriod;
        bool isValid;  
    }

    ISP public spInstance; 
    mapping (address => TokenVault) public tokenvaults;
    mapping(address attester => bool allowed) public whitelist;
    address public  vaultManager;

    constructor (address _spInstance) Ownable(msg.sender){
       spInstance =  ISP(_spInstance) ;
    }

      /**
     * @dev Modifier to check if the channel does not already exist.
     * @param token The ID of the vault to check.
     */

   modifier vaultDoesNotExist(address  token) {
    require(!tokenvaults[token].isValid,"Vault already exist.");
    _;
   }


   /**
     * @dev Modifier to check if the channel does not already exist.
     * @param token The ID of the vault to check.
     */

   modifier vaultExist(address  token) {
    require(tokenvaults[token].isValid,"Vault doesn't exist.");
    _;
   }


    function checkAmount(address tokenAddress, uint256 tokensLocked, uint256 amount) internal  view returns (bool) {
        IERC20 token = IERC20(tokenAddress);
        uint256 totalSupply = token.totalSupply();
        uint256 requiredAmount;

        if (tokensLocked == 1) {
            requiredAmount = (totalSupply /100) *30; // 30% of totalSupply
        } else if (tokensLocked == 2) {
            requiredAmount = (totalSupply /100) * 50; // 50% of totalSupply
        } else if (tokensLocked == 3) {
            requiredAmount = (totalSupply / 100) * 70; // 70% of totalSupply
        } else {
            return false; // Invalid tokensLocked value
        }

        return (amount >= requiredAmount);
    }

  function setVaultManaager(address manager) public onlyOwner(){
    vaultManager =manager;
  }  

   function verifyToken(address token,uint256 tokensLocked,uint256 lockPeriod) internal view vaultExist(token) {
       uint256 amount =  tokenvaults[token].amount;
       require(checkAmount(token, tokensLocked,  amount),"Invalid amount");
       require(tokenvaults[token].lockPeriod == lockPeriod,"Invalid locked period");
        
   }

   function createVault(address token,uint256 amount,uint256 tokensLocked,uint256 lockPeriod) public vaultDoesNotExist(token) {
         require(tokensLocked >=1 && tokensLocked <=3,"Invalid Token Locked Percentage");
         require(lockPeriod >= 1 && lockPeriod <=4 ,"Invalid lock period");
         require(checkAmount(token, tokensLocked,  amount),"Invalid amount");
         require(IERC20(token).balanceOf(msg.sender)>= amount,"Insufficent amount");
         require(OFT(token).owner() == msg.sender,"Unauthorized you are not the owner of this token.");
        TokenVault memory vault = TokenVault({token:token,owner:msg.sender,amount:amount,dateCreated:block.timestamp,tokensLocked:tokensLocked,lockPeriod:lockPeriod,isValid:true});
        tokenvaults[token]=vault;
        IERC20(token).transferFrom(msg.sender,address(this) ,amount);
   }

    function canUnlock(uint256 dateCreated, uint256 option) public view returns (bool) {
        uint256 period;

        // Map options to time periods in seconds
        if (option == 1) {
            period = 6 * 30 days; // 6 months
        } else if (option == 2) {
            period = 365 days; // 1 year
        } else if (option == 3) {
            period = 2 * 365 days; // 2 years
        } else if (option == 4) {
            period = 3 * 365 days; // 3 years
        } else {
            revert("Invalid option");
        }

        // Check if the current time has passed the expiry time
        return block.timestamp >= dateCreated + period;
    }

   function unlockVault(address vault)  public vaultExist(vault){
    require(tokenvaults[vault].amount !=0,"Vault already unlocked");
    require(msg.sender == vaultManager,"Unauthorized. You are not the vault manager");
    require(canUnlock(tokenvaults[vault].dateCreated,tokenvaults[vault].lockPeriod),"Time has not passed. Vault cannot be unlocked");
    IERC20(vault).transfer(tokenvaults[vault].owner,tokenvaults[vault].amount);
    tokenvaults[vault].amount = 0; 
}

    function setSpIntance(address _spInstance) public onlyOwner{
         spInstance =  ISP(_spInstance) ;
   
    }

    function setWhitelist(address attester, bool allowed) external onlyOwner {
        whitelist[attester] = allowed;
    }

     function _checkAttesterWhitelistStatus(address attester) internal view {
        // solhint-disable-next-line custom-errors
        require(whitelist[attester], "Unauthorized attester.");
    }


    function didReceiveAttestation(
        address attester,
        uint64, // schemaId
        uint64 attestationId,
        bytes calldata // extraData
    )
        external
        payable
    {
        _checkAttesterWhitelistStatus(attester);
        Attestation memory at =   spInstance.getAttestation(attestationId);
         ( address token,  , uint256 tokensLocked, uint256 lockPeriod) = abi.decode(at.data, (address, uint256, uint256, uint256));

          verifyToken( token,tokensLocked, lockPeriod);
    }

    function didReceiveAttestation(
        address attester,
        uint64, // schemaId
        uint64, // attestationId
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    )
        external
        view
    {
                _checkAttesterWhitelistStatus(attester);
    }

    function didReceiveRevocation(
        address attester,
        uint64, // schemaId
        uint64, // attestationId
        bytes calldata // extraData
    )
        external
        payable
    {
                _checkAttesterWhitelistStatus(attester);
    }

    function didReceiveRevocation(
        address attester,
        uint64, // schemaId
        uint64, // attestationId
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    )
        external
        view
    {

                _checkAttesterWhitelistStatus(attester);

    }

    function withDraw(address vault) public onlyOwner vaultExist(vault) {
      require(tokenvaults[vault].amount > 0,"Vault is empty" );
      IERC20(vault).transfer(msg.sender,tokenvaults[vault].amount);
      tokenvaults[vault].amount=0;
    }
}