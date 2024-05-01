/* eslint-disable react/prop-types */
"use client";
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Slider from "react-slick";
import nextIcon from "../../../assets/images/next.webp";
import prevIcon from "../../../assets/images/previous.webp";
import { Grid } from "@mui/material";
import ServicesOfSliderCommon from "./ServicesOfSliderCommon";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  dots: false,
};

export default function ServicesOfSlider({ data }) {
  const [selectIndex, setSelectIndex] = React.useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Box
      className=" text-white"
    >
      <Box className="bg-[#000d14d6] pt-16 md:pb-10">
        <Box className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
          <h2 className="mediumHeading font-medium text-center md:pb-10 lg:pb-16 xl:pb-20">
            {data.name}
          </h2>

          <Box className={`xs:hidden md:block`}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ul className="flex md:justify-between xs:justify-center pr-4 md:mt-5">
                  {data &&
                    data.data.map((industry, index) => (
                      <li
                        className={`ml-[2%] xs:text-lg md:text-[10px] lg:text-[13px] xl:text-[15px] font-medium cursor-pointer text-center ${
                          selectIndex == index ? "text-[#0E9CE8]" : ""
                        }`}
                        onClick={() => setSelectIndex(index)}
                        key={index}
                      >
                        {industry.name}
                        <span
                          className={`block w-[40%] h-[2px] mx-auto mt-3 ${
                            selectIndex == index
                              ? "bg-[#0E9CE8]"
                              : "bg-[#ffffff]"
                          }`}
                        ></span>
                      </li>
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
                    <ServicesOfSliderCommon industry={industry} />
                    <Box>{`${index + 1}/${data.data.length}`}</Box>
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
                          className={`ml-[2%] xs:text-lg md:text-base lg:text-lg font-medium cursor-pointer text-[#0E9CE8]`}
                        >
                          <h4>
                          {industry.name}
                          </h4>
                          <span
                            className={`block w-full h-[2px] ml-auto mt-2 bg-[#0E9CE8]`}
                          ></span>
                        </span>
                        <Box>{`${index + 1}/${data.data.length}`}</Box>
                      </div>
                      <div className="flex justify-end mt-4 lg:mb-8">
                        <Image
                          src={prevIcon}
                          className="mr-4"
                          alt="Previous"
                          onClick={prev}
                        />
                        <Image src={nextIcon} alt="Next" onClick={next} />
                      </div>
                      <ServicesOfSliderCommon industry={industry} />
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
