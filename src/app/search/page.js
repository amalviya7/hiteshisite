"use client";
import HeroWithImage from "@/components/common/HeroWithImage";
import { heroContentData } from "@/json/joinus/joinus";
import SearchInput from "@/components/joinus/SearchInput";

import React from "react"
const SearchResume = () => {
  return (
    <div className="">
      <div className="relative">
        <HeroWithImage
          image={heroContentData.image}
          firstHeading={heroContentData.firstHeading}
          secondHeading={heroContentData.secondHeading}
          thirdHeading={""}
        />
        <div className="pt-0 absolute bottom-[-50px] w-full">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default SearchResume;
