import React, { Fragment } from "react";
import logo from "../assets/d-idLogo.svg";
import addIcon from "../assets/addIcon.svg";
import alice from "../assets/alice.mp4";

export function Header() {
  return (
    <Fragment>
      <header className="header">
        <div className="nav"></div>
        {/* <img
          src={logo}
          alt="logo"
          className="absolute top-4 right-4 m-0 p-0 w-10 h-10 cursor-pointer"
        /> */}

        <div className="alice_container">
          <video
            loop
            autoPlay
            muted
            playsInline
            preload="yes"
            x-webkit-airplay="allow"
            controlsList="nodownload"
            className="alice_video"
            src={alice}
          ></video>
          <div className="alice_content"></div>
        </div>

        <button className="flex items-center mt-4 px-4 z-40 min-h-40px bg-white border-2 border-gray-300 rounded-full leading-2.5">
          <span className="border-r border-gray-300 pr-3">
            😊 Friendly Companion
          </span>
          <img src={addIcon} alt="add-icon" className="h-5 pl-3" />
        </button>
      </header>
    </Fragment>
  );
}
