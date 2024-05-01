"use client";
import { Grid } from "@mui/material";
import ourlatestblog from "@/assets/images/our-latest-blog.webp";
import talkoftown from "@/assets/images/talk-of-town.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import React from "react"

export default function TalkOfTown() {
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView) setAnimate(true);
    if (isInView1) setAnimate1(true);
    if (isInView2) setAnimate2(true);
  }, [isInView1, isInView2, isInView]);

  return (
    <div className={` ${animate && "fade-in-down"}`} ref={ref}>
      <div className="xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold flex justify-center">
        <h1 className="text-black cursor-default">
          What&apos;s <span className="text-[#0E9CE8] ">Generating Buzz ?</span>
        </h1>
      </div>
      <div className=" xs:py-8 md:py-16 xxl:py-28 xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
        <Grid container spacing={{ xs: 2, md: 4, lg: 8 }}>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Link href="/blog">
              <div
                className={` ${
                  animate1 && "fade-in-left"
                } cursor-pointer p-3 lg:p-6 xl:p-8  custom-shadow rounded-3xl border-2 border-white hover:border-[#0E9CE8] `}
                ref={ref1}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <Image
                      src={ourlatestblog}
                      alt="Our Latest BLog: Trending Tech Related Blogs and Articles "
                      className="w-auto"
                    />
                  </div>
                  <div className="text-[#0E9CE8] text-lg sm:text-[17px] cursor-pointer md:text-[24px] lg:text-[31px] xl:text-[36px] xxl:text-[40px] leading-6 md:leading-8 lg:leading-10 font-semibold flex justify-center items-center pl-5 lg:pl-3 xl:pl-5  h-full w-full">
                    <h2>Our Latest Blog</h2>
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
          {/*  */}
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Link href="/blog?term=talk-of-town">
              <div
                className={` ${
                  animate2 && "fade-in-right"
                } p-3 lg:p-6 xl:p-8 custom-shadow rounded-3xl border-2 border-white hover:border-[#0E9CE8]`}
                ref={ref2}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <Image
                      src={talkoftown}
                      alt="Talk-of-town: Recent  Popular Tech Updates and Information"
                      className="w-auto"
                    />
                  </div>
                  <div className="text-[#0E9CE8] cursor-pointer text-lg sm:text-[17px] md:text-[24px] lg:text-[31px] xl:text-[36px] xxl:text-[40px] leading-6 md:leading-8 lg:leading-10  font-semibold flex justify-center items-center pl-5 lg:pl-3 xl:pl-5 pr-3 xl:pr-10 xxl:pr-20 h-full w-full ">
                    <h2>Talk Of town</h2>
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
      <Link href="/blog">
        <div
          className="flex justify-center"
        >
          <Link href="/blog">
            <button
              className=" border-2 border-black w-[90px] xsx:w-[80px] sm:w-[150px]
                 md:w-[115px] lg:w-[150px] xs:h-[45px] sm:h-[50px] md:h-[45px] 
                 lg:h-[50px] xl:h-[52px] rounded-full p-2 sm:p-3 text-xs sm:bodyText2 
                 md:text-xs lg:text-base text-black hover:bg-[#1387C5]  hover:text-white  
                 cursor-pointer mt-[20px] hover:border-[#1387C5]"
            >
              View All Blogs
            </button>
          </Link>
        </div>
      </Link>
    </div>
  );
}
