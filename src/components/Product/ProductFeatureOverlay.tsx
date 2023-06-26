import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import body_front_nbg from "@public/image/body_front_nbg.png";
import { Reveal } from "../common/Reveal";

interface TagProp {
  tag: string;
}

function Tag({ tag }: TagProp) {
  return (
    <div className="inline-block rounded-sm bg-gray-800 p-3 my-3 w-full transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
      <Reveal>
        <div className="text-left text-xl font-extrabold text-zinc-50">
          +{tag}
        </div>
      </Reveal>
    </div>
  );
}

export default function ProductFeatureOverlay() {
  const t = useTranslations("ProductPage.featureoverlay");

  return (
    <div>
      <section
        className="relative flex min-h-screen max-h-full overflow-hidden bg-black justify-around items-center"
        id="top"
        data-section="section1"
      >
        {/*Main Title*/}
        <div className="absolute left-0 top-48 text-white text-8xl lg:text-[150px] overflow-visible  font-bold z-10">
          <Reveal>
            <h6>{t("title")}</h6>
          </Reveal>
        </div>
        {/*Rounded Corner Container*/}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="h-[350px] w-[350px] lg:h-[500px] lg:w-[500px] rounded-[50px] m-auto bg-yellow-500 flex justify-center items-center">
            {/*Image in the container*/}
            <Image
              className="object-contain h-[250px] lg:h-[380px]"
              src={body_front_nbg}
              alt=""
            />
          </div>
          <div className="h-full w-[400px] z-10 flex flex-col justify-start items-start overflow-visible py-24 mx-10">
            {/*Sub Title*/}
            <div className="">
              <div className="rounded-lg bg-gray-200 p-3 flex transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
                <Reveal>
                  <h1 className="text-center text-4xl font-extrabold pr-3">
                    {t("subtitle_left")}
                  </h1>
                </Reveal>
                <Reveal>
                  <h1 className="text-center text-4xl font-extralight">
                    {t("subtitle_right")}
                  </h1>
                </Reveal>
              </div>
            </div>
            {/*Content*/}
            <div className="pr-10 my-10">
              <Reveal>
                <p className="text-zinc-50">{t("content")}</p>
              </Reveal>
            </div>
            {/* Tags */}
            <Tag tag={t("tags.tag1")} />
            <Tag tag={t("tags.tag2")} />
            <Tag tag={t("tags.tag3")} />
          </div>
        </div>
      </section>
    </div>
  );
}
