"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import img1 from "@/assets/images/img11.webp";
import { enterprises } from "@/json/home/home_json";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function Enterprise() {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView) setAnimate(true);
    if (isInView2) setAnimate2(true);
  }, [isInView, isInView2]);
  return (
    <Grid container spacing={{ xs: 4, md: 10, lg: 10 }}>
      <Grid
        item
        xs={12}
        md={6}
        className={` ${animate && "fade-in-left"}`}
        ref={ref}
      >
        <div className=" flex flex-col h-[100%] ">
          <div>
            <h1 className="xs:text-[22px] sm:text-[32px] md:text-[23px] lg:text-[26px] xl:text-[32px] xxl:text-[37px] font-semibold md:leading-tight text-gray-600">
              Preferred by Leading Enterprises
              <span className="text-[#289CE8]"> and Renowned Brands</span>
            </h1>
          </div>
          <p className="xs:text-[14px] xs:font-light sm:text-[17px] md:text-[14px] lg:text-[16px] xxl:text-lg text-[#5A5656] xs:pt-2 md:pt-2 lg:pt-4 lg:pb-6 xl:pt-4 xl:pb-7 xs:pb-6 md:pb-4 xxl:pt-5 xxl:pb-10 leading-normal ">
            We make the impossible possible! Our expert software development
            team turns complex ideas into reality, delivering bespoke solutions
            that cater to clients&apos; unique business needs.
          </p>

          {enterprises &&
            enterprises.map((items, ind) => (
              <Grid
                container
                spacing={2}
                className={`xs:gap-11 sm:gap-12 ${
                  ind !== enterprises.length - 1 &&
                  "xs:pb-6 lg:pb-8 xl:pb-8 xxl:pb-12 "
                } `}
                key={ind}
              >
                <Grid item xs={1}>
                  <div
                    className="xs:w-14 sm:w-16 md:w-14 lg:w-[60px] xxl:w-20 xs:h-14 sm:h-16 lg:h-[60px] xxl:h-20 xs:rounded-md md:rounded-2xl flex justify-center items-center"
                    style={{ boxShadow: "0px 3px 6px #00000029" }}
                  >
                    <Image
                      src={items.Icon}
                      alt={items.altName}
                      className="xs:w-7 sm:w-8 lg:w-8 xxl:w-11"
                    />
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div>
                    <h3 className="xs:w-full md:w-[80%] relative top-[-3px] xl:[90%] xs:text-[16px] sm:text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px] xxl:text-[19px] text-[#5A5656] xs:pb-2 md:pb-0 xxl:pb-2 font-medium">
                      {items.title}
                    </h3>
                    <div className="leading-normal">
                      <p className="xs:w-full sm:w-fit text-[13px] relative top-[-5px] sm:text-[14px] md:text-[12px] xxl:text-[15px] text-[#5A5656]  text-start ">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={`md:m-0 ${animate2 && "fade-in-right"}`}
        ref={ref2}
      >
        <div className="h-full w-full ">
          <Image
            src={img1}
            alt="Girl Playing Chess, Hiteshi's skills and robust tech solutions."
            className="h-full lg:h-[95%] xl:h-[92%] xxl:[90%] w-full object-cover object-right-top"
          />
        </div>
      </Grid>
    </Grid>
  );
}
