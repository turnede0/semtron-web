import React from "react";
import HeaderPhoto from "@public/image/course/pcb/pcb-bg-3.jpeg";

import Image from "next/image";
import SquareSvg from "@public/icon/blue_square.svg";
import PcblabImage from "@public/image/course/pcb/pcb-lab-3.webp";
import CrossSvg from "@public/icon/purple_cross.svg";
import { Bebas_Neue } from "@next/font/google";
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
      <div className="h-screen  flex justify-end items-center relative">
        <div className="w-1/3">
          <div className={`${bebas_Neue.className} text-4xl`}>
            How can PCB Lab help chip engineer to make PCB board?
          </div>
        </div>
        <Image src={PcblabImage} width={700} alt="cross" />
        <Image
          src={CrossSvg}
          width={200}
          alt="cross"
          className="absolute left-96 top-96"
        />
      </div>
      <div className="w-screen px-44">
        <div className="w-1/3">
          <span className="text-4xl">
            PCB Lab brings significant gains in terms of management, efficiency
            and security.
          </span>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-1/2">
            PCB Lab provides a controlled environment with proper temperature,
            humidity, and lighting to ensure accurate measurements and prevent
            component degradation. The lab is equipped with specialized tools
            and equipment like soldering stations, testing instruments, and PCB
            prototyping machines, enabling precise fabrication and testing. It
            also ensures safety measures for handling hazardous chemicals used
            in the process. <br />
            <br /> The lab facilitates collaboration among team members,
            promoting innovation and knowledge sharing.
            <br />
            <br /> Additionally, it supports documentation and record-keeping,
            ensuring traceability and designs. In summary, an PCB Lab provides
            the necessary infrastructure, equipment, safety measures, and
            collaborative environment for efficient and reliable circuit board
            production.
          </div>
        </div>
      </div>
    </div>
  );
}
