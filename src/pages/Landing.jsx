import React, { useState } from "react";
import { Messages, Input, Header, InitialChat } from "../components";

export function Landing() {
  const [messagesList, setMessagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <div className="flex h-screen pb-6">
      <div className="main_container">
        <div className="flex flex-col h-full">
          <Header videoSrc={videoSrc} />

          <div className="chat_list">
            <InitialChat />
            <Messages messages={messagesList} loading={loading} />
          </div>

          <Input
            messagesList={messagesList}
            setMessagesList={setMessagesList}
            loading={loading}
            setLoading={setLoading}
            setVideoSrc={setVideoSrc}
          />
        </div>
      </div>
    </div>
  );
}
