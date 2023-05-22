// import { useTranslations } from "next-intl";
import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import PCB_Side from "@public/image/pcb_side_2.jpg";

interface DescriptionOverlayProps {}

const DescriptionOverlay: FunctionComponent<DescriptionOverlayProps> = () => {
  //   const t = useTranslations("IndexPage");
  return (
    <div className={`relative bg-themedarkblue text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%]">
        <Image
          className="object-cover scale-150"
          src={PCB_Side}
          alt={""}
        ></Image>
      </div>
      <div className="relative w-[70%] h-[80%] flex justify-center items-center bg-themeyellow p-5 z-0">
        <div className="block p-6 m-10">
          <h1 className="mb-2 text-3xl font-bold  text-white leading-tight">
            What we do
          </h1>
          <h5 className="mb-2 text-3xl bold  leading-tight">
            Our holistic approach
          </h5>
          <div className="w-full flex justify-end">
            <p className="w-[70%]">
              Since day one, we have looked at driving automation as a complex
              problem and worked on a holistic solution, instead of specializing
              in one isolated area. This holistic approach tackles both the
              tooling and the embedded solutions challenges of automated
              driving. Our expertise is in the combination of these pillars,
              making autonomous driving a reality. aiMotive&apos;s market-ready
              products enable our partners to quickly deploy affordable advanced
              ADAS and AD solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionOverlay;
