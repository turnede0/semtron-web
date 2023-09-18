import React from "react";
import { Reveal } from "@src/components/common/Reveal";
import Image from "next/image";
import fpgaImage from "@public/image/home/fpga.jpg";
import teachImage from "@public/image/home/teach.webp";

export default function StemOverlay() {
  return (
    <div className="h-screen w-screen">
      {" "}
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1 "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full opacity-80 bg-white z-0"
          id="bottom_gradient"
        ></div>
        <Image
          fill
          className="h-full object-cover z-[-1] "
          src={fpgaImage}
          alt="Logo"
        />
        <Reveal>
          <div className="grid grid-cols-2">
            <Image src={teachImage} alt="teach" />
            <div className="flex flex-col m-auto">
              <span className="font-bold ">
                All-in-one STEAM Curriculum Package
              </span>
              <span className="font-bold text-4xl my-5">
                Reinventing STEAM Education
              </span>
              <div className="flex flex-col my-1">
                <span className="text-themeblue text-xl">
                  Online｜STEAM E-Learning Platform
                </span>
                <span>
                  1,000+ original interactive videos and games that brings
                  science to life!
                </span>
              </div>
              <div className="flex flex-col my-1">
                <span className="text-themeblue text-xl">
                  Online｜STEAM E-Learning Platform
                </span>
                <span>
                  1,000+ original interactive videos and games that brings
                  science to life!
                </span>
              </div>
              <div className="flex flex-col my-1">
                <span className="text-themeblue text-xl">
                  Online｜STEAM E-Learning Platform
                </span>
                <span>
                  1,000+ original interactive videos and games that brings
                  science to life!
                </span>
              </div>
              <button className="border-themeblue bg-white rounded-2xl ring-4 text-themeblue w-fit p-2 mx-auto my-4">
                Learn More
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
