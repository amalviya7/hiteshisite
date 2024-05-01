"use client";
import { Box, Grid } from "@mui/material";
import { generatingCards } from "@/json/insights/insights_json";
import ButtonImage from "@/assets/icons/Button.webp";
import React from "react"

import Image from "next/image";

export default function Generating() {
  return (
    <div>
      <div className="xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0E9CE8] flex justify-center">
        <h1>What&apos;s generating buzz ?</h1>
      </div>

      <Grid
        container
        spacing={{ xs: 5, sm: 6, lg: 7, xl: 10 }}
        className="xs:p-6 md:p-10 lg:p-16 xl:p-20"
      >
        {generatingCards && generatingCards.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={`generating-cards-${index}`}>
            <div className="w-full relative">
              <Box
                sx={{
                  backgroundImage: `url(${item.image.src})`,
                  boxShadow: " inset -80px -200px 180px 16px rgba(0,0,0,0.75)",
                  "&:hover": { boxShadow: "none" },
                }}
                className=" w-full h-64 xxl:h-[26rem] rounded-3xl bg-cover hover:shadow-none "
              ></Box>

              <div className="xs:text-3xlsm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold absolute bottom-4 left-4 text-white hover:shadow-none">
                <h3>{item.title}</h3>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="flex justify-center">
        <button className="bg-[#0E9CE8] w-[180px] h-[55px] py-4 text-white text-xs sm:bodyText2 md:text-xs lg:text-base relative group  ">
          <span className="absolute bg-[#066FA8] w-[31px] group-hover:w-full group-hover:rounded-none transition-all duration-500 h-full top-0 left-0 rounded-r-full">
            <Image
              src={ButtonImage}
              alt="arrow icon"
              className="pt-[21px] ml-[5px] transition-all group-hover:opacity-0"
            />
          </span>
          <span className="absolute xs:left-[48%] left-1/2 top-1/2 translate-x-[-40%] translate-y-[-50%]">
            View All Blogs
          </span>
        </button>
      </div>
    </div>
  );
}
