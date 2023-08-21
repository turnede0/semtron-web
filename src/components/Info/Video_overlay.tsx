"use client";
import * as React from "react";
// import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import ReactPlayer from "react-player";
export const VideoOverlay = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <div className="h-screen w-screen">
      <section
        className="relative z-10 block min-w-full h-full max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <ReactPlayer
          className="min-w-full min-h-full max-h-full object-cover"
          playing
          loop
          muted
          url="https://www.youtube.com/watch?v=7AszYpTnrzc&t=27s"
        />
        {/** black overlay start*/}
        <div className="absolute left-0 top-0 w-full h-full flex justify-between">
          <div className="relative flex w-1/2">
            <div className="w-3/12 h-screen bg-black"></div>
            <div className="w-1/12 h-screen bg-gradient-to-r from-black to-transparents"></div>
          </div>
          <div className="relative flex justify-end  w-1/2">
            <div className="w-1/12 h-screen bg-gradient-to-l from-black to-transparents"></div>
            <div className="w-3/12 h-screen bg-black"></div>
          </div>
        </div>
        {/** black overlay end */}
        <div
          className="absolute h-1/3 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent"
          id="bottom_gradient"
        ></div>
        <div
          className="absolute top-0 left-0 flex items-center justify-center w-full h-full  bg-videooverlay bg-opacity-20"
          // onClick={VideoPlayClick}
        >
          <div className="inline-block">
            <div
              className={`text-white ${
                locale == "hk"
                  ? "text-5xl md:text-7xl lg:text-9xl"
                  : "text-4xl md:text-6xl lg:text-8xl"
              } uppercase`}
            >
              <h6>
                <span className="text-black bg-semtronblue">
                  {t("video_text_two")}
                </span>
              </h6>
              <span className={`${locale == "hk" ? "" : "table-caption"}`}>
                {t("video_text_three")}
              </span>
            </div>
            <button className="float-right border-4 border-semtronblue text-white px-3 md:text-2xl lg:text-3xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
              <a href="#section5">{t("explore")}</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
