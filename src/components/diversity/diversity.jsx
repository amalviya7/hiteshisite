/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function TextAndImageSectionOfDiversity({
  blackHeading,
  blueHeading,
  image,
  description,
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
    <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
      <Grid container spacing={{ xs: 4, md: 2, lg: 10 }}>
        <Grid item xs={12} md={6.5} className="flex items-center">
          <div
            className={`${animate && "fade-in-left"} lg:w-[90%] xl:w-[93%]`}
            ref={ref1}
          >
            <div className="xs:inline-block md:block">
              <h1 className=" text-black xs:text-[24px] sm:text-[30px] md:text-[25px] lg:text-[26px] xl:text-[36px] xxl:text-[44px] font-normal tracking-tight leading-relaxed md:leading-[45px] lg:leading-[50px]">
                {blackHeading}
                <span className=" pl-[1px] md:hidden px-2 font-normal text-[#2490D2] tracking-tight">
                  {blueHeading}
                </span>
              </h1>
              <h1 className=" xs:hidden md:block  xs:text-[24px] sm:text-[30px] md:text-[25px] lg:text-[26px] xl:text-[36px] xxl:text-[44px] font-normal text-[#2490D2] tracking-tight">
                {blueHeading}
              </h1>
            </div>

            <div className="mt-2 md:w-[90%] xl:w-[85%]  ">
              <p className={`${text} font-normal  text-[#464646] ${leading}`}>
                {description}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <div className={`${animate2 && "fade-in-right"}`} ref={ref2}>
            <Image
              src={image.src}
              alt={altName}
              width={500}
              height={600}
              className="h-full w-full rounded-3xl"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
