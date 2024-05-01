/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LatestCard({ data }) {
  const [isLatestBlogSelected, setIsLatestBlogSelected] = useState(true);
  const [content1, setContent1] = useState(data.content1);
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("term");

    if (isInView1) setAnimate(true);
    if (isInView2) setAnimate2(true);

    if (term == "talk-of-town") {
      setIsLatestBlogSelected(false);
      setContent1(data.content2);
      ref2?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isInView1, isInView2, data.content2]);

  return (
    <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
      <div
        ref={ref1}
        className={`xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center items-center font-semibold xs:pb-10 md:pb-12 lg:pb-16 xxl:pb-20 ${
          animate && "fade-in-down"
        }`}
      >
        <div
          onClick={() => {
            setIsLatestBlogSelected(true);
            setContent1(data.content1);
          }}
        >
          <h2
            className={`${
              isLatestBlogSelected ? "text-[#1490D2] " : "text-black"
            } 
            cursor-pointer
            `}
          >
            {data.tilte1}
          </h2>
          <div
            className={`w-[50%] h-2 ${
              isLatestBlogSelected ? " border-b-4 border-[#1490D2]" : null
            }`}
          ></div>
        </div>
        <div
          className="pl-6 md:pl-10 lg:pl-20"
          onClick={() => {
            setIsLatestBlogSelected(false);
            setContent1(data.content2);
          }}
        >
          <h2
            className={`
            cursor-pointer
            ${
              !isLatestBlogSelected ? "text-[#1490D2] " : "text-black"
            }`}
          >
            {data.title2}
          </h2>
          <div
            className={`w-[50%] h-2 ${
              !isLatestBlogSelected ? " border-b-4 border-[#1490D2]" : null
            }`}
          ></div>
        </div>
      </div>

      <div ref={ref2} className={`${animate2 && "fade-in-down"}`}>
        <Grid container spacing={{ xs: 3, lg: 6 }}>
          {content1.map((item, index) => (
         
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className=" h-[60%] hover:scale-110 cursor-pointer transition duration-300 "
              ref={ref3}
              key={index}
              // onClick={() => router.push(item.link)}
            >
                 <Link href={item.link}           
            >
              <div className=" group mx-auto w-[300px] cursor-pointer sm:w-full sm:h-[330px] md:h-[320px] lg:h-[340px] xl:h-[380px] xxl:h-[450px] border-2 border-gray-200 rounded-2xl xs:p-3 sm:p-4 md:p-3 lg:p-[18px]">
                <div className=" xs:pb-1 sm:pb-[10px] lg:pb-[14px] xl:pb-[20px] cursor-pointer ">
                  <Image
                    src={item.image}
                    alt={item.altName}
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="xs:text-[20px] group-hover:text-[#1490D2]  lg:text-[17px] xl:text-[20px] cursor-pointer font-none text-[#353739] mb-3 ">
                  <h3>{item.description}</h3>
                </div>
              </div>
            </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
