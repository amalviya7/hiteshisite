"use client";

import React from "react"
import HeroWithImage from "@/components/common/HeroWithImage";
import { heroContentData, titleName } from "@/json/joinus/joinus";
import Resume from "@/components/joinus/Resume";
import SearchInput from "@/components/joinus/SearchInput";
import { useState } from "react";
import PageNotFound from "@/components/joinus/PageNotFound";
import Seo from "@/components/SEO/Seo";

const JoinUs = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-28 sm:pb-32 md:pb-36 xl:pb-40">
        <div className="relative">
          <HeroWithImage
            image={heroContentData.image}
            firstHeading={heroContentData.firstHeading}
            secondHeading={heroContentData.secondHeading}
            thirdHeading={""}
            altName={heroContentData.altName}
          />
          <div className="pt-0 absolute bottom-[-50px] w-full">
            <SearchInput
              setProducts={setProducts}
              setSearchVal={setSearchVal}
              searchVal={searchVal}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-row gap-7 flex-wrap justify-center">
          {searchVal.length > 0 &&
            (products.length > 0 ? (
              products.map((product, index) => {
                return (
                  <div
                    className=" mb-20 sm:mb-24 md:mb-28 xl:mb-32 w-[300px] h-[270px] bg-white text-[#707070] "
                    key={index}
                    style={{ boxShadow: "0px 3px 6px #00000029" }}
                  >
                    <div className="h-[4px] w-[80%] bg-sky-500 mx-auto"></div>
                    <h3 className="text-[17px] px-7 pt-6">{product.title}</h3>
                    <h5 className="text-[13px] pt-5 px-7">
                      <strong>Experience: </strong> {product.experience}
                    </h5>
                    <h5 className="text-[13px] px-7 pb-24">
                      <strong>Field: </strong> {product.field}
                    </h5>
                    <div className="flex px-5">
                      <div className="text-[10px] pt-5">
                        <p>Posted 24 hours ago</p>
                      </div>

                      <div className="text-[13px] border-2 rounded-xl text-center border: 1px solid [#707070] ml-[50px] bg-[#1490D2] text-white hover:border-[#1490D2] hover:text-[#1490D2] hover:bg-white">
                        <a
                          href="mailto: hr@hiteshi.com"
                          className="h-[40px] w-[100px] "
                        >
                          <button className="h-[40px] w-[100px] ">
                            Apply Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
                <PageNotFound />
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Resume />
      </div>
    </div>
  );
};

export default JoinUs;
