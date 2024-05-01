/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import leftarrow2 from "../../assets/icons/Icon awesome-chevron-left.webp";
import leftarrow from "@/assets/icons/next.svg";

const WhyHiteshi = ({ content }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    draggable: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="spacing ">

      <h2 className="xs:text-[22px] flex justify-center sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed  font-semibold">
        Why <span className="text-[#0E9CE8] pl-3">Hiteshi ?</span>
      </h2>
      <h5 className="bodyText1 mt-2 text-center text-black">
        Elevate Your Business to New Heights with our Top-notch IT Services and
        Revolutionary Solutions from Industry Experts.
      </h5>
      <div
        className={` ${animate && "fade-in-down"} w-full h-full my-20 relative`}
        ref={ref}
      >
        {content && (
          <Slider ref={sliderRef} {...settings}>
            {content.map((element, index) => (
              <div key={index} className="bg-white">
                <div className="lg:p-2 p-0">
                  <div
                    className="flex justify-center items-center rounded-[52px] md:rounded-[60px] cursor-pointer xs:m-[20px_10px_20px_5px]  m-[20px_10px_20px_6px]  mb-6 h-full w-[97%] "
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <div className="xs:w-[83%] w-[85%] mx-auto sm:h-[545px] md:h-[545px] xl:h-[525px] pt-5">
                      <Image
                        src={element.image}
                        alt="client-images"
                        className="rounded-[52px] md:rounded-[60px] w-full h-[47%]"
                      />

                      <div className="h-[350px] pt-2 sm:pt-5 lg:h-[370px]">
                        <h3 className="text-2xl xl:text-[1.75rem] text-black pt-12  lg:pt-3 pl-2 ">
                          {element.title}
                        </h3>

                        <p
                          className="text-[15px] xl:text-[15px] text-black font-[200] py-2 pl-2 xl:w-full leading-7"
                          id="faq"
                        >
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        <div className="hidden md:block ">
          <div className="w-full gap-3  xs:pb-5 xs:pl-10 sm:pl-14 md:pl-0 xs:justify-center  items-end mb-[10px] flex  md:w-[85%] lg:w-[98%] mx-auto  pt-[12px]">
            <div className="absolute -left-16 lg:-left-20 top-[45%]">
              <div
                className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
                onClick={prev}
              >
                <Image src={leftarrow} alt="arrow" />
                <Image
                  src={leftarrow2}
                  alt="arrow"
                  className="invisible group-hover:visible absolute rotate-180"
                />
              </div>
            </div>

            <div className="absolute -right-16 lg:-right-20 top-[45%] ">
              <div
                className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 
                md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
                onClick={next}
              >
                <Image src={leftarrow} alt="arrow" className="rotate-180" />
                <Image
                  src={leftarrow2}
                  alt="arrow"
                  className=" invisible group-hover:visible absolute "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHiteshi;
