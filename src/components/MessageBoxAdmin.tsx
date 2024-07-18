import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";

export enum Role{
  User = "USER",
  AI = 'AI'
}

interface Message {
  chatId?: number | null;
  type: string
  message: string;
}

interface MessageBoxAdminProps {
  data: Message;
}

const MessageBoxAdmin = ({ data }: MessageBoxAdminProps) => {
  return (
    <Box className={styles.messageBox}>
      <Avatar
        ml={2}
        size="md"
        name={data?.type === "AI" ? "Kent Dodds" : "Dan Abrahmov"}
        src={
          data?.type === Role.AI
            ? "https://bit.ly/kent-c-dodds"
            : "https://bit.ly/dan-abramov"
        }
      />
      <Box className={styles.chat}>{data?.message}</Box>
    </Box>
  );
};

export default MessageBoxAdmin;
