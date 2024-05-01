/* eslint-disable react/no-unknown-property */
"use client";
import React from "react"

//json
import { Grid } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Partnership() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);
  const [formUrl, setFormUrl] = useState(null);

  useEffect(() => {
    let tempFormUrl = `https://creatorapp.zohopublic.com/hiteshi/hrm/form-embed/Web_Leads/`;
    tempFormUrl += `XENBUQOvXvQF7EEyCkprjWQUQM3jdV2amztqQxGn4YAbh4KZKuJrnMbfBY32OUUDN7yPXzGDVYOGAj3T57Z8eFGBS51sGOKeGBBK`;
    tempFormUrl += `?Category=sales&Source=<a href="${window.location.origin}/contact-us" target='_blank'></a>`;
    setFormUrl(tempFormUrl);
  }, []);

  return (
    <div className={`${animate && "fade-in-down"} custom-shadow-of-map w-[95vw] sm:w-[90vw] mx-auto`} ref={ref}>
      <div className="mt-[84px] animation-element fadein">
        <div className="banner-image"></div>
        <div
          className="overlay-content md:mt-[-125px] max-w-7xl bg-white relative mx-auto z-10"
          style={{ divShadow: "0px 0px 16px rgb(0 0 0 / 30%)" }}
        >
          <div className=" xs:px-7 sm:px-20 md:px-20 mx-auto xs:py-10 lg:py-15 text-center bg-white">
            <h1
              className="font-AileronLight xs:text-[30px] lg:text-[39px] "
              style={{ fontFamily: "Aileron-Light" }}
            >
              GET IN <span className="textColor font-AileronBold">TOUCH</span>
            </h1>
            <div sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6} className="text-left">
                  <div className="my-3">
                    <h4 className="text-[#383838] text-[26px] font-AileronSemiBold ml-[10px]">
                      Head Office
                    </h4>
                    <p className="text-sm p-2 text-[#6a737b] font-AileronRegular flex">
                      8th Floor, Crystal IT Park, Khandwa Road, Indore (MP),
                      India
                    </p>
                    <p className="text-sm p-2 text-[#6a737b] font-AileronRegular flex">
                      +91-0731-2971133,+91-8085969182
                    </p>
                    <p className="text-sm p-2 text-[#6a737b] font-AileronRegular flex">
                      sales@hiteshi.com, info@hiteshi.com, jobs@hiteshi.com
                    </p>
                  </div>
                  <div className="m-3">
                    <h4 className="text-[#1da4e6] text-[20px] font-AileronLight ">
                      Business{" "}
                      <span className="text-[#1da4e6] font-AileronBold">
                        Hours
                      </span>
                    </h4>
                    <p className="text-sm p-2 pl-[0px] text-[#6a737b] font-AileronRegular flex">
                      Monday-Friday – 9:30am to 7:00pm
                    </p>
                  </div>
                  {/* <div className="m-3">
                    <h4 className="text-[#383838] text-[26px] font-AileronSemiBold ">
                      Australia Office
                    </h4>
                    <p className="text-sm p-2 pl-[0px] text-[#6a737b] font-AileronRegular flex">
                      4/11-17, York Street , Wynard, Sydney 2000, New South
                      Wales, Australia
                    </p>
                  </div> */}
                  {/* <div className="m-3">
                    <h4 className="text-[#1da4e6] text-[20px] font-AileronLight ">
                      Business{" "}
                      <span className="text-[#1da4e6] font-AileronBold">
                        Hours
                      </span>
                    </h4>
                    <p className="text-sm p-2 pl-[0px] text-[#6a737b] font-AileronRegular flex">
                      Monday-Friday – 9:30am to 5:00pm
                    </p>
                  </div> */}
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <div className="bg-white m-3 h-auto" id="contact">
                    <p className="font-AileronRegular text-left text-[20px] mb-[25px]">
                      Leave us a message
                    </p>

                    {formUrl ? (
                      <iframe
                      loading="lazy"
                      height="500px"
                      width="100%"
                      src={encodeURI(formUrl)}></iframe>
                    ) : <></>}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
