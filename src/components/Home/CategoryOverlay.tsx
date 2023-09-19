/*  ./components/Navbar.jsx     */
/*TODELETE: no use */
"use client";
import * as React from "react";
import Image from "next/image";
import verilogImage from "@public/image/home/DFF_verilog.png";
import pcbImage from "@public/image/home/easyeda-384_PCB3DLib_3D-PCB.png";
import { useTranslations } from "next-intl";

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
      <div className="mx-2 text-2xl font-bold">{props.text}</div>
    </div>
  );
};

export const CategoryOverlay = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className="bg-fixed bg-black bg-cover bg-no-repeat w-screen h-fit  relative">
      <div className="grid grid-cols-4 gap-4 w-full   bg-white h-[150px] border-b-[30px] border-themeblue">
        <Tag text={t("category.chipcontrol")} />
        <Tag text={t("category.hardwareacceleration")} />
        <Tag text={t("category.electronicengineering")} />
        <Tag text={t("category.productdesign")} />
      </div>
      <div className="w-full z-20">
        <div className="flex flex-col">
          <div className="flex items-center  h-[400px]">
            <Image
              className="[clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)] h-full w-2/3 object-cover"
              src={verilogImage}
              alt="verilog"
            />

            <div className="text-white flex flex-col h-full w-1/3 justify-center">
              <span className="text-4xl mx-auto font-bold">
                {t("category.fpga")}
              </span>
              {/* <Reveal> */}
              <span className="w-[300px] my-5 mx-auto">
                {t("category.content1")}
              </span>
              {/* </Reveal> */}
              <button className="bg-themeblue w-fit mx-auto p-3 rounded-3xl hover:bg-white hover:text-themeblue transform duration-200">
                {t("category.learn")}
              </button>
            </div>
          </div>
          <div className="flex items-center  h-[400px] ">
            <div className="text-white flex flex-col h-full w-1/3 justify-center">
              <span className="text-4xl mx-auto font-bold">PCB</span>
              {/* <Reveal> */}
              <span className="w-[300px] my-5 mx-auto">
                {t("category.content2")}
              </span>
              {/* </Reveal> */}
              <button className="bg-themeblue w-fit mx-auto p-3 rounded-3xl hover:bg-white hover:text-themeblue transform duration-200">
                {t("category.learn")}
              </button>
            </div>

            <Image
              className="[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] h-full w-2/3 object-cover"
              src={pcbImage}
              alt="verilog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
