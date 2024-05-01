"use client";
import React from "react"
import {
  NLP_Automation_subHeading,
  NLP_Experience_subHeading,
  NLP_Feedback_subHeading,
  NLP_Main_Heading,
  NLP_subHeading,
} from "@/json/innerBlog/Common_Heading_json";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Image from "next/image";
import Store from "@/assets/images/E-Commerce-Store-Inner-Blog.webp";
import Para from "../innerBlog_Common/Para";
import {
  NLP_Automation_para,
  NLP_Conclusion,
  NLP_Experience_para,
  NLP_Feedback_para,
  NLP_Main_para,
  NLP_subHeading_para,
} from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function NLP() {
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
        <Colored_Heading data={NLP_Main_Heading} />
      </div>

      <div
        ref={ref}
        className={`${
          animate && "fade-in-down"
        } w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}
      >
        <Image
          src={Store}
          className="w-full h-[40]"
          alt="Natural-Language-Processing"
        />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={NLP_Main_para} />
      </div>

      <div className="pb-1 sm:pb-2 md:pb-3 xl:pb-4">
        <Sub_Heading data={NLP_subHeading} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={NLP_subHeading_para} />
      </div>

      <div className="pb-1 sm:pb-2 md:pb-3 xl:pb-4">
        <Sub_Heading data={NLP_Experience_subHeading} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={NLP_Experience_para} />
      </div>

      <div className="pb-1 sm:pb-2 md:pb-3 xl:pb-4">
        <Sub_Heading data={NLP_Automation_subHeading} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={NLP_Automation_para} />
      </div>

      <div className="pb-1 sm:pb-2 md:pb-3 xl:pb-4">
        <Sub_Heading data={NLP_Feedback_subHeading} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Para data={NLP_Feedback_para} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={NLP_Conclusion} />
      </div>
    </div>
  );
}
