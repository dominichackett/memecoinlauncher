import React, { useState, useEffect } from 'react';

const VerifyToken = () => {
  const [amount, setAmount] = useState('');
  const [fromChain, setFromChain] = useState('Ethereum');
  const [toChain, setToChain] = useState('Binance Smart Chain');
  const [token, setToken] = useState('ETH');
  const [balance, setBalance] = useState(null);

  const tokens = [
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'BNB', name: 'Binance Coin' },
    { symbol: 'USDT', name: 'Tether' },
    { symbol: 'DAI', name: 'Dai' },
    { symbol: 'MATIC', name: 'Polygon' },
  ];

  
 
  const handleBridge = () => {
    console.log(`Bridging ${amount} ${token} from ${fromChain} to ${toChain}`);
    // Add your bridging logic here
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
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
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
            value={fromChain}
            onChange={(e) => setFromChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>Yes</option>
            <option>No</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* To Blockchain Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="toChain">Tokens Locked</label>
          <select
            id="locked"
            value={toChain}
            onChange={(e) => setToChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>30%</option>
            <option>50%</option>
            <option>70%</option>
           
            {/* Add more options as needed */}
          </select>
        </div>
  {/* To Blockchain Dropdown */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="toChain">Lock Period</label>
          <select
            id="lockedPeriod"
            onChange={(e) => setToChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>6 Months</option>
            <option>1 Year</option>
            <option>2 Years</option>
            <option>3 Years</option>

           
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Bridge Button */}
        <button
          onClick={handleBridge}
          className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
        >
          Verify Token
        </button>
      </div>
    </div>
  );
};

export default VerifyToken;
