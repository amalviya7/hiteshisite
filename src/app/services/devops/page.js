"use client";

import React from "react";

//component
import Hero from "@/components/common/Hero";
import LetsCreate from "@/components/common/Letscreate";
import WillHelpYou from "@/components/common/WeWillHelpYou";
import ServicesOfSlider from "@/components/common/ServicesOfSlider/ServicesOfSlider";
import FAQ from "@/components/common/FAQ";
import DevOps_card from "@/components/DevOps/DevOps_card";
import Seo from "@/components/SEO/Seo";

//json
import {
  content,
  wewillhelpyou,
  SliderOfDevops,
  FAQData_DevOps,
  titleName,
  businessNeed_DevOps,
} from "@/json/devops/devops_json";
import { Letscreate } from "@/json/common/common";

const Devops = () => {
  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video16.mp4"}
          thumbnail={"/video/mp4/thumbnails/video16.jpeg"}
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
          image={wewillhelpyou.image}
          altName={wewillhelpyou.altName}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <ServicesOfSlider data={SliderOfDevops} />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <DevOps_card
          title1={businessNeed_DevOps.title1}
          title2={businessNeed_DevOps.title2}
          description={businessNeed_DevOps.description}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[73%] m-auto">
        <LetsCreate title={Letscreate.title} text={Letscreate.text} />
      </div>
      <div className="pb-11 sm:pb-12 md:pb-14 xl:pb-16">
        <FAQ FAQData={FAQData_DevOps} />
      </div>
    </div>
  );
};

export default Devops;
