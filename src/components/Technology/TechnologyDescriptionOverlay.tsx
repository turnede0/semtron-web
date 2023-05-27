import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import dashboard from "@public/image/dashboard.jpg";
import minicar from "@public/image/mini-r56.jpg";
import body_wheel from "@public/image/body_wheel_2.jpg";
import PCB_top from "@public/image/pcb_top_3.jpg";

import { Pacifico } from "@next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export default function TechnologyDescriptionOverlay() {
  const t = useTranslations("TechnologyPage");

  return (
    <div>
      <div className={`relative flex bg-themedark min-min-h-screen text-black`}>
        <div className="absolute bottom-0 right-0 bg-themeyellow overflow-hidden h-full w-full sm:w-[50%]">
          <Image className="object-cover h-1/3" src={dashboard} alt=""></Image>
          <Image className="object-cover h-1/3" src={body_wheel} alt=""></Image>
          <Image className="object-cover h-1/3" src={PCB_top} alt=""></Image>
        </div>
        <div className="relative w-1/2 h-full  bg-themedarkblue  z-0">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold border-themeyellow border-l-8 pl-3 text-themeyellow leading-tight">
              {t("descriptionoverlay.title")}
            </h1>
            <div className="w-full flex">
              <p className="w-[70%] text-white whitespace-pre-line">
                {t("descriptionoverlay.description")}
              </p>
            </div>
          </div>
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
          src={minicar}
          alt="Logo"
        />
        <div
          className={`${pacifico.className} flex-col flex justify-center items-start z-[1] text-themedarkblue`}
        >
          <div className="text-6xl text-bold my-10">
            {t("descriptionoverlay.message")}
          </div>
        </div>
      </section>
    </div>
  );
}
