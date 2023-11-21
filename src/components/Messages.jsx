import React, { Fragment } from "react";
import { Message, Loader } from "../components";

export function Messages(props) {
  const { messages, loading } = props;

  if (!messages?.length && !loading) {
    return null;
  }

  return (
    <Fragment>
      {messages?.map((message, index) => (
        <Message key={index} message={message} />
      ))}

      {loading && <Loader />}
    </Fragment>
  );
}
