import React from "react";
import PageLayout from "@src/components/PageLayout";
import AboutusOverlay from "@src/components/Aboutus/AboutusOverlay";
import AboutusEducationOverlay from "@src/components/Aboutus/AboutusEducationOverlay";
import Contact from "@src/components/Contact/Contact";

export default function ProductPage() {
  return (
    <PageLayout>
      <AboutusOverlay />
      <AboutusEducationOverlay />
      <Contact />
    </PageLayout>
  );
}
