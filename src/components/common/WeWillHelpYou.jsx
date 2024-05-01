/* eslint-disable react/prop-types */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function WillHelpYou({
  title1,
  title2,
  text1,
  text2,
  image,
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
    <div className="flex xs:flex-col-reverse md:flex-row xs:gap-5 xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 md:gap-10 lg:gap-14 xl:gap-16 justify-center items-center">
      <div
        className={`${
          animate && "fade-in-left"
        } xs:w-full md:w-1/2 md:flex justify-center`}
        ref={ref1}
      >
        <div className="relative">
          <Image
            src={image}
            alt={altName}
            className={`xs:h-auto md:h-[400px] lg:h-[450px]
            } xl:h-auto rounded-2xl object-fill object-left-top`}
          />
        </div>
      </div>
      <div
        className={`${animate2 && "fade-in-right"} xs:w-full md:w-1/2`}
        ref={ref2}
      >
        <div className="">
          <div className="text-[#0E9CE8] xs:text-3xl sm:text-5xl md:text-4xl xl:text-4xl font-semibold xs:pb-3 lg:pb-0 xl:pb-3  capitalize">
            <h2>
              {title1}
              <span className="text-black">{title2}</span>
            </h2>
          </div>
          <div className="xs:text-base md:text-sm lg:text-[16px]  text-[#000000] normal-case xs:py-4 md:py-2 md:leading-[22px] lg:leading-7 xl:leading-7 xxl:leading-loose">
            <p>{text1}</p>
          </div>
          <div className="xs:text-base md:text-sm lg:text-[16px]  text-[#000000] normal-case xs:py-2 md:py-0 md:leading-[22px] xl:leading-7 xxl:leading-loose  lg:leading-7">
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
