/* eslint-disable react/prop-types */
"use client";
import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const settings = {


  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 4000,
  horizontal: true,
  horizontalSwiping: true,

  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 0.9,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
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

const Testimonial = ({ content  }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref);
  const sliderRef1 = useRef(null);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <div
      className={` ${animate && "fade-in-down"} sm:mt-[90px] mt-[60px]`}
      ref={ref}
    >
      {content && (
        <Grid container className="bg-[#F2FBFF]" spacing={{ lg: 3, xl: 0 }}>
          <Grid item md={12} lg={12} xl={12}>
            <div className="xs:w-[90%] md:w-[75%] xs:py-12 lg:py-32 py-10 xl:py-28 m-auto">
              <h2 className="xs:text-[22px] flex justify-center sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[50px] xxl:text-[64px] leading-normal lg:leading-relaxed  font-semibold">
                Testimonials
              </h2>
              <h5 className="bodyText1 mt-2 text-center text-black">
                For us, our clients matter the most and we value them, no matter
                how big or small they are. From initial planning to final
                delivery, our strategy is client-centric.
              </h5>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            xl={12}
            className=" xs:block mb-[70px] "
            sx={{ marginBottom: "70px" }}
          >
            <div className="xs:w-[70%] mx-auto h-full my-auto">
              <Slider ref={sliderRef1} {...settings}>
                {content.review.map((item, index) => (
                  <div key={index + item.name}>
                    <Grid
                      container
                      className="inline-flex bg-white rounded-[16px] lg:mt-15 xs:px-3 mr-30"
                      style={{ display: "flex" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={3.5}
                        className="sm:border-r border-[#E9E9E9]"
                      >
                        <div className="xs:pt-10 xs:pb-1 sm:py-10 pr-3">
                          <div className="flex justify-center items-center gap-3">
                            <div>
                              <Image src={item.image} alt="" />
                            </div>
                            <div>
                              <h5 className="xs:text-xs sm:text-sm text-primary">
                                {item.name}
                              </h5>
                              <p className="xs:text-[10px] sm:text-xs text-[#999999] font-light">
                                {item.position}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5">
                            {item.companydetail.map((element, index) => (
                              <div
                                className="flex gap-5 pl-4 py-2 items-center"
                                key={index + element.title}
                              >
                                <div>
                                  <Image src={element.icon} alt="icons" />
                                </div>
                                <div>
                                  <h6 className="xs:text-xs sm:text-sm  text-black font-normal">
                                    {element.title}
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={5}
                        className="h-auto flex items-center justify-center"
                      >
                        <div className="xs:py-5 py-10 px-4 xs:mt-0 mt-6">
                          <p className="xs:text-[14px] xs:leading-6 sm:text-[15px] sm:leading-6 text-black font-light">
                            {item.review}
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3.5} className="xs:mb-2 sm:mb-0">
                        <div className="xs:py-5 py-10 sm:border-l border-[#E9E9E9]">
                          <div className="flex flex-col justify-center items-center ">
                            <h4 className="xs:text-xl sm:text-2xl text-black font-normal">
                              {item.rating}.0
                            </h4>
                            <div className="pt-3">
                              <Image
                                src={item.star_image}
                                alt="start-rarting"
                              />
                            </div>
                          </div>

                          <div className="px-6 pt-4">
                            {item.reviewDetail.map((element, index, arr) => (
                              <div
                                className={`flex justify-between py-3 sm:pl-4  ${
                                  index !== arr.length - 1 &&
                                  "border-b border-[#CCCCCC]"
                                } `}
                                key={index + element.title}
                              >
                                <h4 className="xs:text-sm sm:text-base font-normal">
                                  {element.title}
                                </h4>
                                <h4 className="xs:text-sm sm:text-base font-normal text-gray">
                                  {element.rating}.0
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>

      
        </Grid>
      )}
    </div>
  );
};

export default Testimonial;
