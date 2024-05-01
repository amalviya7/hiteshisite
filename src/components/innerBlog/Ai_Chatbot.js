"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Ai_Chatbot_Main_Heading, Business_Crucial_Information, Conclusion, Why_Choose_Chatbot, Working_Of_Chatbot } from "@/json/innerBlog/Common_Heading_json";
import Chatbot from '@/assets/images/Chatbots.webp';
import { Ai_Chatbot_Main_para, Business_Crucial_Information_para, Chatbot_Conclusion, Why_Choose_Chatbot_para } from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Ai_Chatbot() {
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
        <Colored_Heading data={Ai_Chatbot_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={Chatbot} className="w-full h-[40]" alt="Ai Chatbot" />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Working_Of_Chatbot} /> 
       </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Ai_Chatbot_Main_para} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Business_Crucial_Information} />  
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Business_Crucial_Information_para} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Why_Choose_Chatbot} />  
       </div>

       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Why_Choose_Chatbot_para} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Conclusion} />  
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Chatbot_Conclusion} />
      </div>
    </div>
  );
}
