"use client";
import React from "react";
import HeroWithImage from "@/components/common/HeroWithImage";
import InfraImg2 from "@/assets/images/InfraImg2.webp";
import Knowledge from "@/components/common/Knowledge";
import {
  contentDataITSection,
  infraKnowledge,
  titleName,
} from "@/json/Infra/infra_json";
import InfraCollage from "@/components/infra/InfraCollage";
import TextAndImageSectionOfDiversity from "@/components/diversity/diversity";
import Seo from "@/components/SEO/Seo";

const Infrastructure = () => {
  const contentDataHero = {
    image: InfraImg2,
    firstHeading: "Infra",
    secondHeading: "Shaping the future,",
    thirdHeading: "One brick at a time",
    altName: "Office Infra, Hiteshi Infotech Infra, Spacious Infrastructure",
  };

  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HeroWithImage
          image={InfraImg2}
          firstHeading={contentDataHero.firstHeading}
          secondHeading={contentDataHero.secondHeading}
          thirdHeading={contentDataHero.thirdHeading}
          altName={contentDataHero.altName}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <TextAndImageSectionOfDiversity
          blueHeading={contentDataITSection.text2}
          image={contentDataITSection.Image}
          description={contentDataITSection.text3}
          leading={"leading-6 md:leading-6 lg:leading-7"}
          text={
            "xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] "
          }
          altName={contentDataITSection.altName}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <InfraCollage />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Knowledge
          leftSymbol={infraKnowledge.leftSymbol}
          text1={infraKnowledge.text1}
          text2={infraKnowledge.text2}
          text3={infraKnowledge.text3}
          rightSymbol={infraKnowledge.rightSymbol}
        />
      </div>
    </>
  );
};
export default Infrastructure;
