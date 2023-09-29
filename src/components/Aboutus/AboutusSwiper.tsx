"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Bebas_Neue } from "@next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

function SlidCard(props: { title: string; content: string }) {
  return (
    <div className="w-[400px] h-[200px] bg-white shadow-2xl shadow-themegreen text-black my-6 flex pt-11 px-5">
      <div className="w-full">
        <div className={`${bebas_Neue.className} text-2xl`}>{props.title}</div>
        <div className="w-full text-4xl text-center">{props.content}</div>
      </div>
    </div>
  );
}

export default function AboutusSwiper() {
  return (
    <div className=" my-20 py-6 px-6">
      <div className={`${bebas_Neue.className} text-4xl `}>
        THE ENERGY OF A START-UP. A WELL-ESTABLISHED EXPERTISE.
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlidCard title={"School"} content={"250+"} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard title={"Student"} content={"10000+"} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard title={"educational partner"} content={"6"} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            title={"Certificate"}
            content={"EasyEDA approved partner"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
