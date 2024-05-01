/* eslint-disable react/no-unknown-property */
"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { hero_json } from "@/json/home/home_json";

import "lazysizes";

const Hero = () => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const videoRefs = useRef([]); 
  useEffect(() => {
    const currentVideo = videoRefs.current[slideIndex];


    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      } else {
        currentVideo.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);


    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [slideIndex]);

  const settings = {
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    pauseOnHover: false,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const videoRef = useRef(null);

  // Function to play the video
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {hero_json &&
          hero_json.map((element, index) => (
            <div className="relative w-full  " key={index + element.heading1}>
              <div
                className="w-full h-full object-contain lg:h-[94vh] preload" /* lazyloading */
                id="hero"
              >
                <video
                  ref={(ref) => (videoRefs.current[index] = ref)}
                  loop
                  muted
                  preload="auto"
                  autoPlay
                  playsInline
                  autobuffer="true"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="lazyload preload"
                  data-src={element.video}
									poster={element.thumbnail}
                >
                  <source src={element.video} type="video/mp4"></source>
                </video>
              </div>

              <div className="absolute top-0">
                <h1 className="xs:mt-14 sm:mt-24 md:mt-[4rem] lg:mt-24 xl:mt-[9rem] xs:text-[28px] sm:text-4xl 
                md:text-[2rem] lg:text-5xl xl:text-6xl font-semibold text-white xs:w-full  xs:pl-8 sm:pl-16 md:pl-24 
                lg:pl-44 xl:pl-60 xs:pb-0 sm:pb-5 md:pb-1 lg:pb-5  z-30">
                  {element.heading1}
                </h1>
                {element.heading2 && (
                  <h1 className="xs:text-[28px] sm:text-4xl md:text-[2rem] lg:text-5xl xl:text-6xl font-semibold 
                  text-white  xs:w-full  xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60 ">
                    {element.heading2}
                  </h1>
                )}
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Hero;
