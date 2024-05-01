"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import  {Automation_vs_Human_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import {
  Automation_vs_Human_Main_Para,
  Automation_vs_Human_Main_Sec_Para,
  Automation_vs_Human_Main_Third_Para,
  Automation_vs_Human_Main_Four_Para,
} from "@/json/innerBlog/para_json";
import ransomeware_attack from "@/assets/images/ransomeware_attack.webp"
import endpoint_protection  from "@/assets/images/endpoint_protection.webp"
import tast_automation from "@/assets/images/tast_automation.webp"

import Para from "../innerBlog_Common/Para";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Automation_vs_Human() {
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
        <Colored_Heading data={Automation_vs_Human_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={ransomeware_attack}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Automation_vs_Human_Main_Para} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Automation_vs_Human_Main_Sec_Para} />
      </div>
      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={endpoint_protection}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Automation_vs_Human_Main_Third_Para} />
      </div>
      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
         <Image
          src={tast_automation}
          className="w-full h-[40]"
          alt="BigCommerce website"
        /> 
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Automation_vs_Human_Main_Four_Para} />
      </div>
    </div>
  );
}
