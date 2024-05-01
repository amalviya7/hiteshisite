/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Heading = ({ heading, subHeading, width, py }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <div
      className={` ${
        animate && "fade-in-down"
      } flex justify-center items-center flex-col`}
      ref={ref}
    >
      {heading && (
        <h1 className="mainHeading text-center font-[500]">{heading}</h1>
      )}
      {subHeading && (
        <h2
          className={`text-center  text-xs xs:py-2  font-[200] ${py} ${width}
          
          sxs:text-sm  sm:text-lg xl:text-[28px] xl:leading-9 md:font-normal 
          `}
        >
          {subHeading}
        </h2>
      )}
    </div>
  );
};

export default Heading;
