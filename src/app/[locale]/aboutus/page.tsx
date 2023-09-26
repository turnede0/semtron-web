import PageLayout from "@src/components/PageLayout";
import Image from "next/image";
import CoverImage from "@public/image/aboutus/pcb-lab.jpg";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export default function AboutusPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <div id="head" className="h-[50vh] w-screen  flex items-center">
          <Image
            src={CoverImage}
            className="absolute w-full h-full object-cover"
            alt="coverimage"
          />
          <div
            className="absolute w-full h-full bg-overlay opacity-70"
            id="overlay"
          />

          <div
            className={`text-white  text-7xl z-10 ml-40 text-bold ${montserrat.className}`}
          >
            ABOUT US
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
