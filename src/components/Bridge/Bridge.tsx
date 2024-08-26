import React, { useState, useEffect } from 'react';

const TokenBridge = () => {
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

  // Simulate fetching the user's token balance
  const simulateBalance = (token) => {
    // Simulate different balances based on the token
    const balances = {
      ETH: (Math.random() * 10).toFixed(2),
      BNB: (Math.random() * 100).toFixed(2),
      USDT: (Math.random() * 1000).toFixed(2),
      DAI: (Math.random() * 1000).toFixed(2),
      MATIC: (Math.random() * 500).toFixed(2),
    };
    return balances[token] || '0.00';
  };

  useEffect(() => {
    // Simulate fetching the balance when the token changes
    const userBalance = simulateBalance(token);
    setBalance(userBalance);
  }, [token]);

  const handleBridge = () => {
    console.log(`Bridging ${amount} ${token} from ${fromChain} to ${toChain}`);
    // Add your bridging logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Token Bridge</h1>

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

        {/* Display Balance */}
        <div className="mb-4">
          <p className="text-gray-700">Balance: {balance} {token}</p>
        </div>

        {/* Token Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
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
            value={fromChain}
            onChange={(e) => setFromChain(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>Ethereum</option>
            <option>Binance Smart Chain</option>
            <option>Polygon</option>
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
            <option>Binance Smart Chain</option>
            <option>Ethereum</option>
            <option>Polygon</option>
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
    </div>
  );
};

export default TokenBridge;
