import { Link, useTranslations } from "next-intl";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function ContactOverlay() {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <section className="text-themedarkblue body-font relative min-h-screen lg:flex items-center justify-center">
        <div className="lg:w-1/2 h-[400px] lg:h-screen inset-0 bg-themedarkblue">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59026.36338062759!2d114.1882939!3d22.3857883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890d45b302d%3A0x8d3863c9a5fbfce4!2sBuilding%2016W!5e0!3m2!1sen!2shk!4v1685087209694!5m2!1sen!2shk"
          ></iframe>
        </div>
        <div className="relative flex justify-center items-center sm:pt-0 lg:w-1/2 lg:h-screen bg-themeyellow p-5">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="">
                <div className=" mr-2  sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-themedarkblue font-extrabold tracking-tight">
                    {t("getintouch")}
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-themedarkblue  mt-2">
                    {t("fillform")}
                  </p>

                  <div className="flex items-center mt-8 text-themedarkblue ">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      {t("address")}
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-themedarkblue ">
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

                  <div className="flex items-center mt-2 text-themedarkblue ">
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

                  <div className="inline-flex justify-between mt-5">
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

                <form
                  action="https://formsubmit.co/tomlee0211@gmail.com"
                  method="POST"
                  className="px-6 flex flex-col justify-center"
                >
                  <div className="flex flex-col">
                    <label className="hidden">{t("fullname")}</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder={t("fullname")}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">{t("contactemail")}</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("contactemail")}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">{t("contacttel")}</label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder={t("contacttel")}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
