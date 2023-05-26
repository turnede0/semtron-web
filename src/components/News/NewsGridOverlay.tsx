import { useTranslations } from "next-intl";
import React from "react";
import { News } from "@src/constants/content/news";
import CarouselCard from "../Home/Carousel/CarouselCard";

export default function NewsGridOverlay() {
  const t = useTranslations("NewsPage");

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4 my-20">
        {News.map((item, index) => (
          <div key={index}>
            <CarouselCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
