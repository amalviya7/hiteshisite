/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Awards = ({ content }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div className="spacing  sm:mt-[90px] mt-[60px] py-10">
      <h2 className="text-[20px] text-center sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed  font-semibold">
        Recognised By
        <span className="text-[#0E9CE8] pl-1"> Top Organizations </span>
      </h2>
      <h5 className="bodyText1 mt-2 text-center text-black">
        Our Journey of Remarkable Achievements and Success
      </h5>
      <div
        className={` ${
          animate && "fade-in-down"
        } w-full h-full mt-12 lg:mt-20   flex justify-center`}
        ref={ref}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 gap-3 dfgdfgdsfgsdfgdsfg sm:grid-cols-3 lg:grid-cols-6 align-center">
            {content.map((element, index) => (
              <div key={index} className=" rounded-xl overflow-hidden  ">
                <div className=" cursor-pointer ">
                  <div className="flex justify-center items-center h-full md:h-25 my-auto mx-2 px-3 ">
                    <Image
                      src={element.image}
                      alt="client-images"
                      className="w-full h-20 my-1 object-contain aspect-[2/1]  "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
