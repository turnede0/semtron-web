import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import playOne from "@public/image/body_front.jpg";

export default function ProductReviewOverlay() {
  const t = useTranslations("ProductPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center z-10 h-[1000px] max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-1/3 bottom-0 w-full  opacity-95 bg-gradient-to-t from-black to-transparent"
          id="bottom_gradient"
        ></div>
        <Image
          fill
          className="h-full object-cover z-[-1] "
          src={playOne}
          alt="Logo"
        />
      </section>
    </div>
  );
}
