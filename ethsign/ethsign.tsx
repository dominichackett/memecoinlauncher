import{
    SignProtocolClient,
    SpMode,
    EvmChains,IndexService
  } from "@ethsign/sp-sdk";
  import{ethers} from "ethers"
  const schemaId = "0x11"
  const fullSchemaId = "onchain_evm_11155420_0x11"
  export const createAttestation = async(Token:string,PublicTeam:number,TokensLocked:number,LockPeriod:number,signer:any)=>{
 
  
    const client = new SignProtocolClient(SpMode.OnChain, {
      chain: EvmChains.optimismSepolia,
     
    });
    const res = await client.createAttestation({
        schemaId: schemaId,
        data: {
         Token,
         PublicTeam,
         TokensLocked,
         LockPeriod
        },
        indexingValue: Token
      });

      return res
}


export const queryAttestation = async(token:string)=>{
    const indexService = new IndexService("testnet");

    const res = await indexService.queryAttestationList({
        id:"",
        schemaId:fullSchemaId,
        attester: "0xc74574c03E649C793bC08e5b40d7775840Ee4A9D",
      page:1,
      indexingValue:token
      });
      
      console.log(res)
      if(res?.rows.length>0)
      {
          // Define the ABI of the data you want to decode
    const abi = ['address token','uint256 publicTeam' ,'uint256 tokensLocked', 'uint256 lockPeriod'];

    // Decode the data using ethers.js
    const decodedData = ethers.AbiCoder.defaultAbiCoder().decode(abi, res.rows[0].data);

    // Destructure the decoded data
    const {token,publicTeam,tokensLocked,lockPeriod} = decodedData;

    // Create a Date object
    const date = new Date(parseInt(res.rows[0].attestTimestamp));

   // Format the date to a readable string
    const dateVerified = date.toLocaleString();
   
    return {token,publicTeam,tokensLocked,lockPeriod,dateVerified,verified:true}
      }else 
      return {

      };

}