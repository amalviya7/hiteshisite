"use client";
import joy from "@/assets/images/Joy_Img.webp";
import banner from "@/assets/images/CSR-Banner.webp";
import React, { useEffect, useRef, useState } from "react";
import rightSymbol from "@/assets/icons/right_Flaticon.webp";
import leftSymbol from "@/assets/icons/left_Flaticon.webp";
import Knowledge from "@/components/common/Knowledge";
import HeroWithImage from "@/components/common/HeroWithImage";
import ImageCollage from "@/components/common/ImageCollage";
import { collageImagesData, titleName } from "@/json/csr/csr_json";
import Spreading from "@/components/csr/Spreading";
import { useInView } from "framer-motion";
import Seo from "@/components/SEO/Seo";

const CSR = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);
  const heroContentData = {
    image: banner,
    firstHeading: "CSR",
    secondHeading: "Global Commitment To Create",
    thirdHeading: "A Better World For All",
    altName: "Corporate Social Responsibility: Hiteshi Infotech",
  };

  const textImageContent = {
    blueHeading: "Spreading Joy",
    description:
      "Commitment of making a meaningful difference in the communities we serve",
    image: joy,
    altName:
      "Corporate Social Responsibility (CSR), Hiteshi Infotech, The COmmunities We Serve",
  };

  const priority = {
    leftSymbol: leftSymbol,
    text1: "We prioritize ethical practices, sustainability, and inclusivity",
    text2: "in our operations, ensuring that our actions align",
    text3: "with the best interests of the community",
    rightSymbol: rightSymbol,
  };
  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HeroWithImage
          image={heroContentData.image}
          firstHeading={heroContentData.firstHeading}
          secondHeading={heroContentData.secondHeading}
          thirdHeading={heroContentData.thirdHeading}
          altName={heroContentData.altName}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 ">
        <Spreading
        className="text-[30px]"
          blueHeading={textImageContent.blueHeading}
          image={textImageContent.image}
          description={textImageContent.description}
          altName={textImageContent.altName}
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="">
          <div
            className={` ${
              animate && "fade-in-down"
            } xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl  pb-8 md:pb-10 lg:pb-12 text-center text-[#0E9CE8]`}
            ref={ref}
          >
            <h1>Our Contribution</h1>
          </div>
          <div className="flex justify-center items-center xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 pb-20 sm:pb-24 md:pb-28 xl:pb-32">
            <ImageCollage content={collageImagesData} />
          </div>
        </div>
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 md:text-5xl">
        <Knowledge {...priority} />
      </div>
    </div>
  );
};

export default CSR;
