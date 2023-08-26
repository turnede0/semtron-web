import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import school_1 from "@public/image/school/school_1.png";
import school_2 from "@public/image/school/school_2.png";
import school_3 from "@public/image/school/school_3.png";
import school_4 from "@public/image/school/school_4.png";
import school_5 from "@public/image/school/school_5.png";
import school_6 from "@public/image/school/school_6.png";
import school_7 from "@public/image/school/school_7.png";
import school_8 from "@public/image/school/school_8.png";
import school_9 from "@public/image/school/school_9.png";
import school_10 from "@public/image/school/school_10.png";

export default function MarqueeSelection() {
  return (
    <div className="flex flex-col">
      <span className="mx-auto text-4xl font-bold">Our Client</span>
      <Marquee className="min-h-[100px] bg-white w-full" pauseOnHover gradient>
        <Image className="m-5" src={school_1} alt="school_1" />
        <Image className="m-5" src={school_2} alt="school_2" />
        <Image className="m-5" src={school_3} alt="school_3" />
        <Image className="m-5" src={school_4} alt="school_4" />
        <Image className="m-5" src={school_5} alt="school_5" />
        <Image className="m-5" src={school_6} alt="school_6" />
        <Image className="m-5" src={school_7} alt="school_7" />
        <Image className="m-5" src={school_8} alt="school_8" />
        <Image className="m-5" src={school_9} alt="school_9" />
        <Image className="m-5" src={school_10} alt="school_10" />
      </Marquee>
    </div>
  );
}
