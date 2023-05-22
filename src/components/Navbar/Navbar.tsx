"use client";

import { useState } from "react";
import * as React from "react";
import { useTranslations, Link } from "next-intl"; //Link must use next-intl
import Image from "next/image";
import Logo from "@public/next.svg";
import LogoIcon from "@public/simAuto_logo.svg";
import LocaleSwitcher from "@src/components/LocaleSwitcher";
// import NavigationLink from "../NavigationLink";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [active, setActive] = useState(false);

  const MenuhandleClick = () => {
    setActive(!active);
  };

  return (
    // <div className='sticky top-0 z-40 w-full'>
    <div className="absolute top-0 z-40 w-full">
      <div
        className={`
          ${active ? "" : "hidden"}
          absolute h-screen w-screen z-40 bg-bkgroundblack bg-opacity-70 lg:hidden
        `}
      ></div>
      <header className="relative bg-transparent sm:h-20 flex items-center w-full">
        <div className="container px-2 mx-auto flex items-center justify-between z-40 border-b-4 border-white">
          <div className="mt-2 w-[500px] md:w-[200px]">
            <Link href="#">
              <Image src={LogoIcon} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <nav
              className={`
                ${
                  active
                    ? "absolute top-0 left-0 w-10/12 lg:w-full h-screen bg-white text-black z-40  lg:relative lg:w-full lg:h-full"
                    : "-left-80 text-white"
                }
                group font-sen  uppercase text-lg ease-in-out duration-150 lg:flex lg:items-center
              `}
            >
              <ul className={`${active ? "" : "hidden lg:contents"}`}>
                <li className="h-[100px] lg:hidden">
                  <div className="m-6 h-10 w-[200px] sm:h-10 transition">
                    <Image src={Logo} alt="Logo" />
                  </div>

                  <svg
                    className="absolute h-8 w-8 top-0 right-1 hover:bg-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={MenuhandleClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </li>

                <li className="lg:float-left">
                  <Link
                    href="/"
                    className="py-2 px-6 flex text-base font-medium border-b-4 border-transparent transition-all duration-100 ease-in-out transform hover:-translate-y-1  hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("home")}
                  </Link>
                </li>

                <li className="lg:float-left">
                  <Link
                    href="/technology"
                    className="py-2 px-6 flex text-base font-medium border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("technology.title")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/product"
                    className="py-2 px-6 flex text-base font-medium border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("product")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/news"
                    className="py-2 px-6 flex text-base font-medium  border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("news.title")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/about"
                    className="py-2 px-6 flex text-base font-medium border-b-4 border-transparent transition-all duration-100 ease-in-out transform hover:-translate-y-1  hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("about.title")}
                  </Link>
                </li>
                <li className="lg:float-left">
                  <Link
                    href="/contact"
                    className="py-2 px-6 flex text-base font-medium  border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-bkgrounddarkblue lg:hover:border-bkgrounddarkblue"
                  >
                    {t("contact")}
                  </Link>
                </li>
                <LocaleSwitcher />
              </ul>
            </nav>
            <button
              className={`
                ${
                  active
                    ? "outline-none ring-2 ring-inset ring-gray-100 bg-white"
                    : ""
                }
                group lg:hidden flex flex-col ml-4 bg-transparent rounded-md p-2 inline-flex items-center justify-center
              `}
              onClick={MenuhandleClick}
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
