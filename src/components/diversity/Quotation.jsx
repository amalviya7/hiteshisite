/* eslint-disable react/prop-types */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function Quotation({
  leftSymbol,
  text1,
  text2,
  text3,
  text4,
  rightSymbol,
}) {
  const [animate, setAnimate] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <div className={"xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60"}>
      <div className={`${animate && "fade-in-down"}`} ref={ref}>
        <div className="flex justify-start items-start">
          <Image
            src={leftSymbol}
            className="xs:w-3 sm:w-4 md:w-6 lg:w-10 w-12"
            alt="blog-image"
          />
        </div>
        <div className="xs:text-[13px] sm:text-[13px] md:text-[18px] lg:text-[22px] xl:text-[28px] xxl:text-[34px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text1}</h1>
        </div>
        <div className="xs:text-[13px] sm:text-[13px] md:text-[18px] lg:text-[22px] xl:text-[28px] xxl:text-[34px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text2}</h1>
        </div>
        <div className="xs:text-[13px] sm:text-[13px] md:text-[18px] lg:text-[22px] xl:text-[28px] xxl:text-[34px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text3}</h1>
        </div>
        <div className="xs:text-[13px] sm:text-[13px] md:text-[18px] lg:text-[22px] xl:text-[28px] xxl:text-[34px] text-[#1490D2] font-medium leading-relaxed text-center">
          <h1>{text4}</h1>
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
