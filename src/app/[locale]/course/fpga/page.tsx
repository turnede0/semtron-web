import PageLayout from "@src/components/PageLayout";
import Image from "next/image";
import CoverImage from "@public/image/contact/pcb-lab-2.png";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

export default function FpgaPage() {
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
            className="absolute h-[50vh] w-screen bg-themedarkblue opacity-70"
            id="overlay"
          />

          <div
            className={`text-white  text-7xl z-10 ml-40 text-bold ${montserrat.className}`}
          >
            FPGA
          </div>
        </div>
        <div
          id="content"
          className="w-screen h-screen relative flex items-center  justify-center"
        ></div>
      </div>
    </PageLayout>
  );
}
