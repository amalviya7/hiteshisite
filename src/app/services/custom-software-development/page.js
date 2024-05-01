"use client";

import React from "react";

//component
import Hero from "@/components/common/Hero";
import LetsCreate from "@/components/common/Letscreate";
import WillHelpYou from "@/components/common/WeWillHelpYou";
import ServicesOfSlider from "@/components/common/ServicesOfSlider/ServicesOfSlider";
import FAQ from "@/components/common/FAQ";
import Seo from "@/components/SEO/Seo";

//json
import {
  content,
  wewillhelpyou,
  customsoftwaredevelopment,
  FAQData_CSD,
  titleName,
  businessNeed_CSD,
  businessNeed_CSD_Heading,
} from "@/json/customsoftwaredevelopments/csd_json";
import { Letscreate } from "@/json/common/common";
import ChallengesFacedBytheClient from "@/components/CaseStudies_Inner/ChallengesFacedClient";

const CustomSoftwareDevelopment = () => {
  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video8.mp4"}
          thumbnail={"/video/mp4/thumbnails/video8.jpeg"}
          firstHeading={content.text1}
          secondHeading={content.text2}
          thirdHeading={content.text3}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <WillHelpYou
          title1={wewillhelpyou.title1}
          title2={wewillhelpyou.title2}
          text1={wewillhelpyou.text1}
          text2={wewillhelpyou.text2}
          image={wewillhelpyou.image}
          altName={wewillhelpyou.altName}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <ServicesOfSlider data={customsoftwaredevelopment} />
      </div>
      <div className="pb-11 sm:pb-12 md:pb-14 xl:pb-16">
        <ChallengesFacedBytheClient
          data={businessNeed_CSD}
          dataClient={businessNeed_CSD_Heading}
          type={"services"}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[73%] m-auto">
        <LetsCreate title={Letscreate.title} text={Letscreate.text} />
      </div>
      <div className="pb-11 sm:pb-12 md:pb-14 xl:pb-16">
        <FAQ FAQData={FAQData_CSD} />
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
