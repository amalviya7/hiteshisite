/* eslint-disable react/prop-types */
"use client";

import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function KeyFeatures({ data, titleData }) {
  const [animate, setAnimate] = useState(false);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  useEffect(() => {
    if (isInView1) setAnimate(true);
  }, [isInView1]);
  return (
    <div className={`${animate && "fade-in-down"} `} ref={ref1}>
      <div className="text-center">
        <h2 className="text-[#191C22] text-[36px] sm:text-[28px] md:text-[30px] lg:text-[39px] xl:text-[45px] xxl:text-[55px] font-semibold">
          {titleData.title}
        </h2>
      </div>
      <Grid
        container
        className="pt-7 md:pt-20 w-[77%] mx-auto xl:px-12"
        sx={{ width: "77% !important", marginX: "auto !important" }}
      >
        {data &&
          data.map((element, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <div className="text-[#373B44]">
                <div className="pt-6 sm:pt-0 sm:h-[330px] md:h-[240px] lg:h-[260px] w-full md:w-[96%]">
                  <div className="flex">
                    <div className="flex items-start justify-start">
                      <div className="w-[16px] h-auto pt-[8px] xxl:pt-[11px] mr-6 sm:mr-3">
                        <Image
                          src={element.icon}
                          alt={element.altName}
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-start">
                      <h3 className="xs:text-[18px] lg:text-[20px] xl:text-[23px] xxl:text-[25px] text-[#373B44] font-medium">
                        {element.title}
                      </h3>
                    </div>
                  </div>
                  <div className="">
                    <h5 className=" text-[#373B44] font-normal text-[15px] lg:text-[16px] xl:text-[18px] xs:leading-6 md:leading-loose pt-6">
                      {element.description}
                    </h5>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
