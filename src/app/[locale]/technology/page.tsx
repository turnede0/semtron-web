import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import TechnologyOverlay from "@src/components/Technology/TechnologyOverlay";
import TechnologyPollutionOverlay from "@src/components/Technology/TechnologyPollutionOverlay";
import TechnologyUpcyclingOverlay from "@src/components/Technology/TechnologyUpcyclingOverlay";
import TechnologyProductOverlay from "@src/components/Technology/TechnologyProductOverlay";
import TechnologyDescriptionOverlay from "@src/components/Technology/TechnologyDescriptionOverlay";

export default function ProductPage() {
  const t = useTranslations("TechnologyPage");

  return (
    <PageLayout title={t("title")}>
      <TechnologyOverlay />
      <TechnologyPollutionOverlay />
      <TechnologyUpcyclingOverlay />
      <TechnologyProductOverlay />
      <TechnologyDescriptionOverlay />
    </PageLayout>
  );
}
