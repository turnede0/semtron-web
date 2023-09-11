import React from "react";
import EasyedaImage from "@public/image/partner/en-logo-blue.svg";
import TurnedeImage from "@public/image/partner/turned-e-logo.png";
import HkstpImage from "@public/image/partner/HKSTP_logo.png";
import ChinaMobileImage from "@public/image/partner/hk_logo_colorful.1474c83.png";
import OceanparkImage from "@public/image/partner/logo.png";
import Image from "next/image";

export default function PartnerOverlay() {
  return (
    <div className="h-[50vh] w-screen flex items-center justify-center">
      <div className="flex flex-col">
        <span className="mx-auto text-4xl font-bold">Accredited By</span>
        <span className="mx-auto text-lg my-6">
          We are the only HK-based STEAM programme that is STEM.org accredited
          and aligned with international curricula
        </span>
        <div className="grid grid-cols-5 items-center h-[100px]">
          <Image
            src={EasyedaImage}
            className="h-full object-contain aspect-[3/2] mix-blend-color-burn"
            alt="easyeda"
          />
          <Image
            src={TurnedeImage}
            className="h-full object-contain aspect-[3/2] mix-blend-color-burn"
            alt="turnede"
          />
          <Image
            src={HkstpImage}
            className="h-full object-contain aspect-[3/2] mix-blend-color-burn"
            alt="hkstp"
          />
          <Image
            src={ChinaMobileImage}
            className="h-full object-contain aspect-[3/2] mix-blend-color-burn"
            alt="chinaMobile"
          />
          <Image
            src={OceanparkImage}
            className="h-full object-contain mix-blend-color-burn"
            alt="oceanPark"
          />
        </div>
      </div>
    </div>
  );
}
