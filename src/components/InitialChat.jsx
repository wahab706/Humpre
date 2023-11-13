import React, { Fragment } from "react";
import { Message } from "./Message";

const initials = [
  { id: 0, content: "Hi, I’m Alice 👋 your friendly companion", owner: false },
  { id: 1, content: "Ready to chat?", owner: false },
];

export function InitialChat() {
  return (
    <Fragment>
      {initials?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Fragment>
  );
}
