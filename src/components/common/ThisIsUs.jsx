/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ThisIsUsBg from "../../assets/images/ThisIsUsBg.webp";
import Link from "next/link";

export default function ThisIsUs({ button }) {
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
      className={` ${
        animate && "fade-in-down"
      } xxl:min-h-[800px] item-center flex xl:min-h-[300px] bg-cover bg-no-repeat	`}
      style={{ backgroundImage: `url(${ThisIsUsBg.src})` }}
      ref={ref}
    >
      <div className="xs:px-8 sm:px-16 md:px-[100px] lg:px-44 xl:px-60 item-center py-24 ">
        <div className="sm:w-[60%] item-center">
          <h3 className="text-white xxl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-lg xs:font-light ">
            This Is Us
          </h3>
          <h2 className="text-white xxl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg xs:font-medium py-4  md:py-8 lg:py-10 xl:py-[75px] xxl:pr-10 xxl:leading-relaxed xs:leading-normal ">
            Forging A Significant Transformation By{" "}
            <span className="text-[#0E9CE8]">Recruiting, Acknowledging </span>{" "}
            And <span className="text-[#0E9CE8]">Fostering </span> Exceptional
            Individuals From Diverse Backgrounds.
          </h2>

          {/* <div onClick={() => router.push(button.link)}> */}
            <Link href={button.link}>
            <button className="border-2 border-white w-[120px] sm:w-[150px] md:w-[170px] lg:w-[200px] rounded-full p-2 sm:p-3 lg:p-4 xl:p-5 text-lg sm:text-xl md:text-[22px] lg:text-2xl text-white hover:bg-[#1387C5]  hover:text-white  cursor-pointer mt-[20px] hover:border-[#1387C5]">
              {button.buttontxt}
            </button>
            </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
