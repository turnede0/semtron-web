"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import * as React from "react";

import omron_pcb_color from "@public/image/omron_2JCIE.jpg";
import omron_pcb_whiteline from "@public/image/omron_2JCIE_whiteline.png";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "../common/Reveal";

export const InfoElec = () => {
  const targetRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="absolute h-1/3 w-full opacity-95 bg-gradient-to-t from-transparent to-black pointer-events-none"
          id="top_gradient"
        ></div>
        <div
          className="absolute h-1/5 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent pointer-events-none"
          id="bottom_gradient"
        ></div>
        <div
          className={`bg-fixed bg-black bg-cover bg-no-repeat w-screen h-screen`}
          style={{
            backgroundImage: `url(${omron_pcb_color.src})`,
          }}
          ref={targetRef}
        >
          <div className="absolute flex flex-row justify-around items-around w-[80%] sm:p-4 sm:mt-72 z-40">
            <div className="flex flex-col justify-center items-center sm:items-start w-[70%] text-center sm:text-left">
              <Reveal>
                <div className="text-white sm:text-[70px] text-[40px] font-bold">
                  針對K-12的全方位
                </div>
              </Reveal>
              <Reveal>
                <span className="text-white sm:text-[70px] text-[40px] font-bold mb-7">
                  芯片工程師培訓方案
                </span>
              </Reveal>
              <Reveal>
                <span className="text-white sm:text-2xl text-xl mb-7">
                  協助學生成為未來 核心科技的締造者
                </span>
              </Reveal>
              <Reveal>
                <button className="w-[200px]  bg-green-400 text-4xl font-bold text-white py-3">
                  了解更多
                </button>
              </Reveal>
            </div>
            {/*         <Image
          className="w-[80%] m-5 hidden sm:block"
          src={courseMaterial}
          alt="course material"
        ></Image> */}
          </div>
          <div
            className={`bg-black w-screen h-screen transform duration-2000 z-30 ${
              isVisible ? "bg-opacity-0" : "bg-opacity-95"
            } `}
            id="black_overlay"
          ></div>
        </div>

        <div
          className="bg-fixed bg-black bg-cover bg-no-repeat w-screen h-screen flex items-center justify-center xl:justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url(${omron_pcb_whiteline.src})`,
          }}
        >
          <div
            id="info_container"
            className="text-white xl:h-1/2 2xl:h-auto 2xl:w-1/2 z-20 mx-8"
          >
            <div className="w-full">
              <div id="info_header">
                <div className="mb-2 border-t-4 w-[30px]"></div>
                <h5 className="text-sm md:text-xl font-black">
                  Integrated Circuit Design
                </h5>
              </div>
              <div className="text-3xl md:text-4xl lg:text-7xl xl:text-6xl  py-12 2xl:py-30">
                With our devices and modules,Create customer value, and
                Contribute to the society.
              </div>
            </div>
            <div className="w-full">
              <div className="mx-auto my-4 tablet:m-4 tablet:float-left w-[200px] sm:w-[290px] h-[55px] flex items-center justify-center border-4 border-omronblue text-white md:px-3 md:text-base lg:text-2xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
                <a href="#">Explore component</a>
              </div>
              <div className="mx-auto my-4 tablet:m-4 tablet:float-left w-[200px] sm:w-[290px] h-[55px] flex items-center justify-center border-4 border-omronblue text-white md:px-3 md:text-base lg:text-2xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
                <a href="#">Components News</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
