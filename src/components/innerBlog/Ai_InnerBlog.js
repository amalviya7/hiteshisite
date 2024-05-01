"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import {
  Administrative_Efficiency,
  Ai_Diagnostic,
  Ai_Main_Heading,
  Conclusion,
  Drug_Discovery,
  Future_Implications,
  Personalized,
  Remote_Monitoring,
} from "@/json/innerBlog/Common_Heading_json";
import AI_Health from "@/assets/images/AIHealth.webp";
import Para from "../innerBlog_Common/Para";
import {
  Administrative_Efficiency_para,
  Administrative_Efficiency_para2,
  Ai_Diagnostic_para,
  Ai_Diagnostic_para2,
  Ai_main_para,
  Conclusion_para,
  Drug_Discovery_para,
  Drug_Discovery_para2,
  Future_Implications_para,
  Personalized_para,
  Remote_Monitoring_Para,
} from "@/json/innerBlog/para_json";
import Quotes from "../innerBlog_Common/Quotes";
import { Ai_Quotes } from "@/json/innerBlog/Quotes_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import List from "../innerBlog_Common/List";
import {
  Administrative_Efficiency_List,
  Ai_List_Diagnostic,
  Drug_Discovery_list,
} from "@/json/innerBlog/List_json";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Ai_InnerBlog() {
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
        <Colored_Heading data={Ai_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={AI_Health} className="w-full h-[40]" alt="AI in healthcare"/>
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Ai_main_para} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Quotes data={Ai_Quotes} />
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Ai_Diagnostic} />
        </div>
        <div>
          <Para data={Ai_Diagnostic_para} />
        </div>
        <div>
          <List data={Ai_List_Diagnostic} />
        </div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Para data={Ai_Diagnostic_para2} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Personalized} />
        </div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Para data={Personalized_para} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Administrative_Efficiency} />
        </div>
        <div>
          <Para data={Administrative_Efficiency_para} />
        </div>
        <div>
          <List data={Administrative_Efficiency_List} />
        </div>
        <div>
          <Para data={Administrative_Efficiency_para2} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Remote_Monitoring} />
        </div>
        <div>
          <Para data={Remote_Monitoring_Para} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Drug_Discovery} />
        </div>
        <div>
          <Para data={Drug_Discovery_para} />
        </div>
        <div>
          <List data={Drug_Discovery_list} />
        </div>
        <div>
          <Para data={Drug_Discovery_para2} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Future_Implications} />
        </div>
        <div>
          <Para data={Future_Implications_para} />
        </div>
      </div>

      <div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Conclusion} />
        </div>
        <div>
          <Para data={Conclusion_para} />
        </div>
      </div>
    </div>
  );
}
