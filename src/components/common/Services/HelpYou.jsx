/* eslint-disable react/prop-types */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import React from "react"


export default function HelpYou({
    imageData,
    contentData,
    imageHeight,
}) {

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
        <div className="flex xs:flex-col-reverse md:flex-row xs:gap-5 xs:px-10 lg:px-20 md:gap-10 lg:gap-20 xl:gap-16 justify-center items-center">
            <div
                className={`${animate && "fade-in-left"
                    } xs:w-full md:w-1/2 md:flex justify-center`}
                ref={ref1}
            >
                <div className="relative">
                    <Image
                        src={imageData.image}
                        alt="HelpYouImg"
                        className={`xs:h-auto ${imageHeight && "md:h-[400px] lg:h-[450px]"
                            } xl:h-auto`}
                    />
                    <div className="absolute xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-white xs:px-5 xs:bottom-5 md:px-10 md:bottom-8  lg:bottom-10 capitalize font-semibold xl:leading-relaxed">
                        <h3>{imageData.text1}</h3>
                        <h3>{imageData.text2}</h3>
                    </div>
                </div>
            </div>

            <div
                className={`${animate2 && "fade-in-right"} xs:w-full md:w-1/2`}
                ref={ref2}
            >
                <div className="">
                    <div className="text-[#5A5656] xs:text-4xl xl:text-5xl font-semibold xs:py-3 lg:py-5 xs:pt-14 md:pt-7 ">
                        <h2>{contentData.blueHeading} <span className="text-[#0E9CE8]  xs:text-4xl xl:text-5xl font-semibold xs:py-3 lg:py-5 xs:pt-14 md:pt-7 ">{contentData.blackHeading} </span></h2>
                    </div>
                   
                    <div className="xs:text-sm lg:text-base xl:text-lg font-medium text-[#000000] normal-case xs:py-4 md:py-4 md:leading-6 lg:leading-7 xl:leading-loose xl:pr-7 sm:pr-10">
                        <p className=" mb-4">{contentData.description}</p>
                        <p>It has the potential to revolutionize the way you do Business. Businesses can unlock unprecedented levels of growth and innovation in their decision-making processes by embedding its solutions and technology components. We offer all-inclusive AI services that transform industry buzz into personalized solutions for data-intensive challenges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}