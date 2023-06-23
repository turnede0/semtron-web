import { Link, useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import Body_side_human from "@public/image/body_side_human.png";

import { Bruno_Ace, Josefin_Sans } from "@next/font/google";

const bruno_Ace = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export default function ProductOverlay() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <div className="">
        <section
          className="relative min-h-screen z-10 max-h-full overflow-hidden  "
          id="top"
          data-section="section1"
        >
          <div className="absolute right-0 w-4/5 h-screen z-[-1]">
            <Image className="object-cover " src={Body_side_human} alt="Logo" />
          </div>
          <div className="absolute left-0 w-full">
            <div className="relative flex">
              <div className="w-1/4 h-screen bg-black"></div>
              <div className="w-[400px] h-screen bg-gradient-to-r from-black to-transparents"></div>
            </div>
          </div>

          <div className={` w-2/5 h-screen motion-safe:animate-fadeIn p-20 `}>
            <div
              className={`${bruno_Ace.className} text-white w-[300px] text-5xl lg:text-5xl text-bold`}
            >
              {t("product.gear")}
            </div>
            <div
              className={`text-white text-2xl my-10 w-[300px] ${josefin_Sans.className}`}
            >
              {t("product.slogan")}
            </div>
            <Link href="/product">
              <span
                className={`border-themeyellow border-solid border-8 text-2xl text-bold p-2 text-themeyellow my-10 ${josefin_Sans.className}`}
              >
                {t("product.learnMore")}
              </span>
            </Link>
            <h1 className="w-[100px] h-[15px] font-bold bg-white border-t-2 my-10"></h1>
          </div>
        </section>
      </div>
    </div>
  );
}
