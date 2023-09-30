import React from "react";
import Image from "next/image";
import LogoIcon from "@public/image/logo/semtron-logo-white.png";
import { Link, useTranslations } from "next-intl";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="bg-black overflow-hidden z-10">
        <div className="px-4 mx-10">
          <div className="md:flex md:flex-wrap md:-mx-8 py-6 md:pb-12 justify-center">
            <div
              id="footer_list"
              className="md:w-2/3 lg:w-2/3 md:px-4 xl:pl-16 mt-12 lg:mt-10"
            >
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="md:text-2xl font-medium text-white uppercase mb-2">
                    {t("corprorate")}
                  </h6>
                  <div className="md:text-xl">
                    <Link
                      href="/news"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      {t("news.title")}
                    </Link>
                    <Link
                      href="/aboutus"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      {t("aboutus")}
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      {t("contact")}
                    </Link>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="md:text-2xl font-medium text-white uppercase mb-2">
                    {t("course.title")}
                  </h6>
                  <div className="md:text-xl">
                    <Link
                      href="/course/pcb"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      {t("course.pcb")}
                    </Link>
                    {/* <Link
                      href="/course/fpga"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      {t("course.fpga")}
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/4 md:px-4 mt-12 lg:mt-10">
              <div className="lg:w-0 lg:flex-1">
                <Link href="/">
                  <div className=" my-12 h-8 w-[150px] md:w-[200px]">
                    <Image priority src={LogoIcon} alt="logo" />
                  </div>
                </Link>
              </div>
              <h5 className="text-lg text-white font-medium mb-4">
                Sensing & Control + THINK
              </h5>
              <div className="" id="socialmedia">
                <Link href="https://www.youtube.com/user/OmronChannel/videos">
                  <AiFillYoutube
                    size={40}
                    className="z-10  text-white hover:text-grey-200 m-2 inline-block"
                  />
                </Link>
                <Link href="https://hk.linkedin.com/company/semtron-hong-kong-limited">
                  <AiFillLinkedin
                    size={40}
                    className="z-10  text-white m-2 inline-block"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  <span>Copyright 2023 </span>
                  &copy; <strong>Semtron HK</strong>
                  <span> - All Rights Reserved.</span>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <Link
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
