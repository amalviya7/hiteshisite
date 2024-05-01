"use client";
import React from "react"

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
//json
import { getintouch } from "@/json/contactUs/contactUs_json";

export default function GetInTouch() {
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
    <div className="md:flex items-center justify-between xs:px-10 sm:px-20 md:px-28 lg:px-48 xl:pl-56 xxl:pl-60">
      <div
        className={`${
          animate && "fade-in-left"
        } md:w-1/2 md:mr-12 lg:mr-16 xl:mr-20 xxl:mr-24`}
        ref={ref1}
      >
        <h1 className="text-[#1490D2] xs:text-[26px] sm:text-[32px] md:text-[30px] lg:text-[36px] xl:text-[42px] xxl:text-[50px] font-medium md:leading-tight pb-2">
          {getintouch.firstHeading}
        </h1>
      </div>
      <div className={`${animate2 && "fade-in-right"} md:w-1/2 `} ref={ref2}>
        <h2 className="xs:text-[17px] sm:text-[21px] lg:text-[25px] xl:text-[30px] font-medium">
          {getintouch.secondHeading}
        </h2>
      </div>
    </div>
  );
}
