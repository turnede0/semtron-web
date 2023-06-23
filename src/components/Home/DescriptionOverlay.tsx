import * as React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import BodyWheel from "@public/image/home/body_wheel_2.png";
import Dashboard from "@public/image/home/dashboard.png";
import Chair from "@public/image/home/chair.png";
import Pcb from "@public/image/home/pcb_top_3.png";
import { useTranslations } from "next-intl";
import { Reveal } from "@src/components/common/Reveal";
import DesignCar from "@public/image/Design_2.jpg";

interface DescriptionOverlayProps {}

const DescriptionOverlay: FunctionComponent<DescriptionOverlayProps> = () => {
  const t = useTranslations("IndexPage");
  return (
    <div
      className={`bg-fixed bg-black bg-cover bg-no-repeat h-screen relative`}
      style={{
        backgroundImage: `url(${DesignCar.src})`,
      }}
    >
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full opacity-80 bg-white z-0"
          id="bottom_gradient"
        ></div>
        {/* <Image
          fill
          className="h-full object-cover z-[-1] "
          src={minicar}
          alt="Logo"
        /> */}
        <div
          className={`flex-col flex justify-center items-center z-[1] text-themedarkblue`}
        >
          <Reveal>
            <div>
              <div className="text-6xl text-bold m-10">
                {t("descriptionoverlay.title")}
              </div>
              <div className="text-dm m-10">
                {t("descriptionoverlay.subtitle")}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-4 gap-4">
              <div className="w-[300px] h-[300px] bg-black text-white">
                <Image
                  className="object-cover w-full h-full"
                  src={BodyWheel}
                  alt="Logo"
                />
              </div>
              <div className="w-[300px] h-[300px] bg-black text-white">
                {" "}
                <Image
                  className="object-cover w-full h-full"
                  src={Dashboard}
                  alt="Logo"
                />
              </div>
              <div className="w-[300px] h-[300px] bg-black text-white">
                {" "}
                <Image
                  className="object-cover w-full h-full"
                  src={Chair}
                  alt="Logo"
                />
              </div>
              <div className="w-[300px] h-[300px] bg-black text-white">
                {" "}
                <Image
                  className="object-cover w-full h-full"
                  src={Pcb}
                  alt="Logo"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default DescriptionOverlay;
