import React, { useState, useEffect } from "react";
import { listenIcon } from "./Const";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

export function Input(props) {
  const { messagesList, setMessagesList, loading, setLoading } = props;
  const BASE_URL = "http://127.0.0.1:8000/api/convert-videos/";

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
    if (value && !listening && !loading) {
      handleMessages(value, true);
      sendMessage(value);
      setValue("");
    } else {
      if (listening) {
        stopListening();
      } else {
        startListening();
      }
    }
  };

  const sendMessage = async (value) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}`,
        {
          text: value,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data?.message == "success") {
        handleMessages(response.data, false);
      } else {
        handleMessages(error, false, true);
      }
      setLoading(false);
    } catch (error) {
      console.warn("Api Error", error);
      setLoading(false);
      handleMessages(error, false, true);
    }
  };

  const handleMessages = (data, self, isError) => {
    let message = {
      id: messagesList.length + 1,
      content: self
        ? data
        : isError
        ? "Something went wrong! try again."
        : data.video_url,
      isError: self ? false : isError ? true : false,
      type: self ? "text" : isError ? "text" : "video",
      owner: self ? true : false,
    };

    setMessagesList((prevMessages) => [...prevMessages, message]);
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

  useEffect(() => {
    if (!value && !listening && !loading) {
      resetTranscript();
    }
  }, [value]);

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
          disabled={listening || loading}
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
        disabled={loading || (!value && !browserSupportsSpeechRecognition)}
        onClick={handleSubmit}
      />

      {/* for mobile and small screens */}
      <button
        className={`btn block sm:hidden ${
          value && !listening ? "send-btn" : "mic-btn"
        }`}
        disabled={loading || (!value && !browserSupportsSpeechRecognition)}
        onTouchStart={onTouchStart}
        onTouchEnd={listening ? onTouchEnd : () => {}}
      />
    </div>
  );
}
