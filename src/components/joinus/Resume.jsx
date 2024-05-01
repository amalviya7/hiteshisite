import Image from "next/image";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"

//json
import { join } from "@/json/joinus/joinus";

export default function Resume() {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView1) setAnimate(true);
    if (isInView2) setAnimate2(true);
  }, [isInView1, isInView2]);

  return (
    <>
      <div className="w-[70%] sm:w-[50%] lg:w-[45%]">
        <Grid
          container
          spacing={0}
          className="rounded-xl"
          sx={{ boxShadow: "0px 3px 6px #00000029" }}
        >
          <Grid item md={6}>
            <div
              className={`${animate && "fade-in-left"} p-5 xl:p-9 xxl:p-8 `}
              ref={ref1}
            >
              <div className="text-gray-400 text-[11px] sm:text-[13px] md:text-[12px] lg:text-[15px] xl:text-[18px] py-2 lg:py-3 xxl:py-5">
                <h4>{join.heading}</h4>
              </div>
              <div className="text-black text-[20px] sm:text-[19px] md:text-[17px] lg:text-[22px] xl:text-[25px] py-2 md:pb-2 lg:py-4 xl:py-3 xxl:py-5">
                <h3>{join.content}</h3>
              </div>
              <div className="rounded-2xl  w-[49%] text-center py-2 md:py-[2px] lg:py-[6px] px-5  border-2 bg-[#1490D2] text-white hover:border-[#1490D2] hover:text-[#1490D2] hover:bg-white">
                <button className="text-[14px] sm:text-[12px] lg:text-[15px] xl:text-[22px]">
                  <a href={`mailto:hr@hiteshi.com`}>{join.button}</a>
                </button>
              </div>
            </div>
          </Grid>
          <Grid item md={6} className="pt-0 ">
            <div className={`${animate2 && "fade-in-right"}`} ref={ref2}>
              <Image
                src={join.image}
                alt="Join our company, find the job you were looking for. Submit your Resume"
                className="w-full object-fill h-full"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
