import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <PageLayout title={t("title")}>
      <div className="h-[100px] bg-black">
        <p className="max-w-[460px] text-white">{t("description")}</p>
      </div>
    </PageLayout>
  );
}
