"use client";
import ChatContainer from "@/components/ChatContainer";
import ChatFooter from "@/components/ChatFooter";
import ChatHeader from "@/components/ChatHeader";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { SOCKET } from "../../services/socket";

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
        message: "Welcome to our support chat! How can I assist you today?",
      },
    ])
  );
  const [chatId, setChatId] = useState<string>("");
  const token = localStorage.getItem("authToken");
  // const socket: Socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/`, {
  //   transports: ["polling", "websocket"],
  //   extraHeaders: {
  //     token: `Bearer ${token}`,
  //   },
  //   // auth: {
  //   //   token: `Bearer ${token}`,
  //   // },
  // });

  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const socketUrl = baseUrl?.replace(/^http/, 'ws') + '/ws';

  // // const socketUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/ws`
  // const ws = useRef<WebSocket | null>(null);

  // const handleSend = (e: React.FormEvent, message: string) => {
  //   console.log(message, 'MESSAGE')
  //   if (message === "") {
  //     return null;
  //   }
  //   e.preventDefault();
  //   socket.emit("search", { message });
  //   setChatMessage([
  //     ...chatMessage,
  //     {
  //       id: chatMessage.length + 1,
  //       role: "user",
  //       message: message,
  //       timestamp: "2024-07-10T09:00:00Z",
  //     },
  //   ]);
  // };

  useEffect(() => {
    SOCKET.connect();
    SOCKET.on("connect", () => {
      console.log(SOCKET.id, "wjefre");
    });
    SOCKET.on("searches", (data) => {
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
    let documentId = localStorage.getItem("documentId");
    SOCKET.emit("search", {
      text: message,
      connectId: chatId || SOCKET.id,
      documentId,
    });
  };

  return (
    <Box>
      <ChatHeader />
      <ChatContainer chatMessage={chatMessage} />
      <ChatFooter handleSend={handleSend} />
    </Box>
  );
};

export default ChatBot;
