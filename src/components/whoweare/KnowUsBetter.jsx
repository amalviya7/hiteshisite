"use client";

import React from "react"
import { Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

//json
import { cards } from "@/json/who-we-are/who_we_are_json";

export default function KnowUsBetter() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("term");
    if (term == "know-us-better") {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div
      className={` ${
        animate && "fade-in-down"
      }  w-[85%] sm:w-[80%] lg:w-[75%] mx-auto`}
    >
      <div className="xs:text-2xl sm:text-[28px] md:text-3xl lg:text-4xl xl:text-[46px] tracking-wide font-semibold pl-2 text-center">
        <h1>Insights</h1>
      </div>
      <div className="text-gray-500 pl-2 py-4 text-base lg:text-lg xl:text-xl mb-4 lg:mb-10 text-center">
        <p>
          Discover The Essence Of Who We Are, As We Invite You To Journey Deeper
          Into Our Story
        </p>
      </div>
      <div>
        <Grid container spacing={4} ref={ref}>
          {cards &&
            cards.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                className="w-[47%] h-[80%] "
                key={index}
              >
                <div className="custom-shadow rounded-3xl">
                  <div className="xs:p-3 sm:p-6 md:p-3 lg:p-6 xs:pb-1 lg:pb-2 ">
                    <Image
                      sx={{
                        backgroundImage: `url(${item.image.src})`,
                        boxShadow:
                          "inset -89px 200px 175px -34px rgba(0,0,0,0.61)",
                        "&:hover": { boxShadow: "none" },
                      }}
                      src={item.image}
                      alt={item.altName}
                      className="rounded-xl w-full"
                    />
                  </div>

                  <div className="flex md:gap-0 gap-4 h-32  items-center">
                    <div className="w-[70%] my-5 md:my-0 lg:my-5 ml-4 sm:ml-10 ">
                      <div className="text-[18px] sm:text-xl md:text-xl lg:text-[22px] font-semibold mb-3">
                        <h2>{item.title}</h2>
                      </div>
                      <div className="text-[10px] sm:text-base md:text-[14px] lg:text-[16px] text-gray-500 lg:pr-10 xxl:pr-24">
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div
                      className="flex items-center "
                      // onClick={() => router.push(item.link)}
                    >
                      <div className="mr-2 sm:mr-10 lg:mr-9">
                        <Link href={item.link}>
                          <button className="border-2 border-sky-300 w-[90px] xsx:w-[80px] sm:w-[150px] md:w-[115px] lg:w-[150px] xs:h-[45px] sm:h-[50px] md:h-[45px] lg:h-[50px] xl:h-[52px] rounded-full p-2 sm:p-3 text-xs sm:bodyText2 md:text-xs lg:text-base text-sky-300 hover:bg-[#1387C5]  hover:text-white  cursor-pointer mt-[20px] hover:border-[#1387C5]">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
