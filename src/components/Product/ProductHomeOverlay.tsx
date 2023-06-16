import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import body_full_nbg from "@public/image/body_full_nbg.png";
import { Reveal } from "../common/Reveal";

export default function ProductHomeOverlay() {
  const t = useTranslations("ProductPage.homeoverlay");

  return (
    <div>
      <section
        className="relative flex min-h-screen max-h-full overflow-hidden bg-black justify-center items-center"
        id="top"
        data-section="section1"
      >
        {/*Main Text*/}
        <div className="absolute w-96 text-white text-[80px] overflow-visible transform translate-x-[-450px] font-bold z-10">
          <Reveal>
            <h1 className="font-sans">{t("title")}</h1>
          </Reveal>
        </div>
        {/*Yellow Circle*/}
        <div className="h-[850px] w-[850px] rounded-full bg-yellow-500 transform translate-y-[150px] justify-center items-center">
          {/*Image inside Circle*/}
          <Image
            className="transform translate-x-[-50px] translate-y-[70px]"
            src={body_full_nbg}
            alt=""
          ></Image>
        </div>
      </section>
    </div>
  );
}
