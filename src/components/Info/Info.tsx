/*  ./components/Navbar.jsx     */
import { useLocale, useTranslations } from "next-intl";
import * as React from "react";
import pingpong from "@public/image/pingpong01.jpg";
import { NewsCarousel } from "./NewsCarousel/NewsCarousel";

export const Info = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative w-screen h-screen max-w-full  bg-white flex ">
          <img
            src={pingpong.src}
            className="absolute w-screen h-screen object-cover"
          ></img>
          <div
            className="absolute h-1/3 w-full opacity-95 bg-gradient-to-t from-transparent to-black"
            id="top_gradient"
          ></div>
          <div
            className="absolute h-1/3 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent"
            id="bottom_gradient"
          ></div>
          {/* Content*/}
          <div className="flex z-10 relative justify-end m-5 md:m-10 lg:mt-50">
            <div
              id="content"
              className="block bg-white border-omronblue border-8 sm:w-[200px] md:w-4/6 lg:w-2/6 maxHeightContent"
            >
              <div className="m-2 md:m-6">
                <h2 className="font-bold text-omronblue lg:text-xl sm:text-xs md:text-sm">
                  POPULAR SERVICES
                </h2>
                <h1 className="font-bold lg:text-5xl md:text-xl sm:text-lg ">
                  Excellent Service Provide For Business
                </h1>
                <p className="font-bold lg:text-2xl sm:text-sm md:mt-4 md:mb-4">
                  Our purpose follow leading design, engineering and industrial
                  manufacturing company specialising in mining, oil, gas and
                  engineering services.
                </p>
                <p className="lg:text-xl sm:text-xs md:mt-4 md:mb-8">
                  Our purpose follow leading design, engineering and industrial
                  manufacturing company specialising in mining, oil, gas and
                  engineering services.Our purpose follow leading design,
                  engineering and industrial.
                </p>
                <button className="border-4 border-omronblue text-black px-3 sm:text-sm md:text-2xl lg:text-3xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
                  <a href="#section5">About Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-screen h-screen">
          <NewsCarousel />
        </div>
      </div>
    </>
  );
};
