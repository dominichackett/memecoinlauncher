import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import { InlineIcon  } from '@iconify/react';
const iconsize='64px'
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
        <main className="mt-20 grid lg:grid-cols-3  gap-y-12 place-items-center pt-16 pb-16 md:pt-12 md:pb-24" >
        <a href="/memebot"><div className='cursor-pointer flex flex-col items-center justify-center text-black hover:text-gray-500'><InlineIcon  style={{ fontSize: iconsize }} icon="fluent-mdl2:chat-bot" />
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >Meme Bot</h1></div></a>
        <a href="/mycoins"><div className='cursor-pointer flex flex-col items-center justify-center text-black hover:text-gray-500'><InlineIcon  style={{ fontSize: iconsize }} icon="clarity:coin-bag-solid" />
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >My Coins</h1></div></a>
        <a href="/bridge"><div className='cursor-pointer flex flex-col items-center justify-center text-black hover:text-gray-500'><InlineIcon  style={{ fontSize: iconsize }} icon="mdi:bridge" />
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >Bridge</h1></div></a>
        <a href="/verify"><div className='cursor-pointer flex flex-col items-center justify-center text-black hover:text-gray-500'><InlineIcon  style={{ fontSize: iconsize }} icon="bitcoin-icons:verify-filled" />
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >Verify</h1></div></a>
        <img src="/images/memecoin.jpg" className='h-[300px] rounded-full'/>
        <a href="/staking"><div className='cursor-pointer flex flex-col items-center justify-center text-black hover:text-gray-500'><InlineIcon  style={{ fontSize: iconsize }} icon="vaadin:piggy-bank-coin" />
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >Staking</h1></div></a>
       </main> 
       <Footer />

</div>
      );
};

export default Home;
