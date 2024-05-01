/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function UserExperience({ data }) {
  const [animate, setAnimate] = useState(false);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  useEffect(() => {
    if (isInView1) setAnimate(true);
  }, [isInView1]);
  return (
    <>
      <div className="px-10 sm:px-16 md:px-[82px] lg:px-[179px] xl:px-[237px]">
        <div className="bg-[#F5F5F5] rounded-2xl w-full">
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              md={8}
              className="md:flex md:items-center md:justify-center"
            >
              <div
                className={`${
                  animate && "fade-in-left"
                } text-[15px] lg:text-[17px] xxl:text-[23px] w-full lg:py-20 px-4 leading-loose pt-5 md:py-14 md:pl-8 lg:pl-16 xl:pl-24 xxl:pl-32`}
                ref={ref1}
              >
                {data.content}
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className={`${
                  animate && "fade-in-right"
                } flex items-center justify-center`}
              >
                <Image
                  src={data.image}
                  alt={data.altName}
                  className="lg:pt-5 w-[70%] h-auto md:pt-9"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
