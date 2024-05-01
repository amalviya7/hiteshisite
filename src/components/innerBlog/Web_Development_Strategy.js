"use client";

import React from "react"

import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Practices, Web_Development_Strategy_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import Privacy from "@/assets/images/Privacy.webp"
import { Practices_para, Web_Development_Strategy_Main_para, Web_Development_Strategy_para } from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Web_Development_Strategy() {
  const [animate,setAnimate] = useState(false);
  const ref=useRef(null);
  const isInView= useInView(ref);
  useEffect(()=>{
      if(isInView){
          setAnimate(true);
      }
  },[isInView])
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-[90%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Colored_Heading data={Web_Development_Strategy_Main_Heading} />
      </div>
      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image
          src={Privacy}
          className="w-full h-[40]"
          alt="Privacy"
        />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Web_Development_Strategy_Main_para} />
      </div>

      <div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Practices} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Practices_para} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Web_Development_Strategy_para} />
      </div>
      </div>
    </div>
  );
}
