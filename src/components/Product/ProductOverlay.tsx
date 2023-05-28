import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import playOne from "@public/image/play_1.jpg";
import { Anton } from "@next/font/google";
import Overlay from "../common/Overlay";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function ProductOverlay() {
  const t = useTranslations("ProductPage");

  return (
    <div>
      <Overlay title={t("title")} subtitle={t("subtitle")} image={playOne} />
      <div
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className={`flex-col flex w-full justify-center items-start lg:ml-52`}
        >
          <h6 className={`${anton.className} text-6xl lg:text-8xl`}>
            <div className="my-5">
              <span className="text-themeyellow ">{t("message1")} </span>
              <span className={`text-themedarkblue`}>{t("message2")} </span>
            </div>
            <div className="my-5">
              <span className="text-themeyellow">{t("message3")} </span>
              <span className={`text-themedarkblue`}>{t("message4")}</span>
            </div>
          </h6>
        </div>
      </div>
    </div>
  );
}
