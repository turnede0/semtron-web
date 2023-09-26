import PageLayout from "@src/components/PageLayout";
import Image from "next/image";
import CoverImage from "@public/image/contact/pcb-lab-2.png";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <div id="head" className="h-[50vh] w-screen  flex items-center">
          <Image
            src={CoverImage}
            className="absolute h-[50vh] w-screen object-cover"
            alt="coverimage"
          />
          <div
            className="absolute h-[50vh] w-screen bg-overlay opacity-70"
            id="overlay"
          />

          <div
            className={`text-white  text-7xl z-10 ml-40 text-bold ${montserrat.className}`}
          >
            CONTACT
          </div>
        </div>
        <div
          id="content"
          className="w-screen h-screen relative flex items-center  justify-center"
        >
          <div className="absolute w-full h-full">
            <div className=" bg-themeblue w-[300px] h-[300px] absolute top-0 right-0"></div>
            <div className=" bg-themeblue w-[100px] h-[600px] absolute top-0 left-0"></div>
            <div className=" bg-themeblue w-[300px] h-[300px] absolute bottom-0   left-48"></div>
          </div>
          <div className="w-2/3 h-2/3 z-10  grid grid-cols-10 gap-4">
            <ul className="col-span-3 grid grid-rows-6 gap-2">
              <li className="row-span-1 bg-themeblue flex items-center justify-center">
                Email
              </li>
              <li className="row-span-1 bg-black flex items-center justify-center text-white">
                PHONE
              </li>
              <li className="row-span-2 bg-black flex items-center justify-center text-white">
                ADDRESS
              </li>
              <li className="row-span-3 bg-black flex items-center justify-center text-white">
                MAP
              </li>
            </ul>
            <div className="bg-white border-4 border-black col-span-7 "></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
