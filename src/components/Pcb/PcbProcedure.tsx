"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import DesignPhoto from "@public/image/course/pcb/design.jpg";
import PhotolithographyPhoto from "@public/image/course/pcb/photolithography.jpg";
import EtchingPhoto from "@public/image/course/pcb/etching.jpg";
import DrillingPhoto from "@public/image/course/pcb/drilling-pcb.webp";
import PlatingPhoto from "@public/image/course/pcb/plating.png";
import SoldermaskPhoto from "@public/image/course/pcb/soldermask.jpg";
import SilkscreenPhoto from "@public/image/course/pcb/silkscreen.webp";
import SurfacePhoto from "@public/image/course/pcb/surface.jpg";
import SolderingPhoto from "@public/image/course/pcb/soldering.jpg";
import TestingPhoto from "@public/image/course/pcb/testing.jpg";
import { Bebas_Neue } from "@next/font/google";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

function SlidCard(props: {
  imgSrc: StaticImageData;
  title: string;
  content: string;
}) {
  return (
    <div>
      <Image
        src={props.imgSrc}
        className=" object-cover w-[400px] h-[300px]"
        alt={props.title}
      />
      <div className="w-[400px] my-6">
        <div className={`${bebas_Neue.className} text-2xl`}>{props.title}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default function PcbProcedure() {
  return (
    <div className="h-screen py-6 px-6">
      <div className={`${bebas_Neue.className} text-4xl `}>
        the process of making circuit boards
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlidCard
            imgSrc={DesignPhoto}
            title={"1.Design circuit"}
            content={
              "Use a computer-aided design (CAD) software to create the circuit schematic and layout."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={PhotolithographyPhoto}
            title={"2.Photolithography"}
            content={
              "The circuit design is printed onto a transparent film called a photomask. The board and photomask are aligned and exposed to UV light, which transfers the circuit pattern onto the photoresist."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={EtchingPhoto}
            title={"3.Etching"}
            content={
              "The board is submerged in an etchant solution, such as ammonium persulfate or ferric chloride. The exposed copper that is not protected by the photoresist is chemically etched away, leaving only the desired copper traces."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={DrillingPhoto}
            title={"4.Drilling"}
            content={
              "Precision drills equipped with automated drilling machines create holes for component leads and vias at specified locations on the board."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={PlatingPhoto}
            title={"5.Plating"}
            content={
              "A thin layer of conductive material, typically copper, is electroplated onto the board's surface and inside the drilled holes to ensure proper electrical connectivity."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={SoldermaskPhoto}
            title={"6.Soldermask application"}
            content={
              "A solder-resistant layer called soldermask is applied to the board, leaving only the copper traces, pads, and holes exposed."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={SilkscreenPhoto}
            title={"7.Silkscreen printing"}
            content={
              " Component labels, reference designators, and other markings are added to the board's surface using silkscreen printing or inkjet printing techniques."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={SurfacePhoto}
            title={"8.Surface finish"}
            content={
              "The board's exposed copper surfaces are coated with a protective layer, such as tin, nickel, or gold, to prevent oxidation and enhance solderability."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={SolderingPhoto}
            title={"9.Soldering"}
            content={
              "Place the electronic components onto the board and solder them into place. Use a soldering iron and solder wire for this process."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidCard
            imgSrc={TestingPhoto}
            title={"10.Testing"}
            content={
              "Use a multimeter or other testing equipment to verify the continuity and functionality of the circuit."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
