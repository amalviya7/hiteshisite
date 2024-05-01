/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Slider from "react-slick";
import IndustriesWeServeCommon from "./IndustriesWeServeCommon";
import nextIcon from "../../../assets/images/next.webp";
import prevIcon from "../../../assets/images/previous.webp";
import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import { useSearchParams } from "next/navigation";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  dots: false,
};

export default function IndustriesWeServe({ data }) {
  const searchParams = useSearchParams();

  const [selectIndex, setSelectIndex] = useState(0);

  const sliderRef = useRef(null);
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  const index = searchParams.get("index");

  useEffect(() => {

    if (index !== null) {
      setSelectIndex(index ? parseInt(index) : 0);
      ref2?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [index]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("term");
    if (term == data.pathname) {
      ref2?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isInView2]);

  return (
    <Box ref={ref2} className={`bg-cover text-white`}>
      <Box className="bg-[#000d14d6] py-16">
        <Box className="w-[80%] lg:w-[75%] mx-auto">
          <h2 className="mediumHeading font-medium md:text-left xs:text-center">
            {data.name}
          </h2>

          <Box className={`xs:hidden md:block`}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} xl={6}></Grid>
              <Grid item xs={12} md={7} xl={6}>
                <ul className="flex md:justify-between xs:justify-center pr-4 md:mt-5">
                  {data &&
                    data.data.map((industry, index) => (
                      <h4
                        className={`xl:ml-[6%] lg:ml-[3%] xs:ml-[2%] xs:text-lg md:text-[11px] lg:text-[14px] xl:text-[12px] xxl:text-[15px] font-medium cursor-pointer ${
                          selectIndex == index ? "text-[#0E9CE8]" : ""
                        }`}
                        onClick={() => setSelectIndex(index)}
                        key={index}
                      >
                        {industry.name}
                        <span
                          className={`block w-[80%] h-[2px] ml-auto mt-2 ${
                            selectIndex == index
                              ? "bg-[#0E9CE8]"
                              : "bg-[#ffffff]"
                          }`}
                        ></span>
                      </h4>
                    ))}
                </ul>
              </Grid>
            </Grid>

            {data &&
              data.data.map((industry, index) => {
                return (
                  <div
                    key={index}
                    className={`${index !== selectIndex && "hidden"} pt-5`}
                  >
                    <Box>{`${index + 1}/${data.data.length}`}</Box>
                    <IndustriesWeServeCommon industry={industry} />
                  </div>
                );
              })}
          </Box>

          <div className={`md:hidden`}>
            <Slider ref={sliderRef} {...settings}>
              {data &&
                data.data.map((industry, index) => {
                  return (
                    <div key={index}>
                      <div className="flex justify-between xs:mt-8 md:mt-0">
                        <span
                          className={`xl:ml-[6%] lg:ml-[3%] xs:ml-[2%] xs:text-lg md:text-base lg:text-lg font-medium cursor-pointer text-[#0E9CE8]`}
                        >
                          {industry.name}
                          <span
                            className={`block w-full h-[2px] ml-auto mt-2 bg-[#0E9CE8]`}
                          ></span>
                        </span>
                        <Box>{`${index + 1}/${data.data.length}`}</Box>
                      </div>
                      <div className="flex justify-end mt-4 mb-8">
                        <Image
                          src={prevIcon}
                          className="mr-4"
                          alt="Previous"
                          onClick={prev}
                        />
                        <Image src={nextIcon} alt="Next" onClick={next} />
                      </div>
                      <IndustriesWeServeCommon industry={industry} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
