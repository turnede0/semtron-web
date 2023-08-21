"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import * as React from "react";
import omron_health_color from "@public/image/omron_health_color_v2.jpg";
import omron_bloodpressure from "@public/image/BloodPressureMonitor_EKG;.png";
import { useLocale, useTranslations } from "next-intl";
export const InfoHealth = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries) => {
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
            backgroundImage: `url(${omron_bloodpressure.src})`,
          }}
          ref={targetRef}
        >
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
            backgroundImage: `url(${omron_health_color.src})`,
          }}
        >
          <div
            id="info_container"
            className="text-white xl:h-1/3 2xl:h-auto 2xl:w-1/2 z-20 mx-8"
          >
            <div className="w-full">
              <div id="info_header">
                <div className="mb-2 border-t-4 w-[30px]"></div>
                <h5 className="text-sm md:text-xl font-black">Health Care</h5>
              </div>
              <div className="text-3xl md:text-4xl lg:text-7xl xl:text-6xl  py-12 2xl:py-30">
                Inspired by the mission of “contributing to the health and life
                of every person”
              </div>
            </div>
            <div className="w-full">
              <div className="mx-auto my-4 tablet:m-4 tablet:float-left w-[200px] sm:w-[290px] h-[55px] flex items-center justify-center border-4 border-omronblue text-white md:px-3 md:text-base lg:text-2xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
                <a href="#">Explore Healthcare</a>
              </div>
              <div className="mx-auto my-4 tablet:m-4 tablet:float-left w-[200px] sm:w-[290px] h-[55px] flex items-center justify-center border-4 border-omronblue text-white md:px-3 md:text-base lg:text-2xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
                <a href="#">Healthcare Product</a>
              </div>
            </div>
          </div>
          <div className="absolute bg-omronblue right-0 xl:right-20 -translate-y-96 md:-translate-y-72 xl:-translate-y-52 2xl:translate-y-0 w-[350px] 2xl:w-1/6">
            <div className="text-white flex items-center text-2xl m-8">
              {/* <h1 className="text-7xl">#1</h1> */}
              <p>
                <span className="text-5xl md:text-7xl">{"#1\n"}</span>
                <span>
                  {"Global market share for home-useblood pressure monitors"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
