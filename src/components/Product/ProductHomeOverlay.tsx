import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import body_full_nbg from "@public/image/product/product_1.png";
import { Reveal } from "../common/Reveal";
import { Josefin_Sans } from "@next/font/google";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export default function ProductHomeOverlay() {
  const t = useTranslations("ProductPage.homeoverlay");

  return (
    <section
      className="relative min-h-screen min-w-screen overflow-hidden bg-black flex justify-center items-center"
      id="top"
      data-section="section1"
    >
      {/*Main Text*/}
      <div
        className={`absolute left-0 w-96 text-white text-7xl font-bold z-10`}
      >
        <Reveal>
          <h1 className={`${josefin_Sans.className} my-2`}>{t("title")}</h1>
        </Reveal>
      </div>
      {/*Yellow Circle*/}
      {/* <Reveal> */}
      <div className="absolute top-32 h-[650px] w-[650px] rounded-full bg-yellow-500 flex justify-center items-center">
        {/*Image inside Circle*/}
        <div className="">
          <Image
            className="h-[400px] object-contain"
            src={body_full_nbg}
            alt=""
          ></Image>
        </div>
      </div>
      {/* </Reveal> */}
    </section>
  );
}
