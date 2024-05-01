"use client";
import { Grid } from "@mui/material";
import React from "react"
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Services() {
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
      className={`w-full  relative py-12 bg-no-repeat bg-cover ${
        animate && "fade-in-down"
      }`}
      ref={ref}
    >
      <div className="absolute w-full h-full top-0 bg-[#000D14] opacity-[0.85]"></div>
      <div className="relative ">
        <Grid container spacing={1} className="flex flex-wrap ">
          <Grid item xs={12} md={5} className="md:border-r md:border-white">
            <div className="flex justify-center items-center xs:py-2 md:py-4 xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60 lg:pr-10 xl:pr-0">
              <h1 className="xs:text-[24px] sm:text-[32px] md:text-[42px] xl:text-[60px] xs:leading-10 md:leading-tight  text-white font-medium capitalize">
                Services we provide
              </h1>
            </div>
          </Grid>

          <Grid item xs={12} md={7} className="leading-loose">
            <div className="xs:pr-8 sm:pr-16 md:pr-24 lg:pr-44 xl:pr-60 xs:pl-10  lg:pl-24 xl:py-5 xs:flex xs:justify-center xs:items-center md:pt-3 ">
              <p className="xs:text-[14px] sm:text-base xl:text-[20px] text-gray-200 sm:leading-relaxed font-light text-justify">
                We offer a comprehensive range of IT services designed to
                empower businesses and organizations to thrive in the digital
                age. With our expertise, cutting-edge technologies, and a
                customer-centric approach, we deliver solutions that drive
                efficiency, productivity, and growth.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
