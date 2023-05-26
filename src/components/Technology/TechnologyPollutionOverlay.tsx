import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Multiwrecked from "@public/image/multiwrecked.jpg";

export default function TechnologyUpcyclingOverlay() {
  const t = useTranslations("TechnologyPage");
  return (
    <div className={`relative bg-themeyellow text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%]">
        <Image
          className="object-cover scale-150"
          src={Multiwrecked}
          alt=""
        ></Image>
      </div>
      <div className="relative w-1/2 h-[80%] flex justify-center items-center bg-themedarkblue p-5 z-0">
        <div className="block p-6 m-10">
          <h1 className="mb-2 text-3xl font-bold  text-themeyellow leading-tight">
            {t("pollutionoverlay.title")}
          </h1>
          <h5 className="mb-2 text-3xl bold  text-white leading-tight">
            {t("pollutionoverlay.subtitle")}
          </h5>
          <div className="w-full flex justify-end">
            <p className="w-[70%] text-white whitespace-pre-line">
              {t("pollutionoverlay.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
