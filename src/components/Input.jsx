import React, { useState, useEffect } from "react";
import { listenIcon } from "./Const";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function Input(props) {
  //   const { value, setValue, listening, setListening } = props;

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

  const handleSubmit = () => {
    if (value && !listening) {
      console.log("send chat message");
    } else {
      if (listening) {
        stopListening();
      } else {
        startListening();
      }
    }
  };

  // =========Speech To Text=============
  useEffect(() => {
    // we have to run startListening fucnction once to check
    // isMicrophoneAvailable available or not, then instantly we run stopListening
    setTimeout(() => {
      SpeechRecognition.startListening();
    }, 100);
    setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 300);
  }, []);

  const startListening = () => {
    setTimeout(() => {
      console.log("isMicrophoneAvailable", isMicrophoneAvailable);
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
    console.log("stopListening called");
    SpeechRecognition.stopListening();
  };

  const resetTranscription = () => {
    console.log("resetTranscript called");
    resetTranscript();
    setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 500);
  };

  const onTouchStart = () => {
    console.log("onTouchStart called");
    handleSubmit();
  };

  const onTouchEnd = () => {
    console.log("onTouchEnd called");
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
        // disabled={!value && !isMicrophoneAvailable}
        disabled={!value && !browserSupportsSpeechRecognition}
        onClick={handleSubmit}
      />

      {/* for mobile and small screens */}
      <button
        className={`btn block sm:hidden ${
          value && !listening ? "send-btn" : "mic-btn"
        }`}
        // disabled={!value && !isMicrophoneAvailable}
        disabled={!value && !browserSupportsSpeechRecognition}
        onTouchStart={onTouchStart}
        onTouchEnd={listening && onTouchEnd}
      />
    </div>
  );
}
