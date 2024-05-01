/* eslint-disable react/prop-types */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function Knowledge({
  leftSymbol,
  text1,
  text2,
  text3,
  text4,
  text5,
  rightSymbol,
}) {
  const [animate, setAnimate] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <div
      className={"px-10 sm:px-20 md:px-28 lg:px-44 xxl:px-60"}
    >
      <div className={`${animate && "fade-in-down"}`} ref={ref}>
        <div className="flex justify-start items-start">
          <Image
            src={leftSymbol}
            className="xs:w-3 sm:w-4 md:w-6 lg:w-10 w-12"
            alt="blog-image"
          />
        </div>
        <div className="text-[14px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-[34px] xxl:text-[38px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text1}</h1>
        </div>
        <div className="text-[14px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-[34px] xxl:text-[38px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text2}</h1>
        </div>
        <div className="text-[14px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-[34px] xxl:text-[38px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text3}</h1>
        </div>
        <div className="text-[14px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-[34px] xxl:text-[38px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text4}</h1>
        </div>
        <div className="text-[14px] sm:text-[13px] md:text-[20px] lg:text-[25px] xl:text-[34px] xxl:text-[38px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text5}</h1>
        </div>
        <div className="flex justify-end items-end">
          <Image
            src={rightSymbol}
            className="xs:w-3 sm:w-4 md:w-6 lg:w-10 w-12"
            alt="blog-image"
          />
        </div>
      </div>
    </div>
  );
}
