/* eslint-disable react/prop-types */
"use client";
import React from "react"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function FollowYourDreams({
  imageData,
  contentData,
  button,
  imageHeight,
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
    <div className="flex xs:flex-col-reverse md:flex-row w-[85%] sm:w-[80%] lg:w-[75%] mx-auto md:gap-10 lg:gap-20 xl:gap-16 justify-center items-center">
      <div
        className={`${
          animate && "fade-in-left"
        } xs:w-full md:w-1/2 md:flex justify-center`}
        ref={ref1}
      >
        <div className="relative">
          <Image
            src={imageData.image}
            alt={imageData.altName}
            className={`xs:h-auto ${imageHeight && "md:h-auto"}`}
          />
          <div className="absolute xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-white xs:px-5 xs:bottom-5 md:px-10 md:bottom-8 lg:bottom-10 capitalize font-semibold xl:leading-relaxed">
            <h3>{imageData.text1}</h3>
            <h3>{imageData.text2}</h3>
          </div>
        </div>
      </div>

      <div
        className={`${animate2 && "fade-in-right"} xs:w-full md:w-1/2`}
        ref={ref2}
      >
        <div className="">
          <div className="text-[#0E9CE8] xs:text-4xl xl:text-5xl font-semibold xs:py-3 lg:py-5 xs:pt-0 md:pt-7 capitalize">
            <h1>{contentData.blueHeading}</h1>
          </div>
          <div className="xs:text-xl md:text-base lg:text-lg xl:text-2xl font-semibold capitalize">
            <h3>{contentData.blackHeading}</h3>
          </div>
          <div className="xs:text-base lg:text-lg xl:text-lg text-[#707070] normal-case xs:py-4 md:py-2 md:leading-7 lg:leading-7 xl:leading-loose ">
            <p>{contentData.description}</p>
          </div>
        </div>
        {button && (
          <div className="xs:pb-2 lg:pb-[31px] lg:pt-[5px]">
          
          <Link href="/join-us">
          <button
              className=" border-2 border-black w-[160px] md:w-[180px]  xs:h-[45px] sm:h-[50px] md:h-[45px] 
                 lg:h-[50px] xl:h-[52px] rounded-full p-2 sm:p-3 text-xs sm:bodyText2 
                 md:text-xs lg:text-base text-black hover:bg-[#1387C5]  hover:text-white  
                 cursor-pointer mt-[20px] hover:border-[#1387C5]"
            >
               Search Open Roles
            </button>
         
                  </Link>
          </div>
        )}
      </div>
    </div>
  );
}
