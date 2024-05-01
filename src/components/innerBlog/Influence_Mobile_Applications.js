"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Influence_Fingertips, Influence_Mobile_Applications_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import Influence from "@/assets/images/Influence.webp"
import { Influence_Fingertips_para, Influence_Fingertips_para2, Influence_Mobile_Applications_Main_para } from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Influence_Mobile_Applications() {
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
        <Colored_Heading data={Influence_Mobile_Applications_Main_Heading} />
      </div>

      <div ref={ref} className={`${animate && "fade-in-down"} w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}>
        <Image src={Influence} className="w-full h-[40]" alt="mobile applications" />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Influence_Mobile_Applications_Main_para} />

      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Influence_Fingertips} />
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Influence_Fingertips_para} />
        </div>

        <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Influence_Fingertips_para2} />
        </div>
    </div>
  );
}
