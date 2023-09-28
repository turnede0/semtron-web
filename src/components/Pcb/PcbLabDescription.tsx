import React from "react";
import HeaderPhoto from "@public/image/course/pcb/pcb-bg-3.jpeg";
import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";
import SquareSvg from "@public/icon/green_square.svg";
import PcblabImage from "@public/image/course/pcb/pcb-lab-3.webp";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function PcbLabDescription() {
  return (
    <div className="">
      <div className=" h-[50vh] relative">
        <Image
          src={HeaderPhoto}
          className="absolute object-cover w-screen h-full"
          alt="header-background"
        />
        <div
          className={`absolute w-screen h-full  text-white text-9xl flex items-center justify-center ${bebas_Neue.className}`}
        >
          <div className="flex flex-row">
            <span className="">PCB</span>
            <Image src={SquareSvg} width={50} alt="cross" className="mx-8" />
            <span className="">LAB</span>
          </div>
        </div>
      </div>
      <div className="h-screen  flex justify-center items-center">
        <Image src={PcblabImage} width={700} alt="cross" className="mx-8" />
      </div>
    </div>
  );
}
