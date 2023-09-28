"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import WindPhoto from "@public/image/course/pcb/device/wind.png";
import StandPhoto from "@public/image/course/pcb/device/stand.png";
import MicroPhoto from "@public/image/course/pcb/device/micro.png";
import OscillscopePhoto from "@public/image/course/pcb/device/oscillscope-2.jpg";
import HeatPhoto from "@public/image/course/pcb/device/heat.webp";
import MultimeterPhoto from "@public/image/course/pcb/device/multimeter.jpg";
import SolderingPhoto from "@public/image/course/pcb/device/soldering.webp";
import PcPhoto from "@public/image/course/pcb/device/pc.png";
import MatPhoto from "@public/image/course/pcb/device/mat.jpg";

import { Bebas_Neue } from "@next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

function SlidCard(props: {
  imgSrc: StaticImageData;
  title: string;
  content: string;
}) {
  return (
    <div>
      <Image
        src={props.imgSrc}
        className=" object-cover w-[400px] h-[300px]"
        alt={props.title}
      />
      <div className="w-[400px] my-6">
        <div className={`${bebas_Neue.className} text-2xl`}>{props.title}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default function PcbLabDevice() {
  return (
    <div className="h-screen py-6 px-6">
      <div className={`${bebas_Neue.className} text-4xl `}>Equipment</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlidCard imgSrc={WindPhoto} title={"hot airgun"} content={""} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={StandPhoto}
            title={"Hot air gun stand"}
            content={""}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlidCard
            imgSrc={MicroPhoto}
            title={"Electronic Microscope"}
            content={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={OscillscopePhoto}
            title={"Oscillscope"}
            content={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard imgSrc={HeatPhoto} title={"Heat plate"} content={""} />
        </SwiperSlide>

        <SwiperSlide>
          <SlidCard
            imgSrc={MultimeterPhoto}
            title={"Multimeter"}
            content={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={SolderingPhoto}
            title={"Soldering Iron"}
            content={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard imgSrc={PcPhoto} title={"Computer"} content={""} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard imgSrc={MatPhoto} title={"Soldering mat"} content={""} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
