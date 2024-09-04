import React, { useState, useEffect } from 'react';
import { lockedPeriod,tokensLocked } from '../../../utils/utils';
const CoinCard = ({token}) => {
  
  
 
  const handleSubscribe = () => {
    // Add your bridging logic here
  };

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">{token.name}</h1>
        <img src={token.image} className='h-[300px] rounded-full border-8 border-gray-400'/>

       
        {/* Token Selection */}
        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Symbol</label>
          {token.symbol}
        </div>

        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Decimals</label>
          {token.decimals}
        </div>
 
        <div className="mb-4 flex flex-row justify-between">
        <span className='flex flex-row pt-4 mb-2'>Verified</span>
        {token?.verified && <img src="/images/sign.webp"  className='ml-2 h-[50px]'/>}
         {!token?.verified ? "NO" : ""}
        </div>

        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Date Verifed</label>
          {token?.dateVerified? token.dateVerified: "N/A"}
        </div>

        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Public Team</label>
          {token?.publicTeam == 1 ?"No":"Yes"}
        </div>

        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Tokens Locked</label>
          {token?.tokensLocked ? tokensLocked[token.tokensLocked]: "None"}
        </div>
        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Locked Period</label>
          {token?.lockPeriod ? lockedPeriod[token.lockPeriod]: "None"}

        </div>
 
 
 
        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
        >
          Subscribe 
        </button>
      </div>
    </div>
  );
};

export default CoinCard;
