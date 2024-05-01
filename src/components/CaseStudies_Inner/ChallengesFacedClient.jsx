/* eslint-disable react/prop-types */
"use client";

import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function ChallengesFacedClient({ data, dataClient, type }) {
  const [animate, setAnimate] = useState(false);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  useEffect(() => {
    if (isInView1) setAnimate(true);
  }, [isInView1]);
  return (
    <>
      <div className={`${animate && "fade-in-down"} `} ref={ref1}>
        <div className="text-[24px] lg:text-[40px] text-center font-semibold mb-14">
          <h2 className="">{dataClient.title}</h2>
          <h2>
            <span className="text-[#0E9CE8]">{dataClient.title2}</span>
          </h2>
        </div>
        {data &&
          data.map((item, index) => (
            <div
              className="h-full xs:mb-10 xs:pt-2 sm:pt-0 mx-auto w-[70%] sm:w-[80%] lg:w-[72%] xl:w-[68%] xxl:w-[75%] rounded-xl mb-24 xs:px-2 sm:px-0 xl:mb-20 hover:scale-105 transition duration-100"
              key={index + item.title}
              style={{ boxShadow: "0px 3px 6px #00000029" }}
            >
              <Grid
                container
                spacing={{ xs: 2 }}
                className="  h-100%  lg:h-[220px]"
              >
                <Grid item xs={12} sm={4} md={3} style={{ paddingTop: 0 }}>
                  {type == "services" ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="bg-[#F8F8F8] w-[95%] sm:w-[80%] h-[80%] flex justify-center items-center rounded-lg mt-4 sm:mt-0">
                        <Image
                          src={item.icon}
                          alt={item.altName}
                          className="h-[50px] w-[50px] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px] "
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full ">
                      <Image
                        src={item.icon}
                        alt={item.altName}
                        className="h-[50px] w-[50px] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px]"
                      />
                    </div>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={9}
                  style={{
                    paddingTop: "20px",
                
                  }}
                  className="pb-4 my-auto "
                >
                  <div className=" text-center sm:text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[22px] xxl:text-[26px] font-semibold xs:pb-2  pb-5 text-[#373B44]">
                    <h3>{item.title}</h3>
                  </div>

                  {item.content &&
                    item.content.map((element, ind) => (
                      <div className="flex pb-3 md:pb-4" key={ind}>
                        {item.icons && (
                          <div className="ml-2 mr-3 sm:mr-5 md:pt-1">
                            <div className="h-[16px] w-[16px]">
                              <Image
                                src={item.icons}
                                alt={item.altName}
                                className="h-full w-full"
                              />
                            </div>
                          </div>
                        )}

                        <div className="text-[#373B44] text-[13px] md:text-[15px] lg:text-[16px] xxl:text-[17px] leading-relaxed pr-4 text-center sm:text-start">
                          {element.contentItem}
                        </div>
                      </div>
                    ))}
                </Grid>
              </Grid>
            </div>
          ))}
      </div>
    </>
  );
}
