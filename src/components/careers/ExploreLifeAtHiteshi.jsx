"use client";
import React from "react"

import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { Explore_Hiteshi, Explore } from "@/json/career/life_at_Hiteshi_json";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function LifeAtHiteshi() {
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
    if (isInView) {
      setAnimate1(true);
    }
  }, [isInView]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("term");
    if (term == "explore-life-at-Hiteshi") {
      ref1?.current?.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="w-full bg-cover bg-no-repeat relative md:pr-12  bg-[#000D14] opacity-[0.85]">
      <div className="absolute top-0 w-full h-full bg-[#000D14] opacity-[0.87]"></div>
      <Grid
        container
        spacing={2}
        sx={{ position: "relative", paddingY: "20px" }}
      >
        <Grid item xs={12} md={5}>
          <div
            className={` ${
              animate && "fade-in-left"
            } md:pl-[35px] lg:pl-[93px] xl:pl-40 h-full flex justify-center items-center`}
            ref={ref}
          >
            <div className=" text-white text-left xs:text-xs xs:leading-10 sm:leading-none lg:text-xl sm:text-sm sm:pl-9 my-auto ">
              <h1 className="xs:text-[25px] sm:text-[28px] md:text-[18px] lg:text-[27px] xl:text-[31px] xxl:text-[35px] px-10 xs:pt-5 md:pt-0 font-semibold">
                {Explore.title}
              </h1>
              <div className="xs:pt-3 md:pt-3 lg:py-7 w-full md:leading-[20px] leading-7 px-10">
                <p className="xxl:text-[20px] xxl:leading-10 md:text-[11px] lg:text-[14px]">
                  {Explore.description}
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          ref={ref1}
          className={`${animate1 && "fade-in-right"} lg:px-36 `}
        >
          <Grid
            container
            spacing={2}
            sx={{ paddingX: "20px", paddingY: "40px" }}
          >
            {Explore_Hiteshi &&
              Explore_Hiteshi.map((item, index) => (
               
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  // onClick={() => router.push(item.link)}
                >
                   <Link href={item.link}
               
                >
                  <div className="sm:w-[75%] mx-auto md:w-full xxl:w-full h-full rounded-lg bg-cover hover:shadow-none">
                    <div className="xs:text-xl sm:text-lg md:text-xl font-semibold text-white pt-4 px-2  mx-auto relative hover:scale-110 transition duration-900">
                      <Image
                        src={item.image}
                        alt={item.altName}
                        className="object-fill xs:justify-center xs:items-center flex h-full "
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          paddingX: "32px",
                          paddingBottom: "28px",
                          objectFit: "fill",
                          width: {
                            xs: "96%",
                            sm: "84%",
                            md: "95%",
                            lg: "95%",
                            xl: "96.5%",
                          },
                          height: "100%",
                          "&:hover": {
                            background: "none",
                          },
                        }}
                      >
                        <div className="flex justify-start items-end h-full w-full lg:text-2xl ">
                          <h2>{item.title}</h2>
                        </div>
                      </Box>
                    </div>
                  </div>
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
