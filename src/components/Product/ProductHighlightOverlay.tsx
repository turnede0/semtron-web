import { useTranslations } from "next-intl";
import React from "react";
import Image, { StaticImageData } from "next/image";
import circuit_board from "@public/image/circuit_board.jpg";
import dirt_rally from "@public/image/dirt_rally.png";
import car_interior from "@public/image/car_interior.jpg";
import { Reveal } from "../common/Reveal";

interface ItemProps {
  imageSrc: StaticImageData;
  title: string;
  content: string;
}

function Item({ imageSrc, title, content }: ItemProps) {
  return (
    <div className="w-80 justify-around items-center text-zinc-50 p-1 font-poppins transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageSrc}
          alt=""
        />
      </div>
      <Reveal>
        <h1 className="text-left text-[28px] py-10">{title}</h1>
      </Reveal>
      <Reveal>
        <p className="text-left py-1">{content}</p>
      </Reveal>
    </div>
  );
}

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
          {/*Item 1*/}
          <Item
            imageSrc={circuit_board}
            title={t("items.item1.title")}
            content={t("items.item1.content")}
          />
          {/*Item 2*/}
          <Item
            imageSrc={dirt_rally}
            title={t("items.item2.title")}
            content={t("items.item2.content")}
          />
          {/*Item 3*/}
          <Item
            imageSrc={car_interior}
            title={t("items.item3.title")}
            content={t("items.item3.content")}
          />
        </div>
      </section>
    </div>
  );
}
