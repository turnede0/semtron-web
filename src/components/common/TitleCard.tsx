import React from "react";

export default function TitleCard() {
  return (
    <div className="w-screen h-[300px] bg-white p-20">
      <div className="grid grid-cols-10 h-[150px]">
        <div className="flex items-center justify-center col-span-3 text-4xl">
          <span>Find your way around Brown</span>
        </div>
        <div className="flex items-center justify-center border-l-[10px] border-themeblue  col-span-7 text-4xl">
          <span>
            &quot;Explore the countless paths and opportunities that Semtron has
            to offer.&quot;
          </span>
        </div>
      </div>
    </div>
  );
}
