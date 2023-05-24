import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import playOne from "@public/image/play_1.jpg";

export default function ProductOverlay() {
  const t = useTranslations("ProductPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-1/3 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent"
          id="bottom_gradient"
        ></div>
        <Image
          fill
          className="h-full object-cover z-[-1] "
          src={playOne}
          alt="Logo"
        />

        <div
          className={`flex-col flex w-full justify-center items-start ml-52`}
        >
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {t("title")}
          </div>
          <div className="text-white text-8xl">{t("carsim")}</div>
        </div>
      </section>
    </div>
  );
}
