/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import {React, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Requirments({ data, imagedata }) {
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
    <>
      <div className="bg-[#F5F5F5] h-full w-full xs:px-10 sm:px-16 md:px-24 lg:pl-44 lg:pr-20 xl:px-64 lg:py-16">
        <Grid container spacing={{ xs: 2, lg: 2, xl: 4 }}>
          <Grid item xs={12} md={5}>
            <div>
              <div
                className={`${animate && "fade-in-left"} relative `}
                ref={ref1}
              >
                <Image src={imagedata.image} alt={imagedata.altName} />
                <div
                  className="absolute top-0 h-full w-full"
                  style={{
                    background:
                      "transparent linear-gradient(180deg, #27272700 0%, #0C0404 100%) 0% 0% no-repeat",
                    opacity: 1,
                  }}
                ></div>
                <div className="absolute bottom-5 lg:bottom-10 text-white font-semibold text-[23px] lg:text-[29px] xl:text-[32px] text-center w-[100%]">
                  <h2>{imagedata.content}</h2>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7} className="flex items-center">
            <div className={`${animate2 && "fade-in-right"}`} ref={ref2}>
              {data.map((item, index) => (
                <div className="flex" key={index}>
                  <div className="mr-2 pt-4 md:pt-2 lg:pt-3 xxl:pt-4">
                    <div className="w-[16px] h-[16px] sm:w-[14px]">
                      <Image
                        src={item.icon}
                        alt="arrow"
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="text-[15px] md:text-[12px] lg:text-[15px] xl:text-[15px] xxl:text-[20px] pb-2 md:pb-2 pt-3 md:pt-2 lg:pt-2 lg:pr-0">
                    <h2>{item.text}</h2>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
