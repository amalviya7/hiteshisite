/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import Image from "next/image";

import React from "react"
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Case_Studies_Card({ data  }) {
  const [animate, setAnimate] = useState(false);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const router = useRouter();

  useEffect(() => {
    if (isInView1) setAnimate(true);
  }, [isInView1]);

  return (
    <div ref={ref1} className={`w-[75%] mx-auto ${animate && "fade-in-down"}`}>
      <Grid container spacing={{ xs: 3, md: 6, lg: 12 }}>
        {data?.map((item, index) => (
      
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className=" h-[60%] relative mb-10 xl:mb-16"
            key={index}
            onClick={() => router.push(item.link)}
          >
         
            <div className="w-full group xs:h-[320px] sm:h-[340px] cursor-pointer md:h-[400px] lg:h-[450px] xl:h-[540px] xxl:h-[630px] custom-shadow rounded-2xl xs:p-3 sm:p-4 md:p-5 lg:p-[30px] ">
              <div className=" xs:pb-1 lg:pb-[20px] ">
                <Image
                  src={item.image}
                  alt={item.altName}
                  className="rounded-xl w-full"
                />
              </div>
              <div className="text-[16px] group-hover:text-[#1490D2] sm:text-[16px] md:text-[20px] xs:leading-6 lg:text-[20px] md:leading-8 xl:text-[22px] xl:leading-10 xxl:text-[26px] font-semibold leading-loose mb-3 text-[#5A5656]  pt-4 md:pt-2 lg:pt-1 xl:pt-3 pl-3">
                <h3>{item.text}</h3>
              </div>
            </div>
           
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
