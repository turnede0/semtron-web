import { ReactNode } from "react";
import React from "react";
import Navbar from "@src/components/Navbar/Navbar";
import Footer from "@src/components/Footer/Footer";
import { SocialIcon } from "react-social-icons";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative flex-grow flex flex-col bg-slate-900">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 m-5">
        <div className="relative group">
          <SocialIcon
            className="group-hover:scale-110"
            url="https://api.whatsapp.com/message/TEG254CZMTKND1?autoload=1&app_absent=0"
          ></SocialIcon>
          <div className="absolute bottom-full left-1/2 transform -translate-x-[120%] mb-2 py-2 px-4 bg-gray-800 text-white rounded-lg text-sm whitespace-nowrap hidden group-hover:block">
            <span className="text-lg">Contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
}
