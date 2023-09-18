import React from "react";
import PageLayout from "@src/components/PageLayout";
import MarqueeSelection from "@src/components/Home/MarqueeSelection";
import { HomeOverlay } from "@src/components/Home/HomeOverlay";
import { CategoryOverlay } from "@src/components/Home/CategoryOverlay";
import PartnerOverlay from "@src/components/Home/PartnerOverlay";
import StemOverlay from "@src/components/Home/StemOverlay";
import IntroVideoOverlay from "@src/components/Home/IntroVideoOverlay";
import ExploreOverlay from "@src/components/Home/ExploreOverlay";

export default function IndexPage() {
  return (
    <PageLayout>
      {/* <HomeOverlay />
      <CategoryOverlay />
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

      {/* <VideoOverlay />
      <MarqueeSelection />
      <InfoRobot />
   
      <InfoHealth />
      <Info /> */}
      <div className="relative overflow-hidden">
        <div
          className="absolute h-1/3 w-full opacity-20 bg-gradient-to-t from-transparent to-black pointer-events-none"
          id="top_gradient"
        ></div>
        <HomeOverlay />
        <IntroVideoOverlay />
        <CategoryOverlay />
        <PartnerOverlay />
        <MarqueeSelection />
        <StemOverlay />
        <ExploreOverlay />
      </div>
    </PageLayout>
  );
}
