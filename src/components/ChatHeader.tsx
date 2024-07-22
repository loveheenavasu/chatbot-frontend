import { Avatar, Box, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";
import { FaCircle } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <Box className={styles.chatHeader}>
      <Heading size={"md"}> ChatBOT </Heading>
    </Box>
  );
};

export default ChatHeader;
