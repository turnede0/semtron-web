import React from "react";
import PageLayout from "@src/components/PageLayout";
import { InfoRobot } from "@src/components/Info/info_robot";
import { VideoOverlay } from "@src/components/Info/Video_overlay";
import { InfoElec } from "@src/components/Info/info_elec";
import { InfoHealth } from "@src/components/Info/info_health";
import { Info } from "@src/components/Info/Info";
// import { HomeOverlay } from "@src/components/Home/HomeOverlay";
// import { MissionOverlay } from "@src/components/Home/MissionOverlay";
// import DescriptionOverlay from "@src/components/Home/DescriptionOverlay";
// import { Carousel } from "@src/components/Home/Carousel/Carousel";
// import { NewsletterRegister } from "@src/components/Home/NewsletterRegister";
// import ProductOverlay from "@src/components/Home/ProductOverlay";

export default function IndexPage() {
  return (
    <PageLayout>
      {/* <HomeOverlay />
      <MissionOverlay />
      <DescriptionOverlay />
      <ProductOverlay />
      <Carousel />
      <NewsletterRegister /> */}

      {/* <p className="max-w-[590px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p> */}
      <VideoOverlay />
      <InfoRobot />
      <InfoElec />
      <InfoHealth />
      <Info />
    </PageLayout>
  );
}
