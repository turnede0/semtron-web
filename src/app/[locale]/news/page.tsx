import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import NewsGridOverlay from "@src/components/News/NewsGridOverlay";
import Overlay from "@src/components/common/Overlay";

export default function ContactPage() {
  const t = useTranslations("NewsPage");

  return (
    <PageLayout>
      <Overlay title={t("title")} subtitle={t("subtitle")} />
      <NewsGridOverlay />
    </PageLayout>
  );
}
