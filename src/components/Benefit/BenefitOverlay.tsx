"use client";
import Image, { StaticImageData } from "next/image";
import Skill from "../../../public/image/poster/skill.png";
import Int from "../../../public/image/poster/int.png";
import Exp from "../../../public/image/poster/exp.jpg";
import { title } from "process";
import { useState } from "react";
import { Reveal } from "../common/Reveal";

interface ContentCarrierProps {
  elementID: string;
  title: string;
  subtitle: string;
  content: string;
  img: StaticImageData;
}

const ContentCarrier = (props: ContentCarrierProps) => {
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    elementID: string
  ) => {
    const { clientX, clientY } = event;
    const hoverElement = document.getElementById(elementID);
    if (!hoverElement) return;
    const { left, top } = hoverElement?.getBoundingClientRect();
    setCursorOffset({ x: clientX - left, y: clientY - top });
  };
  const offsetWeight = 0.1;
  const style = {
    transform: `translate(${cursorOffset.x * offsetWeight}px, ${
      cursorOffset.y * offsetWeight
    }px) ${isHovered ? "scale(1.1)" : "scale(1.0)"}`,
  };
  return (
    <div
      id={props.elementID}
      onMouseEnter={(e) => {
        handleMouseMove(e, props.elementID);
        setIsHovered(true);
      }}
      onMouseMove={(e) => handleMouseMove(e, props.elementID)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-full h-[400px] w-[400px] overflow-hidden border-8 border-green-500 relative m-7"
      style={style}
    >
      <Image
        className={`h-full w-full object-none scale-[380%]`}
        src={props.img}
        alt={title}
      />
      <div className="h-full w-full bg-white opacity-50 absolute top-0 left-0"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
        <Reveal>
          <span className="text-8xl font-bold text-green-800">
            {props.title}
          </span>
        </Reveal>
        <Reveal>
          <span className="text-2xl font-bold text-green-800">
            {props.subtitle}
          </span>
        </Reveal>
        <Reveal>
          <span className="mt-2 font-bold">{props.content}</span>
        </Reveal>
      </div>
    </div>
  );
};

export default function BenefitOverlay() {
  return (
    <div className="w-screen h-[50vh] bg-slate-900 flex flex-col my-10">
      <div className="h-full flex flex-row items-center justify-center">
        <ContentCarrier
          elementID="skl"
          title="SKL"
          subtitle="技術培訓"
          content="讓學生掌握成為芯片工程師的基礎技能"
          img={Skill}
        />
        <ContentCarrier
          elementID="int"
          title="INT"
          subtitle="思維升級"
          content="啟發並培訓學生擁有硬體運作邏輯思維"
          img={Int}
        />
        <ContentCarrier
          elementID="exp"
          title="EXP"
          subtitle="經驗累積"
          content="透過實踐累計經驗協助學生成為硬體專才"
          img={Exp}
        />
      </div>
    </div>
  );
}
