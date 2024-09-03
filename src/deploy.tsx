import { ethers } from "ethers";
import { OFTABI,OFTBYTECODE } from "./contracts";
///context.send(commandText)
 const privateKey = process.env.NEXT_PUBLIC_KEY;

 let wallet = new ethers.Wallet(privateKey as string)

 const provider = new ethers.JsonRpcProvider(
"https://arbitrum-sepolia.blockpi.network/v1/rpc/public "  );
 let signer = wallet.connect(provider);

  export const  deployToken=async(token:any,_delgate:string,_lz:string)=>{
    const contractFactory = new ethers.ContractFactory(OFTABI, OFTBYTECODE, signer);
    const contract = await contractFactory.deploy(token.name,token.symbol,_lz,_delgate);
   const x= await contract.waitForDeployment()
   console.log(x)
    const tx =  contract.deploymentTransaction()?.wait();
    return tx
 }


 export const setTokenPeer = async(token:any,address:string)=>{
    const contract = new ethers.Contract(address,OFTABI,signer);
    const tx = await contract.setPeer("40232",ethers.zeroPadValue(token.token,32));
    await tx.wait()
 }