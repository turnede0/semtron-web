import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import { HomeOverlay } from "@src/components/Home/HomeOverlay";
import { MissionOverlay } from "@src/components/Home/MissionOverlay";
import DescriptionOverlay from "@src/components/Home/DescriptionOverlay";
import { Carousel } from "@src/components/Home/Carousel/Carousel";
import { NewsletterRegister } from "@src/components/Home/NewsletterRegister";

export default function IndexPage() {
  const t = useTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <HomeOverlay />
      <MissionOverlay />
      <DescriptionOverlay />
      <Carousel />
      <NewsletterRegister />

      {/* <p className="max-w-[590px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p> */}
    </PageLayout>
  );
}
