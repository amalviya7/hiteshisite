/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
"use client";
import React from "react"

import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TalkCard({ data }) {
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
    <div>
      <div className="w-[90%] sm:w-[95%] lg:w-[90%]  mx-auto">
        <div
          ref={ref1}
          className={`text-[#5A5656] xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center items-center font-semibold xs:pb-10 md:pb-12 lg:pb-16 ${
            animate && "fade-in-down"
          }`}
        >
            <h1 dangerouslySetInnerHTML={{ __html: data.title1 }} />
        </div>

      <div ref={ref2} className={`${animate2 && 'fade-in-down'}`}>
        <Grid container spacing={{ xs: 3, lg: 6 }}>
          {data.content2.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} className=" h-[60%] " key={index} onClick={() => router.push(item.link)}>
              <div className="w-full sm:h-[350px] md:h-[380px] lg:h-[430px] xl:h-[510px] xxl:h-[570px] border-2 border-gray-300 rounded-2xl xs:p-3 sm:p-4 md:p-3 lg:p-[18px]">
                <div className=" xs:pb-1 lg:pb-[20px] ">
                  <Image
                    src={item.image}
                    alt="image"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="text-[20px] sm:text-[22px] xs:leading-8 lg:text-2xl md:leading-8 xl:text-[26px] xl:leading-10 xxl:text-3xl font-semibold leading-loose mb-3 text-[#5A5656]">
                  <h3>{item.description}</h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      </div>
    </div>
  );
}
