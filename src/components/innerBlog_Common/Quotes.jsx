/* eslint-disable react/prop-types */
'use client';

import Image from "next/image";
import rightSymbol from "@/assets/icons/right_Flaticon.webp";
import leftSymbol from "@/assets/icons/left_Flaticon.webp";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

export default function Quotes({data}){
  const [animate,setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(()=>{
    if(isInView){
      setAnimate(true);
    }
  },[isInView])
    return (
        <div ref = {ref} className={`${animate && "fade-in-down"}`}>
            <div className="flex justify-start items-start">
          <Image
            src={leftSymbol}
            className="xs:w-3 sm:w-4 md:w-6 lg:w-10 w-12"
            alt="blog-image"
          />
        </div>
           {data && data.map((item,index)=>(
            <div className="text-[14px] sm:text-[12px] md:text-[19px] lg:text-[23px] xl:text-[32px] xxl:text-[36px] text-[#1490D2] font-medium leading-relaxed text-center" key={index}>
                <h2>{item.text}</h2>
            </div>
           ))}
           <div className="flex justify-end items-end">
          <Image
            src={rightSymbol}
            className="xs:w-3 sm:w-4 md:w-6 lg:w-10 w-12"
            alt="blog-image"
          />
        </div>
        </div>
    )
}