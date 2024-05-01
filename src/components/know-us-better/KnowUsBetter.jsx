/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const KnowUsBetter = ({ content }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

const vimeoURl = "https://player.vimeo.com/video/215500317?h=06f1561c1e"


  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <>
      <div
        className={` ${animate && "fade-in-down"} sm:mt-[90px] mt-[60px]   `}
        ref={ref}
      >
  
        <div className="flex items-center flex-col md:flex-row xs:bg-[#f5f5f7] md:bg-transparent">
          <div className="bg-[#f5f5f7] md:w-1/2 md:ml-10 lg:mx-auto xs:py-12 md:py-4 lg:py-16 px-6 lg:px-16 xl:mt-[-10px]" >
            <h4 className="xs:text-3xl text-[#0E9CE8] xl:text-4xl xxl:text-5xl text-primary text-center  lg:pb-2 
                font-[200]">
              Know Us Better
            </h4>
            <p className="xs:pt-6 md:pt-0 text-gray xs:text-base xl:text-xl px-3 font-[200]  ">
                {content && content.description}
              </p>
          </div>
          <div className="knowUsBetterVideo xs:w-full md:w-1/2 relative">
            <iframe
              width="100%"
              height="100%" 
              title="vimeo-player"
              src={vimeoURl}
              className="xs:h-[40vh] sm:h-[53vh] md:min-h-[325px] lg:min-h-[420px] xl:min-h-[480px] md:h-auto relative z-[1]" 
            ></iframe>
            <div className="xs:block hidden w-full xs:h-[180px] sm:h-[250px] bg-[#ffffff] absolute left-0 bottom-0 z-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowUsBetter;
