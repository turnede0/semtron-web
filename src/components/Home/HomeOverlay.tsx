/*  ./components/Navbar.jsx     */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Josefin_Sans } from "@next/font/google";
import HomeOne from "@public/image/omron_2JCIE.jpg";

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
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries: any) => {
    const [entry] = entries; //const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMarhin: "0px",
      threshold: 0.3,
    };
  }, []);

  const t = useTranslations("IndexPage");

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = ImageRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [ImageRef, options]);

  return (
    <div
      ref={ImageRef}
      className={`bg-fixed bg-black bg-cover bg-no-repeat h-screen`}
      style={{
        backgroundImage: `url(${HomeOne.src})`,
      }}
    >
      <div
        className={`absolute bg-black w-screen h-screen transform duration-2000 z-30 ${
          isVisible ? "bg-opacity-0" : "bg-opacity-95"
        } `}
        id="black_overlay"
      ></div>
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
                  : "text-4xl md:text-6xl lg:text-8xl"
              }`}
            >
              <h6 className={`${josefin_Sans.className} lg:w-[800px]`}>
                <span
                  className="text-white
                 "
                >
                  {t("message")}
                  <div className="bg-themeblue  p-4 h-fit w-fit">
                    {t("engineer")}
                  </div>
                  {/* <div className="bg-black  p-4 h-fit w-fit">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      {t("engineer")}
                    </span>
                  </div> */}
                  <span>?</span>
                </span>
              </h6>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
