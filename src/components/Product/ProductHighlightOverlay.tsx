import { useTranslations } from "next-intl";
import React from "react";
import circuit_board from "@public/image/circuit_board.jpg";
import dirt_rally from "@public/image/dirt_rally.png";
import car_interior from "@public/image/car_interior.jpg";
import DescriptionCard from "../common/DescriptionCard";

export default function ProductHighlightOverlay() {
  const t = useTranslations("ProductPage.highlightoverlay");

  return (
    <div>
      <section
        className="relative flex justify-center items-center min-h-screen max-h-full bg-black"
        id="top"
        data-section="section1"
      >
        <div className="flex justify-around items-start h-full w-full pt-[5%] px-36">
          {/*DescriptionCard 1*/}
          <DescriptionCard
            imageSrc={circuit_board}
            title={t("items.item1.title")}
            content={t("items.item1.content")}
          />
          {/*DescriptionCard 2*/}
          <DescriptionCard
            imageSrc={dirt_rally}
            title={t("items.item2.title")}
            content={t("items.item2.content")}
          />
          {/*DescriptionCard 3*/}
          <DescriptionCard
            imageSrc={car_interior}
            title={t("items.item3.title")}
            content={t("items.item3.content")}
          />
        </div>
      </section>
    </div>
  );
}
