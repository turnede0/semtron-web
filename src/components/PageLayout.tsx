// import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import React from "react";
import Navbar from "@src/components/Navbar/Navbar";
import Footer from "@src/components/Footer/Footer";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  // const t = useTranslations("PageLayout");

  return (
    <div className="relative flex grow flex-col bg-slate-850">
      {/* <div className="absolute inset-0 overflow-hidden" id="backdrop">
        <div
          className="absolute left-0 top-1 h-[20500px] w-[20500px] -translate-x-[47.5%] rounded-full 
        bg-gradient-to-b from-slate-900 via-cyan-500
        
        "
        />
      </div> */}
      <div className="relative flex grow flex-col">
        {/* <Navbar /> */}
        {/* <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1> */}
        {/* <>title</> */}
        <div>{children}</div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
