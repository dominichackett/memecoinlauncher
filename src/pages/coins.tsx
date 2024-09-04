import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import CoinCard from '../components/CoinCard/CoinCard';
import { getCoins } from '../envio/envio';
import { queryAttestation } from '../../ethsign/ethsign';
const iconsize='64px'
const Home: NextPage = () => {
  const [tokens,setTokens] = useState([])
  useEffect(()=>{
    async function _getCoins()
    {
        const coins = await getCoins()
        let data = coins.data.TokenLauncher_TokenCreated
        let _tokens = []
        console.log(coins)
        for(const index in data)
        {
          const at = await queryAttestation(data[index].token)
          console.log(data[index].token)
          console.log(at)
           _tokens.push({...data[index],decimals:18,...at})
        }
        setTokens(_tokens)

    } 

    
      _getCoins()

 },[]) 
  return (
    <div className={styles.container}>
      <Head>
        <title>Meme Coin Launcher</title>
        <meta
          content="Cross Chain Meme Coins"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
        <Header />
        <main className="mt-20 grid lg:grid-cols-3  gap-y-12 place-items-center pt-16 pb-16 md:pt-12 md:pb-24" >
        {tokens.map((token,index)=>
        <CoinCard token={token}/>
    )}
        </main> 
       <Footer />

</div>
      );
};

export default Home;
