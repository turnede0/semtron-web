"use client";
import * as React from "react";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./CarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale, useTranslations } from "next-intl";

interface CarouselType {
  info: any[];
}

export const Carousel = (props: CarouselType) => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    dragFree: true,
    align: "start",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    scrollTo(2);
  }, []);

  return (
    <>
      <div className="relative bg-transparent p-1 max-w-6xl mx-auto">
        <div
          className="w-full inline-block align-middle overflow-x-hidden overflow-y-hidden"
          ref={viewportRef}
        >
          <div className="flex object-cover ">
            {props.info?.map((item, index) => (
              <div
                className="relative rounded shadow-lg bg-white mx-4 min-w-full sm:min-w-1/2 xl:min-w-1/3 text-omronblue"
                key={index}
              >
                <img
                  className="w-full"
                  src={item.image_src}
                  alt="Sunset in the mountains"
                ></img>

                <div className="px-6 py-4 h-[250px]">
                  <div className="font-bold text-2xl mb-2">{item.title}</div>
                  <div className="font-bold text-lg mb-2">{item.content}</div>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="flex list-none justify-center pt-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};
