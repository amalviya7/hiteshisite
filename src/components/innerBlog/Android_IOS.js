"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import {
  Android_IOS_Main_Heading,
  Conclusion,
} from "@/json/innerBlog/Common_Heading_json";
import Android from "@/assets/images/Android.webp";
import {
  Android_IOS_main_para,
  Conclusion_Android_IOS,
  Target_Audience_para,
  android,
} from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Android_IOS() {
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
        <Colored_Heading data={Android_IOS_Main_Heading} />
      </div>

      <div
        ref={ref}
        className={`${
          animate && "fade-in-down"
        } w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}
      >
        <Image src={Android} className="w-full h-[40]" alt={android.altName} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Android_IOS_main_para} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Target_Audience_para} />
      </div>
      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
        <Sub_Heading data={Conclusion} />
      </div>
      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Conclusion_Android_IOS} />
      </div>
    </div>
  );
}
