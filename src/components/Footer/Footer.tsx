import React from "react";
import Image from "next/image";
import LogoIcon from "@public/simAuto_logo.svg";
import aerosimlogo from "@public/image/aerosimLogo.png";
import recyclingfundlogo from "@public/image/recycling-fund_logo.png";
import { Link, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full md:h-[500px] lg:grid lg:grid-cols-6 gap-8 text-white bg-themedarkblue">
      <div className="pl-5 lg:col-start-1 lg:col-end-4">
        <div className="m-10 " role="company logo badge">
          <Image priority src={LogoIcon} alt="logo" />
        </div>
        <div className="flex mt-10">
          <div className="m-10 " role="company logo badge">
            <Image height={70} src={aerosimlogo} alt="aero" />
          </div>
          <div className="m-10 h-[50px]" role="company logo badge">
            <Image height={70} src={recyclingfundlogo} alt="businessplan" />
          </div>
        </div>
        {/* <div className="flex justify-between md:w-[75%] my-6"></div> */}
      </div>
      <div className="row-span-2 lg:col-end-6 lg:col-span-2 md:flex md:justify-between mt-7">
        <div className="p-5">
          <h6 className="font-medium font-bold">
            <Link href="/technology">{t("technology.title")}</Link>
          </h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/technology/ai">{t("technology.ai")}</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/technology/electronic">
                {t("technology.electronicComponent")}
              </Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/technology/mechanics">
                {t("technology.mechanics")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <h6 className="font-medium font-bold">
            <Link href="/product">{t("product")}</Link>
          </h6>
        </div>
        <div className="p-5">
          <h6 className="font-medium font-bold">
            <Link href="/news">{t("news.title")}</Link>
          </h6>
          {/* <ul>
            <li className="py-2 text-sm">
              <Link href="/news/blog">{t("news.blog")}</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/news/story">{t("news.story")}</Link>
            </li>
          </ul> */}
        </div>
        <div className="px-5 lg:px-1 py-5">
          <h6 className="font-medium font-bold">
            <Link href="/contact">{t("contact")}</Link>
          </h6>
        </div>
      </div>

      <div className=" border-t-2 col-start-1 col-end-7">
        <h6 className="font-medium text-gray-400 py-5 px-2">sim AUto@2023</h6>
      </div>
    </div>
  );
};

export default Footer;
