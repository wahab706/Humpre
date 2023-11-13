import React, { useEffect, useState } from "react";
import { Messages, Input, Header, InitialChat } from "../components";

export function Landing() {
  const messagesList = [
    // { id: 0, content: "hello", owner: true },
    // { id: 1, content: "Lorem ipsum", owner: false },
    // { id: 2, content: "Random message", owner: true },
    // { id: 3, content: "Goodbye", owner: false },
    // { id: 4, content: "Coding is fun!", owner: true },
    // { id: 5, content: "Testing 123", owner: false },
    // { id: 6, content: "Dynamic content", owner: true },
    // { id: 7, content: "Array of messages", owner: false },
    // { id: 8, content: "Random content here", owner: true },
    // { id: 9, content: "Greetings", owner: false },
  ];

  return (
    <div className="flex h-screen pb-6">
      <div className="main_container">
        <div className="flex flex-col h-full">
          <Header />

          <div className="chat_list">
            <InitialChat />
            <Messages messages={messagesList} />
          </div>

          <Input />
        </div>
      </div>
    </div>
  );
}
