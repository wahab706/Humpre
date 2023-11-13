import React, { useEffect, useRef } from "react";

export function Message({ message }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.owner ? "self-msg" : "reply-msg"}`}
    >
      {message.content}
    </div>
  );
}
