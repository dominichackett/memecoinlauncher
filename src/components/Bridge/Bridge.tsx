import React, { useState, useEffect } from 'react';
import { getCoins } from '../../envio/envio';
import { OFTABI } from '../../contracts';
import { useBalance, useChainId } from 'wagmi';
import { ethers } from 'ethers';
import { useEthersSigner } from '../../signers/signers';
import { useAccount } from 'wagmi';
import Notification from '../Notification/Notification';
import { getDeployedTokens } from '../../envio/envio';
import {BigNumberish, BytesLike} from 'ethers';
import {EndpointId} from '@layerzerolabs/lz-definitions';
import {Options} from '@layerzerolabs/lz-v2-utilities';

interface Args {
  amount: string;
  to: string;
  toEid: EndpointId;
}

interface SendParam {
  dstEid: EndpointId; // Destination endpoint ID, represented as a number.
  to: BytesLike; // Recipient address, represented as bytes.
  amountLD: BigNumberish; // Amount to send in local decimals.
  minAmountLD: BigNumberish; // Minimum amount to send in local decimals.
  extraOptions: BytesLike; // Additional options supplied by the caller to be used in the LayerZero message.
  composeMsg: BytesLike; // The composed message for the send() operation.
  oftCmd: BytesLike; // The OFT command to be executed, unused in default OFT implementations.
}
const TokenBridge = () => {

  const [tokens,setTokens] = useState([])
  const chainId = useChainId()
  const signer = useEthersSigner()
  const account = useAccount()
  const [deployedTokens,setDeployedTokens] = useState(new Map())
  useEffect(()=>{

   
    async function _getDeployedTokens(){
      const _tokens = await getDeployedTokens();
      let data = _tokens.data.TokenLauncher_TokenDeployed
      let chainMap = new Map()
       for(const index in data){
        chainMap.set(`${data[index].chain}-${data[index].token}`,data[index].peer);
      }
      
      console.log(data)
  
      
      setDeployedTokens(chainMap)
      
    } 
    async function _getCoins()
    {
        const coins = await getCoins()
        let data = coins.data.TokenLauncher_TokenCreated
        let _tokens = []
        console.log(coins)
        for(const index in data)
        {
          if(data[index].token !="0x3BAc68d254063dC5Cc711d6e7F2e855B53F7B35a")

           _tokens.push({...data[index],decimals:18})
        }
        setTokens(_tokens)
        

    } 

      _getDeployedTokens()
      _getCoins()

 },[]) 
 
  const [amount, setAmount] = useState('');
  const [fromChain, setFromChain] = useState();
  const [toChain, setToChain] = useState(421614);
  const [dToken,setDToken] = useState()
  const [token, setToken] = useState();
  const [balance, setBalance] = useState(null);
  const [tokenBalance,setTokenBalance] = useState(0)
  // NOTIFICATIONS functions
  const [notificationTitle, setNotificationTitle] = useState();
  const [notificationDescription, setNotificationDescription] = useState();
  const [dialogType, setDialogType] = useState(1);
  const [show, setShow] = useState(false);
  const close = async () => {
setShow(false);
};

 

  const getBalance = async(token) => {
   
    if(!token)
      return
    let tokenAddress = tokens[token].token
    if(chainId !="11155420") //Optimism
    {
      tokenAddress = deployedTokens.get(`${chainId}-${tokenAddress}`) || ethers.ZeroAddress   
      setDToken(tokenAddress)
      if(tokenAddress == ethers.ZeroAddress)
      {
         setDialogType(2) //Error
         setNotificationTitle("Bridge Token")
         setNotificationDescription("Token not deployed to connected chain")
         setShow(true)
         return
      }  
    }else{
      
      console.log(`${toChain}-${tokenAddress}`) 
      const _dtoken = deployedTokens.get(`${toChain}-${tokenAddress}`) || ethers.ZeroAddress   
      setDToken(_dtoken)
      if(_dtoken == ethers.ZeroAddress)
      {
         setDialogType(2) //Error
         setNotificationTitle("Bridge Token")
         setNotificationDescription("Token not deployed to connected chain")
         setShow(true)
         return
      }  

    }
    const tokenContract = new ethers.Contract(tokenAddress,OFTABI,signer)
    const _balance = await tokenContract.balanceOf(account.address)
   
    return ethers.formatEther(_balance) || '0.00';
  };

  useEffect(() => {
    async function _getBalance()
    {
      const userBalance = await getBalance(token);
      let balanceNumber = parseFloat(userBalance);
      let formattedBalance 
      // If the balance is greater than the threshold, use scientific notation
      if (balanceNumber >= 1e18) {
          formattedBalance = balanceNumber.toExponential(18); // 3 significant digits
      } else {
          // Otherwise, format the balance with commas and a few decimal places
          formattedBalance = balanceNumber.toLocaleString('en-US', { maximumFractionDigits: 6 });
      }
      setBalance(formattedBalance);
      setTokenBalance(userBalance)
    }
    console.log(token)
    if(token && signer)
      _getBalance()
  }, [token,chainId,signer]);

  const handleBridge = async() => {
    
    if(dToken == ethers.ZeroAddress || dToken == undefined) //Token not deployed cross chain
    {
      console.log("Error with dToken")
      return
    }
    
    if(isNaN(parseFloat(amount)) || amount <=0 )
    {
       setDialogType(2) //Error
       setNotificationTitle("Bridge Token")
       setNotificationDescription("Please enter an amount.")
       setShow(true)
       return
    }  
      console.log(tokenBalance)
      console.log(amount)
    if( parseFloat(amount) > parseFloat(tokenBalance) )
      {
         setDialogType(2) //Error
         setNotificationTitle("Bridge Token")
         setNotificationDescription("Insufficent Balance to transfer.")
         setShow(true)
         return
      }  
  

      if(toChain == chainId )
        {
           setDialogType(2) //Error
           setNotificationTitle("Bridge Token")
           setNotificationDescription("Can't transfer to the same chain.")
           setShow(true)
           return
        } 
        
        let dstToken = (chainId == "11155420" ? dToken :tokens[token].token)
        let srcToken =  (chainId == "11155420" ? tokens[token].token:dToken)
        console.log(srcToken)
        const tokenContract = new ethers.Contract(srcToken,OFTABI,signer)
        const decimals = await tokenContract.decimals();

        const _amount = ethers.parseUnits(amount, decimals);
        const selectElement = document.getElementById("toChain");

        // Get the selected option
        const selectedOption = selectElement.options[selectElement.selectedIndex];

       // Retrieve the data-key attribute from the selected option
       const _eid = selectedOption.getAttribute("data-eid");

       let options = Options.newOptions().addExecutorLzReceiveOption(65000, 0).toBytes();

        const sendParam: SendParam = {
          dstEid: _eid,
          to: ethers.zeroPadValue(account.address,32),
          amountLD: _amount,
          minAmountLD: _amount,
          extraOptions: options,
          composeMsg: ethers.getBytes('0x'), // Assuming no composed message
          oftCmd: ethers.getBytes('0x'), // Assuming no OFT command is needed
        };

        // Get the quote for the send operation
    const feeQuote = await tokenContract.quoteSend(sendParam, false);
    const nativeFee = feeQuote.nativeFee;

    console.log(
      `sending ${_amount} token(s) to network  (${_eid}) ${ethers.formatEther(nativeFee)}`,
    );

    try {
      setDialogType(3) //Information
      setNotificationTitle("Bridge Token")
      setNotificationDescription("Sending Tokens.")
      setShow(true)
 
      const r = await tokenContract.send(sendParam, {nativeFee: nativeFee, lzTokenFee: 0}, account.address, {
        value: nativeFee,
      });
       await r.wait()
       setDialogType(1) //Success
       setNotificationTitle("Bridge Token")
       setNotificationDescription("Transaction successfully submitted.")
       setShow(true)
  
    }catch(error)
    {

      setDialogType(2) //Error
      setNotificationTitle("Bridge Token");
      setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
      setShow(true)
      console.log(error)

    }

  };

  return (
    <div className="flex justify-center items-center p-8  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Token Bridge</h1>
        <span className='flex flex-row pt-2 mb-4'>Powered By  <img src="/images/layerzero.png"  className='ml-2 h-[30px]'/></span>
        {/* Token Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="token">Select Token</label>
          <select
            id="token"
            value={token}
            
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            {tokens.map((_token,index) => (
              <option key={_token._symbol} value={index}>
                {_token.name} ({_token.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Display Balance */}
        <div className="mb-4">
          <p className="text-gray-700">Balance: {balance} {token ? tokens[token]?.symbol: ""}</p>
        </div>

        {/* Token Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            min={0}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter token amount"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* From Blockchain Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fromChain">From</label>
          <select
            id="fromChain"
            disabled={true}

            value={chainId}
            onChange={(e) => setFromChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value={421614}>Arbitrum</option>
            <option value={11155420}>Optimism</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* To Blockchain Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="toChain">To</label>
          <select
            id="toChain"
            value={toChain}
            onChange={(e) => setToChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
             <option  data-eid="40231"  value={421614}>Arbitrum</option>
             <option  data-eid="40232"   value={11155420}>Optimism</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Bridge Button */}
        <button
          onClick={handleBridge}
          className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
        >
          Bridge Tokens
        </button>
      </div>
      <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
    </div>
  );
};

export default TokenBridge;
