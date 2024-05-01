"use client";

import React from "react"
import HeroWithImage from "@/components/common/HeroWithImage";
import {
  HeroData,
  Ecosysytem,
  ourvalues,
  titleName,
} from "@/json/culture/culture_json";
import KnowUsBetter from "@/components/whoweare/KnowUsBetter";
import OurValues from "@/components/culture/OurValues";
import TextAndImageSection from "@/components/common/TextAndImageSection";
import Seo from "@/components/SEO/Seo";

export default function culture() {
  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HeroWithImage
          image={HeroData.image}
          firstHeading={HeroData.firstHeading}
          secondHeading={HeroData.secondHeading}
          thirdHeading={""}
          altName={"Our Office Culture at Hiteshi"}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <TextAndImageSection
          blackHeading={Ecosysytem.blackHeading}
          blueHeading={Ecosysytem.blueHeading}
          image={Ecosysytem.image}
          description={Ecosysytem.description}
          leading1={
            "leading-tight lg:leading-sung xl:leading-sung xxl:leading-normal"
          }
          leading={"leading-8 md:leading-6 lg:leading-7 xl:leading-10"}
          text={
            "xs:text-[14px] sm:text-[20px] md:text-[15px] lg:text-[17px] xl:text-[22px] "
          }
          altName={
            "Our Company Culture, Ecosystem that nurtures talent, promotes work-life balance"
          }
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <OurValues data={ourvalues} />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <KnowUsBetter />
      </div>
    </>
  );
}
