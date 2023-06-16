import { useTranslations } from "next-intl";
import React from "react";
import { Reveal } from "../common/Reveal";

export default function ProductConclusionOverlay() {
  const t = useTranslations("ProductPage.conclusionoverlay");

  return (
    <div>
      <section
        className="relative flex min-h-screen max-h-full overflow-hidden bg-black justify-center items-center"
        id="top"
        data-section="section1"
      >
        {/*Center Content*/}
        <div className="absolute text-white text-[70px] font-bold z-10">
          <Reveal>
            <h1>{t("title")}</h1>
          </Reveal>
          <h1 className="text-center">-</h1>
        </div>
      </section>
    </div>
  );
}
