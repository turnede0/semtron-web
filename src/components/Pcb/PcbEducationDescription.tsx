import React from "react";
import Image from "next/image";
import WorkshopImage from "@public/image/course/pcb/education/workshop.jpeg";
import { Bebas_Neue } from "@next/font/google";
const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function PcbEducationDescription() {
  return (
    <div>
      <div className="w-screen flex justify-center relative">
        <div id="tag" className="flex flex-row items-center">
          <div className="flex flex-row my-4">
            <div
              id="parallelgram"
              className="w-[25px] h-[73px] skew-x-[-25deg] bg-themeblue mx-1"
            ></div>
            <div
              id="parallelgram"
              className="w-[25px] h-[73px] skew-x-[-25deg] bg-themedarkblue mx-1"
            ></div>
          </div>
          <div className={`mx-8 text-6xl ${bebas_Neue.className}`}>
            EDUCATION
          </div>
        </div>
      </div>
      <div className="flex flex-row w-screen  pt-10">
        <Image src={WorkshopImage} className="w-1/2" alt="workshop" />
        <div className="w-1/2 bg-black text-white flex justify-center items-center p-20">
          <div className="">
            <div className={`text-4xl ${bebas_Neue.className}`}>
              Curriculum Designed for all level of student
            </div>
            <div className="my-10 text-xl w-11/12">
              We provide a comprehensive PCB course and workshop, equipping
              participants with skills in designing and fabricating printed
              circuit boards for primary school,secondary school and university
              students.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
