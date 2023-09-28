import React from "react";
import CrossSvg from "@public/icon/yellow_cross.svg";
import SolderingPhoto from "@public/image/course/pcb/soldering.jpg";
import Image from "next/image";
import { Bebas_Neue } from "@next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function PcbDescription() {
  return (
    <div
      className={`bg-fixed bg-white bg-cover bg-no-repeat min-h-screen px-44`}
      //   style={{
      //     backgroundImage: `url(${CoverImage.src})`,
      //   }}
    >
      {/* <div className="[clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)] h-1/4 w-2/3 bg-themeblue object-cover flex items-center justify-center">
        <span className="text-white text-3xl">What is PCB ?</span>
      </div>
      <div className="grid grid-cols-10 grid-rows-6">
        <div className="col-span-4 row-span-3">
          <Image src={SolderingImage} alt="soldering" />
        </div>
        <div className="bg-themeblue col-span-4 row-span-1"></div>
      </div> */}
      <div className="h-1/2  relative flex flex-row justify-between items-center mt-12">
        <div className="flex flex-col">
          <span className="text-lg">Electronic engineering</span>
          <span className={`${bebas_Neue.className} text-7xl`}>
            What is PCB?
          </span>
        </div>
        <Image src={CrossSvg} width={200} alt="cross" />
      </div>
      <div className="relative w-full grid grid-cols-2 min-h-screen">
        <div className="h-full flex items-center">
          <Image
            src={SolderingPhoto}
            width={500}
            alt="soldering"
            className=""
          />
        </div>
        <div className="flex  items-center">
          <div className="flex flex-col">
            <div className="border-l-8 border-themeblue text-xl p-10 mb-10">
              A Printed Circuit Board (PCB) is a crucial component in the world
              of electronics. It is a flat board made of non-conductive
              material, typically fiberglass or composite epoxy, with thin
              copper tracks or traces printed on its surface.
            </div>
            <div className="">
              These tracks form a circuit and provide electrical connections
              between various electronic components like resistors, capacitors,
              and integrated circuits. PCBs serve as a platform for mounting and
              interconnecting these components, enabling the creation of complex
              electrical systems in electronic devices. They play a vital role
              in ensuring proper functionality, signal routing, and efficient
              assembly of circuits in a wide range of applications, from
              consumer electronics to industrial machinery.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
