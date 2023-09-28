"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
// import Image from "next/image";

export default function CourseHeader(props: {
  bgImage: StaticImageData;
  mainImage: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`bg-fixed bg-black bg-cover bg-no-repeat h-screen flex  items-center`}
      style={{
        backgroundImage: `url(${props.bgImage.src})`,
      }}
    >
      {/* <Reveal> */}
      {/* <section
          className="relative flex justify-center items-center min-h-screen z-10  max-h-full overflow-hidden -mb-1  "
          id="top"
          data-section="section1"
        ></section> */}
      <div className="absolute top-0 right-0 w-2/3 h-screen">
        <Image
          src={props.mainImage}
          alt="main"
          className=" object-cover h-full"
        />
      </div>
      <div className=" bg-themeblue w-[300px] h-[300px]  ml-72 z-10 text-white flex items-center justify-center">
        <div className="flex flex-col my-2">
          <div id="tag" className="flex flex-row items-center">
            <div className="flex flex-row my-4">
              <div
                id="parallelgram"
                className="w-[15px] h-[50px] skew-x-[-25deg] bg-white mx-1"
              ></div>
              <div
                id="parallelgram"
                className="w-[15px] h-[50px] skew-x-[-25deg] bg-themedarkblue mx-1"
              ></div>
            </div>
            <div className="mx-2 text-5xl font-bold">{props.title}</div>
          </div>
          <span className="text-2xl w-[180px]">{props.subtitle}</span>
        </div>
      </div>
      {/* </Reveal> */}
    </div>
  );
}
