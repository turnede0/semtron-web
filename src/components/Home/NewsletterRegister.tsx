import { useTranslations } from "next-intl";
import React from "react";

export const NewsletterRegister = () => {
  const t = useTranslations("IndexPage");
  return (
    <div className="bg-themeyellow flex justify-center items-center h-[500px]">
      <div className="flex-col flex justify-center items-center">
        <div className="text-white my-5 text-5xl">{t("newsletter.join")}</div>
        <div className="my-5 text-4xl">{t("newsletter.message")}</div>
        <div className="flex rounded-3xl bg-white p-2 w-[700px]">
          <input
            type="email"
            className="h-[50px] w-10/12 px-3"
            placeholder={t("newsletter.email")}
          ></input>
          <button className="rounded-3xl p-5 text-white bg-themedarkblue">
            {t("newsletter.subscribe")}
          </button>
        </div>
      </div>
    </div>
  );
};
