import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import AboutusOverlay from "@src/components/Aboutus/AboutusOverlay";
import AboutusEducationOverlay from "@src/components/Aboutus/AboutusEducationOverlay";
import Contact from "@src/components/Contact/Contact";

export default function ProductPage() {
  const t = useTranslations("AboutusPage");

  return (
    <PageLayout title={t("title")}>
      <AboutusOverlay />
      <AboutusEducationOverlay />
      <Contact />
    </PageLayout>
  );
}
