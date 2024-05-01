"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { textandimage } from "@/json/events/events_json";
import { Lifeismeant, titleName } from "@/json/events/events_json";
import Knowledge from "@/components/common/Knowledge";
import HeroWithImage from "@/components/common/HeroWithImage";
import { eventContent } from "@/json/events/events_json";
import ImageCollage from "@/components/common/ImageCollage";
import { useInView } from "framer-motion";
import { EventCollage } from "@/json/events/events_json";
import LastImage from "@/components/events/LastImage";
import TextAndImageSectionOfDiversity from "@/components/diversity/diversity";
import Seo from "@/components/SEO/Seo";

export default function Events() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HeroWithImage
          image={eventContent.image}
          firstHeading={eventContent.firstHeading}
          secondHeading={eventContent.secondHeading}
          thirdHeading={eventContent.thirdHeading}
          altName={eventContent.altName}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <TextAndImageSectionOfDiversity
          blueHeading={textandimage.blueHeading}
          image={textandimage.image}
          description={textandimage.description}
          leading={"leading-7 md:leading-7 lg:leading-8 xl:leading-9"}
          text={
            "xs:text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] xl:text-[24px] "
          }
          altName={textandimage.altName}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <div
          className={` ${
            animate && "fade-in-down"
          }`}
          ref={ref}
        >
          <h1 className="xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl pt-5 pb-8 md:pb-12 lg:pb-14 text-center text-black">
            Festive <span className="text-[#0E9CE8]">Glance</span>
          </h1>
        </div>
        <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 ">
          <ImageCollage content={EventCollage} />
        </div>
        <div className=" xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 pt-6">
          <LastImage />
        </div>
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Knowledge
          leftSymbol={Lifeismeant.leftSymbol}
          text1={Lifeismeant.text1}
          text2={Lifeismeant.text2}
          text3={Lifeismeant.text3}
          rightSymbol={Lifeismeant.rightSymbol}
        />
      </div>
    </div>
  );
}
