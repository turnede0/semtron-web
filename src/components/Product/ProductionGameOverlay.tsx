import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Body_side_human from "@public/image/body_side_human.png";
import dirt_rally from "@public/image/dirt_rally.png";
import euro_truck from "@public/image/euro_truck.png";
import r2v from "@public/image/news-demo-release-7.jpg";
import mini_car_no_bg from "@public/image/mini_car_no_bg.png";
import aerosimlogo from "@public/image/aerosimLogo.png";
// import hkstplogo from "@public/image/HKSTP_logo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";

export default function ProductionGameOverlay() {
  const t = useTranslations("ProductPage");
  return (
    <div>
      <div className={`relative inline-flex min-h-screen overflow-hidden`}>
        <div>
          <span className={`text-themeyellow text-8xl`}>
            {t("gameovelay.message")}
          </span>
        </div>
        <div className="w-1/3 h-full bg-red-500 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={dirt_rally}
            alt=""
          ></Image>
        </div>
        <div className="w-1/3 h-full bg-red-500 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={euro_truck}
            alt=""
          ></Image>
        </div>
        <div className="w-1/3 h-full bg-red-500 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={r2v}
            alt=""
          ></Image>
        </div>
      </div>
      <div
        className={`relative flex justify-end bg-themeyellow min-h-screen text-black py-20`}
      >
        <div className=" overflow-hidden h-full sm:w-[50%]">
          <Image className="object-cover" src={Body_side_human} alt=""></Image>
        </div>
        <div className="relative w-1/2 h-[80%] flex justify-center items-center  p-5 z-0 bg-themedarkblue">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("gameovelay.title")}
            </h1>
            <div className="w-full flex">
              <p className="w-[70%] text-white whitespace-pre-line">
                {t("gameovelay.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
