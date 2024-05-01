/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Hero from "@/components/common/Hero";
import RPA from "@/components/innerBlog/RPA";
import Seo from "@/components/SEO/Seo";

import { cardData } from "@/json/blog/blog_json";
import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useInView } from "framer-motion";
const HeroData = {
  text1: "Blog",
  text2: "Stay Tuned and",
  text3: "Plugged In",
};

const InnerBlog = ({ params }) => {
  console.log("param yaha hai",params )
  const [data, setData] = useState([]);
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let filterdata = cardData.content2.filter(
      (e) => !e.link.includes("All-you-need-to-know-about-Robotic-Process-Automation")
    );
    setData(filterdata);
  }, []);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  useEffect(() => {
    ShuffleData(data);
  }, [data]);

  function ShuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function renderSwitch(params) {
    switch (params) {
      case "All-you-need-to-know-about-Robotic-Process-Automation":
        return (
          <>
          {console.log("heading renderd  rpa")}
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "All you need to know about Robotic Process Automation (RPA)"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "All you need to know about Robotic Process Automation (RPA)"
                )[0].tagdescription
              }
            />
            <RPA />
          </>
        );
  }
  }
  return (
    <>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video17.mp4"}
          thumbnail={"/video/mp4/thumbnails/video17.jpeg"}
          firstHeading={HeroData.text1}
          secondHeading={HeroData.text2}
          thirdHeading={HeroData.text3}
        />
      </div>
      <div
        ref={ref}
        className=" xs:mx-8 sm:mx-16 md:mx-24 lg:mx-44 xl:mx-60 custom-shadow -mt-[30vh] bg-white py-12 z-50 relative mb-14 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28"
        style={{ boxShadow: "box-shadow: 0 0 24px rgba(8,7,7,.06)" }}
      > 
        {renderSwitch("All-you-need-to-know-about-Robotic-Process-Automation")}
      </div>
      <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Grid
          container
          spacing={{ xs: 3, lg: 6 }}
          ref={ref}
          className={` ${animate && "fade-in-down"}`}
        >
          {ShuffleData(data).map((item, index) =>
            index < 3 ? (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className=" h-[60%] hover:scale-110 transition duration-300"
                onClick={() => router.push(item.link)}
                key={index}
              >
                <div className=" group cursor-pointer mx-auto w-[300px] sm:w-full sm:h-[330px] md:h-[320px] lg:h-[340px] xl:h-[380px] xxl:h-[450px] border-2 border-gray-200 rounded-2xl xs:p-3 sm:p-4 md:p-3 lg:p-[18px]">
                  <div className=" xs:pb-1 sm:pb-[10px] lg:pb-[14px] xl:pb-[20px] ">
                    <Image
                      src={item.image}
                      alt={item.altName}
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div className="xs:text-[20px]  cursor-pointer lg:text-[17px] xl:text-[20px] font-none text-[#353739] mb-3  group-hover:text-[#0E9CE8] ">
                    <h3>{item.description}</h3>
                  </div>
                </div>
              </Grid>
            ) : null
          )}
        </Grid>
      </div>
    </>
  );
};

export default InnerBlog;
