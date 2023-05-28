import { useTranslations } from "next-intl";
import React from "react";
import Body_back_human from "@public/image/body_back_human.png";
import { Anton } from "@next/font/google";
import Overlay from "@src/components/common/Overlay";
import { Reveal } from "@src/components/common/Reveal";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function TechnologyOverlay() {
  const t = useTranslations("TechnologyPage");

  return (
    <div>
      {/* <section
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
          src={Body_back_human}
          alt="Logo"
        />
        <div className={`w-full lg:ml-52 z-[1]`}>
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {t("title")}
          </div>
          <div className="text-white text-2xl lg:text-8xl">{t("subtitle")}</div>
        </div>
      </section> */}
      <Overlay
        title={t("title")}
        subtitle={t("subtitle")}
        image={Body_back_human}
      />
      <div
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className={`flex-col flex w-full justify-center items-start m-5 lg:ml-52`}
        >
          <Reveal>
            <h6 className={`${anton.className} `}>
              <div className="my-5 text-3xl">
                <span className="text-themeyellow ">{t("speaker")} </span>
              </div>
              <div className="my-5 text-4xl">
                <span className="text-themedarkblue">{t("message")} </span>
              </div>
            </h6>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
