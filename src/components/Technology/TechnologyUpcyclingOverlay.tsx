import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import wrecked from "@public/image/wrecked.jpg";
import mini_car_no_bg from "@public/image/mini_car_no_bg.png";
import aerosimlogo from "@public/image/aerosimLogo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";
import { Reveal } from "../common/Reveal";

export default function TechnologyUpcyclingOverlay() {
  const t = useTranslations("TechnologyPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1 "
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
        <Reveal>
          <div className={`items-start lg:ml-52 z-[1] p-5`}>
            <span className="border-themeyellow border-solid border-8 text-2xl text-bold p-2">
              {t("upcyclingoverlay.message1")}
            </span>

            <div className="text-themedarkblue text-4xl lg:text-8xl my-5">
              {t("upcyclingoverlay.message2")}
            </div>
          </div>
        </Reveal>
      </section>
      <div
        className={`relative lg:flex justify-end bg-themedark text-black py-20`}
      >
        <div className="lg:absolute bottom-0 left-0 flex items-center bg-themeyellow overflow-hidden h-full w-full sm:w-[50%]">
          {/* <motion.div variants={cardVariants}> */}
          <Image className="object-cover" src={mini_car_no_bg} alt=""></Image>
          {/* </motion.div> */}
        </div>

        <div className="relative lg:w-1/2 h-[80%] flex justify-center items-center  p-5 z-0">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("upcyclingoverlay.fundtitle")}
            </h1>
            <div className="w-full flex">
              <Reveal>
                <p className="lg:w-[70%] text-themedarkblue whitespace-pre-line">
                  {t("upcyclingoverlay.fundcontent")}
                </p>
              </Reveal>
            </div>
            <div className="md:inline-flex" role="group">
              <div className="m-10 " role="company logo badge">
                <Image height={70} src={aerosimlogo} alt="aero" />
              </div>
              <div className="m-10 h-[50px]" role="company logo badge">
                <Image height={70} src={recyclingfundlogo} alt="businessplan" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("upcyclingoverlay.title")}
            </h1>
            <div className="w-full flex">
              <Reveal>
                <p className="lg:w-[70%] text-themedarkblue whitespace-pre-line">
                  {t("upcyclingoverlay.content")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
