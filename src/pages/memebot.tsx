import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect,useCallback } from 'react'; 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import {ChatBot} from '../components/ChatBot/ChatBot'
import { XMTPProvider } from "@xmtp/react-sdk";
import {
  Client,
  useStreamMessages,
  useClient,
  useMessages,
  useConversations,
  useCanMessage,
  useStartConversation,
  DecodedMessage
} from "@xmtp/react-sdk";
import { useEthersSigner } from '../signers/signers'
import {useWalletClient} from 'wagmi'

const Home: NextPage = () => {
  const result = useWalletClient()
  const signer = useEthersSigner()
  const [chat,setChat]  = useState()
  const { client, error, isLoading, initialize, disconnect } = useClient();
  const { startConversation } = useStartConversation();

/*  useEffect(()=>{
    console.log(`result ${JSON.stringify(result)}`)
   async function createClient() {
     try
     {const xmtp = await Client.create(signer, { env: "production" });
     console.log("Client created", xmtp.address);
     const conversation = await xmtp.conversations.newConversation("0xF74b70Df3ae335FFb9EA4c499611d3F844DfE167");
 console.log("Conversation created", conversation);
 setChat(conversation)
   }catch(error)
   {
      console.log
   }
   }
    if(signer) {
 
         createClient()
        }
 },[signer])
  */
 const ENCODING = "binary";

 const storeKeys = (walletAddress, keys) => {
  localStorage.setItem(
    buildLocalStorageKey(walletAddress),
    Buffer.from(keys).toString(ENCODING)
  );
};

 const buildLocalStorageKey = (walletAddress) => {
  return walletAddress ? `xmtp:production:keys:${walletAddress}` : "";
};

 const loadKeys = (walletAddress) => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

 const initXmtpWithKeys = async () => {
  const options = { env: "production"};
  
  if (!signer.address) return;
  let keys = loadKeys(signer.address);
  if (!keys) {
    keys = await Client.getKeys(signer, {
      ...options,
      skipContactPublishing: true,
      persistConversations: false,
    });
    storeKeys(signer.address, keys);
  }
  //setLoading(true);
  await initialize({ keys, options, signer });
  const newConversation = await startConversation(process.env.NEXT_PUBLIC_BOT_ADDRESS,"");
  setChat(newConversation?.cachedConversation);
  console.log(client)
};

useEffect(() => {
  if (signer ) {
    initXmtpWithKeys();
  }
}, [ signer, client]);
 
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

{chat && <ChatBot conversation={chat} />}
</div><img src="/images/memecoin.jpg" className=' h-[400px] rounded-full border-8 border-gray-400'/>
       </main> 
       <Footer />

</div>
      );
};

export default Home;
