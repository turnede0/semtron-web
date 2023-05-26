import React from "react";
import Image from "next/image";
import { CarouselCardType } from "@src/constants/types";
import { Link } from "next-intl";

type PropsType = {
  item: CarouselCardType;
};

export default function CarouselCard(props: PropsType) {
  return (
    <Link href={props.item.url}>
      <div className="rounded shadow-lg bg-themedarkblue text-white h-[500px] w-[400px]">
        <div className="relative w-full h-1/3 bg-black">
          <Image
            fill
            className="object-cover"
            src={props.item.image_src}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-6 py-4 h-[250px]">
          <div className="font-bold text-lg mb-2">{props.item.title}</div>
          <div className="mb-2 text-lg mt-20">{props.item.content}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{props.item.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
