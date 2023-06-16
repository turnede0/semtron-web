import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import pcb_top_3 from "@public/image/pcb_top_3.jpg";
import { Reveal } from "../common/Reveal";

export default function ProductPCBOverlay() {
  const t = useTranslations("ProductPage.pcboverlay");

  return (
    <div>
      <div className={`relative bg-white text-black py-[150px]`}>
        <div className="absolute top-0 right-0 overflow-hidden h-full w-full sm:w-[60%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 ">
          <Image
            className="object-cover scale-150"
            src={pcb_top_3}
            alt={""}
          ></Image>
        </div>
        <div className="z-10 flex items-center justify-center overflow-visible pl-10 pr-24 sm:w-[40%]">
          {/*Content*/}
          <div className=" text-black">
            <Reveal>
              <h1 className="text-4xl font-bold text-left">{t("title")}</h1>
            </Reveal>
            <div className="w-auto h-[40px] flex items-center overflow-visible transform translate-y-[-3px]">
              <Reveal>
                <h1 className="text-[120px] font-bold">-</h1>
              </Reveal>
            </div>
            <Reveal>
              <p
                className="text-sm text-justify break-words"
                style={{ wordWrap: "break-word" }}
              >
                {t("content")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
