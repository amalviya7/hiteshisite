/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function TextAndImageSectionOfDiversity({
  blueHeading,
  image,
  description,
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} className="flex items-center">
          <div className={`${animate && "fade-in-left"} lg:w-[90%] xl:w-[93%]`} ref={ref1}>
            <div >
            
            <h1 className=" xs:text-[30px] sm:text-[35px] md:text-[30px] lg:text-[38px] xl:text-[49px] xxl:text-[58px] font-normal text-[#2490D2] tracking-tight">
              {blueHeading}
            </h1>
            </div>

            <div className="xs:mt-4 md:mt-3 xl:mt-6 md:w-[85%] xl:pr-0 ">
              <p className="xs:text-[16px] font-normal text-[24px] md:text-[20px] lg:text-[24px] xl:text-[30px] text-[#727272] leading-loose md:leading-relaxed lg:leading-normal xl:leading-loose">
                {description}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
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
