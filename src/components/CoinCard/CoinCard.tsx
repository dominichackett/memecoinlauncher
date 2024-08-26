import React, { useState, useEffect } from 'react';

const CoinCard = () => {
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
        <h1 className="text-2xl font-semibold text-center mb-4">Meme Coin Launcher</h1>
        <img src="/images/memecoin.jpg" className='h-[300px] rounded-full border-8 border-gray-400'/>

       
        {/* Token Selection */}
        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Symbol</label>
          MCL
        </div>

        <div className="mb-4 flex flex-row justify-between">
          <label className="block text-gray-700 mb-2" htmlFor="token">Decimals</label>
          18
        </div>
 
     
        {/* Bridge Button */}
        <button
          onClick={handleBridge}
          className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
        >
          Subscribe 
        </button>
      </div>
    </div>
  );
};

export default CoinCard;
