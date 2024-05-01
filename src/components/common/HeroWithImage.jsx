/* eslint-disable react/prop-types */
import Image from "next/image";
import React from "react";

const HeroWithImage = ({
  firstHeading,
  secondHeading,
  image,
  thirdHeading,
  altName,
}) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <Image src={image} alt={altName} className="w-full priority" />
      </div>

      <div className="w-full h-full absolute top-0 ">
        <h4 className="xs:mt-4 sm:mt-12 md:mt-[4rem] lg:mt-20 xl:mt-[9rem] xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-normal text-white xs:w-[60%]  xs:ml-11 sm:ml-20 md:ml-24 lg:ml-44 xl:ml-60 xs:mb-0 sm:pb-3 md:pb-3 border-b-[1px] border-[hsla(0,0%,100%,.3)] ">
          {firstHeading}
        </h4>
        <h1 className="xs:mt-4 sm:mt-4 lg:mt-6 xl:mt-12 xs:text-[18px] sm:text-2xl md:text-[2rem] lg:text-4xl xxl:text-[42px] font-semibold text-white xs:w-full xs:pl-11 sm:pl-20 md:pl-24 lg:pl-44 xl:pl-60 xs:pb-0 sm:pb-3 md:pb-1 lg:pb-7">
          {secondHeading}
        </h1>
        <h1 className="xs:text-[18px] sm:text-2xl md:text-[2rem] lg:text-4xl xxl:text-[42px] font-semibold text-white xs:w-full xs:pl-11 sm:pl-20 md:pl-24 lg:pl-44 xl:pl-60">
          {thirdHeading}
        </h1>
      </div>
    </div>
  );
};

export default HeroWithImage;
