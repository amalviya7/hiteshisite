/* eslint-disable react/prop-types */
"use client";
import React, { useEffect, useRef, useState } from "react";
import mycook from "@/assets/images/mycook.webp";
import { Button, Grid } from "@mui/material";
import Image from "next/image";
import { ourProject } from "@/json/home/home_json";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const OurProject = () => {
  const { mycookDescription, project } = ourProject;
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const router = useRouter();

  useEffect(() => {
    if (isInView) setAnimate(true);
    if (isInView2) setAnimate2(true);
    if (isInView3) setAnimate3(true);
  }, [isInView, isInView2, isInView3]);
  return (
    <div className="bg-no-repeat bg-cover relative">
      <div className="absolute bg-[#000D14] opacity-[0.85] w-full h-full"></div>
      <div className="relative xs:p-0 lg:px-8 lg:pt-8 xl:px-20 xxl:px-36 py-20">
        <div
          className={`${
            animate && "fade-in-down"
          } flex justify-center items-center xs:pt-12 lg:pt-7 pb-10`}
          ref={ref}
        >
          <h1 className="bigHeading text-white">Our Projects</h1>
        </div>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5.5}
            className={`${animate2 && "fade-in-left"} `}
            ref={ref2}
          >
            <div className="flex justify-center items-center">
              <Image
                src={mycook}
                alt="Ai powered iot based cooking assistant"
                className="w-auto h-auto lg:w-[70%] lg:h-[60%] animate-bounce-custom"
              />
            </div>
            <div className="text-base leading-7 xs:p-8 sm:p-16 md:px-24 lg:pl-28 lg:pb-24 lg:pt-4 xs:text-center lg:text-start">
              <h3 className="text-white">{mycookDescription}</h3>
            </div>
            <div>
              <div
                className="w-[160px] lg:ml-[114px] lg:mb-7 lg:mt-5 pt-12 lg:pt-0 absolute bottom-8 lg:bottom-0 xs:hidden lg:block"
                onClick={() => router.push("/caseStudies")}
              >
                <ExploreButton btnText={"Explore More"} />
              </div>

              <div
                className="w-[190px] mx-auto lg:hidden"
                onClick={() => router.push("/caseStudies")}
              >
                <ExploreButton btnText={"Explore More"} />
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5.5}
            className={` ${
              animate3 && "fade-in-right"
            }  xs:px-0 sm:px-0 lg:px-0`}
            ref={ref3}
          >
            <Grid
              container
              className="md:pt-4 md:pb-8 lg:pb-2 xl:pb-10 xl:pt-16"
            >
              {project &&
                project.map((element) => (
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    key={element.title + Date.now()}
                    className={`xs:px-5 sm:px-10 lg:px-8 py-10 xs:border-b xs:border-gray-500 relative  ${
                      element.border_right && "lg:border-r lg:border-gray-500"
                    } ${
                      element.border_botton
                        ? "lg:border-b md:border-gray-500"
                        : "lg:border-b-0"
                    }  `}
                  >
                    <div className="xs:px-4 sm:px-20 md:px-28 lg:px-0">
                      <div className="flex xs:flex-col-reverse xs:justify-center xs:items-center lg:flex-row  lg:justify-between pb-4">
                        <h1 className="xs:text-[22px] sm:text-[24px] lg:text-[17px] xl:text-[23px] text-white ">
                          {element.title}
                        </h1>
                        <Image
                          src={element.icon}
                          alt={element.altName}
                          className="xs:pb-6 lg:pb-0"
                        />
                      </div>
                      <div className="xs:text-xs text-base  xxl:text-[14px]  font-light text-white xs:leading-6 sm:leading-5 xs:pb-12 lg:pb-2 xs:text-center lg:text-start">
                        <p>{element.description}</p>
                      </div>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const ExploreButton = ({ btnText }) => {
  return (
    <Button
      className="w-full rounded-[30px] bg-white text-[#0E9CE8] font-medium"
      endIcon={<ArrowOutwardIcon sx={{ color: "inherit" }} />}
      sx={{
        backgroundColor: "white",
        color: "#0E9CE8",
        fontSize: "14px",
        borderRadius: "30px",
        fontWeight: 700,
        padding: "12px",
        "&:hover": { backgroundColor: "#0E9CE8", color: "white" },
      }}
    >
      {btnText}
    </Button>
  );
};

export default OurProject;
