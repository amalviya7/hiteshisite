/* eslint-disable react/prop-types */
"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function Para({ data }) {
  const [animate,setAnimate]= useState(false);
  const ref=useRef(null);
  const isInView = useInView(ref);

  useEffect(()=>{
    if(isInView){
      setAnimate(true)
    }
  },[isInView])
  return (
    <>
      <div ref={ref} className={` ${
          animate && "fade-in-down"
        }`}>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <p
                className="pb-2 md:pb-6 lg:pb-6 text-[15px] md:text-[18px]  lg:text-[19px] xxl:text-[21px] text-[#57595A] " dangerouslySetInnerHTML={{ __html: item.para }}
              />
            </div>
          ))}
      </div>
    </>
  );
}
