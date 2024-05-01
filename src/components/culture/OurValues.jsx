/* eslint-disable react/prop-types */
"use client";
import React from "react"

import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OurValues({ data }) {
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
    <div className="w-[100%] xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
      <div ref={ref1} className={`${animate && "fade-in-down"} `}>
        <h2 className="xs:text-[25px] flex justify-center sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed ">
          {data.title1}{" "}
          <span className="text-[#0E9CE8] pl-3">{data.title2}</span>
        </h2>
        <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] xs:leading-6  leading-2 md:leading-relaxed text-center">
          {data.text}
        </p>
      </div>
      <div className="mt-16">
        <Grid
          container
          spacing={{ xs: 4, md: 2, lg: 6 }}
          ref={ref2}
          className={`${
            animate2 && "fade-in-down"
          } flex justify-center items-center`}
        >
          {data &&
            data.content.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <div
                  style={{ boxShadow: "0px 6px 6px #00000029" }}
                  className=" rounded-3xl w-full h-[180px] md:h-[240px] xl:h-[230px] flex justify-center items-center border-2  hover:border-[#0E9CE8] px-4"
                >
                  <div className="flex justify-center items-center">
                    <div className="">
                      <Image
                        src={item.image}
                        className="w-full"
                        alt={item.altName}
                      />
                    </div>

                    <div className="pl-2 sm:pl-6 md:pl-2 lg:pl-4 xl:pl-10 w-full">
                      <div className=" xs:text-[20px]  sm:text-[26px] md:text-[20px] lg:text-[22px] xl:text-[25px] xxl:text-[30px] text-[#0E9CE8]  text-start leading-relaxed">
                        <h3>{item.Heading}</h3>
                      </div>
                      <div className="text-[14px] sm:text-[18px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-start text-[#464646]">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
