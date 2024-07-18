"use client"
import { Avatar, Box, Input, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../app/chatbot/chatbot.module.css";
import { VscSend } from "react-icons/vsc";

interface ChatFooterProps {
    setMessage?:any ;
    message?: string;
    handleSend?: (e:React.FormEvent, message:string) => void
}
const ChatFooter = ({ handleSend}:ChatFooterProps) => {
  const [message, setMessage] = useState<string>("")

  return (
    <form style={{width:"100%"}} onSubmit={(e) => {
        handleSend?.(e, message)
        setMessage("")
    }}>
    <Box className={styles.chatFooter}>
        
        <Input
        className={styles.messageInput}
        color={"black"}
        variant="filled"
        height={"40px"}
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ backgroundColor: 'white' }}
      />

        
     
      <VscSend role='button' type='submit' fontSize={30} />
      

    </Box>
    </form>
  );
};

export default ChatFooter;
