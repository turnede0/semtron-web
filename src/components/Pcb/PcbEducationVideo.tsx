"use client";
import React from "react";
import Image from "next/image";
import BgImage from "@public/image/course/pcb/education/bg.jpg";
import YouTube, { YouTubeProps } from "react-youtube";

// Lazy load the YouTube player

export default function PcbEducationVideo() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
    },
  };

  return (
    <div className="w-screen h-screen relative">
      <Image
        src={BgImage}
        className="absolute w-full h-full object-cover z-0"
        alt="video"
      />
      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        <YouTube
          videoId={"7YUAeDl1NMY"}
          opts={opts}
          onReady={onPlayerReady}
          // iframeClassName={"w-[70vw] h-[40vw]"}
        />
      </div>
    </div>
  );
}
