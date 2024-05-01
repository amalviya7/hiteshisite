/* eslint-disable react/prop-types */
"use-client";
import React from "react"

export default function DevOps_card({ description, title1, title2 }) {
  return (
    <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
      <div
        style={{ boxShadow: "0px 3px 6px #00000029" }}
        className="h-[470px] sm:h-[350px] md:h-[370px] lg:h-[380px] xxl:h-[410px] px-4 sm:px-10 "
      >
        <div className="w-full mx-auto ">
          <div className="xs:inline-block sm:block pt-8 md:pt-10  lg:pt-12 xl:pt-16 text mx-auto w-full" >
            <h1 className="text-[#5A5656] flex justify-center xs:text-[20px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] xxl:text-[52px] font-semibold leading-none ">
              {title1} 
            </h1>
          </div>

          <div className="block pb-3  md:pb-4 lg:pb-4 xl:pb-6">
            <h1 className=" flex justify-center  xs:text-[20px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] xxl:text-[52px] font-semibold  text-[#0E9CE8]">
              {title2}
            </h1>
          </div>
          <div className="">
          <p className=" text-[#5A5656] font-normal text-[13px] md:text-[16px]  lg:text-[17px] xl:text-[19px] xs:leading-6  leading-2 md:leading-relaxed text-center">
            {description}
          </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
