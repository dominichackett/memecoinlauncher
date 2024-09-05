import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {useState, useEffect } from 'react'; 
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import { getCoin } from '../../envio/envio';
import { useRouter } from 'next/router'
import MessageSubscribers from '../../components/MessageSubscribers/MessageSubscribers';
import { OFTABI,OFTBYTECODE } from '../../contracts';
import { getDeployedChains } from '../../envio/envio';
import Notification from '../../components/Notification/Notification'
import { arbitrum } from 'viem/chains';
import { useEthersSigner } from '../../signers/signers'
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { deployToken,setTokenPeer } from '../../deploy';
import { ContractABI,opContractAddress } from "../../contracts";

const Home: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;
    const [gotDeloyedChains,setGotDeployedChains] = useState()
    const [isDeployed,setisDeployed] = useState(new Map())
    const [deployedChains,setDeployedChains] = useState([])
    const signer = useEthersSigner()
    const account = useAccount()
     // NOTIFICATIONS functions
  const [notificationTitle, setNotificationTitle] = useState();
  const [notificationDescription, setNotificationDescription] = useState();
  const [dialogType, setDialogType] = useState(1);
  const [show, setShow] = useState(false);
  const close = async () => {
setShow(false);
};

 const _deployToken =  async()=>{
     
    if(!gotDeloyedChains)
      return 

    const _chain = document.getElementById("deploy").value
    // Get the select element
const selectElement = document.getElementById("deploy");

// Get the selected option
const selectedOption = selectElement.options[selectElement.selectedIndex];

// Retrieve the data-key attribute from the selected option
const _eid = selectedOption.getAttribute("data-eid");
const _lz = selectedOption.getAttribute("data-lz");
    


    if(isDeployed.get(_chain))
    {
       setDialogType(2) //Error
       setNotificationDescription("Token already deployed to this chain")
       setNotificationTitle("Deploy Token")
       setShow(true)
       console.log(_chain)
       console.log(_eid)
       return
    }  

    const tokenContract = new ethers.Contract(token.token,OFTABI,signer);
    const launcherContract = new ethers.Contract(opContractAddress,ContractABI,signer)
    console.log(ethers.zeroPadValue(token.token,32))
    console.log(await tokenContract.isPeer(_eid,ethers.zeroPadValue("0xD26d98b8CdD5aC7Bd6174a2Cb3E9646714E29C26",32)))
//    return
    try{


      setDialogType(3) //Information
      setNotificationDescription("Deploying Token")
      setNotificationTitle("Deploy Token")
      setShow(true)  
          const oft = await deployToken(token,_lz)
          console.log(oft)
      
          setDialogType(3) //Information
          setNotificationDescription("Setting Token Peer Origin")
          setNotificationTitle("Deploy Token")
          setShow(true) 

          const tx = await tokenContract.setPeer(_eid,ethers.zeroPadValue(oft?.contractAddress,32))
          await tx.wait()
          

          setDialogType(3) //Information
          setNotificationDescription("Setting Token Peer Destination")
          setNotificationTitle("Deploy Token")
          setShow(true)  

          await setTokenPeer(token,oft?.contractAddress);



          const tx1 = await launcherContract.registerCrossChain(token.token,oft?.contractAddress,_chain)
          await tx1.wait();
          setDialogType(1) //Success
          setNotificationDescription("Successfully deployed token.")
          setNotificationTitle("Deploy Token")
          setShow(true)       

    }catch(error)
    {
     setDialogType(2) //Error
      setNotificationTitle("Deploy Token");
      setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
      setShow(true)
      console.log(error)
    }
 }  

 const [token,setToken] = useState()
 
 useEffect(()=>{
  async function getChains(){
    const _chains = await getDeployedChains(id);
    let data = _chains.data.TokenLauncher_TokenDeployed
    let chainMap = new Map()
    let _deployed = []
    for(const index in data){
      chainMap.set(data[index].chain,data[index].peer);
      _deployed.push({...data[index],image:"/images/chains/arbitrum.png",name:"arbitrum"})
    }
    console.log(data)
    console.log(token)
    _deployed.push({
      id:11155420,
      eid:40231,
      name: 'Optimism',
      peer:token.token,
       image:
        '/images/chains/optimism.png',
    })
    setDeployedChains(_deployed)
    setisDeployed(chainMap)
    setGotDeployedChains(true)
  }   

  if(token)
    getChains()
 

 },[token])
 useEffect(()=>{
  
  
  async function _getCoin()
  {
      const coins = await getCoin(id)
      let data = coins.data.TokenLauncher_TokenCreated
      let _tokens = []
      console.log(coins)
      if(data.length > 0)
      setToken({...data[0],decimals:18})
    } 

  if(id)
  {
      _getCoin()
      
    }

},[id])
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
       <div className=' flex flex-col items-center justify-center text-black hover:text-gray-500'>                          <img alt="" src={token?.image ? token.image : "/images/memecoin.jpg"} className="h-24 w-24 rounded-full border-2 border-gray-400" />

        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter" > {token?.symbol} - {token?.name}</h1>
       <div className='mt-2  flex flex-row'> <span className='mt-2 font-medium'>Decimals:</span><span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {token?.decimals}
                      </span></div>
                      <div className='mt-2  flex flex-row'>   <span className='mt-2 font-medium'>Address:</span><span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {token?.token}
                      </span></div>

                      <div className='mt-2  flex flex-row '> 
                      < button onClick={()=>_deployToken()} className="ml-2 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800  border-2 border-transparent flex gap-1 items-center justify-center">
                        Deploy
                      </button>
                      <span className='mt-2 font-medium'><select   id='deploy'          className="ml-2 rounded-md border border-stroke bg-gray-100 py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-gray-100 focus:shadow-input"
                      ><option>Select Chain</option>
                      <option key="40231" data-lz="0x6EDCE65403992e310A62460808c4b910D972f10f"  data-eid="40231" value="421614">Arbitrum</option>
                      <option key ="101" data-key="101" value="101">Optimism</option></select>
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
                        <div className="ml-2 text-gray-900">{chain.peer}</div>

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
       <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
</div>
      );
};

export default Home;
