import { Avatar, Box, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";


const ChatHeader = () => {
  return (
    <Box className={styles.chatHeader}>
      <Heading size={"md"}> ChatBOT </Heading>
    </Box>
  );
};

export default ChatHeader;
