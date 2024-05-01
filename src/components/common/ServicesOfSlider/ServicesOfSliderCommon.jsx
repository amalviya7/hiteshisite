/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, memo } from "react";
import React from "react"

const ServicesOfSliderCommon = ({ industry }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <>
      <Grid
        className={`${animate && "fade-in-down"}`}
        container
        spacing={2}
        ref={ref}
      >
        <Grid item xs={12} md={5.5} xl={6} className="">
          <div className="pt-2 flex flex-col justify-center h-full">
            <h2 className="md:max-w-full xs:text-[24px] md:text-[27px] lg:text-[27px] xxl:text-[29px] font-light md:leading-relaxed">
              {industry.subHeading}
            </h2>
            <p className="lg:max-w-[580px] xxl:max-w-[747px] xs:mb-4 md:mb-4 lg:mb-2 xl:mb-0  pt-5 md:mr-0 lg:mr-0 xs:text-sm md:text-[15px] lg:text-[15px] xl:text-[18px] font-light sm:leading-relaxed xl:leading-8 xxl:leading-[40px] tracking-wide xs:h-auto">
              {industry.text}
            </p>
          </div>
        </Grid>
        <Grid
          className={`mt-0 flex items-start rounded-lg`}
          item
          xs={12}
          md={6.5}
          xl={6}
        >
          <Image
            src={industry.image}
            alt={industry.altName}
            className="w-full h-auto pl-4 pt-4 md:max-w-[700px] max-h-[100%] rounded-3xl "
          />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(ServicesOfSliderCommon);
