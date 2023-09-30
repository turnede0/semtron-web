import PageLayout from "@src/components/PageLayout";
import Image from "next/image";
import CoverImage from "@public/image/aboutus/pcb-lab.jpg";
import stemImage from "@public/image/photo/crew.webp";
import { Montserrat } from "@next/font/google";
import { Bebas_Neue } from "@next/font/google";
import AboutusSwiper from "@src/components/Aboutus/AboutusSwiper";
// import AboutusSlogan from "@src/components/Aboutus/AboutusSlogan";
import ExploreOverlay from "@src/components/Home/ExploreOverlay";
// import AboutUsTimeline from "@src/components/Aboutus/AboutUsTimeline";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-anton",
});

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function AboutusPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <div
          id="head"
          className="relative h-[300px] w-screen  flex items-center"
        >
          <Image
            src={CoverImage}
            className="absolute w-full h-full object-cover"
            alt="coverimage"
          />
          <div
            className="absolute w-full h-full bg-themedarkblue opacity-70"
            id="overlay"
          />

          <div
            className={`text-white  text-7xl z-10 ml-40 text-bold ${montserrat.className}`}
          >
            ABOUT US
          </div>
        </div>
        <div className="h-screen w-screen relative flex items-center  justify-center  p-44">
          <div className="w-full h-full absolute z-0">
            <div className=" bg-themeblue w-1/2 h-full absolute top-0 right-0"></div>
            <div className=" bg-black w-[100px] h-[300px] absolute bottom-0 left-0"></div>
          </div>
          <div className="grid grid-cols-10">
            <div className=" col-span-3">
              <div>
                <div className={`${bebas_Neue.className} text-3xl`}>
                  About semtron
                </div>
                <div className={`font-bold text-2xl my-10 `}>
                  We are hardware education expert
                </div>
                <div>
                  Over the last 5 years we have refined our web design process
                  through experience and invaluable opportunities to work with
                  businesses of all shapes and sizes across nearly every
                  industry imaginable.
                </div>
              </div>
            </div>
            <Image
              className="h-[400px] object-contain z-10 col-span-7"
              src={stemImage}
              alt="stem"
            />
          </div>
        </div>
        <AboutusSwiper />
        {/* <AboutusSlogan /> */}
        {/* <AboutUsTimeline /> */}
        <ExploreOverlay />
      </div>
    </PageLayout>
  );
}
