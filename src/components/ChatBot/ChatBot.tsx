import { useMessages, useStreamMessages ,  useClient,useSendMessage
} from "@xmtp/react-sdk";
import type { CachedConversation, DecodedMessage } from "@xmtp/react-sdk";
import {useRef, useCallback, useEffect, useState } from "react";
 import MessageCard from "../MessageCard/MessageCard";
export const  ChatBot: React.FC<{
    conversation: CachedConversation ;
  }> = ({
    conversation,
  }) => {

    const {client} = useClient()
    const { sendMessage } = useSendMessage();
    const divRef = useRef(null);

    

  const onError = useCallback((message) => {
    console.log(message)
  }, []);
  const onMessage = useCallback((message:DecodedMessage) => {
    setStreamedMessages(prev=>[...prev, message]);
  }, []);
  useStreamMessages(conversation, { onMessage,onError });
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [streamedMessages]); // Run this effect every time 'messages' change
 
  const handleKeyDown  = async(event) =>{
    if(event.key ==="Enter")
    {
        const _data = document.getElementById("textInput").value 
        if(_data.length > 0)
        {
          await sendMessage(conversation,_data)
          document.getElementById("textInput").value = ""

        }
    }


 }


return ( <><div       ref={divRef}
   className="border border-4 border-black rounded-lg bg-gray-200 p-6 overflow-y-auto overflow-x-hidden max-h-[400px] h-[400px]  scrollbar-thumb-black scrollbar-track-white">


{streamedMessages.map((message,index) => (
<MessageCard key={message.id} contentId={message.id} content={message.content} typeId={message.contentType.typeId} sender={message.senderAddress} />
))}
   


 </div>
 
<div className=" mt-2 flex items-center justify-between ">
      <input
        type="text"
        id="textInput"
        onKeyDown={handleKeyDown}

        placeholder="Type your message here..."
        className="bg-black text-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 flex-1"
      />
                    
    </div></>)
}