import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import play_1 from "@public/image/play_1.jpg";
import { Reveal } from "../common/Reveal";

export default function ProductScreenOverlay() {
  const t = useTranslations("ProductPage.screenoverlay");
  return (
    <div>
      <section
        className="relative flex justify-center items-center min-h-screen max-h-full overflow-hidden"
        id="top"
        data-section="section1"
      >
        <div className="absolute h-full w-[387px] z-10 flex items-center justify-center overflow-visible">
          <Reveal>
            <div className="text-zinc-50">
              <h1 className="text-4xl font-bold text-center py-6">
                {t("title")}
              </h1>
              <div className="w-auto h-[40px] flex items-center justify-center overflow-visible">
                <h1 className="text-[100px] font-bold">-</h1>
              </div>
              <p
                className="text-sm text-center break-words"
                style={{ wordWrap: "break-word" }}
              >
                {t("content")}
              </p>
            </div>
          </Reveal>
        </div>
        <Image
          className="h-full object-cover z-[-1] scale-150"
          src={play_1}
          alt=""
        />
      </section>
    </div>
  );
}
