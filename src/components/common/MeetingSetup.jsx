/* eslint-disable react/prop-types */
"use client";

//image
import Image from "next/image";
import React from "react"

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function Meeting({
  reverse,
  btnText,
  heading,
  subHeading,
  image,
  data,
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
    <div
      className={`xxl:min-h-[500px] items-center flex xl:min-h-[300px] bg-cover bg-no-repeat  bg-[#000D14] opacity-[0.85]`}
    >
      <div
        className={`xs:w-full lg:w-[85%] mx-auto flex xs:flex-col-reverse ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }  items-center py-14 `}
      >
        <div
          className={`${
            animate && reverse ? "fade-in-right" : "fade-in-left"
          } xs:py-4 md:w-[50%] py-12 xs:px-7 sm:px-16 md:pr-24 lg:pr-20 xl:pr-28 xxl:pr-32`}
          ref={ref1}
        >
          <Image src={image} alt={altName} />
        </div>

        <div
          className={`${
            animate2 && reverse ? "fade-in-left" : "fade-in-right"
          } md:pt-8 md:w-[50%] xs:px-9 sm:px-16 md:px-28 lg:px-24 xl:px-32 xxl:px-28`}
          ref={ref2}
        >
          <h1 className=" text-slate-100 xs:text-2xl sm:text-[33px] md:text-[22px] lg:text-[29px] xxl:text-[42px] font-semibold">
            {heading}
          </h1>
          <div className="lg:pt-4 xl:w-[80%]">
            <p className="xs:text-[16px] sm:text-[18px] md:text-[15px] lg:text-[17px] xl:text-[20px] xxl:text-[24px] leading-7 xl:leading-9 font-light xs:text-white xs:pt-4 ">
              {subHeading}
            </p>
          </div>
          <div className="py-9" 
          // onClick={() => router.push(data.link)}
          >
            <Link href={data.link}>
            {/* <button className="bg-[#FFFFFF] w-[148px] h-[47px] py-4 text-[#0E9CE8] bodyText2 font-medium relative group  hover:text-white">
              <span className="absolute bg-[#1387C5] w-[31px] group-hover:w-full group-hover:rounded-none transition-all duration-500 h-full top-0 left-0 rounded-r-full">
                <Image
                  src={ButtonImage}
                  alt="arrow icon"
                  className="pt-[21px] ml-[5px] transition-all group-hover:opacity-0"
                  />
              </span>
              <span className="absolute left-[28%] top-1/2 translate-y-[-50%]">
                {btnText}
              </span>
            </button> */}
             <button className=" border-2 border-white w-[90px] xsx:w-[80px] sm:w-[150px]
                 md:w-[115px] lg:w-[150px] xs:h-[45px] sm:h-[50px] md:h-[45px] 
                 lg:h-[50px] xl:h-[52px] rounded-full p-2 sm:p-3 text-xs sm:bodyText2 
                 md:text-xs lg:text-base text-white hover:bg-[#1387C5]  hover:text-white  
                 cursor-pointer mt-[20px] hover:border-[#1387C5]">
               
               {btnText}
                        </button>
                  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
