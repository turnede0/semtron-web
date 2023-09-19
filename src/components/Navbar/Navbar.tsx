"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { useTranslations, Link } from "next-intl"; //Link must use next-intl
import Image from "next/image";
import LogoIcon from "@public/image/logo/semtron-logo-themeblue.png";
import LocaleSwitcher from "@src/components/LocaleSwitcher";
import { usePathname } from "next/navigation";
// import NavigationLink from "../NavigationLink";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    setActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    // <div className='sticky top-0 z-40 w-full'>
    <div className="absolute top-0 z-40 w-full">
      <div
        className={`
          ${active ? "" : "hidden"}
          absolute min-h-screen w-screen z-40 bg-bkgroundblack bg-opacity-70 lg:hidden
        `}
        onClick={handleMenuClick}
      ></div>
      <header className=" bg-white sm:h-16 flex items-center w-full fixed">
        <div className="container px-2 mx-auto flex items-center justify-between z-40">
          <div className=" w-[300px] md:w-[150px]">
            <Link href="#">
              <Image src={LogoIcon} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <nav
              className={`
                ${
                  active
                    ? "fixed top-0 left-0 w-10/12 lg:w-full min-h-screen bg-black lg:bg-transparent z-40  lg:relative lg:h-full"
                    : "-left-80 hidden"
                }
                group text-white lg:text-black  uppercase text-lg ease-in-out duration-150 lg:flex lg:items-center 
              `}
            >
              <ul className={` lg:contents font-bold`}>
                <li className="h-[100px] lg:hidden">
                  <div className="m-6 h-10 w-[200px] sm:h-10 transition">
                    <Image src={LogoIcon} alt="Logo" />
                  </div>

                  <svg
                    className="absolute h-8 w-8 top-0 right-1 hover:bg-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={handleMenuClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </li>

                <li className="lg:float-left ">
                  <Link
                    href="/"
                    className="py-2 px-6 flex text-sm  border-b-4 border-transparent transition-all  ease-in-out transform duration-300 font-bold hover:text-themeblue   hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("home")}
                  </Link>
                </li>

                <li className="lg:float-left">
                  <Link
                    href="/technology"
                    className="py-2 px-6 flex text-sm  border-b-4 border-transparent transition  ease-in-out transform duration-300 font-bold hover:text-themeblue hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("technology.title")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/product"
                    className="py-2 px-6 flex text-sm  border-b-4 border-transparent transition  ease-in-out transform duration-300 font-bold hover:text-themeblue hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("product")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/news"
                    className="py-2 px-6 flex text-sm   border-b-4 border-transparent transition  ease-in-out transform duration-300 font-bold hover:text-themeblue hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("news.title")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/aboutus"
                    className="py-2 px-6 flex text-sm   border-b-4 border-transparent transition  ease-in-out transform duration-300 font-bold hover:text-themeblue hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("aboutus")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/contact"
                    className="py-2 px-6 flex text-sm   border-b-4 border-transparent transition  ease-in-out transform duration-300 font-bold hover:text-themeblue hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("contact")}
                  </Link>
                </li>
                <li className=" bg-black h-full">
                  <LocaleSwitcher />
                </li>
              </ul>
            </nav>
            <button
              className={`
                ${
                  active
                    ? "outline-none ring-2 ring-inset ring-gray-100 bg-white"
                    : ""
                }
                group fixed lg:hidden flex-col p-5 right-0 top-0  inline-flex items-center justify-center bg-black
              `}
              onClick={handleMenuClick}
            >
              <span
                className={`${active ? "bg-black" : "bg-white"} w-6 h-1 mb-1`}
              ></span>
              <span
                className={`${active ? "bg-black" : "bg-white"} w-6 h-1 mb-1`}
              ></span>
              <span
                className={`${active ? "bg-black" : "bg-white"} w-6 h-1 mb-1`}
              ></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
