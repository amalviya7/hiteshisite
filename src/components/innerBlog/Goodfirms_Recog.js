"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import  {Goodfirm_Recog_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import {
    Goodfirm_Recog_Main_Para,
    Goodfirm_Recog_Sec_Para,
    Goodfirm_Recog_Third_Para,
    Goodfirm_Recog_Four_Para 
} from "@/json/innerBlog/para_json";
import goodfirst_co from "@/assets/images/goodfirst_co.webp"
import goodfirm_review  from "@/assets/images/goodfirm_review.webp"
import  goodfirm_fact_fig from "@/assets/images/clientImagedata.png"

import Para from "../innerBlog_Common/Para";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Goodfirms_Recog() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);
  return (
    <div className="w-[90%] mx-auto">
     <div className="w-[90%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Colored_Heading data={Goodfirm_Recog_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={goodfirst_co}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Goodfirm_Recog_Main_Para} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Goodfirm_Recog_Sec_Para} />
      </div>
      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={goodfirm_review}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Goodfirm_Recog_Third_Para} />
      </div>
      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={goodfirm_fact_fig}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Goodfirm_Recog_Four_Para} />
      </div>
    </div>
  );
}
