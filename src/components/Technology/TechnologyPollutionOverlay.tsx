import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Multiwrecked from "@public/image/multiwrecked.jpg";
import { Reveal } from "@src/components/common/Reveal";

export default function TechnologyUpcyclingOverlay() {
  const t = useTranslations("TechnologyPage");
  return (
    <div className={`relative bg-themeyellow text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%] ">
        <Image
          className="object-cover scale-150"
          src={Multiwrecked}
          alt=""
        ></Image>
      </div>
      <Reveal>
        <div className="relative lg:w-1/2 flex justify-center items-center bg-themedarkblue p-5 z-0 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
              {t("pollutionoverlay.title")}
            </h1>
            <h5 className="mb-2 text-3xl bold  text-white leading-tight my-5">
              {t("pollutionoverlay.subtitle")}
            </h5>
            <div className="w-full flex lg:justify-end my-5">
              <p className="lg:w-[70%] text-white whitespace-pre-line">
                {t("pollutionoverlay.description")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
