"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import NLPImage from "@/assets/images/NLP.webp";
import { ECommerce_Store_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import { ECommerce_Conclusion, ECommerce_Interaction_Help, ECommerce_Mobile_Help, ECommerce_Optimize_Help, ECommerce_Store_Advertise, ECommerce_Store_Help, ECommerce_Store_Main_para, ECommerce_Store_Recommendations, ECommerce_Store_Updating, ECommerce_Testing_Help } from "@/json/innerBlog/para_json";
import Para from "../innerBlog_Common/Para";
import { ECommerce_Store_Advertise_List, ECommerce_Store_Help_List, ECommerce_Store_Interaction_List, ECommerce_Store_Mobile_List, ECommerce_Store_Optimize_List, ECommerce_Store_Testing_List, ECommerce_Store_Updating_List } from "@/json/innerBlog/List_json";
import List from "../innerBlog_Common/List";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function ECommerce_Store() {
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
        <Colored_Heading data={ECommerce_Store_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={NLPImage} className="w-full h-[40]" alt="E-Commerce-Store" />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <Para data={ECommerce_Store_Main_para} />
      </div>
      <div>
        <Para data={ECommerce_Store_Recommendations} />
      </div>
      <div>
        <Para data={ECommerce_Store_Advertise} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Advertise_List} />
      </div>

      <div>
        <Para data={ECommerce_Store_Updating} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Updating_List} />
      </div>

      <div>
        <Para data={ECommerce_Store_Help} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Help_List} />
      </div>

      <div>
        <Para data={ECommerce_Testing_Help} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Testing_List} />
      </div>

      <div>
        <Para data={ECommerce_Interaction_Help} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Interaction_List} />
      </div>

      <div>
        <Para data={ECommerce_Mobile_Help} />
      </div>
      <div className="pb-3 sm:pb-4 md:pb-5 xl:pb-6">
        <List data={ECommerce_Store_Mobile_List} />
      </div>

      <div>
        <Para data={ECommerce_Optimize_Help} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={ECommerce_Store_Optimize_List} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={ECommerce_Conclusion} />
      </div>
    </div>
  );
}
