/* eslint-disable react/prop-types */
"use client";
import React from "react"

//Image
import letscreate from "@/assets/images/letscreate.webp";

import Image from "next/image";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function LetsCreate({ title, text }) {
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
    <div className="xs:w-full lg:h-full mx-auto relative md:rounded-[30px] bg-no-repeat lg:bg-cover">
      <div className="absolute top-0 w-full h-full bg-[#000D14] opacity-[0.85] md:rounded-[30px]"></div>
      <div className="relative">
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
            className={`${
              animate && "fade-in-left"
            } pl-11 sm:pl-[78px] lg:pl-16 h-full my-auto md:pl-10`}
            ref={ref}
            sx={{ marginY: "auto" }}
          >
            <div className=" text-white text-left text-xs xs:leading-10 sm:leading-none lg:text-base xs:pt-12 md:pt-6 lg:pt-10 sm:text-sm">
              <h1 className="mediumHeading md:text-[23px] lg:text-[30px] xxl:text-[44px]">
                {title}
              </h1>
              <div className="xs:pt-3 md:pt-3 lg:py-7 w-full md:leading-[17px] lg:leading-6 leading-7 xs:w-[86%] font-light">
                <p className="xxl:text-[18px] xxl:leading-8">{text}</p>
              </div>
              <div className="xs:pt-4 md:pt-2 lg:pb-[31px] lg:pt-[5px] pt-8">
                {/* <button
                  className="bg-[#FFFFFF] w-[148px] h-[47px] py-4 text-[#0E9CE8] bodyText2 font-medium relative group  hover:text-white"
                  onClick={() => router.push("/contact-us")}
                >
                  <span className="absolute bg-[#1387C5] w-[31px] group-hover:w-full group-hover:rounded-none transition-all duration-500 h-full top-0 left-0 rounded-r-full">
                    <Image
                      src={ButtonImage}
                      alt="arrow icon"
                      className="pt-[21px] ml-[5px] transition-all group-hover:opacity-0"
                    />
                  </span>
                  <span className="absolute left-[47%] top-1/2 translate-x-[-40%] translate-y-[-50%]">
                    Contact Us
                  </span>
                </button> */}
                <button className=" border-2 border-white w-[90px] xsx:w-[80px] sm:w-[150px]
                 md:w-[115px] lg:w-[150px] xs:h-[45px] sm:h-[50px] md:h-[45px] 
                 lg:h-[50px] xl:h-[52px] rounded-full p-2 sm:p-3 text-xs sm:bodyText2 
                 md:text-xs lg:text-base text-white hover:bg-[#1387C5]  hover:text-white  
                 cursor-pointer mt-[20px] hover:border-[#1387C5]">
               
                <Link href="/contact-us" > Contact Us</Link>
                        </button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className={`${animate2 && "fade-in-right"} flex justify-end`}
            ref={ref2}
          >
            <div className="overflow-hidden object-cover lg:pr-12 md:pr-7 xs:flex xs:justify-center xs:items-center xs:w-full">
              <Image
                className="xs:h-full md:h-[99%] mx-auto md:w-full"
                src={letscreate}
                alt="Person with a VR Headset, Let's Create"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
