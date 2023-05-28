import React from "react";
import PageLayout from "@src/components/PageLayout";
import TechnologyOverlay from "@src/components/Technology/TechnologyOverlay";
import TechnologyPollutionOverlay from "@src/components/Technology/TechnologyPollutionOverlay";
import TechnologyUpcyclingOverlay from "@src/components/Technology/TechnologyUpcyclingOverlay";
import TechnologyProductOverlay from "@src/components/Technology/TechnologyProductOverlay";
import TechnologyDescriptionOverlay from "@src/components/Technology/TechnologyDescriptionOverlay";

export default function ProductPage() {
  return (
    <PageLayout>
      <TechnologyOverlay />
      <TechnologyPollutionOverlay />
      <TechnologyUpcyclingOverlay />
      <TechnologyProductOverlay />
      <TechnologyDescriptionOverlay />
    </PageLayout>
  );
}
