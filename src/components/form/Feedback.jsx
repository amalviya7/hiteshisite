"use client";
import React from "react"

import Image from "next/image";
import { Grid, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import arrow_icon from "@/assets/icons/arrow_icon.svg";
import Link from "next/link";

//json
import { request } from "@/json/form/form.js";

export default function RequestForServices() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div>
      <div className={`${animate && "fade-in-down"} `} ref={ref}>
        <div className="h-auto w-full">
          <Grid container spacing={0} className="h-full">
            <Grid
              item
              xs={10}
              md={10}
              style={{ boxShadow: "0px 3px 6px #00000029" }}
              className="bg-white h-auto rounded-s-3xl xl w-full"
            >
              <div className="flex">
                <div className="pt-6 pl-6">
                  <Link href="/contact-us">
                  <Image
                    src={arrow_icon}
                    alt="arrowicon"
                    className="h-[14px]"
                    // onClick={() => router.push("/contact-us")}
                    />
                    </Link>
                </div>
                <div className="pl-1 pt-5 text-[15px]">
                <Link href="/contact-us">
                  <button
                  //  onClick={() => router.push("/contact-us")}
                   >
                    BACK
                  </button>
                  </Link>
                </div>
              </div>
              <div className="text-black text-[20px] sm:text-[26px] md:text-[30px] xl:text-[37px] font-semibold pl-6 pt-4 sm:pl-20 lg:pl-52 lg:py-10 xl:py-16">
                <h4>{request.heading3}</h4>
              </div>
              <div className="sm:flex pl-6 pr-5 sm:px-20 lg:px-52 w-full gap-5 pb-2 xl:py-4">
                <div className="w-full sm:w-1/2">
                  <TextField
                    required
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    className="w-full"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="pl-6 pr-5 sm:px-20 lg:px-52 w-full pb-2 xl:py-4">
                <TextField
                  required
                  id="standard-basic"
                  label="E-Mail"
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="pl-6 pr-5 sm:px-20 lg:px-52 w-full pb-2 lg:pb-5 xl:py-4">
                <TextField
                  required
                  id="standard-basic"
                  label="How can we help you ?"
                  variant="standard"
                  className="w-full"
                />
              </div>
              <div className="pl-6 pr-5 sm:px-20 lg:px-52 text-[#9D9D9D] pb-2 lg:pb-6 xl:py-4">
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label={request.formcontrol}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={request.label}
                  className="pb-4 xl:w-[80%]"
                />
              </div>
              <div className="pl-6 sm:px-20 lg:px-52">
                <button className=" bg-[#0E9CE8]  text-white px-7 md:px-9 lg:px-12 xl:px-16 py-2 md:py-3 rounded-2xl text-center text-sm sm:text-base">
                  Submit
                </button>
              </div>
            </Grid>
            <Grid item xs={2} md={2} className="h-auto">
              <Image src={request.image} alt="group_image" className="h-full" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
