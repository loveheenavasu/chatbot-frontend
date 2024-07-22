import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import styles from "../app/chatbot/chatbot.module.css";

const MessageBoxUser = () => {
  return (
    <>
      <Box className={styles.messageBox}>
        <Box className={styles.chat}>
 I am very stressed. Life is so borinLife is so boring</Box>
        <Avatar
          mr={2}
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
    </>
  );
};

export default MessageBoxUser;
