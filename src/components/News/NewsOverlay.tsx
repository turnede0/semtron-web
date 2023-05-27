import { useTranslations } from "next-intl";
import React from "react";

export default function NewsOverlay() {
  const t = useTranslations("NewsPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full bg-themedarkblue z-0"
          id="bottom_gradient"
        ></div>
        <div className={`w-full lg:ml-52 z-[1]`}>
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {t("title")}
          </div>
          <div className="text-white text-2xl lg:text-8xl">{t("subtitle")}</div>
        </div>
      </section>
    </div>
  );
}
