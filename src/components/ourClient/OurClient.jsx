/* eslint-disable react/prop-types */
"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


const OurClient = ({  content,  }) => {

  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);


  return (
    <div className="spacing  md:px-10">
      {/* unused code */}
      {/* /  <Heading width="lg:w-[50%] mx-auto " py="md:py-5" {...heading} /> */}
      {/* <h2 class="xs:text-[22px] flex justify-center sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed  font-semibold">
        Our <span class="text-[#0E9CE8] pl-3"> Clients</span>
      </h2> */}
      <div
        className={` ${
          animate && "fade-in-down"
        } w-full h-full  mt-10 lg:mt-10  flex justify-center`}
        ref={ref}
      >
        {/* unused code */}

        {/* {isSlider ? (
          <Slider ref={sliderRef} {...settings}>
            {content.map((element, index) => (
              <div key={index} className="bg-white  cursor-pointer">
                <div className="flex justify-center items-center h-full my-auto mx-2">
                  <Image
                    src={element.image}
                    alt="client-images"
                    className="h-auto w-full object-contain aspect-[3/3] "
                  />
               
                </div>
              </div>
            ))}
          </Slider>
        ) : ( */}
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-3 gap-3  sm:grid-cols-5 lg:grid-cols-7 align-center">
            {content.map((element, index) => (
              <div
                key={index}
                className="border-2 rounded-xl overflow-hidden  border-[#E7E7E7] "
              >
                <div className="bg-white">
                  <div className="flex justify-center items-center  my-auto mx-2 h-12 w-15  xs:h-18 xs:w-15 sm:h-16 md:h-12 lg:h-16 xl:h-20">
                    <Image
                      src={element.image}
                      alt="client-images"
                      className="  object-contain aspect-[2/2]  "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* unused code */}
          <div className={`flex justify-center hidden`}>
            {content.map((element, index) => (
              <div key={index} className="bg-white cursor-pointer">
                <div className="flex justify-center items-center h-full my-auto mx-2 pr-3">
                  {/* <Image
                      src={element.image}
                      alt="client-images"
                      className="h-auto w-full object-contain aspect-[3/2] "
                    /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default OurClient;
