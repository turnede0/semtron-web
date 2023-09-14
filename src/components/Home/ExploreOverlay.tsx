import React from "react";
import Image from "next/image";
import stemImage from "@public/image/photo/crew.webp";
import ArrowIcon from "@public/icon/arrow-right-alt-3.svg";
export default function ExploreOverlay() {
  return (
    <div className="h-[60vh] w-screen">
      <div className="grid grid-cols-2 my-14">
        <div className="m-auto text-lg w-[400px]">
          <div>Student Voices</div>
          <div className="text-themeblue text-4xl">
            Learn from real students experiences
          </div>
          <div className="flex flex-row">
            <div>
              <div>Education in Students Words</div>
              <div>
                Read students takes on their education journeys, health, and
                more.
              </div>
            </div>
            <Image src={ArrowIcon} alt="arrow" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="h-[300px] object-contain "
            src={stemImage}
            alt="stem"
          />
        </div>
      </div>
    </div>
  );
}
