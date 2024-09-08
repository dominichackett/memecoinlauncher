import React, { useState, useEffect } from 'react';
import Notification from '../Notification/Notification';
import { getCoins } from '../../envio/envio';
import { ethers } from 'ethers';
import { useEthersSigner } from '../../signers/signers';
import { useAccount ,useChainId} from 'wagmi';
import { createAttestation } from '../../ethsign/ethsign';
const VerifyToken = ({setTokenImage}) => {
  const [tokens,setTokens] = useState([])
  const chainId = useChainId()
  const signer = useEthersSigner()
  const account = useAccount()
  const [amount, setAmount] = useState('');
  const [publicTeam, setPublicTeam] = useState(1);
  const [tokensLocked, setTokensLocked] = useState(1);
  const [lockedPeriod,setLockedPeriod] = useState(1)
  const [token, setToken] = useState();

  // NOTIFICATIONS functions
  const [notificationTitle, setNotificationTitle] = useState();
  const [notificationDescription, setNotificationDescription] = useState();
  const [dialogType, setDialogType] = useState(1);
  const [show, setShow] = useState(false);
  const close = async () => {
setShow(false);
};


  useEffect(()=>{

   
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
        if(data.length > 0 )
          setToken(data[0].token)
        setTokens(_tokens)
        

    } 

      _getCoins()

 },[]) 
 
 
  const handleVerifyToken = async() => {
    if(chainId !="11155420") //Optimism
   {
      setDialogType(2) //Error
      setNotificationTitle("Verify Token")
      setNotificationDescription("Wrong network. Please select optimism.")
      setShow(true)
      return
   } 

   if(token == undefined) //
   {
      setDialogType(2) //Error
      setNotificationTitle("Verify Token")
      setNotificationDescription("No token selected to verify.")
      setShow(true)
      return
   }

    console.log(`Token ${token} Team ${publicTeam}  Locked ${tokensLocked} Period ${lockedPeriod}`)
    try{

      setDialogType(3) //Information
      setNotificationTitle("Verify Token")
      setNotificationDescription("Creating attestation for verification.")
      setShow(true)
      await createAttestation(token,publicTeam,tokensLocked,lockedPeriod,signer);    
      setDialogType(1) //Success
      setNotificationTitle("Verify Token")
      setNotificationDescription("Token successfully verified.")
      setShow(true)
       
    }catch(error){
      setDialogType(2) //Error
      setNotificationTitle("Verify Token");
      setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
      setShow(true)
      
    }
  };

 

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Verify Token</h1>
        <span className='flex flex-row pt-4 mb-2'>Powered By  <img src="/images/sign.webp"  className='ml-2 h-[60px]'/></span>


        {/* Token Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="token">Select Token</label>
          <select
            id="token"
            value={token}
            onChange={(e)=>setToken(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            {tokens.map((token) => (
              <option key={token.token} value={token.token}>
                {token.name} ({token.symbol})
              </option>
            ))}
          </select>
        </div>

       
     
        {/* From Blockchain Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fromChain">Public Team</label>
          <select
            id="team"
            value={publicTeam}
            onChange={(e) => setPublicTeam(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value={1}>No</option>
            <option value={2}>Yes</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* To Blockchain Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="toChain">Tokens Locked</label>
          <select
            id="locked"
            value={tokensLocked}
            onChange={(e) => setTokensLocked(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value={1}>30%</option>
            <option value={2}>50%</option>
            <option value={3}>70%</option>
           
            {/* Add more options as needed */}
          </select>
        </div>
  {/* To Blockchain Dropdown */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="toChain">Lock Period</label>
          <select
            id="lockedPeriod"
            value={lockedPeriod}
            onChange={(e) => setLockedPeriod(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value={1}>6 Months</option>
            <option value={2}>1 Year</option>
            <option value={3}>2 Years</option>
            <option value={4}>3 Years</option>

           
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Bridge Button */}
        <button
          onClick={handleVerifyToken}
          className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
        >
          Verify Token
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

export default VerifyToken;
