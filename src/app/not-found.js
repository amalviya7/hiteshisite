"use client";
import React from "react"

import { Grid } from "@mui/material";
import Image from "next/image";
import { Page_Not_Found } from "@/json/not_found_json";
import Seo from "@/components/SEO/Seo";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Seo title={"Hiteshi Infotech"} description={"No Page Found"} />

      <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 h-[70vh] sm:h-[79vh] md:h-[76vh] lg:h-[100vh] flex  items-center bg-[#F9F9F9] ">
        <div>
          <Grid container spacing={{ md: 2, lg: 6, xl: 10 }}>
            <Grid item xs={6}>
              <div>
                <Image
                  src={Page_Not_Found.img}
                  alt={Page_Not_Found.img_alt}
                  className="animate-bounce-custom"
                />
              </div>
            </Grid>
            <Grid item xs={6} className="flex items-center ">
              <div className="my-auto pl-4 md:pl-10 ">
                <h1 className="text-[#1490D2] text-[18px] sm:text-[22px] md:text-[30px] lg:text-[40px] xxl:text-[54px] font-semibold">
                  {Page_Not_Found.Heading}
                </h1>
                <h1 className="text-[#1490D2] text-[18px] sm:text-[22px] md:text-[30px] lg:text-[40px] xxl:text-[54px] font-semibold">
                  {Page_Not_Found.subHeading}
                </h1>
                <p className="text-[10px] sm:text:[18px] md:text-[20px]  lg:text-[22px] xl:text-[25px] xxl:text-[28px] text-[#373B44] font-medium xl:pt-4 ">
                  {Page_Not_Found.text}
                </p>
              </div>
            </Grid>
          </Grid>
          <div className="flex justify-center items-center mt-20">
            <div className="cursor-pointer w-[230px] md:w-[250px] lg:w-[300px] border-4 rounded-full border-[#1490D2] text-[16px] sm:text-[18px] md:text-[19px]  lg:text-[22px] xl:text-[22px] xxl:text-[24px] p-4 lg:p-[14px] xl:p-4 flex justify-center items-center font-medium hover:bg-[#1490D2] group">
              <Link href={Page_Not_Found.link}>
                <button className="text-[#1490D2] group-hover:text-white">
                  Go Back To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
