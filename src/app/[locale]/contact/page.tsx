import PageLayout from "@src/components/PageLayout";
// import Image from "next/image";
// import CoverImage from "@public/image/contact/pcb-lab-2.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Bebas_Neue } from "@next/font/google";
import { Reveal } from "@src/components/common/Reveal";
import Image from "next/image";
import CrossSvg from "@public/icon/blue_cross.svg";
import SquareSvg from "@public/icon/blue_square.svg";
import { Link, useTranslations } from "next-intl";
const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <PageLayout>
      {/* <div className="relative overflow-hidden">
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
      </div> */}
      <div className="w-screen h-screen grid grid-cols-2 mt-16">
        <div className="mt-28 ml-28 w-[300px]">
          <div className={`${bebas_Neue.className} text-4xl`}>Contact</div>
          <div className="text-xl my-6">
            Your source for best colleges and what&apos;s next in your education
            and career.
          </div>
          <div className=" mr-2  sm:rounded-lg">
            <div className="flex items-center text-themedarkblue ">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                {t("phone")}
              </div>
            </div>

            <div className="flex items-center  text-themedarkblue ">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                {t("email")}
              </div>
            </div>

            <div className="inline-flex justify-between ">
              <Link href="https://www.facebook.com/AerosimHK/">
                <FaFacebookSquare size={50} />
              </Link>
              <Link href="https://www.instagram.com/aerosimhkltd/">
                <FaInstagram size={50} />
              </Link>
              <Link href="https://www.linkedin.com/company/aerosim-hk/?original_referer=https%3A%2F%2Faerosim.com.hk%2F">
                <FaLinkedin size={50} />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* <Image
            src={CoverImage}
            className="absolute object-cover"
            alt="coverimage"
          /> */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.5063810629513!2d114.18846150042278!3d22.316204376259492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400d86c155555%3A0xb2c39f9d8057f494!2sGee%20Chang%20Industrial%20Building!5e0!3m2!1sen!2sca!4v1695943339359!5m2!1sen!2sca"
          ></iframe>
          <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-themeblue text-white p-6 flex items-center">
            <div className="flex flex-col">
              <div
                className={`${bebas_Neue.className} text-lg flex flex-row items-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{t("addressName")}</span>
              </div>
              <div className="text-xs">{t("address")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          id="content"
          className="w-screen h-screen relative flex items-center  justify-center"
        >
          <div className="absolute w-full h-full">
            <div className=" bg-black w-[300px] h-[300px] absolute top-0 right-0"></div>
            <div className=" bg-themeblue w-[100px] h-[600px] absolute top-0 left-0"></div>
            <div className=" bg-black w-[300px] h-[300px] absolute bottom-0   left-48"></div>
            <Image
              src={SquareSvg}
              width={200}
              alt="cross"
              className="absolute left-32 top-20"
            />
            <Image
              src={CrossSvg}
              width={200}
              alt="cross"
              className="absolute right-10 bottom-20"
            />
          </div>
          <div>
            <div className="relative flex justify-center items-center sm:pt-0 w-[550px] h-full   bg-themeblue p-5">
              <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Reveal>
                    <div className="my-10">
                      <form
                        action="https://formsubmit.co/ef77929153ae5775c223062db29ced43"
                        method="POST"
                        className="px-6 flex flex-col justify-center"
                      >
                        <div className="flex flex-row  items-center">
                          <label className="w-[150px] text-white">
                            {t("fullname")}
                          </label>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder={t("fullname")}
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          />
                        </div>

                        <div className="flex flex-row mt-2 items-center">
                          <label className="w-[150px] text-white">
                            {t("contactemail")}
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t("contactemail")}
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          />
                        </div>

                        <div className="flex flex-row mt-2  items-center">
                          <label className="w-[150px] text-white">
                            {t("contacttel")}
                          </label>
                          <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder={t("contacttel")}
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-row mt-2  items-center">
                          <label className="w-[150px] text-white">
                            {t("message")}
                          </label>
                          <textarea
                            name="message"
                            placeholder={t("message")}
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="md:w-32 bg-themedarkblue hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-white hover:text-themedarkblue transition ease-in-out duration-300"
                        >
                          {t("submit")}
                        </button>
                      </form>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
