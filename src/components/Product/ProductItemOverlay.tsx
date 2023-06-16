import { useTranslations } from "next-intl";
import React from "react";
import Image, { StaticImageData } from "next/image";
import body_wheel_2 from "@public/image/body_wheel_2.jpg";
import dashboard from "@public/image/dashboard.jpg";
import body_back from "@public/image/body_back.png";
import pcb_top_3 from "@public/image/pcb_top_3.jpg";
import { Reveal } from "../common/Reveal";

interface ImageColumnProps {
  imageSrc: StaticImageData;
}

function ImageColumn({ imageSrc }: ImageColumnProps) {
  return (
    <div className="lg:w-1/4 h-full">
      <Image
        className="object-cover w-full h-full transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110"
        src={imageSrc}
        alt=""
      ></Image>
    </div>
  );
}

export default function ProductItemOverlay() {
  const t = useTranslations("ProductPage.itemoverlay");

  return (
    <div>
      <section
        className="relative lg:inline-flex min-h-screen overflow-hidden justify-center"
        id="top"
        data-section="section1"
      >
        <div className="absolute h-full w-[400px] z-10 flex items-center justify-center overflow-visible">
          {/*Center Content*/}
          <div className="text-zinc-50">
            <Reveal>
              <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
            </Reveal>
            <div className="w-auto h-[40px] flex items-center overflow-visible transform translate-x-[-30px]">
              <Reveal>
                <h1 className="text-[100px] font-bold">-</h1>
              </Reveal>
            </div>
            <Reveal>
              <p
                className="text-sm text-justify break-words"
                style={{ wordWrap: "break-word" }}
              >
                {t("content")}
              </p>
            </Reveal>
          </div>
        </div>
        {/*Images*/}
        <div className="lg:flex">
          <ImageColumn imageSrc={body_wheel_2} />
          <ImageColumn imageSrc={dashboard} />
          <ImageColumn imageSrc={body_back} />
          <ImageColumn imageSrc={pcb_top_3} />
        </div>
      </section>
    </div>
  );
}
