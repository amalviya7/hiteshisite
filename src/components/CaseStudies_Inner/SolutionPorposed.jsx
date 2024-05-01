/* eslint-disable react/prop-types */
"use client";
import React from "react"
import { Grid } from "@mui/material";
import Image from "next/image";

export default function SolutionPorposed({ data, titleData }) {
  return (
    <>
      <div className="text-[28px] lg:text-[45px] font-semibold text-center">
        <h2>{titleData.title}</h2>
        <div className="mt-5 mb-4 md:my-10 xs:block md:flex">
          <Grid
            container
            spacing={{ xs: 2, md: 3, xl: 10 }}
            className="px-10 sm:px-16 md:flex md:justify-center md:w-full md-h-full"
          >
            {data &&
              data.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  className="pl-0 md:pl-24 "
                >
                  <div className="text-[#5A5656] ">
                    <div
                      className="h-full w-full rounded-2xl hover:scale-110 transition duration-300"
                      style={{ boxShadow: "0px 3px 6px #00000029" }}
                    >
                      <div className="px-4 mt-3 pt-4 md:pt-7 lg:mb-3">
                        <h3 className="text-[16px] lg:text-[19px] xxl:text-[22px] md:leading-6 text-[#272727] font-medium w-[90%] text-left">
                          {item.title}
                        </h3>
                      </div>

                      {item.content &&
                        item.content.map((element, ind) => (
                          <div
                            className="flex"
                            key={`solution ${ind} item-content`}
                          >
                            <div className="mr-1 pt-4 ml-4 md:pt-2">
                              <div className="w-[16px] h-auto sm:w-[16px] ml-15px">
                                <Image
                                  src={item.icon}
                                  alt={item.altName}
                                  className="h-full w-full"
                                />
                              </div>
                            </div>
                            <div className="pt-3 px-4 md:pt-1">
                              <h5 className=" text-[#5A5656] font-normal text-[13px] lg:text-[15px] xl:text-[17px] xxl:text-[16px] xs:leading-6 leading-2 md:leading-relaxed w-[90%] md:w-full text-left pb-3">
                                {element.contentItem}
                              </h5>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
