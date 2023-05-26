import { useTranslations } from "next-intl";
import React from "react";

export default function ContactOverlay() {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full bg-themedarkblue z-0"
          id="bottom_gradient"
        ></div>
        <div
          className={`flex-col flex w-full justify-center items-start ml-52 z-[1]`}
        >
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {t("title")}
          </div>
          <div className="text-white text-8xl">{t("subtitle")}</div>
        </div>
      </section>
    </div>
  );
}
