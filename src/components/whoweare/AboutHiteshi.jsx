"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function AboutHiteshi() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div
      className={` ${
        animate && "fade-in-down"
      } xxl:min-h-[500px] items-center flex xl:min-h-[300px]  bg-cover bg-no-repeat bg-[#000D14] opacity-[0.85]`}
      ref={ref}
    >
      <div className="xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60 xs:pr-12 sm:pr-20 md:pr-24 lg:pr-[170px] xl:pr-[235px] md:!flex items-center py-8 ">
        <div className="xxl:pr-18  xs:py-4 md:w-[50%] py-8 ">
          <h3 className="xxl:text-5xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl pl-[2px] md:pl-1 xxl:pl-2 font-medium block   xs:text-white">
            About
          </h3>
          <h1 className="xxl:text-[170px] lg:text-8xl md:text-7xl sm:text-5xl xs:text-3xl font-medium block   xs:text-white">
            Hiteshi
          </h1>
        </div>

        <div className="md:py-6 md:w-[60%]">
          <p className="xxl:text-lg lg:text-sm md:text-sm sm:text-sm text-sm font-light xs:text-white xs:pb-4 text-justify ">
            Hiteshi Infotech is a reputable IT Software Services and Solutions
            Company, recognized with an ISO 9001:2015 quality certification.
            With a robust 17+ years of industry experience, we have established
            ourselves as experts in delivering customized software solutions
            spanning web, mobile, and IoT platforms. Our extensive clientele
            includes enterprise organizations across 27+ countries worldwide.
          </p>
          <p className="xxl:text-lg lg:text-sm md:text-sm sm:text-sm text-sm font-light xs:text-white xs:pt-4 text-justify">
            Since our inception in 2006, our core philosophy revolves around
            providing efficient and user-friendly software solutions across
            diverse domains such as Automotive, Financial Services, Healthcare,
            Government Projects, Retail, Hospitality, Banking, Education,
            Travel, Logistics and more.
          </p>
        </div>
      </div>
    </div>
  );
}
