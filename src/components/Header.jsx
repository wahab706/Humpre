import React, { useState, useEffect, Fragment } from "react";
import logo from "../assets/d-idLogo.svg";
import addIcon from "../assets/addIcon.svg";
import alice from "../assets/alice.mp4";

export function Header({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleTogglePlay = () => {
    const video = document.getElementById("aliceVideo");

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleDoubleClick = () => {
    const video = document.getElementById("aliceVideo");

    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen(video);
    }
  };

  const enterFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

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
          {videoSrc ? (
            <video
              // controls
              autoPlay
              preload="yes"
              playsInline
              x-webkit-airplay="allow"
              controlsList="nodownload"
              id="aliceVideo"
              src={videoSrc}
              onClick={handleTogglePlay}
              onEnded={handleVideoEnded}
              onDoubleClick={handleDoubleClick}
              className={`cursor-pointer alice_video ${
                isFullscreen ? "!rounded-none" : "rounded-full"
              }`}
            />
          ) : (
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
            />
          )}
          <div className="alice_content"></div>
        </div>

        {/* <button className="flex items-center mt-4 px-4 z-40 min-h-40px bg-white border-2 border-gray-300 rounded-full leading-2.5">
          <span className="border-r border-gray-300 pr-3">
            😊 Friendly Companion
          </span>
          <img src={addIcon} alt="add-icon" className="h-5 pl-3" />
        </button> */}
        <div className="mt-4 min-h-40px" />
      </header>
    </Fragment>
  );
}
