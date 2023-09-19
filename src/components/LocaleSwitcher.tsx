"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { ChangeEvent } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(`/${event.target.value}${pathname}`);
  }

  return (
    <label className=" relative text-white">
      <p className="sr-only">{t("label")}</p>
      <select
        className="inline-flex  bg-transparent py-3 pl-2 pr-6 "
        defaultValue={locale}
        onChange={onSelectChange}
      >
        {["en", "hk"].map((cur) => (
          <option key={cur} value={cur} className="text-black">
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-[8px] right-2"></span>
    </label>
  );
}
