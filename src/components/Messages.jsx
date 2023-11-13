import React, { Fragment } from "react";
import { Message } from "./Message";

export function Messages(props) {
  const { messages } = props;

  if (!messages?.length) {
    return null;
  }

  return (
    <Fragment>
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Fragment>
  );
}
