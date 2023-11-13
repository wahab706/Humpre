import React, { useState } from "react";
import { listenIcon } from "./Const";

export function Input(props) {
  //   const { value, setValue, listening, setListening } = props;

  const [value, setValue] = useState("");
  const [listening, setListening] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      console.log("send chat message");
    } else {
      setListening(!listening);
    }
  };

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
      <button
        className={`btn ${value ? "send-btn" : "mic-btn"}`}
        // disabled={!value}
        onClick={handleSubmit}
      />
    </div>
  );
}
