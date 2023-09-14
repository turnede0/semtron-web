import React from "react";
import EasyedaImage from "@public/image/partner/easyeda.svg";
// import TurnedeImage from "@public/image/partner/turned-e-logo.png";
import HkstpImage from "@public/image/partner/HKSTP_logo.png";
import ChinaMobileImage from "@public/image/partner/hk_logo_colorful.1474c83.png";
import OceanparkImage from "@public/image/partner/logo.png";
import AvnetImage from "@public/image/partner/Avnet_logo_no-tagline_rgb.svg";
import EcehkustImage from "@public/image/partner/ece-hkust.png";
import EmsdImage from "@public/image/partner/emsd.png";
import PearsonImage from "@public/image/partner/pearson-logo.svg";
import OmronImage from "@public/image/partner/omron.png";

import Image from "next/image";

export default function PartnerOverlay() {
  return (
    <div className="h-fit w-screen flex items-center justify-center my-11">
      <div className="flex flex-col">
        <span className="mx-auto text-4xl font-bold">Accredited By</span>
        <span className="mx-auto text-lg my-6">
          We are the only HK-based STEAM programme that is STEM.org accredited
          and aligned with international curricula
        </span>
        <div className="grid grid-cols-4 h-fit items-center m-4">
          <Image
            src={EasyedaImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="easyeda"
          />
          {/* <Image
            src={TurnedeImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="turnede"
          /> */}
          <Image
            src={HkstpImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="hkstp"
          />
          <Image
            src={ChinaMobileImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="chinaMobile"
          />
          <Image
            src={OceanparkImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="oceanPark"
          />
          <Image
            src={AvnetImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="avnet"
          />
          <Image
            src={EcehkustImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="ecehkust"
          />
          <Image
            src={EmsdImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="emsd"
          />
          <Image
            src={PearsonImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="pearson"
          />
          <Image
            src={OmronImage}
            className="max-h-[100px] object-contain aspect-[3/2] mix-blend-color-burn m-auto"
            alt="omron"
          />
        </div>
      </div>
    </div>
  );
}
