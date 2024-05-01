"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Business_Grow_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import Grow from "@/assets/images/Grow.webp";
import {
    Business_Grow_Conclusion,
  Business_Grow_main_para,
  Customer_Engagement_Heading,
  Customer_Interaction_Heading,
  Customer_Loyalty_Heading,
  Marketing_Channel_Heading,
  Strengthening_Heading,
} from "@/json/innerBlog/para_json";
import { Business_Grow_Quotes } from "@/json/innerBlog/Quotes_json";
import Quotes from "../innerBlog_Common/Quotes";
import List from "../innerBlog_Common/List";
import {
  Business_Grow_Customer_Engagement,
  Business_Grow_Customer_Interaction,
  Business_Grow_Customer_Loyalty,
  Business_Grow_Marketing_Channel,
  Business_Grow_Strengthening,
} from "@/json/innerBlog/List_json";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Business_Grow() {
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
        <Colored_Heading data={Business_Grow_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={Grow} className="w-full h-[40]" alt="Business-Grow" />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Quotes data={Business_Grow_Quotes} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Business_Grow_main_para} />
      </div>

      <div>
        <Para data={Customer_Interaction_Heading} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={Business_Grow_Customer_Interaction} />
      </div>

      <div>
        <Para data={Marketing_Channel_Heading} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={Business_Grow_Marketing_Channel} />
      </div>

      <div>
        <Para data={Customer_Loyalty_Heading} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={Business_Grow_Customer_Loyalty} />
      </div>

      <div>
        <Para data={Customer_Engagement_Heading} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={Business_Grow_Customer_Engagement} />
      </div>

      <div>
        <Para data={Strengthening_Heading} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <List data={Business_Grow_Strengthening} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Business_Grow_Conclusion} />
      </div>
    </div>
  );
}
