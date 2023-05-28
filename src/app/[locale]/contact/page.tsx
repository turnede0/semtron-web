import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import Contact from "@src/components/Contact/Contact";
import Overlay from "@src/components/common/Overlay";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <PageLayout title={t("title")}>
      <Overlay title={t("title")} subtitle={t("subtitle")} />
      <Contact />
    </PageLayout>
  );
}
