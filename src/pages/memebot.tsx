import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import ChatBot from '../components/ChatBot/ChatBot'
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
        <main className="mt-14 grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24" >
       <div> <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >
Meme Coin Launcher.  Chat Bot
</h1><span className='mb-2 flex flex-row pt-4'>Powered By  <img src="/images/xmtp.png"  className='ml-2 h-[30px]'/></span>

<ChatBot />
</div><img src="/images/memecoin.jpg" className='h-[400px] rounded-full border-8 border-gray-400'/>
       </main> 
       <Footer />

</div>
      );
};

export default Home;
