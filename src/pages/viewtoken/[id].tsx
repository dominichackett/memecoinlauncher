import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

import { InlineIcon  } from '@iconify/react';
import { useRouter } from 'next/router'
import MessageSubscribers from '../../components/MessageSubscribers/MessageSubscribers';

const iconsize='64px'
const token = 
    {
      name: 'Lindsay Walton',
      symbol: 'LWT',
      decimals:18,
      address:"0x00000000000000000000000000000001",
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
    // More people...
  

  const deployedChains = [{
    id:10,
    name: 'Optimism',
     image:
      '/images/chains/optimism.png',
  }]
const Home: NextPage = () => {
    const router = useRouter()
console.log(router.query.id)
 const deployToken =  (token:any)=>{
    
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
        <main className="mt-40" >
       <div className=' flex flex-col items-center justify-center text-black hover:text-gray-500'>                          <img alt="" src={token.image} className="h-24 w-24 rounded-full" />

        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" > {token.symbol} - {token.name}</h1>
       <div className='mt-2  flex flex-row'> <span className='mt-2 font-medium'>Decimals:</span><span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {token.decimals}
                      </span></div>
                      <div className='mt-2  flex flex-row'>   <span className='mt-2 font-medium'>Address:</span><span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {token.address}
                      </span></div>

                      <div className='mt-2  flex flex-row '> 
                      < button onClick={()=>deployToken()} className="ml-2 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center">
                        Deploy
                      </button>
                      <span className='mt-2 font-medium'><select             className="ml-2 rounded-md border border-stroke bg-gray-100 py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-gray-100 focus:shadow-input"
                      ><option>Select Chain</option>
                      <option key="10" value="10">Arbitrum</option>
                      <option key ="101" value="101">Optimism</option></select>
                     </span> 
                        </div>
                      </div>

          
        <div className="px-4 sm:px-6 lg:px-8">
     
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Chain
                  </th>
                 
                 
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {deployedChains.map((chain) => (
                  <tr key={chain.id}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img alt="" src={chain.image} className="h-11 w-11 rounded-full" />
                        </div>
                        <div className="ml-2 text-gray-900">{chain.name}</div>

                      </div>
                    </td>
                   
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  

    <div className="mt-8 grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24" >
       <div> <h1 className="mb-2 text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" >
Send Message to Subscribers</h1>
<span className='mb-2 flex flex-row pt-4'>Powered By  <img src="/images/xmtp.png"  className='ml-2 h-[30px]'/></span>

<MessageSubscribers />
</div><img src="/images/memecoin.jpg" className='h-[400px] rounded-full border-8 border-gray-400'/>
       </div> 


  
       </main> 
       <Footer />

</div>
      );
};

export default Home;
