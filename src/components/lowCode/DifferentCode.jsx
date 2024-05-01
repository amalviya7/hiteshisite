/* eslint-disable react/prop-types */
"use -client";
import React from "react"

export default function DifferentCode({ data }) {
  return (
    <div>
      <div className="flex justify-center xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 ">
        <div
          style={{ boxShadow: "0px 3px 6px #00000029" }}
          className="h-full pb-6 md:pb-14 "
        >
          <div className="  xs:pt-4 sm:pt-6 md:pt-8  lg:pt-8 xl:pt-10">
            <h2 className="text-[#5A5656] flex justify-center xs:text-[19px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] xxl:text-[52px] font-semibold ">
              {data.Heading1}
            </h2>
          </div>

          <div className="sdfasdfasdfasdfasd  ">
            <h2 className="  xs:text-[19px] pl-5 flex  sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[40px]
             xxl:text-[52px] font-semibold  text-[#0E9CE8]">
              {data.Heading2}
              <div className=" text-[#5A5656]">{data.Heading3} </div>
              {data.Heading4}
            </h2>
          </div>

          {data &&
            data.list.map((item, index) => (
              <div key={index} className="pl-6 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28  sm:pr-8 md:pr-12 lg:pr-16 flex p-[12px] sm:p-[16px] lg:p-[16px]">
                <div className="w-8 h-8 mt-3 xs:mr-[10px] sm:mr-0">
                <div className="w-[5px] h-[5px] rounded-full bg-black m1-5"></div>
                </div>
                
                <p className="inline-block   font-normal text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] xs:leading-6  leading-2 md:leading-relaxed text-start" >{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
