"use-client";

import FPGA from "@public/image/poster/FPGA.webp";
import Electronic from "@public/image/poster/soldering.png";
import Image from "next/image";

export const CourseOverlay = () => {
  return (
    <>
      <div className="bg-slate-900 flex flex-row w-screen overflow-hidden h-[500px]">
        <div className="relative w-1/2 transform hover:w-[80%] transition-all duration-500 ease-in-out overflow-hidden ">
          <Image
            className="h-full object-none scale-125"
            src={FPGA}
            alt="FPGA"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-start justify-end ">
            <div className="flex flex-col items-start justify-end space-y-4 px-10 pb-4 w-full p-3">
              <span className="text-white text-5xl font-bold">FPGA</span>
              <span className="text-white text-4xl font-bold">
                芯片工程師專題
              </span>
              <span className="text-white text-2xl font-bold">6 levels</span>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 transform hover:w-[80%] transition-all duration-500 ease-in-out overflow-hidden">
          <Image
            className="h-full object-none scale-[250%]"
            src={Electronic}
            alt="Electronic"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-start justify-end ">
            <div className="flex flex-col items-start justify-end space-y-4 px-10 pb-4 w-fullp-3">
              <span className="text-white text-5xl font-bold">PCB</span>
              <span className="text-white text-4xl font-bold">
                電子工程師專題
              </span>
              <span className="text-white text-2xl font-bold">2 levels</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
