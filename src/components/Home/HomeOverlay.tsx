/*  ./components/Navbar.jsx     */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import HomeOne from "@public/image/omron_2JCIE.jpg";

import { useRef } from "react";
import { Reveal } from "@src/components/common/Reveal";

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
        className={`absolute bg-black w-screen h-screen transform duration-2000 ${
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
              className={`flex flex-col items-start text-white my-4 ${
                locale == "hk"
                  ? "text-5xl md:text-4xl lg:text-6xl"
                  : "text-4xl md:text-4xl lg:text-6xl"
              }`}
            >
              <div className="font-bold my-2">{t("message")}</div>

              <div className="float-right border-8 border-themeblue  text-white p-3 text-4xl my-2">
                {t("engineer")}
              </div>
            </div>

            <span className="text-lg text-white my-4">{t("message2")}</span>

            <button className="bg-themeblue   p-4 h-fit w-fit my-4 text-white hover:bg-white hover:text-themeblue transform duration-200">
              {t("explore")}
            </button>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
