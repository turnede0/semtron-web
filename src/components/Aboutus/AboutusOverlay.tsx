// import { useTranslations } from "next-intl";
import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import plane from "@public/image/plane.jpg";
import plane_human from "@public/image/aeroplane_air_human.jpg";
import aerosimlogo from "@public/image/aerosimLogo.png";
import { useTranslations } from "next-intl";

interface AboutusOverlayProps {}

const AboutusOverlay: FunctionComponent<AboutusOverlayProps> = () => {
  const t = useTranslations("AboutusPage");
  return (
    <div>
      <div className={`relative bg-themedarkblue text-black py-20`}>
        <section
          className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
          id="top"
          data-section="section1"
        >
          <div
            className="absolute h-full bottom-0 w-full opacity-80 bg-themedarkblue z-0"
            id="bottom_gradient"
          ></div>
          <Image
            fill
            className="h-full object-cover z-[-1] "
            src={plane}
            alt="Logo"
          />
          <div className={`w-full lg:ml-52 z-[1]`}>
            <div className="bg-themeyellow p-5 text-2xl text-bold">
              {t("title")}
            </div>
            <div className="text-white text-2xl lg:text-8xl">
              {t("subtitle")}
            </div>
          </div>
        </section>
      </div>
      <div className={`relative bg-themeyellow text-black py-20`}>
        <div className="absolute top-0 right-0 overflow-hidden h-full w-full lg:w-[50%]">
          <Image
            className="object-cover scale-150"
            src={plane_human}
            alt=""
          ></Image>
        </div>
        <div className="relative lg:w-1/2 h-[80%] flex justify-center items-center bg-white p-5 z-0">
          <div className="block p-6 m-10">
            <div className="m-10 " role="company logo badge">
              <Image height={70} src={aerosimlogo} alt="aero" />
            </div>
            <div className="w-full flex justify-end">
              <p className="lg:w-[70%] text-themedarkblue whitespace-pre-line">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusOverlay;
