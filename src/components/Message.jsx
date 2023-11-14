import React, { Fragment, useEffect, useRef } from "react";
import alice from "../assets/alice.mp4";

export function Message({ message }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Fragment>
      {/* {message.type == "video" ? (
        <div ref={ref} className={`video`}>
          <video
            // loop
            // autoPlay
            // muted
            // preload="yes"
            controls
            playsInline
            x-webkit-airplay="allow"
            controlsList="nodownload"
            className="msg_video"
            // src={alice}
            src={message.url}
          ></video>
        </div>
      ) : (
        <div
          ref={ref}
          className={`message ${message.owner ? "self-msg" : "reply-msg"}`}
        >
          {message.content}
        </div>
      )} */}

      <div
        ref={ref}
        className={`message ${message.owner ? "self-msg" : "reply-msg"}`}
      >
        {message.content}
      </div>
    </Fragment>
  );
}
