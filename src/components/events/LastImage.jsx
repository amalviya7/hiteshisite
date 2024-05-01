"use client";
import React from "react"

import SevenC from "@/assets/images/7C.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
export default function LastImage() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div
      className={` ${animate && "fade-in-down"} flex justify-center w-full `}
      ref={ref}
    >
      <Image
        src={SevenC}
        alt="Indian Independence Day Celebration at Hiteshi Infotech, Office Festivals and Events"
        className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
      />
    </div>
  );
}
