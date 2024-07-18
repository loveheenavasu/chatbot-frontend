"use client"

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000/")

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

//   useEffect(() => {
//     socket.connect();

//     socket.on('message', (message) => {
        //  console.log(message)
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

  const sendMessage = () => {
    if (input.trim()) {
    //   socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
