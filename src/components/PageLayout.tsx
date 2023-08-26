import { ReactNode } from "react";
import React from "react";
import Navbar from "@src/components/Navbar/Navbar";
import Footer from "@src/components/Footer/Footer";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="relative flex grow flex-col bg-slate-900">
      <div className="relative flex grow flex-col">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
