/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import {React, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import leftarrow from "@/assets/icons/next.svg";
import leftarrow2 from "../../assets/icons/Icon awesome-chevron-left.webp";

export default function Case_Studies_Card({ data }) {
  const [animate, setAnimate] = useState(false);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const router = useRouter();
  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    speed: 3000,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 1.97,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.97,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.97,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 0.94,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (isInView1) setAnimate(true);
  }, [isInView1]);

  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div>
      <h1 className="text-black xs:text-[28px] sm:text-4xl md:text-[2rem] lg:text-5xl xl:text-6xl font-semibold pb-16 lg:pb-28 xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60">
        Our Recent Work
      </h1>
      <div
        ref={ref1}
        className={`xs:px-10 sm:px-20 md:px-28 lg:px-48 xl:px-72 ${
          animate && "fade-in-down"
        }`}
      >
        <Grid container spacing={6}>
          <Slider ref={sliderRef} {...settings} className="gap-5 w-full ">
            {data.map((item, index) => (
              <Grid
                item
                xs={12}
                className="h-[50%] relative xl:mb-16"
                sx={{
                  marginBottom: {
                    xs: "40px !important",
                    xl: "64px !important",
                  },
                }}
                key={index}
                onClick={() => router.push(item.link)}
              >
                <div className="w-[90%] xs:h-[500px] cursor-pointer group sm:h-[400px] md:h-[490px] lg:h-[530px] custom-shadow rounded-2xl xs:pl-3 sm:p-4 md:p-5 lg:p-[30px] ">
                  <div className=" xs:pb-1 lg:pb-[20px]">
                    <Image
                      src={item.image}
                      alt="image"
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div className="text-[20px] group-hover:text-[#1490D2] sm:text-[18px] md:text-[20px] xs:leading-8 md:leading-8 xl:leading-10 lg:text-[22px] font-semibold leading-loose mb-3 text-[#5A5656]  pt-4 pl-3">
                    <h3>{item.text}</h3>
                  </div>
                </div>
              </Grid>
            ))}
          </Slider>

          <div className="w-full gap-3 xs:justify-start xs:pb-5 sn:pb-0 xs:pl-6 md:pl-0 md:justify-end  items-end mb-[10px] flex  md:w-[85%] lg:w-[88%] mx-auto">
            <div
              className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-12 xs:w-12 md:w-14 md:h-14 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
              onClick={prev}
            >
              <Image src={leftarrow} alt="arrow" />
              <Image
                src={leftarrow2}
                alt="arrow"
                className="invisible group-hover:visible absolute rotate-180"
              />
            </div>
            <div
              className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-12 xs:w-12 md:w-14 md:h-14 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
              onClick={next}
            >
              <Image src={leftarrow} alt="arrow" className="rotate-180" />
              <Image
                src={leftarrow2}
                alt="arrow"
                className="invisible group-hover:visible absolute"
              />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
