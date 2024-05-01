/* eslint-disable react/prop-types */
"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react"

export default function List ({data}){
    const [animate,setAnimate] = useState(false);
    const ref=useRef(null);
    const isInView= useInView(ref);
    useEffect(()=>{
        if(isInView){
            setAnimate(true);
        }
    },[isInView])
    return(
        <div>
            <h3 ref={ref} className={`${animate && "fade-in-down"}`}>
            {data && data.map((item,index)=>(

                <li className="text-[15px] md:text-[18px]  lg:text-[20px] xxl:text-[22px] font-semibold text-[#57595A] pb-2 mb:pb-3 lg:pb-4" key={index}>{item.list}</li>
 
            ))}
            </h3>
        </div>
    )
}
