"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { significantData } from "@/json/diversity/diversity_json";
import { useInView } from "framer-motion";
import Background from "@/assets/images/Significant_background.webp";
import leftarrow from "../../assets/icons/Icon awesome-chevron-left.webp";
import Image from "next/image";

const Significant = () => {
  // eslint-disable-next-line no-unused-vars
  const [animate, setAnimate] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref);
  const isCardInView = useInView(cardRef);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    speed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
    if (isCardInView) {
      setAnimateCard(true);
    }
  }, [isInView, isCardInView]);

  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
      className="bg-cover bg-no-repeat"
    >
      <div
        className={` ${
          animate && "fade-in-down"
        } xs:w-[85%] sm:w-full mx-auto flex flex-col xs:pt-7 sm:pt-10 px-2 sm:px-16 md:px-24 lg:pl-[11rem] xl:pl-[15rem] md:pt-16`}
        ref={ref}
      >
        <div className="xs:text-2xl sm:mediumHeading lg:text-4xl text-white font-medium">
          <h2>Every Voice is Significant</h2>
        </div>
        {significantData &&
          significantData.map((element, index) => {
            return (
              <div
                key={index}
                className={`${
                  index !== 0 && "hidden"
                } text-white text-base flex justify-end `}
              ></div>
            );
          })}
      </div>
      <div
        className={` ${
          animateCard && "fade-in-right"
        } xs:mt-16 xs:mb-8 md:my-16 `}
        ref={cardRef}
      >
        <Slider
          ref={sliderRef}
          {...settings}
          className="gap-5 xs:w-full md:w-[85%] lg:w-[72%] xxl:w-[76%] mx-auto"
        >
          {significantData &&
            significantData.map((element, index) => (
              <div
                className={` ${
                  animate && "fade-in-right"
                } xs:pl-9 sm:pl-14 md:pl-8 xl:pl-6  xl:pr-6 md:pb-6 text-[#000D14] hover:text-[#5A5656]`}
                key={index}
              >
                <div
                  className="p-4 max-w-[450px] xs:h-[360px] sm:h-[375px] lg:h-[370px]  xxl:h-[546px] bg-white hover:bg-[#E4F4FC] hover:scale-105 transition duration-100 "
                  style={{
                    backgroundImage: `url(${element.image.src})`,
                  }}
                >
                  <div className="h-full flex flex-col pt-60 sm:pt-[12rem] lg:pt-[10rem] xxl:pt-80">
                    <div className="text-white justify-end xs:text-xl md:text-[24px] xl:text-[28px] font-medium">
                      <h3>{element.heading}</h3>
                    </div>
                    <div className="text-white md:pt-4 xs:text-base xl:text-lg font-normal lg:pb-5">
                      <h4>{element.description}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <div className="w-full gap-3 xs:justify-start xs:pb-5 xs:pl-10 sm:pl-14 md:pl-0 md:justify-end  items-end mb-[10px] flex  md:w-[85%] lg:w-[88%] mx-auto md:pr-3 lg:pr-[6rem] xl:pr-[9rem] pt-[12px]">
          <div
            className="border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-12 xs:w-12 md:w-14 md:h-14 flex justify-center items-center cursor-pointer"
            onClick={prev}
          >
            <Image src={leftarrow} alt="arrow" className="rotate-180" />
          </div>
          <div
            className="border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-12 xs:w-12 md:w-14 md:h-14 flex justify-center items-center cursor-pointer"
            onClick={next}
          >
            <Image src={leftarrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Significant;
