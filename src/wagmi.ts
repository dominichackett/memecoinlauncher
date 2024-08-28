import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  optimismSepolia,
  arbitrumSepolia
  
  } from 'wagmi/chains';
  import {Chain,
  } from '@rainbow-me/rainbowkit';
  
  const galadriel: Chain = {
    id: 696969,
    name: 'Galadriel',
    network: 'Galadriel',
    iconBackground: '#3e6957',
    iconUrl:"/images/chains/galadriel.jpg",
    nativeCurrency: {
      decimals: 18,
      name: 'GAL',
      symbol: 'GAL',
      
    },
    rpcUrls: {
      public: { http: ['https://devnet.galadriel.com/'] },
      default: { http: ['https://devnet.galadriel.com/'] },
    },
    blockExplorers: {
      default: { name: 'Galadriel Devnet explorer', url: 'https://explorer.galadriel.com' },
      etherscan: { name: 'Galadriel Devnet explorer', url: 'https://explorer.galadriel.com' },
    },
  
    testnet: true,
  };
  
export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    optimismSepolia,
    arbitrumSepolia,
    galadriel
     
  ],
  ssr: true,
});