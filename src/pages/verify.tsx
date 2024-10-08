import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import Verify from '../components/Verify/Verify'
import { useState } from 'react';
const Home: NextPage = () => {
 const [coinImage,setCoinImage] = useState("/images/memecoin.jpg")

 const setTokenImage = (image)=>{
    setCoinImage(image);
 }
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
       <div> <h1 className="mb-2 text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >
Meme Coin Launcher.  Verify
</h1>
<Verify setTokenImage={setTokenImage}/>
</div><img src={coinImage} className='h-[400px] rounded-full border-8 border-gray-400'/>
       </main> 
       <Footer />

</div>
      );
};

export default Home;
