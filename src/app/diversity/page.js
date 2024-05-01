"use client";


import Enviroment from "@/assets/images/EnviromentImage.webp";
import {
  EachPerson,
  DiversityData,
  titleName,
} from "@/json/diversity/diversity_json";
import banner from "@/assets/images/EventBanner.webp";
import React from "react";
import HeroWithImage from "@/components/common/HeroWithImage";
import Significant from "@/components/diversity/Significant";
import Quotation from "@/components/diversity/Quotation";
import TextAndImageSectionOfDiversity from "@/components/diversity/diversity";
import Seo from "@/components/SEO/Seo";

const Diversity = () => {
  const heroContentData = {
    image: banner,
    firstHeading: "Diversity",
    secondHeading: "World Where Every Voice Is",
    thirdHeading: "Heard And Valued",
    altName: "Diversity at Workplace, Hiteshi Infotech Office Diversity",
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

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <TextAndImageSectionOfDiversity
          blackHeading={DiversityData.title1}
          blueHeading={DiversityData.title2}
          image={Enviroment}
          description={DiversityData.text}
          leading={
            "leading-loose md:leading-relaxed lg:leading-relaxed xl:leading-loose"
          }
          text={
            "xs:text-[16px] sm:text-[20px] md:text-[16px] lg:text-[16px] xl:text-[20px] xxl:text-[23px]"
          }
          altName={DiversityData.altName}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Significant />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Quotation
          leftSymbol={EachPerson.leftSymbol}
          text1={EachPerson.text1}
          text2={EachPerson.text2}
          text3={EachPerson.text3}
          text4={EachPerson.text4}
          rightSymbol={EachPerson.rightSymbol}
        />
      </div>
    </div>
  );
};

export default Diversity;
