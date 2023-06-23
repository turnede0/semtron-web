/*  ./components/Navbar.jsx     */
/*TODELETE: no use */
"use client";
import * as React from "react";
import Image from "next/image";
import { Link, useTranslations } from "next-intl";
import DesignCar from "@public/image/Design_2.jpg";
import { Reveal } from "@src/components/common/Reveal";
import { Josefin_Sans, Poppins } from "@next/font/google";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const MissionOverlay = () => {
  const t = useTranslations("IndexPage");
  return (
    <div
      className={`bg-fixed bg-black bg-cover bg-no-repeat h-screen`}
      style={{
        backgroundImage: `url(${DesignCar.src})`,
      }}
    >
      <Image
        className="fixed object-cover w-screen  z-[-1] "
        src={DesignCar}
        alt="Design Car"
      />
      <section
        className="relative flex justify-center items-center z-10  max-h-full overflow-hidden mx-10"
        id="top"
        data-section="section1"
      >
        <div
          className={`flex-col w-full flex justify-center items-start my-10`}
        >
          <div className="motion-safe:animate-fadeIn">
            <span
              className={`text-themeyellow text-2xl leading-10  lg:text-4xl ${josefin_Sans.className}`}
            >
              {t("missionoverlay.slogan")}
            </span>
          </div>
          <h1 className="w-[100px] h-[15px] font-bold bg-white border-t-2 my-10"></h1>

          <span
            className={`${poppins.className} md:w-[400px] text-white text-lg mb-10`}
          >
            <Reveal>
              <>{t("missionoverlay.message")}</>
            </Reveal>
          </span>
          <Link href="/technology">
            <button
              className={`${poppins.className} mt-20 p-5 px-5 float-right  bg-themedarkblue hover:bg-themeyellow text-white md:text-sm lg:text-md motion-safe:animate-fadeIn shadow-innerDefault hover:shadow-inner transition ease-in-out delay-200`}
            >
              {t("missionoverlay.technology")}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
