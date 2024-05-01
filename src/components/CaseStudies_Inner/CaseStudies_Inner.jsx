/* eslint-disable react/prop-types */
"use client";

import { React ,useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function CaseStudies_Inner({ data }) {
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
      className={`w-full relative bg-no-repeat bg-cover h-full flex justify-center items-center ${
        animate && "fade-in-down"
      }`}
      ref={ref}
    >
      <div className="">
        <Image src={data.image} alt={data.altName} />
      </div>
      <div className="absolute top-auto left-auto right-auto bottom-auto text-center w-[90%] h-full flex justify-center items-center">
        <div className="">
          <h1 className="text-[12px] sm:text-[20px] md:text-[30px] lg:text-[42px] xl:text-[53px] xxl:text-[65px] text-white font-medium px-6 sm:px-10">
            {data.title1}
          </h1>
          <h1 className="xs:text-[17px] sm:text-[28px] md:text-[42px] lg:text-[56px] xl:text-[60px] xxl:text-[75px] text-white font-semibold">
            {data.title2}
          </h1>
          <h1 className="text-[12px] sm:text-[20px] md:text-[30px] lg:text-[42px] xl:text-[53px] xxl:text-[65px] text-white font-medium px-6 sm:px-10">
            {data.title3}
          </h1>
        </div>
      </div>
    </div>
  );
}
