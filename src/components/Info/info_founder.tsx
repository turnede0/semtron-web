/*  ./components/Navbar.jsx     */
import { useState, useRef, useMemo, useEffect } from "react";
import * as React from "react";
import language from "../locales/language";
import { useRouter } from "next/router";
import Image from "next/image";
import founder_image from "../../public/assets/photos/founder.jpg";

export const InfoFounder = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMarhin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  const router = useRouter();
  const { locale } = router;
  const t = language[locale]; // change language
  return (
    <>
      <div className="relative  overflow-hidden">
        <div
          className="bg-omronblue bg-cover bg-no-repeat w-screen h-screen"
          style={{
            background: `linear-gradient(90deg, #166fc0 50%, #e5e9ee 50%)`,
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url(${founder_image.src})`,
          }}
        >
          <div className="absolute right-0 w-6/12 h-full">
            <img
              src={founder_image.src}
              alt="Picture of the author"
              className="w-full h-full object-cover filter"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
