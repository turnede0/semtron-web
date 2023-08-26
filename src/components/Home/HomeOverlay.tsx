/*  ./components/Navbar.jsx     */
"use client";

import courseMaterial from "@public/image/poster/courseMaterial.png";
import Image from "next/image";

export const HomeOverlay = () => {
  return (
    <div className="w-screen h-[95vh] bg-slate-900 flex flex-col items-center justify-center">
      <div className=" flex flex-row justify-around items-around w-[95%] sm:p-5 sm:mt-10">
        <div className="flex flex-col justify-center items-center sm:items-start w-[70%] text-center sm:text-left">
          <span className="text-white sm:text-[70px] text-[40px] font-bold">
            針對K-12的全方位
          </span>
          <span className="text-white sm:text-[70px] text-[40px] font-bold mb-7">
            芯片工程師培訓方案
          </span>
          <span className="text-white sm:text-2xl text-xl mb-7">
            協助學生成為未來 核心科技的締造者
          </span>
          <button className="w-[200px]  bg-green-400 text-4xl font-bold text-white py-3">
            了解更多
          </button>
        </div>
        <Image
          className="w-[80%] m-5 hidden sm:block"
          src={courseMaterial}
          alt="course material"
        ></Image>
      </div>
    </div>
  );
};
