import { io } from 'socket.io-client';

const SOCKET_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/`; 

const token = localStorage.getItem("authToken");

export const SOCKET = io(SOCKET_URL, {
  autoConnect: false,
  transports: ["polling", "websocket"],
  extraHeaders: {
    token: `Bearer ${token}`,
  },
});

