/* eslint-disable react/prop-types */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useInView } from "framer-motion";
import Link from "next/link";

const TechDomain = ({ cardData }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("term");
    if (isInView) setAnimate(true);

    if (term == "services") {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isInView]);

  return (
    <div className="xs:px-8 sm:px-16  md:px-24 lg:px-44 xl:px-60">
      <Grid
        container
        spacing={{ xs: 2, sm: 3, lg: 6 }}
        className={`md:w-full md:mx-0  ${animate && "fade-in-down"} `}
        ref={ref}
      >
        {cardData &&
          cardData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              className="gap-0 flex xs:justify-center  cursor-pointer hover:scale-110  transition duration-900"
              // onClick={() => router.push(item.link)}
            >
             
              <Box
                sx={{
                  backgroundImage: `url(${item.image.src}) `,
                }}
                className="xs:w-96 sm:w-[240px] md:w-full h-64 sm:h-48 md:h-64 xxl:w-full  xxl:h-80 rounded-2xl bg-cover bg-center hover:shadow-none group"
              >
                 <Link href={item.link}        
                className="w-full"      
               >
                <div className="xs:text-xl sm:text-base md:text-xl xxl:text-2xl  font-semibold text-white pt-6 px-6 h-full">
                  <h3>{item.title}</h3>
                </div>
                </Link>
              </Box>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default TechDomain;
