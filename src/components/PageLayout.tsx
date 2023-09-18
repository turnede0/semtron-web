import { ReactNode } from "react";
import React from "react";
import Navbar from "@src/components/Navbar/Navbar";
import Footer from "@src/components/Footer/Footer";
import { Noto_Sans_HK, Nunito_Sans } from "@next/font/google";
import { useLocale } from "next-intl";

const noto_Sans_HK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});
const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
});

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  const locale = useLocale();
  return (
    <div
      className={`relative flex grow flex-col bg-slate-850 ${
        locale == "hk" ? noto_Sans_HK.className : nunito_Sans.className
      }`}
    >
      <div className="relative flex grow flex-col">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
