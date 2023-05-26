import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import Body_front from "@public/image/body_front_polaroid.jpg";

import { Swanky_and_Moo_Moo } from "@next/font/google";

const swanky_and_Moo_Moo = Swanky_and_Moo_Moo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-swanky",
});

export default function TechnologyProductOverlay() {
  const t = useTranslations("TechnologyPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full opacity-80 bg-themedarkblue z-0"
          id="bottom_gradient"
        ></div>
        <Image
          fill
          className="h-full object-cover z-[-1] "
          src={Body_front}
          alt="Logo"
        />
        <div
          className={`flex flex-col bg-polaroid w-[500px] h-[450px] justify-center items-start z-[1] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-150 `}
        >
          <div className="w-[450px] m-5">
            <Image
              className="h-full object-cover z-[-1]"
              src={Body_front}
              alt="Logo"
            />
          </div>
          <p
            className={`${swanky_and_Moo_Moo.className} text-3xl text-black whitespace-pre-line m-auto`}
          >
            🚘 {t("simauto")}🎮
          </p>
        </div>
      </section>
    </div>
  );
}
