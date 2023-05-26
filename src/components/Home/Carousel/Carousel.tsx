"use client";
/*  ./components/Navbar.jsx     */
import * as React from "react";
import { News } from "@src/constants/content/news";
import { useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CarouselCard from "./CarouselCard";

export const Carousel = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className="bg-white">
      <div className="py-20 relative">
        <h1 className="my-20">
          <span className="text-3xl">
            {t("missionoverlay.spotlight.title")}
          </span>
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
              <CarouselCard
                item={item}
                // category={item.category}
                // title={item.title}
                // content={item.content}
                // image_src={item.image_src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};
