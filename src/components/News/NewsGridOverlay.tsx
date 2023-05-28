import React from "react";
import { News } from "@src/constants/content/news";
import CarouselCard from "@src/components/Home/Carousel/CarouselCard";
import { Reveal } from "../common/Reveal";

export default function NewsGridOverlay() {
  return (
    <div className="max-w-screen flex justify-center items-center">
      <Reveal>
        <div className="grid lg:grid-cols-3 gap-4 my-20">
          {News.map((item, index) => (
            <div key={index}>
              <CarouselCard item={item} />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
