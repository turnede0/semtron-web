import React from "react";
import Image from "next/image";
import LogoIcon from "@public/simAuto_logo.svg";
import { Link, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="flex  justify-between w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <Image priority src={LogoIcon} alt="logo" />
        <div className="flex justify-between md:w-[75%] my-6"></div>
      </div>
      <div className="w-[500px] lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">
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
        <div>
          <h6 className="font-medium text-gray-400">
            <Link href="/product">{t("product")}</Link>
          </h6>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">
            <Link href="/news">{t("news.title")}</Link>
          </h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/news/blog">{t("news.blog")}</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/news/story">{t("news.story")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">
            <Link href="/about">{t("about.title")}</Link>
          </h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/about/company">{t("about.company")}</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/about/charter">{t("about.charter")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">
            <Link href="/contact">{t("contact")}</Link>
          </h6>
        </div>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">sim AUto@2023</h6>
      </div>
    </div>
  );
};

export default Footer;
