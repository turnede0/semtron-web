/*  ./components/Navbar.jsx     */
"use client";
import * as React from "react";
import Image from "next/image";
import { Link, useTranslations } from "next-intl";
import Checklist from "@public/icon/Checklist.png";
import MoneyBag from "@public/icon/MoneyBag.png";
import Announcement from "@public/icon/Announcement.png";
import Presentation from "@public/icon/BusinessPresentation.png";
import aerosimlogo from "@public/image/aerosimLogo.png";
import hkstplogo from "@public/image/HKSTP_logo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";
import { Reveal } from "@src/components/common/Reveal";

export const MissionOverlay = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className={`bg-white text-black py-20 lg:my-20 whitespace-pre-line`}>
      <section
        className="relative flex justify-center items-center z-10  max-h-full overflow-hidden -mb-1"
        id="top"
        data-section="section1"
      >
        <div className={`flex-col w-full flex justify-center items-center`}>
          <div className="motion-safe:animate-fadeIn">
            <span className="text-themedarkblue text-3xl leading-10 lg:text-5xl">
              {t("missionoverlay.simauto")}
            </span>
            <span className="text-themedarkblue text-3xl leading-10  lg:text-5xl">
              {t("missionoverlay.vision")}
            </span>
          </div>

          <span className="md:w-[400px] text-themedarkblue text-lg mx-10 my-10">
            <Reveal>
              <>{t("missionoverlay.message")}</>
            </Reveal>
          </span>

          <span className="md:w-[600px] text-gray-400 mx-10 my-5">
            <Reveal>
              <>{t("missionoverlay.message2")}</>
            </Reveal>
          </span>

          <Link href="/technology">
            <button className="mt-20 p-5 px-5 float-right  bg-themedarkblue hover:bg-themeyellow text-white md:text-2xl lg:text-3xl motion-safe:animate-fadeIn shadow-innerDefault hover:shadow-inner transition ease-in-out delay-200">
              {t("missionoverlay.technology")}
            </button>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4" role="group">
            <div className="block w-[200px] m-10 lg:p-6">
              <Image className="w-[70px]" src={Checklist} alt="businessplan" />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                <>{t("missionoverlay.sustainable.title")}</>
              </h5>
              <Reveal>
                <p className="mb-4 text-base text-gray-400">
                  <>{t("missionoverlay.sustainable.message")}</>
                </p>
              </Reveal>
            </div>
            <div className="block w-[200px] m-10 lg:p-6">
              <Image className="w-[70px]" src={MoneyBag} alt="businessplan" />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                <>{t("missionoverlay.awareness.title")}</>
              </h5>
              <Reveal>
                <p className="mb-4 text-base text-gray-400">
                  <>{t("missionoverlay.awareness.message")}</>
                </p>
              </Reveal>
            </div>
            <div className="block w-[200px] m-10 lg:p-6 ">
              <Image
                className="w-[70px]"
                src={Announcement}
                alt="businessplan"
              />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                <>{t("missionoverlay.recycling.title")}</>
              </h5>
              <Reveal>
                <p className="mb-4 text-base text-gray-400">
                  <>{t("missionoverlay.recycling.message")}</>
                </p>
              </Reveal>
            </div>
            <div className="block w-[200px] p-6 m-10">
              <Image
                className="w-[70px]"
                src={Presentation}
                alt="businessplan"
              />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                {t("missionoverlay.reducing.title")}
              </h5>
              <Reveal>
                <p className="mb-4 text-base text-gray-400">
                  <>{t("missionoverlay.reducing.message")}</>
                </p>
              </Reveal>
            </div>
          </div>
          <div className="md:inline-flex" role="group">
            <div className="m-10 " role="company logo badge">
              <Image height={70} src={aerosimlogo} alt="aero" />
            </div>
            <div className="m-10 h-[50px] " role="company logo badge">
              <Image height={70} src={hkstplogo} alt="hkstp" />
            </div>
            <div className="m-10 h-[50px]" role="company logo badge">
              <Image height={70} src={recyclingfundlogo} alt="businessplan" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
