export const getMyCoins = async(user:string)=>
    {  
         
     

         const response = await fetch("/api/getmycoins", {
            method: "POST",
            body: JSON.stringify({
              user:user
            }),
            headers: {
              "Content-Type": "application/json"
            }
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
         
        
         
     
    
     
      
     
         return responseData
       
    }
export const getCoin = async(token:string)=>
        {  
             
         
    
             const response = await fetch("/api/getcoin", {
                method: "POST",
                body: JSON.stringify({
                  token:token
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const responseData = await response.json();
             
            
             
         
        
         
          
         
             return responseData
           
        }  

export const getCoins = async()=>
{  
                 
             
        
   const response = await fetch("/api/getcoins", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
            
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
            
                  const responseData = await response.json();
                 
                
                 
             
            
             
              
             
                 return responseData
               
            }
 export const getDeployedChains = async(token:string)=>
                {  
                     
                 
            
                     const response = await fetch("/api/getdeployedchains", {
                        method: "POST",
                        body: JSON.stringify({
                          token:token
                        }),
                        headers: {
                          "Content-Type": "application/json"
                        }
                      });
                
                      if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                
                      const responseData = await response.json();
                     
                    
                     
                 
                
                 
                  
                 
                     return responseData
                   
                }  
        

export const getDeployedTokens = async()=>
                  {  
                       
                   
              
                       const response = await fetch("/api/getdeployedtokens", {
                          method: "POST",
                          
                          headers: {
                            "Content-Type": "application/json"
                          }
                        });
                  
                        if (!response.ok) {
                          throw new Error('Network response was not ok');
                        }
                  
                        const responseData = await response.json();
                       
                      
                       
                   
                  
                   
                    
                   
                       return responseData
                     
                  }                  