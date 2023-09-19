"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@src/components/common/Reveal";
import omron_pcb_whiteline from "@public/image/omron_2JCIE_whiteline.png";
import Image from "next/image";
import stemImage from "@public/image/photo/stem-workshop.png";
// import ReactPlayer from "react-player";

export default function DescriptionOverlay() {
  const t = useTranslations("IndexPage");
  return (
    <div
      className="bg-fixed bg-black bg-cover bg-no-repeat w-screen h-screen relative"
      style={{
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${omron_pcb_whiteline.src})`,
        backgroundImage: `url(${omron_pcb_whiteline.src})`,
      }}
    >
      <div
        className="absolute h-full bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent pointer-events-none"
        id="bottom_gradient"
      ></div>

      <div className="grid grid-cols-2 h-full">
        <Reveal>
          <div className="relative  flex justify-center items-center bg-themeblue p-5 z-0 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
            <div className="block p-10 m-10">
              <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
                {t("intro.title")}
              </h1>
              <h5 className="mb-2 text-3xl bold  text-white leading-tight my-5">
                {t("intro.subtitle")}
              </h5>
              <div className="w-full flex  my-5">
                <p className="lg:w-[80%] text-white whitespace-pre-line">
                  {t("intro.description")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="relative scale-125">
          <Image src={stemImage} alt="stem" className="absolute top-40" />
          {/* <ReactPlayer
          muted
          autoplay
          url="https://www.youtube.com/watch?v=7AszYpTnrzc"
        /> */}
        </div>
      </div>
    </div>
  );
}
