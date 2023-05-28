import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import aerosim from "@public/image/aerosim.jpg";
import Body_front from "@public/image/body_front.jpg";
import { Reveal } from "../common/Reveal";

export default function AboutusEducationOverlay() {
  const t = useTranslations("AboutusPage");

  return (
    <div>
      <div
        className={`relative grid lg:grid-cols-2 bg-themedark  min-h-screen lg:h-screen text-black`}
      >
        <div className="relative flex justify-center items-center  h-full  bg-themedarkblue  z-0">
          <Reveal>
            <div className="block p-6 m-10">
              <h1 className="mb-2 text-4xl font-bold border-themeyellow border-l-8 pl-3 text-themeyellow leading-tight">
                {t("educationovelay.title")}
              </h1>
              <div className="w-full flex">
                <p className="lg:w-[70%] text-lg text-white whitespace-pre-line">
                  {t("educationovelay.content")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className=" bg-themeyellow overflow-hidden h-full w-full ">
          <Image className="object-cover h-full" src={aerosim} alt=""></Image>
        </div>
      </div>
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
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
          src={Body_front}
          alt="Logo"
        />
        <div
          className={`flex-col flex justify-center items-start z-[1] text-themedarkblue`}
        >
          <Reveal>
            <div className="text-6xl text-bold my-10">{t("inspire")}</div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
