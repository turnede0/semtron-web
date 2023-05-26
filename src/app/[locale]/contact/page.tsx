import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import Contact from "@src/components/Contact/Contact";
import ContactOverlay from "@src/components/Contact/ContactOverlay";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <PageLayout title={t("title")}>
      <ContactOverlay />
      <Contact />
    </PageLayout>
  );
}
