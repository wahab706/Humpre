import React, { useState, useEffect, Fragment } from "react";
import { listenIcon } from "./Const";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function Input(props) {
  //   const { value, setValue, listening, setListening } = props;
  const { messagesList, setMessagesList } = props;

  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
  } = useSpeechRecognition();

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value && !listening) {
      console.log("send chat message");

      // this is just for dummy messages
      let message1 = {
        id: messagesList.length + 1,
        content: value,
        type: "text",
        url: "",
        owner: true,
      };

      let message2 = {
        id: messagesList.length + 2,
        content: "Greetings",
        type: "text",
        url: "",
        owner: false,
      };

      setValue("");
      setTimeout(() => {
        setMessagesList((prevMessages) => [
          ...prevMessages,
          message1,
          message2,
        ]);
      }, 700);
    } else {
      if (listening) {
        stopListening();
      } else {
        startListening();
      }
    }
  };

  // =========Speech To Text=============
  //   useEffect(() => {
  //     // we have to run startListening fucnction once to check
  //     // isMicrophoneAvailable available or not, then instantly we run stopListening
  //     setTimeout(() => {
  //       SpeechRecognition.startListening();
  //     }, 100);
  //     setTimeout(() => {
  //       SpeechRecognition.stopListening();
  //     }, 300);
  //   }, []);

  const startListening = () => {
    setTimeout(() => {
      if (!isMicrophoneAvailable) {
        alert("Please allow Microphone access");
        return;
      }

      if (browserSupportsContinuousListening) {
        SpeechRecognition.startListening({ continuous: true });
      } else {
        SpeechRecognition.startListening();
      }
    }, 100);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const resetTranscription = () => {
    resetTranscript();
    setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 500);
  };

  const onTouchStart = () => {
    handleSubmit();
  };

  const onTouchEnd = () => {
    handleSubmit();
  };

  useEffect(() => {
    if (listening) {
      //   if (transcript.length >= 45) {
      //     stopListening();
      //     return;
      //   }
      setValue(transcript); // setting transcript into value state
    }
  }, [transcript]);

  return (
    <div className="input-container">
      <div className="input-main">
        <span className="error-div"></span>

        {listening && (
          <span className="listner-div">
            <div className="bg-transparent w-6 overflow-hidden outline-none !m-0 !mr-auto">
              {listenIcon()}
            </div>
            Listening
          </span>
        )}

        <input
          type="text"
          placeholder="Please type..."
          minLength="0"
          maxLength="350"
          value={value}
          disabled={listening}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="input-field"
        />
        <span className="limit">{value.length} / 350</span>
      </div>

      {/* for medium and large devices */}
      <button
        className={`btn hidden sm:block ${
          value && !listening ? "send-btn" : "mic-btn"
        }`}
        disabled={!value && !browserSupportsSpeechRecognition}
        onClick={handleSubmit}
      />

      {/* for mobile and small screens */}
      <button
        className={`btn block sm:hidden ${
          value && !listening ? "send-btn" : "mic-btn"
        }`}
        disabled={!value && !browserSupportsSpeechRecognition}
        onTouchStart={onTouchStart}
        onTouchEnd={listening ? onTouchEnd : () => {}}
      />
    </div>
  );
}
