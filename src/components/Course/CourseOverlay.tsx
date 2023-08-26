"use-client";

import FPGA from "@public/image/poster/FPGA.png";
import Electronic from "@public/image/poster/Electronic.png";
import Image from "next/image";

export const CourseOverlay = () => {
  return (
    <div className="bg-slate-900 min-h-[70vh] flex flex-col justify-around">
      <span className="text-white text-5xl ml-6 h-auto">課程大綱</span>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <button className="relative min-h-[300px] min-w-[400px] max-w-[600px] m-1 hover:scale-110">
          <Image
            className="opacity-80 h-[300px] w-auto overflow-hidden"
            src={FPGA}
            alt="FPGA"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-start justify-end space-y-4 px-3 pb-4 border-4 border-blue-400">
            <span className="text-blue-400 text-5xl ">FPGA</span>
            <span className="text-blue-300 text-4xl ">芯片工程師專題</span>
            <span className="text-blue-300 text-2xl ">6 levels</span>
          </div>
        </button>
        <span className="text-purple-800 m-10 font-bold text-6xl">x</span>
        <button className="relative min-h-[300px] min-w-[400px] max-w-[600px] m-1 hover:scale-110">
          <Image
            className="opacity-80 h-[300px] w-auto overflow-hidden"
            src={Electronic}
            alt="Electronic"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-start justify-end space-y-4 px-3 pb-4 border-4 border-green-400">
            <span className="text-green-400 text-5xl ">PCB</span>
            <span className="text-green-300 text-4xl ">電子工程師專題</span>
            <span className="text-green-300 text-2xl ">2 levels</span>
          </div>
        </button>
      </div>
    </div>
  );
};
