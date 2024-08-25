// The useStreamMessages hook streams new conversation messages on mount
// and exposes an error state.
import { useStreamMessages } from "@xmtp/react-sdk";
import type { CachedConversation, DecodedMessage } from "@xmtp/react-sdk";
import { useCallback, useEffect, useState } from "react";
 
export const Chat: React.FC<{
  conversation: CachedConversation;
}> = ({
  conversation,
}) => {
  // track streamed messages
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );
 
  // callback to handle incoming messages
  const onMessage = useCallback(
    (message: DecodedMessage) => {
      setStreamedMessages((prev) => [...prev, message]);
    },
    [streamedMessages],
  );
 
  useStreamMessages(conversation, {onMessage});
 
  useEffect(() => {
    setStreamedMessages([]);
  }, [conversation]);
 
  return (
    <div>
    {streamedMessages.map((message,index) => (
        <span key={index}>{message.content}</span>
      ))}
      </div>
  );
};