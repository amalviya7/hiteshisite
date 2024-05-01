"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { keyFeatures } from "@/json/home/home_json";
import leftarrow2 from "../../assets/icons/Icon awesome-chevron-left.webp";
import leftarrow from "@/assets/icons/right-arrow-icon.webp";
import { useInView } from "framer-motion";

const KeyFeatures = () => {
  const [animate, setAnimate] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref);
  const isCardInView = useInView(cardRef);
  const [stopAutoSlider, setStopAutoSlider] = useState(true);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    autoplay: stopAutoSlider,
    dots: false,
    speed: stopAutoSlider ? 5000 : 300,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
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
          slidesToShow: 1.5,
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
    setStopAutoSlider(false);
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    setStopAutoSlider(false);
    sliderRef.current?.slickPrev();
  };

  return (
    <div>
      <div
        className={` ${
          animate && "fade-in-down"
        } xs:w-[85%] sm:w-full mx-auto flex flex-col justify-center items-center`}
        ref={ref}
      >
        <h2 className="xs:text-[22px] flex justify-center sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed  font-semibold">
          Our Key<span className="text-[#0E9CE8] pl-3"> Features </span>
        </h2>
        <h5 className="bodyText1 mt-2 text-center text-black">
          Services That We Deliver Makes Us Dignified As One of The Top App
          Development Companies.
        </h5>
      </div>
      <div
        className={` ${
          animateCard && "fade-in-right"
        } xs:mt-16 xs:mb-8  md:my-16 xs:block md:flex relative`}
        ref={cardRef}
      >
        <Slider
          ref={sliderRef}
          {...settings}
          className="gap-5 xs:w-full  md:w-[100%] mx-auto "
        >
          {keyFeatures &&
            keyFeatures.map((element, index) => (
              <div
                className={` ${
                  animate && "fade-in-right"
                } xs:p-6 sm:p-3 text-[#000D14] hover:text-[#5A5656] `}
                key={index + element.heading}
              >
                <div
                  className="p-4 max-w-[450px] xs:h-[385px] sm:h-[375px] lg:h-[370px]  xxl:h-[350px] bg-white hover:bg-[#E4F4FC]"
                  style={{ boxShadow: "0px 3px 6px #00000029" }}
                >
                  <div className="flex justify-end xs:pt-5 sm:pt-6 pr-5">
                    <Image
                      src={element.icon}
                      alt={element.altName}
                      className="sm:w-[50px] sm:h-[50px] "
                    />
                  </div>
                  <div className="xs:p-4 sm:p-[2px] md:p-2 lg:p-2 xl:p-4">
                    <h2
                      className="xs:text-[20px] sm:text-[16px] md:text-[21px] lg:text-[18px] xl:text-[22px] font-normal w-[90%] "
                      style={{ color: "inherit" }}
                    >
                      {element.heading}
                    </h2>
                    <h5
                      className="text-[13px] xxl:text-[12px] leading-5 xxl:leading-6 py-5 tracking-wider text-[#000D14]"
                      style={{ color: "inherit" }}
                    >
                      {element.description}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <div className="hidden md:block ">
          <div className="w-full gap-3  xs:pb-5 xs:pl-10 sm:pl-14 md:pl-0 xs:justify-center  items-end mb-[10px] flex  md:w-[85%] lg:w-[98%] mx-auto  pt-[12px]">
            <div className="absolute -left-16 lg:-left-20 top-[45%]">
              <div
                className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
                onClick={prev}
              >
                <Image src={leftarrow} alt="arrow" className="rotate-180" />
                <Image
                  src={leftarrow2}
                  alt="arrow"
                  className="invisible group-hover:visible absolute rotate-180"
                />
              </div>
            </div>

            <div className="absolute -right-16 lg:-right-20 top-[45%] ">
              <div
                className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
                onClick={next}
              >
                <Image src={leftarrow} alt="arrow" />
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
      <div className="visible md:hidden">
        <div className="w-full gap-3  xs:pb-5 xs:pl-10 sm:pl-14 md:pl-0 xs:justify-center  items-end mb-[10px] flex  mx-auto  pt-[12px]">
          <div
            className="group border-2  rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
            onClick={prev}
          >
            <Image
              src={leftarrow}
              alt="arrow"
              className="absolute rotate-180"
            />
            <Image
              src={leftarrow2}
              alt="arrow"
              className="invisible group-hover:visible absolute rotate-180"
            />
          </div>

          <div
            className="group border-2 rounded-full xs:p-4 md:p-3 drop-shadow-md xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-[#1490D2] border-[#1490D2] relative"
            onClick={next}
          >
            <Image src={leftarrow} alt="arrow" className="absolute" />
            <Image
              src={leftarrow2}
              alt="arrow"
              className=" invisible group-hover:visible absolute "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
