import { Avatar, Box, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";
import { FaCircle } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <Box className={styles.chatHeader}>
      <FaCircle color="#8ff78f" />
      <Avatar
        mt={"2px"}
        size="md"
        name="Kent Dodds"
        src="https://bit.ly/kent-c-dodds"
      />{" "}
      <Heading size={"md"}> ChatBOT Assistant</Heading>
    </Box>
  );
};

export default ChatHeader;
