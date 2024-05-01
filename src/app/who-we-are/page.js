"use client";

import React from "react";

//image
import TextAndImageSection from "@/components/common/TextAndImageSection";
import tomorrow from "@/assets/images/tomorrow.webp";
import Group from "@/assets/images/Group.webp";

//component
import LetsCreate from "@/components/common/Letscreate";
import IndustriesWeServe from "@/components/common/IndustriesWeServe/IndustriesWeServe";
import KnowUsBetter from "@/components/whoweare/KnowUsBetter";
import Hero from "@/components/common/Hero";
import AboutHiteshi from "@/components/whoweare/AboutHiteshi";
import FollowYourDreams from "@/components/common/FollowYourDreams";
import ThisIsUs from "@/components/common/ThisIsUs";
import Seo from "@/components/SEO/Seo";

//json
import { hiteshiAtGlance, Letscreate } from "@/json/common/common";
import { thisisusbutton, titleName } from "@/json/who-we-are/who_we_are_json";

const WhoWeAre = () => {
  const content = {
    text1: "Who We Are",
    text2: "Bringing Ideas",
    text3: "To Life",
  };

  const imageData = {
    image: Group,
    altName: "A Journey: The Hiteshi Way",
    text1: "We perfect our craft,",
    text2: "so you can experience excellence",
  };

  const contentData = {
    blueHeading: "The hiteshi way",
    blackHeading: "Follow your dreams, they know the way",
    description:
      " We invite you to embark on a remarkable journey-a journey that celebrates your dreams and empowers you to pursue them with unwavering determinations.",
  };

  return (
    <div>
     
      <Seo title={titleName.title} description={titleName.tagdescription} />
     
      <div>
        <Hero
          videoUrl={"/video/mp4/video4.mp4"}
          thumbnail={"/video/mp4/thumbnails/video4.jpeg"}
          firstHeading={content.text1}
          secondHeading={content.text2}
          thirdHeading={content.text3}
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <TextAndImageSection
          blackHeading={"Fostering A Brighter Tomorrow"}
          blueHeading={"Through Innovative Collaboration And Shared Wisdom"}
          image={tomorrow}
          altName={
            "Fostering A Brighter Tomorrow Through Innovative Collaboration And Shared Wisdom"
          }
          description={
            " Our mission is to create a better future by fostering innovation, collaboration and the sharing of knowledge. We believe that by harnessing the power of collective wisdom and embracing groundbreaking ideas, we can build a brighter tomorrow."
          }
          leading1={"md:leading-tight"}
          leading={"leading-normal"}
          text={
            "xs:text-[14px] text-[#5A5656] sm:text-[20px] md:text-[14px] lg:text-base xl:text-lg xxl:text-lg"
          }
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <AboutHiteshi />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <KnowUsBetter />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <IndustriesWeServe data={hiteshiAtGlance} />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <FollowYourDreams imageData={imageData} contentData={contentData} />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32" id="this-is-us">
        <ThisIsUs button={thisisusbutton} />
      </div>
      <div className="py-20 sm:py-24 md:py-28 xl:py-32 md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[73%] m-auto">
        <LetsCreate title={Letscreate.title} text={Letscreate.text} />
      </div>
    </div>
  );
};

export default WhoWeAre;
