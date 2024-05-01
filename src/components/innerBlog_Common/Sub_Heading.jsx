/* eslint-disable react/prop-types */
"use client ";
import React from "react"

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Sub_Heading({ data }) {
  const [animate,setAnimate]= useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref);

  useEffect(()=>{
    if(isInview){
      setAnimate(true);
    }
  },[isInview])
  return (
    <>
      <div ref={ref} className={`${animate && "fade-in-down"}`}>
        <h2 className="w-full text-left">
          {data &&
            data.map((item, index) => (
              <span className="text-[#1490D2] text-[19px] sm:text-[22px] md:text-[30px] lg:text-[40px] xxl:text-[45px] font-medium  mx-auto" key={index}>
                {item.black_Heading}
                <span className="text-black">{item.blue_Heading}</span>
              </span>
            ))}
        </h2>
      </div>
    </>
  );
}
