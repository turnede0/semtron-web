import React from "react";
import Image from "next/image";
import stemImage from "@public/image/photo/crew.webp";
import ArrowIcon from "@public/icon/arrow-right-alt-3.svg";
import { useTranslations } from "next-intl";
export default function ExploreOverlay() {
  const t = useTranslations("IndexPage");
  return (
    <div className="h-[60vh] w-screen ">
      <div className="grid grid-cols-2 my-14">
        <div className="m-auto text-lg w-[400px] group">
          <div>{t("connect.title")}</div>
          <div className="text-themeblue text-4xl my-4">
            {t("connect.message")}
          </div>
          <div className="flex flex-row">
            <div>
              <div>{t("connect.message2")}</div>
            </div>
            <Image
              src={ArrowIcon}
              alt="arrow"
              className="transform duration-200 group-hover:translate-x-5"
            />
          </div>
        </div>
        <div className="flex justify-center items-center ">
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
