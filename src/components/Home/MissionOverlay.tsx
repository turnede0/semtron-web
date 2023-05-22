/*  ./components/Navbar.jsx     */
import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Checklist from "@public/icon/Checklist.png";
import MoneyBag from "@public/icon/MoneyBag.png";
import Announcement from "@public/icon/Announcement.png";
import Presentation from "@public/icon/BusinessPresentation.png";
import aerosimlogo from "@public/image/aerosimLogo.png";
import hkstplogo from "@public/image/HKSTP_logo.png";
// import semtronlogo from "@public/image/semtron_text_logo.png";
// import turnedelogo from "@public/image/turned-e-logo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";

export const MissionOverlay = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className={`bg-white text-black py-20 lg:my-20`}>
      <section
        className="relative flex justify-center items-center z-10  max-h-full overflow-hidden -mb-1"
        id="top"
        data-section="section1"
      >
        <div className={`flex-col w-full flex justify-center items-center`}>
          <span className="text-themedarkblue text-3xl leading-10 py-10 lg:text-5xl">
            {t("descriptionoverlay.vision")}
          </span>
          <span className="md:w-[400px] text-themedarkblue text-lg mb-10">
            {t("descriptionoverlay.message")}{" "}
          </span>
          <span className="md:w-[600px] text-gray-400">
            {t("descriptionoverlay.message2")}{" "}
          </span>
          <button className="mt-20 p-5 px-5 float-right  bg-themedarkblue text-white md:text-lg  transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner">
            <a href="#section5">{t("descriptionoverlay.technology")}</a>
          </button>
          <div className="md:inline-flex " role="group">
            <div className="block w-[200px] p-6 m-10">
              <Image className="w-[70px]" src={Checklist} alt="businessplan" />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Business Planning
              </h5>
              <p className="mb-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="block w-[200px] p-6 m-10">
              <Image className="w-[70px]" src={MoneyBag} alt="businessplan" />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Financial Planning
              </h5>
              <p className="mb-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="block w-[200px] p-6 m-10">
              <Image
                className="w-[70px]"
                src={Announcement}
                alt="businessplan"
              />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Digital Marketing
              </h5>
              <p className="mb-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="block w-[200px] p-6 m-10">
              <Image
                className="w-[70px]"
                src={Presentation}
                alt="businessplan"
              />
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Market Analysis
              </h5>
              <p className="mb-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="md:inline-flex" role="group">
            <div className="m-10 " role="company logo badge">
              <Image height={70} src={aerosimlogo} alt="aero" />
            </div>
            <div className="m-10 h-[50px]" role="company logo badge">
              <Image height={70} src={hkstplogo} alt="hkstp" />
            </div>
            <div className="m-10 h-[50px]" role="company logo badge">
              <Image height={70} src={recyclingfundlogo} alt="businessplan" />
            </div>
            {/* <div className="m-10" role="company logo badge">
              <Image height={72} src={turnedelogo} alt="businessplan" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
