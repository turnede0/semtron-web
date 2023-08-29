import React from "react";
import PageLayout from "@src/components/PageLayout";
import MarqueeSelection from "@src/components/MarqueeSelection";
import { CourseOverlay } from "@src/components/Course/CourseOverlay";
import { InfoElec } from "@src/components/Info/info_elec";
import BenefitOverlay from "@src/components/Benefit/BenefitOverlay";
import bg from "../../../public/image/poster/benefit_bg.jpg";
import Image from "next/image";

export default function IndexPage() {
  return (
    <PageLayout>
      <InfoElec />
      <CourseOverlay />
      <Image
        className="absolute w-screen opacity-10 "
        src={bg}
        alt="bg"
      ></Image>
      <MarqueeSelection />
      <BenefitOverlay />

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
      {/* 
      <VideoOverlay />
      <MarqueeSelection />
      <InfoRobot />
      <InfoElec />
      <InfoHealth />
      <Info /> */}
    </PageLayout>
  );
}
