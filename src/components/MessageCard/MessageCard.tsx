"use client";

import { useFrame } from "@frames.js/render/use-frame";
import {
  type FarcasterSigner,
  signFrameAction,
} from "@frames.js/render/farcaster";
import { fallbackFrameContext } from "@frames.js/render";
import { useEthersSigner } from '../../signers/signers'

import {
    FrameUI,
    type FrameUIComponents,
    type FrameUITheme,
  } from "@frames.js/render/ui";
  import {
    useXmtpFrameContext,
    useXmtpIdentity,
  } from "@frames.js/render/identity/xmtp";
import { useSendTransaction } from "wagmi";   
  /**
   * StylingProps is a type that defines the props that can be passed to the components to style them.
   */
  type StylingProps = {
    className?: string;
    style?: React.CSSProperties;
  };
   
  /**
   * You can override components to change their internal logic or structure if you want.
   * By default it is not necessary to do that since the default structure is already there
   * so you can just pass an empty object and use theme to style the components.
   *
   * You can also style components here and completely ignore theme if you wish.
   */
  const components: FrameUIComponents<StylingProps> = {};
   
  /**
   * By default there are no styles so it is up to you to style the components as you wish.
   */
  const theme: FrameUITheme<StylingProps> = {
    Root: {
      className:
        "flex flex col w-full gap-2 border rounded-lg ovrflow-hidden bg-white relative",
    },
    LoadingScreen: {
      className: "absolute top-0 left-0 right-0 bottom-0 bg-gray-300 z-10",
    },
    ImageContainer: {
      className:
        " relative w-full h-full border-b border-gray-300 overflow-hidden",
      style: {
        aspectRatio: "var(--frame-image-aspect-ratio)", // helps to set the fixed loading skeleton size
      },

    },
    Button:{
        className:"mt-2  w-full bg-black text-white hover:bg-gray-800 py-2 rounded-md transition-colors"
    }
  };
   

interface Props {
  
  content:string;
  contentId:string
  typeId:string;
  sender:string;
  userAddress:string;
  topic:string;
}

function MessageCard({ content,contentId,typeId,sender,userAddress,topic }: Props) {
    const signer = useEthersSigner()
    const {sendTransaction} = useSendTransaction({})
console.log(userAddress)
 // @TODO: replace with your farcaster signer
 /*const farcasterSigner: FarcasterSigner = {
    fid: 1,
    status: "approved",
    publicKey:
      "0x00000000000000000000000000000000000000000000000000000000000000000",
    privateKey:
      "0x00000000000000000000000000000000000000000000000000000000000000000",
  };
  
  const frameState = useFrame({
    // replace with frame URL
    homeframeUrl:
      "https://my-frames-rouge.vercel.app/frames",
    // corresponds to the name of the route for POST and GET in step 2
    frameActionProxy: "/api/frames",
    frameGetProxy: "/api/frames",
    connectedAddress: undefined,
    frameContext: fallbackFrameContext,
    // map to your identity if you have one
    signerState: {
      hasSigner:
        true,
      signer: signer,
      isLoadingSigner: false,
      onSignerlessFramePress: () => {
        // Only run if `hasSigner` is set to `false`
        // This is a good place to throw an error or prompt the user to login
        console.log(
          "A frame button was pressed without a signer. Perhaps you want to prompt a login"
        );
      },
      signFrameAction,
      logout() {
        // here you can add your logout logic
        console.log("logout");
      },
    },
  });
 */


  const transact = async(hash)=>{
    console.log(hash)

    sendTransaction({to:hash.transactionData.params.to ,data:hash.transactionData.params.data})
    return hash
  }
  const xmtpFrameContext = useXmtpFrameContext({
    fallbackContext: {
      conversationTopic:topic,
      participantAccountAddresses: [userAddress],
    },
  });
  const signerState = useXmtpIdentity({
    // WebStorage is default value for storage option. It uses local storage by default.
    // You can implement your own storage that implements the Storage interface from @frames.js/render/identity/types.
    // storage: new WebStorage(),
  });
  const frameState = useFrame({
    homeframeUrl: "https://my-frames-rouge.vercel.app/frames", // url to frame
    frameActionProxy: "/api/frames",
    frameGetProxy: "/api/frames",
    frameContext: xmtpFrameContext.frameContext,
    signerState,
    connectedAddress:userAddress,
    specification: "openframes",
    onTransaction:transact
  });
 

if(content=="https://my-frames-rouge.vercel.app/frames")
  return (
    <div
    key={contentId}
    className="max-w-[600px] mt-4 ml-2 mr-2 relative flex flex-col rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div className="flex items-start space-x-3">
      <img
        src={"/images/memecoin.jpg"} // URL of the sender's profile picture
        alt={"Meme Bot"}
        className="w-10 h-10 rounded-full"
      />
    <FrameUI frameState={frameState} components={components} theme={theme} />
    </div></div>
  );
  
  if(typeId == "text")
  return (
    <div
    key={contentId}
    className="max-w-[600px] mt-4 ml-2 mr-2 relative flex flex-col rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div className="flex items-start space-x-3">
      <img
        src={"/images/memecoin.jpg"} // URL of the sender's profile picture
        alt={"Meme Bot"}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 p2">
        <p className="text-sm font-medium text-gray-900">{sender == process.env.NEXT_PUBLIC_BOT_ADDRESS ? "Meme Bot": "You"}</p>
        <p className="whitespace-pre-wrap text-sm text-gray-500 break-all">{content}</p>
      </div>
    </div>
  </div>
  


  );

  if(typeId == "image")
  return (

    <div
    key={contentId}
    className="mt-4 w-full relative flex flex-col rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div className="flex items-start space-x-3">
    <img
        src={"/images/memecoin.jpg"} // URL of the sender's profile picture
        alt={"Meme Bot"}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
      <p className="text-sm font-medium text-gray-900">Meme Bot</p>
   
     <p className="text-sm font-medium text-gray-900"><img src={content}/></p>
    </div>
    </div>
    </div>

  );

  if(typeId != "text")
    return (
      <div
      key={contentId}
      className="max-w-[600px] mt-4 ml-2 mr-2 relative flex flex-col rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div className="flex items-start space-x-3">
        <img
          src={"/images/memecoin.jpg"} // URL of the sender's profile picture
          alt={"Meme Bot"}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 p2">
          <p className="text-sm font-medium text-gray-900">{sender == process.env.NEXT_PUBLIC_BOT_ADDRESS ? "Not you": "You"}</p>
          <p className="text-sm text-gray-500 break-all">{content}</p>
        </div>
      </div>
    </div>
    
  
  
    );
  
  
}

export default MessageCard;