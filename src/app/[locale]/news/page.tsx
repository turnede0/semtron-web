import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import NewsOverlay from "@src/components/News/NewsOverlay";
import NewsGridOverlay from "@src/components/News/NewsGridOverlay";

export default function ContactPage() {
  const t = useTranslations("NewsPage");

  return (
    <PageLayout title={t("title")}>
      <NewsOverlay />
      <NewsGridOverlay />
    </PageLayout>
  );
}
