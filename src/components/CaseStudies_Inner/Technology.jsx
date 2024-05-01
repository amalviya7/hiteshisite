/* eslint-disable react/prop-types */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function Technology({ data }) {
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
    <div className="flex xs:flex-col-reverse md:flex-row px-10 sm:px-[69px] md:pl-[105px] md:pr-0 lg:pl-44 lg:pr-12 xl:px-60 justify-center items-center md:gap-1 xl:gap-0.5 xxl:gap-40">
      <div
        className={`${animate && "fade-in-left"} w-full md:flex justify-center`}
        ref={ref1}
      >
        <div className="">
          <div className="text-[#191C22] xs:text-4xl lg:text-[42px] xl:text-[45px] xxl:text-[50px] font-semibold xs:py-3 lg:py-4 md:pt-7 capitalize text-center sm:text-left">
            <h1>{data.title}</h1>
          </div>
          <div
            className="text-[15px] leading-7 lg:text-lg xl:text-[20px] xxl:text-[23px] text-[#373B44]
             normal-case pb-3 sm:py-4 md:py-6 xl:py-4 xxl:py-6 md:leading-7 lg:leading-[32px] xl:leading-loose"
          >
            <h4 dangerouslySetInnerHTML={{ __html: data.description }}></h4>
          </div>
        </div>
      </div>

      <div
        className={`${animate2 && "fade-in-right"} w-full flex justify-end`}
        ref={ref2}
      >
        <div className="web_port_mokcup">
          <Image
            src={data.image}
            alt={data.altName}
            className="mockup_img sm:w-full md:w-[82%] xl:w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
