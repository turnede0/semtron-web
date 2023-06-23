/*  ./components/Navbar.jsx     */
"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Josefin_Sans } from "@next/font/google";
import HomeOne from "@public/image/R56-on-ride.jpg";

import { useRef } from "react";
import { Reveal } from "../common/Reveal";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export const HomeOverlay = () => {
  const locale = useLocale();
  const ImageRef = useRef(null);

  const t = useTranslations("IndexPage");

  return (
    <div
      ref={ImageRef}
      className={`bg-fixed bg-black bg-cover bg-no-repeat h-screen`}
      style={{
        backgroundImage: `url(${HomeOne.src})`,
      }}
    >
      <Reveal>
        <section
          className="relative flex justify-center items-center min-h-screen z-10  max-h-full overflow-hidden -mb-1  "
          id="top"
          data-section="section1"
        >
          <div
            className={`flex-col w-full flex  items-start motion-safe:animate-fadeIn mx-20`}
          >
            <div
              className={`text-white ${
                locale == "hk"
                  ? "text-5xl md:text-7xl lg:text-8xl"
                  : "text-4xl md:text-6xl lg:text-7xl"
              }`}
            >
              <h6 className={`${josefin_Sans.className} w-[500px]`}>
                <span className="text-themeyellow ">
                  {t("futurerecycling")}{" "}
                </span>
              </h6>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
