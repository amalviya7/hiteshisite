/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, memo } from "react";
import React from "react"
const IndustriesWeServeCommon = ({ industry }) => {
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
        <Grid item xs={12} md={5} xl={6} className="my-auto">
          <div className="pt-2 my-auto">
            <h2 className="md:max-w-[430px] xs:text-[24px] sm:text-3xl md:text-[28px] lg:text-3xl mt-4 font-medium">
              {industry.subHeading}
            </h2>
            <p className="lg:max-w-[580px] xs:mb-8 md:mb-0  pt-2 lg:pt-4 md:mr-8 xs:text-sm sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-light md:leading-loose xl:leading-8 tracking-wide xl:h-[260px] lg:h-[258px] md:h-[352px] xs:h-auto">
              {industry.text}
            </p>
          </div>
        </Grid>
        <Grid
          className={`mt-0 flex items-start rounded-lg`}
          item
          xs={12}
          md={7}
          xl={6}
        >
          <Image
            src={industry.image}
            alt={industry.altName}
            className="w-full h-auto p-4 md:max-w-[700px] max-h-[100%] rounded-lg xl:ml-10"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(IndustriesWeServeCommon);
