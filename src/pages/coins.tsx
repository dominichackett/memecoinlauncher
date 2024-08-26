import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import CoinCard from '../components/CoinCard/CoinCard';
const iconsize='64px'
const tokens =[{},{},{},{},{},{},{},{},{},{}]
const Home: NextPage = () => {
 
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
        <main className="mt-20 grid lg:grid-cols-4  gap-y-12 place-items-center pt-16 pb-16 md:pt-12 md:pb-24" >
        {tokens.map((token,index)=>
        <CoinCard />
    )}
        </main> 
       <Footer />

</div>
      );
};

export default Home;
