"use client";
import ChatContainer from "@/components/ChatContainer";
import ChatFooter from "@/components/ChatFooter";
import ChatHeader from "@/components/ChatHeader";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { SOCKET } from "../../services/socket";
import { useSearchParams } from "next/navigation";
import Loader from "react-js-loader";

interface Message {
  chatId: number | null;
  type: "AI" | "user" | string;
  message: string;
}

const ChatBot = () => {
  const [chatMessage, setChatMessage] = useState<Message[]>(
    ([] = [
      {
        chatId: null,
        type: "AI",
        message: "Welcome to our Chatbot",
      },
    ])
  );
  const [chatId, setChatId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  useEffect(() => {
    SOCKET.connect();
    SOCKET.on("connect", () => {
      console.log(SOCKET.id, "wjefre");
    });
    SOCKET.on("searches", (data) => {
      if (data.type === "USER") {
        setLoading(true);
      } else {
        setLoading(false);
      }
      setChatId(data?.chatId);
      setChatMessage((prev) => [...prev, data]);
    });
    SOCKET.on("hi", (e) => console.log(e, "EVENT", SOCKET.id));
    SOCKET.on("error", () => {
      console.log(SOCKET, "sdfsefsd");
    });

    return () => {
      SOCKET.disconnect();
    };
  }, []);

  const handleSend = (e: React.FormEvent, message: string) => {
    if (message === "") {
      return null;
    }
    e.preventDefault();

    SOCKET.emit("search", {
      text: message,
      connectId: chatId || SOCKET.id,
      documentId: id,
    });
  };

  return (
    <Box>
      <ChatHeader />
      <ChatContainer chatMessage={chatMessage} loading={loading} />
      {/* <Box>{loading && "loading..."}</Box> */}
      <ChatFooter handleSend={handleSend} />
    </Box>
  );
};

export default ChatBot;
