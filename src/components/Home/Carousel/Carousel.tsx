"use client";
/*  ./components/Navbar.jsx     */
import * as React from "react";
import { News } from "@src/constants/content/news";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export const Carousel = () => {
  return (
    <div className="bg-white">
      <div className="py-20 relative">
        <h1 className="my-20">
          <span className="text-3xl">Spotlight</span>
        </h1>
        {/* <div className="relative"> */}
        <Swiper
          className="relative"
          slidesPerView={4}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            865: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {News.map((item, index) => (
            <SwiperSlide className="relative" key={index}>
              <div className="rounded shadow-lg bg-themedarkblue text-white h-[500px] w-[400px]">
                <div className="relative w-full h-1/3 bg-black">
                  <Image
                    fill
                    className="object-cover"
                    src={item.image_src}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div className="px-6 py-4 h-[250px]">
                  <div className="font-bold text-lg mb-2">{item.title}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{item.category}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};
