/* eslint-disable react/prop-types */
"use client";
import React from "react"

import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ShortLine from "@/assets/images/Line.webp";
import BigLine from "@/assets/images/Large_Line.webp";
import Line from "@/assets/images/MediumLine.webp";

import { useInView } from "framer-motion";

export default function FAQ({ FAQData }) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [showContent, setShowContent] = useState(FAQData[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView1) setAnimate(true);
    if (isInView2) setAnimate2(true);
  }, [isInView1, isInView2]);

  const handleSelectTab = (index) => {
    setSelectedIndex(index);
    const result = FAQData.find((item, idx) => idx === index);
    setShowContent(result);
  };

  const ImageLine =
    FAQData.length === 6 ? BigLine : FAQData.length === 5 ? Line : ShortLine;
  return (
    <div>
      <div className="text-[#5A5656] text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-semibold flex justify-center ">
        <h1>FAQs</h1>
      </div>

      <div className="pt-10 md:pt-16 lg:pt-10   xl:pt-14  xxl:pt-16 xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 ">
        <Grid container spacing={{ xs: 2, lg: 4, xl: 6 }}>
          <Grid item xs={12} lg={6} xl={6}>
            <div ref={ref1} className={`${animate && "fade-in-left"} `}>
              {FAQData &&
                FAQData.map((items, index) => (
                  <div
                    key={index}
                    className="group flex justify-center lg:justify-start h-36 "
                  >
                    <div className="flex justify-center items-center relative sm:inline-block  mr-4 xl:mr-6 ">
                      <div
                        className={`${" w-12 h-12 sm:w-20 sm:h-20  border-[3px] border-[#0084BE] rounded-full flex justify-center items-center"} ${
                          index === selectedIndex ? "bg-[#0084BE]" : "bg-white"
                        }`}
                      >
                        <p
                          className={`${"text-3xl font-medium "} ${
                            index === selectedIndex
                              ? "text-white"
                              : "text-[#0084BE]"
                          }`}
                        >
                          {items.S_No}
                        </p>
                      </div>

                      {index === 0 ? (
                        <div className="left-0 right-0 mx-auto w-[1px] top-24 sm:top-auto absolute h-[50%]">
                          <div>
                            <Image src={ImageLine} alt={`Icon imaeg`} />
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="inline-block w-full">
                      <div
                        style={{ boxShadow: "0px 0px 6px #00000029" }}
                        className={`group px-4 xl:px-8 xs:w-full xs:h-[130px] sm:h-[98px]  lg:h-[94px] ] xl:h-[88px]  xxl:h-[90px] rounded-[20px] flex items-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px] xl:text-[18px] xxl:text-[20px] ${
                          index === selectedIndex
                            ? "bg-[#0084BE] text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => handleSelectTab(index)}
                      >
                        <div>
                          <h2>{items.Heading}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            xl={6}
            className="flex justify-center items-center"
          >
            <div ref={ref2} className={`${animate2 && "fade-in-right"} `}>
              <div
                style={{ boxShadow: "0px 0px 12px #00000021" }}
                className=" h-full w-full rounded-[30px] p-8 xl:p-10 relative"
              >
                <div className="text-[16px] sm:text-[18px] md:text-[21px] xl:text-[23px] xl:text-2xl font-normal">
                  <h1>{showContent.Heading}</h1>
                </div>
                <div className="pt-0 lg:pt-5 xl:pt-3 text-[13px] sm:text-[15px] md:text-[18px] lg:text-[16px] xl:text-[16px] text-[#2E2E2E] leading-normal">
                  <h1>{showContent.description}</h1>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
