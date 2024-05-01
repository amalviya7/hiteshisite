"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Digital_Transformation, RPA_Important, RPA_Main_Heading, RPA_Revolution, RPA_Work } from "@/json/innerBlog/Common_Heading_json";
import Robotics from "@/assets/images/Robotic.webp";
import { Digital_Transformation_para, RPA_Important_para2, RPA_Revolution_para, RPA_main_para, RPA_main_para2 } from "@/json/innerBlog/para_json";
import { RPA_List } from "@/json/innerBlog/List_json";
import List from "../innerBlog_Common/List";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function RPA() {
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
        <Colored_Heading data={RPA_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={Robotics} className="w-full h-[40]" alt="Robotics" />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
      <Para data={RPA_main_para} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={RPA_Work} />
       </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <List data={RPA_List} />
      </div> 

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={RPA_main_para2} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={RPA_Important} />
       </div>
       <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={RPA_Important_para2} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Digital_Transformation} />
       </div>
       <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={Digital_Transformation_para} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={RPA_Revolution} />
       </div>
       <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={RPA_Revolution_para} />
      </div>
    </div>
  );
}
