import React, { useEffect, useState } from "react";
import { Messages, Input, Header, InitialChat } from "../components";

export function Landing() {
  const messages = [
    // { id: 0, content: "hello", type: "text", url: "", owner: true },
    // { id: 1, content: "Lorem ipsum", type: "text", url: "", owner: false },
    // { id: 2, content: "Random message", type: "text", url: "", owner: true },
    // { id: 3, content: "Goodbye", type: "text", url: "", owner: false },
    // { id: 4, content: "Coding is fun!", type: "text", url: "", owner: true },
    // { id: 5, content: "Testing 123", type: "text", url: "", owner: false },
    // { id: 6, content: "Dynamic content", type: "text", url: "", owner: true },
    // {
    //   id: 7,
    //   content: "Array of messages",
    //   type: "text",
    //   url: "",
    //   owner: false,
    // },
    // {
    //   id: 8,
    //   content: "Random content here",
    //   type: "text",
    //   url: "",
    //   owner: true,
    // },
    // { id: 9, content: "Greetings", type: "text", url: "", owner: true },
    // {
    //   id: 10,
    //   content: "Greetings",
    //   type: "video",
    //   url: "https://chat.d-id.com/videos/prs_alice.idle.mp4",
    //   owner: false,
    // },
  ];

  const [messagesList, setMessagesList] = useState([]);

  // useEffect(() => {
  //   console.log('messagesList', messagesList);
  // }, [messagesList])
  

  return (
    <div className="flex h-screen pb-6">
      <div className="main_container">
        <div className="flex flex-col h-full">
          <Header />

          <div className="chat_list">
            <InitialChat />
            <Messages messages={messagesList} />
          </div>

          <Input
            messagesList={messagesList}
            setMessagesList={setMessagesList}
          />
        </div>
      </div>
    </div>
  );
}
