/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function TextAndImageSection({
  joinus,
  blackHeading,
  blueHeading,
  image,
  description,
  leading1,
  leading,
  text,
  altName,
}) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView1) setAnimate(true);
    if (isInView2) setAnimate2(true);
  }, [isInView1, isInView2]);
  return (
    <div className="md:flex items-center justify-between xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
      <div
        className={`${
          animate && "fade-in-left"
        } md:w-1/2 md:mr-12 lg:mr-16 xl:mr-20 xxl:mr-24`}
        ref={ref1}
      >
        {joinus && (
          <h3 className="text-[#0E9CE8] xs:text-[22px] sm:text-[33px] md:text-[23px] lg:text-[32px] xl:text-[37px] xxl:text-[44px] font-medium md:leading-tight">
            {blueHeading}
            {"Join Us"}
          </h3>
        )}
        <h1
          className={`xs:text-[22px] sm:text-[33px] md:text-[23px] lg:text-[32px] xl:text-[37px] xxl:text-[44px] font-medium ${leading1} text-gray-600`}
        >
          {blackHeading}
        </h1>
        <h2
          className={`text-[#0E9CE8] xs:text-[22px] sm:text-[33px] md:text-[23px] lg:text-[32px] xl:text-[37px] xxl:text-[44px] ${leading1} md:leading-tight`}
        >
          {blueHeading}{" "}
        </h2>
        <div className="xs:mt-4 lg:mt-6">
          <p className={`${leading} xs:font-light ${text} text-justify `}>
            {description}
          </p>
        </div>
      </div>

      <div className={`${animate2 && "fade-in-right"} md:w-1/2 `} ref={ref2}>
        <Image
          src={image.src}
          alt={altName}
          width={500}
          height={600}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
