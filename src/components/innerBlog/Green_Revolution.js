"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Challenges, Conclusion, Green_IoT, Green_Revolution_Main_Heading, IoT, Real_World } from "@/json/innerBlog/Common_Heading_json";
import GreenRevolution from "@/assets/images/GreenRevolution.webp"
import { Challenges_para, Conclusion_Green_Revolution_para, Green_IoT_para, Green_Revolution_main_para, IoT_para, Real_World_para } from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Green_Revolution() {
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
        <Colored_Heading data={Green_Revolution_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={GreenRevolution} className="w-full h-[40]" alt="green revolution"/>
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Green_Revolution_main_para} />
      </div>

   
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={IoT} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={IoT_para} />
      </div>
 
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Green_IoT} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Green_IoT_para} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Real_World} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Real_World_para} />
      </div>
 

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Challenges} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Challenges_para} />
      </div>



      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Conclusion} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Conclusion_Green_Revolution_para} />
      </div>


    </div>
    
  );
}
