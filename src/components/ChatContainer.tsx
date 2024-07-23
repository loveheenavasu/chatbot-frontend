import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styles from "../app/chatbot/chatbot.module.css";
import MessageBoxAdmin, { Role } from "./MessageBoxAdmin";

interface chatMessage {
  chatID?: number | null;
  type: string;
  message: string;
}

interface ChatContainerProps {
  chatMessage: chatMessage[];
  loading: boolean;
}

const ChatContainer = ({ chatMessage, loading }: ChatContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatMessage]);
  return (
    <Box
      ref={containerRef}
      className={`${styles.chatContainer} ${loading ? styles.chatLoading : ""}`}
    >
      {chatMessage?.map((ele, id) => {
        return (
          <Box
            key={id}
            className={
              ele?.type === Role.AI
                ? styles.chatContainerAdmin
                : styles.chatContainerUser
            }
          >
            <MessageBoxAdmin data={ele} loading={loading} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ChatContainer;
