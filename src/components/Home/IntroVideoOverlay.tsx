"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@src/components/common/Reveal";
import omron_pcb_whiteline from "@public/image/omron_2JCIE_whiteline.png";
import Image from "next/image";
import stemImage from "@public/image/photo/stem-workshop.png";
// import ReactPlayer from "react-player";

export default function IntroVideoOverlay() {
  const t = useTranslations("IndexPage");
  return (
    <div
      className="bg-fixed bg-black bg-cover bg-no-repeat w-screen h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${omron_pcb_whiteline.src})`,
      }}
    >
      <div
        className="absolute h-1/5 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"
        id="bottom_gradient"
      ></div>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%] ">
        <Image className="" src={stemImage} alt="stem" />
        {/* <ReactPlayer
          muted
          autoplay
          url="https://www.youtube.com/watch?v=7AszYpTnrzc"
        /> */}
      </div>
      <Reveal>
        <div className="relative lg:w-1/2 flex justify-center items-center bg-themeblue p-5 z-0 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("intro.title")}
            </h1>
            <h5 className="mb-2 text-3xl bold  text-white leading-tight my-5">
              {t("intro.subtitle")}
            </h5>
            <div className="w-full flex lg:justify-end my-5">
              <p className="lg:w-[70%] text-white whitespace-pre-line">
                {t("intro.description")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
