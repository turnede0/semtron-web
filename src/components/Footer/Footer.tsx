import React from "react";
import Image from "next/image";
import LogoIcon from "@public/image/semtron_text_logo.png";
import { Link, useTranslations } from "next-intl";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full md:h-[500px] lg:grid lg:grid-cols-6 gap-8 text-white bg-black">
      <div className="pl-5 lg:col-start-1 lg:col-end-4 sm:ml-10">
        <div className="mr-10 my-10" role="company logo badge">
          <Image height={100} priority src={LogoIcon} alt="logo" />
        </div>
        <span className="text-2xl sm:text-4xl font-bold">Follow Us:</span>
        <div className="w-full h-auto flex flex-row items-center justify-start my-3 space-x-5 scale-90 sm:scale-100">
          <SocialIcon
            url="https://www.youtube.com/@turned-eeducation5461"
            className="transition-all duration-100 ease-in-out transform hover:-translate-y-1"
          ></SocialIcon>
          <SocialIcon
            url="https://hk.linkedin.com/company/turned-e-education"
            className="transition-all duration-100 ease-in-out transform hover:-translate-y-1"
          ></SocialIcon>
          <SocialIcon
            url="https://www.facebook.com/TURNEDEEDUCATION/"
            className="transition-all duration-100 ease-in-out transform hover:-translate-y-1"
          ></SocialIcon>
        </div>
      </div>
      <div className="row-span-2 lg:col-end-6 lg:col-span-2 md:flex md:justify-between mt-16">
        <div className="p-5">
          <h6 className="font-medium font-bold">
            <Link href="/technology">{t("technology.title")}</Link>
          </h6>
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
        </div>
        <div className="px-5 lg:px-1 py-5 w-auto">
          <h6 className="font-medium font-bold">
            <Link href="/contact">{t("aboutus")}</Link>
          </h6>
        </div>
        <div className="px-5 lg:px-1 py-5">
          <h6 className="font-medium font-bold">
            <Link href="/contact">{t("contact")}</Link>
          </h6>
        </div>
      </div>
      <div className=" border-t-2 col-start-1 col-end-7">
        <h6 className="font-medium text-gray-400 py-5 px-2">eco sim@2023</h6>
      </div>
    </div>
  );
};

export default Footer;
