"use-client";
import React from "react"

import { Grid } from "@mui/material";
import Image from "next/image";
import { pagenotfound } from "@/json/joinus/joinus";

export default function PageNotFound() {
  return (
    <div>
      <Grid container spacing={{ sm: 0, xl: 2 }}>
        <Grid item xs={12} sm={7} md={6} className="h-full my-auto">
          <div className="">
            <div className="text-[#0183BC] flex items-center mx-auto text-[20px] sm:text-[28px] lg:text-[34px] xl:text-[44px] font-semibold w-[70%] sm:w-full pl-6 sm:pl-16 md:pl-24 lg:pl-48 xl:pl-60">
              {pagenotfound.content}
            </div>
            <div className="text-[#747474] flex items-center mx-auto text-[15px] sm:text-[23px] lg:text-[20px] xxl:text-[28px] w-[70%] sm:w-full pt-5 pb-5 pl-6 sm:pl-16 md:pl-24 lg:pl-48 xl:pl-60">
              {pagenotfound.content1}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
          <div className="flex justify-center items-center">
            <Image
              src={pagenotfound.image}
              alt="This Job opportunity is currently not open, Does not exist"
              className="h-[60%] w-[60%] sm:h-full sm:w-full md:w-[80%] lg:h-[360px] lg:w-[380px] xl:h-[428px] xl:w-[439px] lg:pr-10 xl:pr-14 xxl:pr-0"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
