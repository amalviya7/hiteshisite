"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";

//json
import { BlogsData } from "@/json/common/common";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const LatestBlogs = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);
  const sliderRef = useRef(null);
  return (
    <>
      <div
        className={` ${
          animate && "fade-in-down"
        } overflow-x-hidden xs:min-h-[450px] sm:xs:min-h-[475px]  lg:min-h-max w-[90%] xl:w-[92%] mx-auto`}
        ref={ref}
      >
        <h1 className=" text-[26px]  sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold tracking-wide text-[#353739] text-center mb-[30px]">
          Latest <span className="text-[#0E9CE8]">Blogs & News</span>
        </h1>
        <Slider
          ref={sliderRef}
          {...settings}
          className="gap-5 xs:px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36"
        >
          {BlogsData &&
            BlogsData.map((element, index) => (
              <div
                className="p-3 relative"
                key={index + element.heading}
                // onClick={() => router.push(element.path)}
              >
                <Link href={element.path}>
                <div className="bg-white group ">
                  <div className="h-[210px]  rounded-t-2xl overflow-hidden cursor-pointer">
                    <Image
                      src={element.image}
                      alt={element.altName}
                      className="object-cover w-full h-[210px]"
                    />
                  </div>
                  <div className="rounded-b-[32px]  p-4 shadow-[0_3px_6px_rgba(0,0,0,0.16)] xs:text-center md:text-left ">
                    <h4 className=" xs:text-[20px]  group-hover:text-[#0E9CE8] cursor-pointer lg:text-[17px] xl:text-[20px] font-none text-[#353739] mb-4 h-[62px] overflow-hidden">
                      {element.title.includes("E-Commerce") ? (
                        <>
                          Best testing tips for your <br className="" />{" "}
                          E-Commerce Store
                        </>
                      ) : (
                        element.title
                      )}
                    </h4>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default LatestBlogs;
