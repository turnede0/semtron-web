import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Body_full from "@public/image/body_full.jpg";

export default function ProductDescriptionOverlay() {
  const t = useTranslations("ProductPage");
  return (
    <div className={`relative bg-themedarkblue text-black py-20`}>
      <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[50%]">
        <Image
          className="object-cover scale-150"
          src={Body_full}
          alt=""
        ></Image>
      </div>
      <div className="relative w-[70%] h-[80%] flex justify-center items-center bg-themeyellow p-5 z-0">
        <div className="block p-6 m-10">
          <h1 className="mb-2 text-3xl font-bold  text-white leading-tight">
            {t("descriptionoverlay.title")}
          </h1>
          <h5 className="mb-2 text-3xl bold  leading-tight">
            {t("descriptionoverlay.subtitle")}
          </h5>
          <div className="w-full flex justify-end">
            <p className="w-[70%]">{t("descriptionoverlay.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
