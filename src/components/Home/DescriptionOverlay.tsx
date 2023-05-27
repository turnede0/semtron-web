// import { useTranslations } from "next-intl";
import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import PCB_Side from "@public/image/pcb_side_2.jpg";
import { useTranslations } from "next-intl";

interface DescriptionOverlayProps {}

const DescriptionOverlay: FunctionComponent<DescriptionOverlayProps> = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className={`relative bg-themedarkblue text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%]">
        <Image
          className="object-cover scale-150"
          src={PCB_Side}
          alt={""}
        ></Image>
      </div>
      <div className="relative lg:w-[70%] h-[80%] flex justify-center items-center bg-themeyellow p-5 z-0">
        <div className="block p-6 m-10">
          <h1 className="mb-2 text-3xl font-bold  text-white leading-tight">
            {t("descriptionoverlay.title")}
          </h1>
          <h5 className="mb-2 text-3xl bold  leading-tight ">
            {t("descriptionoverlay.subtitle")}
          </h5>
          <div className="w-full flex lg:justify-end my-10">
            <p className="lg:w-[70%]">{t("descriptionoverlay.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionOverlay;
