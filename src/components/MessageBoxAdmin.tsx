import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";

export enum Role {
  User = "USER",
  AI = "AI",
}

interface Message {
  chatId?: number | null;
  type: string;
  message: string;
}

interface MessageBoxAdminProps {
  data: Message;
  loading: boolean;
}

const MessageBoxAdmin = ({ data, loading }: MessageBoxAdminProps) => {
  console.log(loading, 234242424242343);
  return (
    <>
      <Box className={styles.messageBox}>
        <Box className={styles.chat}>{data?.message}</Box>
      </Box>
    </>
  );
};

export default MessageBoxAdmin;
