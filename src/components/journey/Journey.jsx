/* eslint-disable react/prop-types */
"use client";
import React, { useEffect, useRef, useState } from "react";
///import { main_heading_Journey } from "@/json/heading-json";
//import Heading from "../common/Heading";

import { useInView } from "framer-motion";

const Journey = ({ content }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <div className="relative w-full sm:mt-[135px] mt-[90px] md:px-1">
      <div className="spacing relative ">
        <h5 className="bodyText1 mt-2 text-center text-black">
          We Are A trusted Technology & Services Partner Supporting Businesses
          Across The Globe
        </h5>
        <div
          className={` ${
            animate && "fade-in-down"
          } grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8  gap-5 pt-5 lg:pt-16 pl-[10px] pr-[10px] `}
          ref={ref}
        >
          {content &&
            content.map((element, index) => (
              <div
                className="border p-6  hover:bg-[#98C93C] hover:shadow-custom	group duration-500  border-gray-300 hover:border-[#98C93C] lg:p-6 xxl:p-4 flex flex-col justify-around items-center"
                key={index + element.content}
              >
                <h3 className="text-primary font-bold text-center group-hover:text-[#ffff] leading-6 text-2xl lg:text-2xl xxl:text-[34px] xxl:leading-9 pb-3">
                  {element.countNo}
                </h3>
                <h4 className="text-gray text-xs text-center group-hover:text-[#ffff]   md:w-[90%] lg:w-[100%] xl:w-[70%] xxl:w-1/2  mx-auto">
                  {element.content}
                </h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
