/* eslint-disable react/prop-types */
'use client';

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function Colored_Heading({data}){
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        if (isInView) {
          setAnimate(true);
        } 
      }, [isInView]);
    return(
        <>
         <div ref={ref} className={` ${
          animate && "fade-in-down"
        }`}>
            <div className="w-full text-center">
                <h1 className="text-[#1490D2] text-[18px] sm:text-[22px] md:text-[30px] lg:text-[40px] xxl:text-[45px] font-semibold px  mx-auto">
                    {data.blue_Heading}<span className="text-black">{data.black_Heading}</span>{data.extra_Heading}
                </h1>
            </div>
         </div>
        </>
    )
}