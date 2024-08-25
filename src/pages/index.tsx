import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
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
       <div> <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter" >
Meme Coin Launcher. Cross Chain Meme Coins
</h1><p className="text-lg mt-4 text-slate-600 max-w-xl" >
Welcome to Meme Coin Launcher, your gateway to creating and launching the next viral meme-based cryptocurrency! Whether you're a seasoned crypto enthusiast or just starting out, our platform makes it easy to bring your meme coin idea to life. With a user-friendly interface, powerful tools, and step-by-step guidance, you can design, deploy, and share your meme coin with the world in no time. Join the meme coin revolution today and let your creativity shine on the blockchain!
</p>
</div><img src="/images/memecoin.jpg" className='h-[400px] rounded-full'/>
       </main> 
       <Footer />

</div>
      );
};

export default Home;
