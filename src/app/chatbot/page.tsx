"use client";
import React, { Suspense, useEffect, useState } from "react";
import ChatContainer from "@/components/ChatContainer";
import ChatFooter from "@/components/ChatFooter";
import ChatHeader from "@/components/ChatHeader";
import { Box } from "@chakra-ui/react";
import { SOCKET } from "../../services/socket";
import { useSearchParams } from "next/navigation";

interface Message {
  chatId: number | null;
  type: "AI" | "user" | string;
  message: string;
}

const ChatBot = () => {
  const [chatMessage, setChatMessage] = useState<Message[]>([
    {
      chatId: null,
      type: "AI",
      message: "Welcome to our Chatbot",
    },
  ]);
  //http://localhost:3000/chatbot?id=7f00126e-0cbe-4f43-9042-300b271c90d5
  const [chatId, setChatId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // const searchParams = useSearchParams();

  const id = "7f00126e-0cbe-4f43-9042-300b271c90d5";
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
    // <Suspense fallback={<div>Loading...</div>}>
    <Box>
      <ChatHeader />
      <ChatContainer chatMessage={chatMessage} loading={loading} />
      {/* <Box>{loading && "loading..."}</Box> */}
      <ChatFooter handleSend={handleSend} />
    </Box>
    // </Suspense>
  );
};

export default ChatBot;
