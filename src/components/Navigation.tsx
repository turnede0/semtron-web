"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "@src/components/LocaleSwitcher";
import NavigationLink from "@src/components/NavigationLink";
import React from "react";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between px-2 py-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
