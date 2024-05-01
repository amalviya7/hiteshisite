"use client";

import React from "react"
import Image from "next/image";
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import UXDesign from "@/assets/images/Designs.webp";
import {
  UX_Conclusion,
  UX_Design_main_para,
  Why_Hiteshi_para,
  uiux,
} from "@/json/innerBlog/para_json";
import {
  Conclusion,
  UX_Design_Main_Heading,
  Why_Hiteshi,
} from "@/json/innerBlog/Common_Heading_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function UX_Design() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="w-[90%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14">
          <Colored_Heading data={UX_Design_Main_Heading} />
        </div>

        <div
          ref={ref}
          className={`${
            animate && "fade-in-down"
          } w-[80%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14`}
        >
          <Image src={UXDesign} className="w-full h-[40]" alt={uiux.altName} />
        </div>

        <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
          <Para data={UX_Design_main_para} />
        </div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Why_Hiteshi} />
        </div>
        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Para data={Why_Hiteshi_para} />
        </div>

        <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Conclusion} />
        </div>
        <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
          <Para data={UX_Conclusion} />
        </div>
      </div>
    </>
  );
}
