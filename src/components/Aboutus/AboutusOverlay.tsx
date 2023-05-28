import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import plane from "@public/image/plane.jpg";
import plane_human from "@public/image/aeroplane_air_human.jpg";
import aerosimlogo from "@public/image/aerosimLogo.png";
import { useTranslations } from "next-intl";
import Overlay from "../common/Overlay";
import { Reveal } from "../common/Reveal";

interface AboutusOverlayProps {}

const AboutusOverlay: FunctionComponent<AboutusOverlayProps> = () => {
  const t = useTranslations("AboutusPage");
  return (
    <div>
      <Overlay title={t("title")} subtitle={t("subtitle")} image={plane} />
      <div className={`relative bg-themeyellow text-black py-20 `}>
        <div className="absolute top-0 right-0 overflow-hidden h-full w-full lg:w-[50%] ">
          <Image
            className="object-cover scale-150"
            src={plane_human}
            alt=""
          ></Image>
        </div>
        <Reveal>
          <div className="relative lg:w-1/2 h-[80%] flex justify-center items-center bg-white p-5 z-0">
            <div className="block p-6 m-10">
              <div className="m-10 " role="company logo badge">
                <Image src={aerosimlogo} alt="aero" />
              </div>
              <div className="w-full flex justify-end">
                <p className="lg:w-[70%] text-themedarkblue whitespace-pre-line">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutusOverlay;
