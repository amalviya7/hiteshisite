"use client";
import React from "react"

import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";

//component
import Map from "./locationMap";

//images
import image1 from "@/assets/images/contact.webp";

export default function HiteshiOnMap() {
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
    <Grid container spacing={{ xs: 2, sm: 3, lg: 1 }}>
      <Grid item xs={12} sm={5} md={4}>
        <div
          className={`${
            animate && "fade-in-left"
          } pl-[18px] sm:pl-10 lg:pl-24 xl:pl-40`}
          ref={ref1}
        >
          <Image
            src={image1}
            alt="Contact Us for Requests for Services, Hiteshi Infotech"
            className="w-full h-full animate-bounce-custom"
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        md={8}
        className={`${animate2 && "fade-in-right"} pl-10`}
        ref={ref2}
      >
        <div className="text-[#0E9CE8] xs:text-[27px] sm:text-[25px] lg:text-[40px] font-semibold pb-5 sm:pb-3 ">
          <h1 className="xs:pt-4 sm:pt-0 pl-10 sm:pl-0">Hiteshi on the Map</h1>
        </div>
        <div className="flex justify-start">
          <Map />
        </div>
      </Grid>
    </Grid>
  );
}
