import React from "react";
import { Bebas_Neue } from "@next/font/google";
import SolderingPhoto from "@public/image/course/pcb/soldering.jpg";
import WeatherPhoto from "@public/image/course/pcb/education/weather.jpg";
import GpsPhoto from "@public/image/course/pcb/education/gps.jpg";
import AicarPhoto from "@public/image/course/pcb/education/aicar.png";
import Image, { StaticImageData } from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

function Card(props: {
  imgSrc: StaticImageData;
  title: string;
  content: string;
}) {
  return (
    <div className="h-3/4 relative group overflow-hidden bg-black m-auto">
      <Image
        src={props.imgSrc}
        alt={props.title}
        className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
      />
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500  inset-y-3/4 group-hover:-inset-y-0">
        <AiOutlineArrowUp
          size="30"
          color="white"
          className="mt-10 m-auto group-hover:hidden"
        />
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
            {props.title}
          </p>
        </div>
        <div className="absolute w-full flex place-content-center mt-20">
          <p className="font-sans text-center w-4/5 text-white mt-5">
            {props.content}
          </p>
        </div>
        {/* <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
          Contact Us
        </button> */}
      </div>
    </div>
  );
}

export default function PcbCourses() {
  return (
    <div className="w-scsreen">
      <div className={`${bebas_Neue.className} p-10 text-4xl h-1/2`}>
        Course
      </div>
      <div className="h-5/6 bg-black flex flex-row">
        <div className="w-1/4">
          <div
            className={`bg-red-600  text-center text-white text-2xl p-2 ${bebas_Neue.className}`}
          >
            PCB fundemental
          </div>
          <Card
            imgSrc={SolderingPhoto}
            title={"Fundamental PCB"}
            content={
              "Program designed to provide participants with a solid foundation in the principles and practices of printed circuit board (PCB) design and fabrication"
            }
          />
        </div>
        <div className="w-1/4">
          <div
            className={`bg-amber-400  text-center text-white text-2xl p-2 ${bebas_Neue.className}`}
          >
            Weather station
          </div>
          <Card
            imgSrc={WeatherPhoto}
            title={"Weather station"}
            content={
              "Program designed to provide participants with the knowledge and skills required to build and operate weather monitoring systems. "
            }
          />
        </div>
        <div className="w-1/4">
          <div
            className={`bg-green-500  text-center text-white text-2xl p-2 ${bebas_Neue.className}`}
          >
            GPS sensor module
          </div>
          <Card
            imgSrc={GpsPhoto}
            title={"GPS sensor module"}
            content={
              "Collaborative effort of a group to achieve a common goal the most effective and efficient way!"
            }
          />
        </div>
        <div className="w-1/4">
          <div
            className={`bg-purple-500  text-center text-white text-2xl p-2 ${bebas_Neue.className}`}
          >
            AI voice recognition car
          </div>
          <Card
            imgSrc={AicarPhoto}
            title={"AI voice recognition car"}
            content={
              "Collaborative effort of a group to achieve a common goal the most effective and efficient way!"
            }
          />
        </div>
      </div>
    </div>
  );
}
