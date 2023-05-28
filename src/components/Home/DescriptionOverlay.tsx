import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import PCB_Side from "@public/image/pcb_side_2.jpg";
import { useTranslations } from "next-intl";
import { Reveal } from "@src/components/common/Reveal";

interface DescriptionOverlayProps {}

const DescriptionOverlay: FunctionComponent<DescriptionOverlayProps> = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className={`relative bg-themedarkblue text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 ">
        <Image
          className="object-cover scale-150"
          src={PCB_Side}
          alt={""}
        ></Image>
      </div>
      <Reveal>
        <div className="relative lg:w-[70%] h-[80%] flex justify-center items-center bg-themeyellow p-5 z-0 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
          <div className="block p-6 m-10">
            <h1 className="mb-2 text-3xl font-bold  text-white leading-tight">
              {t("descriptionoverlay.title")}
            </h1>
            <h5 className="mb-2 text-3xl bold  leading-tight ">
              {t("descriptionoverlay.subtitle")}
            </h5>
            <div className="w-full flex lg:justify-end my-10">
              <p className="lg:w-[70%]">
                {t("descriptionoverlay.description")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default DescriptionOverlay;
