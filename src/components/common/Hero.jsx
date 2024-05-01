/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import "lazysizes";
import Link from "next/link";

const Hero = ({
  firstHeading,
  secondHeading,
  videoUrl,
  button = false,
  thirdHeading,
  thumbnail,
}) => {
  const videoRefs = useRef(null);
  useEffect(() => {
    const video = videoRefs.current;

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay was prevented, handle the error
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      } else {
        video.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    playVideo();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-full lg:h-[94vh]">
        <div className="w-full h-full ">
          <video
            ref={videoRefs}
            loop
            muted
            preload="auto"
            autoPlay
            playsInline
            autobuffer="true"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            data-src={videoUrl}
            poster={thumbnail}
          >
            <source src={videoUrl} type="video/mp4"></source>
          </video>
        </div>

        <div
          className="w-full h-full  absolute top-0 "
          style={{
            background:
              "transparent linear-gradient(90deg, #000D14 0%, #545D6200 100%) 0% 0% no-repeat padding-box",
            opacity: "0.63",
          }}
        ></div>

        <div className="  w-full h-full  absolute top-0 ">
          <h4
            className="xs:mt-16 sm:mt-24 md:mt-[4rem] lg:mt-24 xl:mt-[9rem]
         xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 
         font-normal  text-white 
         xs:w-[58%] xs:mb-0 sm:pb-5 md:pb-1 lg:pb-3 
         border-b-[1px] border-[hsla(0,0%,100%,.3)] 
          xs:ml-8 sm:ml-16 md:ml-24 lg:ml-44 xl:ml-60 "
          >
            {firstHeading}
          </h4>
          <h1
            className="xs:mt-4 sm:mt-4 lg:mt-6 xl:mt-12 
         md:text-[2rem] lg:text-5xl xl:text-7xl 
        font-semibold text-white   text-[16px] sm:text-[32px]
        xs:w-full
         xs:pb-0 sm:pb-3 md:pb-1 lg:pb-7 xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60"
          >
            {secondHeading}
          </h1>
          <h1
            className=" md:text-[2rem] lg:text-5xl xl:text-7xl font-semibold
         text-white  xs:w-full xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60  text-[16px] sm:text-[32px]"
          >
            {thirdHeading}
          </h1>
          {button && (
            <div className="hidden sm:block sm-content pt-20 py-16 sm:pt-12 md:pt-16 xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60">
              <Link href="/join-us">
                <button
                  className="border-2 border-black  sm:border-white w-[120px] sm:w-[150px] md:w-[170px] lg:w-[200px] rounded-full 
              p-2 sm:p-3 lg:p-4 xl:p-5 text-lg sm:text-xl md:text-[22px] lg:text-2xl text-black sm:text-white hover:bg-[#1387C5]
              hover:text-white  cursor-pointer mt-[20px]  hover:border-[#1387C5]  "
                  // onClick={() => router.push()}
                >
                  Apply Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {button && (
        <div className="sm:hidden py-2 sm:pt-12 md:pt-16 xs:pl-8 sm:pl-16 md:pl-24 lg:pl-44 xl:pl-60">
          <Link href="/join-us">
            <button
              className="border-2 border-black  sm:border-white w-[120px] sm:w-[150px] md:w-[170px] lg:w-[200px] rounded-full 
            p-2 sm:p-3 lg:p-4 xl:p-5 text-lg sm:text-xl md:text-[22px] lg:text-2xl text-black sm:text-white hover:bg-[#1387C5]
            hover:text-white  cursor-pointer mt-[20px]  hover:border-[#1387C5]  "
              // onClick={() => router.push()}
            >
              Apply Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Hero;
