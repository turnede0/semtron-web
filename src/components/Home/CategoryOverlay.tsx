/*  ./components/Navbar.jsx     */
/*TODELETE: no use */
"use client";
import * as React from "react";
import Image from "next/image";
import omron_pcb_whiteline from "@public/image/omron_2JCIE_whiteline.png";
import verilogImage from "@public/image/home/DFF_verilog.png";
import pcbImage from "@public/image/home/easyeda-384_PCB3DLib_3D-PCB.png";
import { Reveal } from "@src/components/common/Reveal";

const Tag = (props: { text: string }) => {
  return (
    <div id="tag" className="flex flex-row items-center justify-center">
      <div className="flex flex-row ">
        <div
          id="parallelgram"
          className="w-[10px] h-[30px] skew-x-[-25deg] bg-themeblue mx-1"
        ></div>
        <div
          id="parallelgram"
          className="w-[10px] h-[30px] skew-x-[-25deg] bg-themeblue mx-1"
        ></div>
      </div>
      <div className="mx-2 text-lg font-bold">{props.text}</div>
    </div>
  );
};

export const CategoryOverlay = () => {
  return (
    <div
      className="bg-fixed bg-black bg-cover bg-no-repeat w-screen h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url(${omron_pcb_whiteline.src})`,
      }}
    >
      <div
        className="absolute h-1/5 bottom-0 w-full opacity-95 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"
        id="bottom_gradient"
      ></div>
      <div className="w-full z-20">
        <div className="grid grid-cols-4 gap-4 w-full text-white mt-10">
          <Tag text={"Chip control"} />
          <Tag text={"Hardware Acceleration"} />
          <Tag text={"Electronic Engineering"} />
          <Tag text={"Product Design"} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center  h-[250px] my-6">
            <Image
              className="[clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)] h-full w-1/2 object-cover"
              src={verilogImage}
              alt="verilog"
            />

            <div className="text-white flex flex-col h-full w-1/2 justify-center">
              <span className="text-4xl mx-auto font-bold">FPGA</span>
              {/* <Reveal> */}
              <span className="w-[300px] my-5 mx-auto">
                We specialize in helping clients connect with their audiences
                through STEM events. Enrich your customer journey and build a
                strong parent/child community.
              </span>
              {/* </Reveal> */}
              <button className="bg-themeblue w-fit mx-auto p-3 rounded-3xl">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex items-center  h-[250px] my-6">
            <div className="text-white flex flex-col h-full w-1/2 justify-center">
              <span className="text-4xl mx-auto font-bold">PCB</span>
              {/* <Reveal> */}
              <span className="w-[300px] my-5 mx-auto">
                We specialize in helping clients connect with their audiences
                through STEM events. Enrich your customer journey and build a
                strong parent/child community.
              </span>
              {/* </Reveal> */}
              <button className="bg-themeblue w-fit mx-auto p-3 rounded-3xl">
                Learn more
              </button>
            </div>

            <Image
              className="[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] h-full w-1/2 object-cover"
              src={pcbImage}
              alt="verilog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
