import{
    SignProtocolClient,
    SpMode,
    EvmChains,IndexService
  } from "@ethsign/sp-sdk";
  const schemaId = "0xf"
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
