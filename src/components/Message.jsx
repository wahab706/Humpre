import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export function Message({ message }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.owner ? "self-msg" : "reply-msg"} ${
        message.isError && "border border-red-300 !bg-transparent"
      } ${message.type == "video" && "!bg-transparent !p-0 !-ml-1.5"} `}
    >
      {message.owner || message.type == "text" ? (
        <span className={`${message.isError && "text-red-400 "}`}>
          {message.content}
        </span>
      ) : (
        <video
          preload="yes"
          controls
          playsInline
          x-webkit-airplay="allow"
          controlsList="nodownload"
          className="msg_video"
          src={message.content}
        />
      )}
    </div>
  );
}
