/* eslint-disable react/prop-types */
"use client";
import React from "react"
import { Grid } from "@mui/material";

export default function SolutionPorposedByHiteshi({ data, titleData }) {
  return (
    <>
      <div className="text-[28px] lg:text-[45px] font-semibold text-center">
        <h2>{titleData.title}</h2>
        <div className="mt-5 mb-4 md:my-10 xs:block md:flex">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            className="px-10 sm:px-16 md:px-24 lg:px-44 xl:px-60"
          >
            {data &&
              data.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  className="pl-0 md:pl-24"
                >
                  <div className="text-[#5A5656]">
                    <div
                      className=" sm:h-[400px] md:h-[450px] lg:h-[410px] xl:h-[430px] xxl:h-[350px] w-[95%] md:w-[100%] rounded-2xl hover:scale-110 transition duration-300"
                      style={{ boxShadow: "0px 3px 6px #00000029" }}
                    >
                      <div className="px-4 mt-3 pt-4 md:pt-7">
                        <h3 className="text-[16px] lg:text-[19px] xxl:text-[22px] md:leading-6 text-[#272727] font-medium w-[90%] text-left xl:leading-8">
                          {item.title}
                        </h3>
                      </div>
                      <div className="pt-3 px-4 md:pt-5">
                        <h5 className=" text-[#5A5656] font-normal text-[13px] lg:text-[15px] xl:text-[16px] xs:leading-6 leading-2 md:leading-relaxed w-[90%] xl:w-[97%] text-left pb-3">
                          {item.content}
                        </h5>
                      </div>
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
