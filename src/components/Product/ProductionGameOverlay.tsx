import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Body_full from "@public/image/body_full.jpg";

export default function ProductionGameOverlay() {
  const t = useTranslations("ProductPage");
  return (
    <div className={`inline-flex`}>
      <div className="overflow-hidden h-full w-1/3">
        <Image
          className="object-cover scale-150"
          src={Body_full}
          alt=""
        ></Image>
      </div>
      <div className="overflow-hidden h-full w-1/3">
        <Image
          className="object-cover scale-150"
          src={Body_full}
          alt=""
        ></Image>
      </div>
      <div className="overflow-hidden h-full w-1/3">
        <Image
          className="object-cover scale-150"
          src={Body_full}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
