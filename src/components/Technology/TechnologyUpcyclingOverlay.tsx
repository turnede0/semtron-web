import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import wrecked from "@public/image/wrecked.jpg";
import mini_car_no_bg from "@public/image/mini_car_no_bg.png";
import aerosimlogo from "@public/image/aerosimLogo.png";
import hkstplogo from "@public/image/HKSTP_logo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";
import { Anton } from "@next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function TechnologyUpcyclingOverlay() {
  const t = useTranslations("TechnologyPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full opacity-80 bg-white z-0"
          id="bottom_gradient"
        ></div>
        <Image
          fill
          className="h-full object-cover z-[-1] "
          src={wrecked}
          alt="Logo"
        />
        <div
          className={`flex-col flex w-full justify-center items-start ml-52 z-[1]`}
        >
          <div className="border-themeyellow border-solid border-8 p-5 text-2xl text-bold">
            {t("upcyclingoverlay.message1")}
          </div>
          <div className="text-themedarkblue text-8xl">
            {t("upcyclingoverlay.message2")}
          </div>
        </div>
      </section>
      <div
        className={`relative flex justify-end bg-themedark text-black py-20`}
      >
        <div className="absolute bottom-0 left-0 bg-themeyellow overflow-hidden h-full w-full sm:w-[50%]">
          <Image className="object-cover" src={mini_car_no_bg} alt=""></Image>
        </div>
        <div className="relative w-1/2 h-[80%] flex justify-center items-center  p-5 z-0">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("upcyclingoverlay.title")}
            </h1>
            <div className="w-full flex">
              <p className="w-[70%] text-themedarkblue whitespace-pre-line">
                {t("upcyclingoverlay.content")}
              </p>
            </div>
            <div className="md:inline-flex" role="group">
              <div className="m-10 " role="company logo badge">
                <Image height={70} src={aerosimlogo} alt="aero" />
              </div>
              <div className="m-10 h-[50px]" role="company logo badge">
                <Image height={70} src={recyclingfundlogo} alt="businessplan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
