import React from "react";
import Image, { StaticImageData } from "next/image";

type OverlayType = {
  title: string;
  subtitle: string;
  image?: StaticImageData;
};

export default function Overlay(props: OverlayType) {
  return (
    <div className="">
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden  bg-black"
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-1/3 bottom-0 w-full opacity-100 bg-gradient-to-t from-themedarkblue to-transparent"
          id="bottom_gradient"
        ></div>
        {/* <div
          className={`
          ${props.image ? "opacity-80" : ""}
          absolute h-full bottom-0 w-full bg-themedarkblue z-0
        `}
          id="bottom_gradient"
        ></div> */}
        {props.image && (
          <Image
            fill
            className="h-full object-cover z-[-1] "
            src={props.image}
            alt="Logo"
          />
        )}
        <div className={`w-full lg:ml-52 z-[1]  motion-safe:animate-fadeIn`}>
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {props.title}
          </div>
          <div className="text-white text-2xl lg:text-7xl">
            {props.subtitle}
          </div>
        </div>
      </section>
    </div>
  );
}
