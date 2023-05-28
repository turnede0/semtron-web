/*  ./components/Navbar.jsx     */
import * as React from "react";
import Image from "next/image";
import { Link, useLocale, useTranslations } from "next-intl";
import { Anton } from "@next/font/google";
import HomeOne from "@public/image/home_1.jpg";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const HomeOverlay = () => {
  const locale = useLocale();
  const t = useTranslations("IndexPage");
  return (
    <div className={``}>
      <section
        className="relative flex justify-center items-center min-h-screen z-10  max-h-full overflow-hidden -mb-1  "
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
          src={HomeOne}
          alt="Logo"
        />
        {/* <div
          className="absolute h-1/3 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent"
          id="bottom_gradient"
        ></div> */}

        <div className={`flex-col  w-full flex justify-center items-center`}>
          <span className="text-white">{t("shortdecription")} </span>
          <div
            className={`text-white ${
              locale == "hk"
                ? "text-5xl md:text-7xl lg:text-9xl"
                : "text-4xl md:text-6xl lg:text-8xl"
            } uppercase`}
          >
            <h6 className={`${anton.className}`}>
              <span className="text-themeyellow ">{t("car")} </span>
              <span className={``}>{t("asreal")} </span>
              <span className="text-themeyellow">{t("sim")} </span>
              <span className={``}>{t("asreal")}</span>
            </h6>
          </div>
          <Link
            href="/product"
            className="mt-20 p-5 px-5 float-right  bg-themedarkblue hover:bg-themeyellow text-white md:text-2xl lg:text-3xl transition duration-300 ease-in-out shadow-innerDefault hover:shadow-inner"
          >
            {t("explore")}
          </Link>
        </div>
      </section>
    </div>
  );
};
