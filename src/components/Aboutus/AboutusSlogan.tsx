import React from "react";
import { Bebas_Neue } from "@next/font/google";
import CrossSvg from "@public/icon/yellow_cross.svg";
import SquareSvg from "@public/icon/green_square.svg";
import PurpleCrossSvg from "@public/icon/purple_cross.svg";
import Image from "next/image";
const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function AboutusSlogan() {
  return (
    <div
      className={`${bebas_Neue.className}   text-[12rem] flex justify-center`}
    >
      <div>
        <div className="flex flex-row items-center">
          <Image src={CrossSvg} width={200} alt="cross" className=" mx-10" />
          <div>Sharing</div>
        </div>
        <div className="flex flex-row items-center">
          <span>Caring</span>
          <Image src={SquareSvg} width={200} alt="cross" className=" mx-10" />
        </div>
        <div className="flex flex-row items-center">
          <Image
            src={PurpleCrossSvg}
            width={200}
            alt="cross"
            className=" mx-10"
          />
          <span>Understand</span>
        </div>
      </div>
    </div>
  );
}
