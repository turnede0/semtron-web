import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import dashboard from "@public/image/dashboard.jpg";
import minicar from "@public/image/mini-r56.jpg";
import body_wheel from "@public/image/body_wheel_2.jpg";
import PCB_top from "@public/image/pcb_top_3.jpg";
import { Reveal } from "../common/Reveal";

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
      <div
        className={`relative bg-themedark min-h-screen lg:h-screen text-black grid lg:grid-cols-2`}
      >
        <div className="relative  h-full  bg-themedarkblue  z-0 ">
          <Reveal>
            <div className="block p-6 m-10">
              <h1 className="mb-2 text-3xl font-bold border-themeyellow border-l-8 pl-3 text-themeyellow leading-tight">
                {t("descriptionoverlay.title")}
              </h1>
              <div className="w-full flex">
                <p className="lg:w-[70%] text-white whitespace-pre-line my-10">
                  {t("descriptionoverlay.description")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="bg-themeyellow overflow-hidden h-full w-full ">
          <Image
            className="object-cover h-1/3  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-150"
            src={dashboard}
            alt=""
          ></Image>
          <Image
            className="object-cover h-1/3  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-150"
            src={body_wheel}
            alt=""
          ></Image>
          <Image
            className="object-cover h-1/3  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-150"
            src={PCB_top}
            alt=""
          ></Image>
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
          <Reveal>
            <div className="text-6xl text-bold m-10">
              {t("descriptionoverlay.message")}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
