/* eslint-disable react/prop-types */
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { initialDetails, searchinput } from "@/json/joinus/joinus";
import React from "react"

export default function SearchInput({ setProducts, setSearchVal, searchVal }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(initialDetails);
      return;
    }
    const filterBySearch = initialDetails.filter((item) => {
      if (
        item.title &&
        item.title
          .toString()
          .toLowerCase()
          .includes(searchVal.toString().toLowerCase())
      ) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }

  return (
    <>
      <div>
        <div
          style={{ boxShadow: "0px 3px 6px #00000029" }}
          className={`${animate && "fade-in-down"}  
        bg-white mx-8 sm:mx-20 md:mx-24 lg:mx-[164px] xl:mx-60 right-0 left-0 rounded-3xl border-[1px] h-[80px] md:h-[80px] lg:h-[100px]`}
          ref={ref}
        >
          <div className="flex justify-center items-center py-3 lg:py-4">
            <div className="w-[55%] sm:w-[65%] md:w-[75%] xxl:w-[80%] border-2 border-slate-400 rounded-xl text-base pl-4">
              <input
                placeholder="Enter Keywords"
                value={searchVal}
                className="bg-white w-[100%] rounded-xl h-full text:text-[15px] md:text-[18px] lg:text-[20px] py-[10px] lg:py-4 focus:outline-none"
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="pl-3">
              <button
                className=" bg-[#0E9CE8]  text-white px-5 md:px-9 lg:px-10 xl:px-16 py-[17px] lg:py-5 xl:py-5 rounded-xl text-center text-xs lg:text-lg"
                onClick={handleSearchClick}
              >
                {searchinput.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
