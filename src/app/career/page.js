"use client";

import Head from "next/head"
//image
import Fostering from "@/assets/images/Fostering.webp";
import Hiteshi_Way from "@/assets/images/The Hiteshi Way.webp";

import React from "react";

//component
import Hero from "@/components/common/Hero";
import TextAndImageSection from "@/components/common/TextAndImageSection";
import IndustriesWeServe from "@/components/common/IndustriesWeServe/IndustriesWeServe";
import ThisIsUs from "@/components/common/ThisIsUs";
import LifeAtHiteshi from "@/components/careers/ExploreLifeAtHiteshi";
import Knowledge from "@/components/common/Knowledge";
import FollowYourDreams from "@/components/common/FollowYourDreams";
import FollowUS from "@/components/common/FollowUs";
import { thisisusbutton } from "@/json/career/life_at_Hiteshi_json";
import Seo from "@/components/SEO/Seo";

//json
const imageData = {
  image: Hiteshi_Way,
  text1: "",
  text2: "",
  altName: "Opportunities For You",
};
import { whyHiteshi } from "@/json/common/common";
import { Content, contentData } from "@/json/career/life_at_Hiteshi_json";
import {
  BuildYourCareers,
  titleName,
} from "@/json/career/life_at_Hiteshi_json";

const Career = () => {
  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />

      <Head>
        <meta
          property="og:title"
          content="Join Our Team - Welcome to Hiteshi Family!"
        />
        <meta property="og:site_name" content="hiteshi Infotech" />
        <meta property="og:url" content="https://ver4.hiteshi.com/career/" />
        <meta
          property="og:description"
          content="Discover exciting career opportunities at Hiteshi. Join our dynamic team and contribute to cutting-edge technology projects."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/Careers_1.png"
        />
      </Head>

      <div>
        <Hero
          videoUrl={"/video/mp4/video7.mp4"}
          thumbnail={"/video/mp4/thumbnails/video7.jpeg"}
          firstHeading={"Careers"}
          secondHeading={"Forging a Path to"}
          thirdHeading={"Excellence"}
          button={true}
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <TextAndImageSection
          joinus={true}
          blackHeading={"Autograph your work with excellence"}
          blueHeading={""}
          image={Fostering}
          altName={
            "Join US: Software Developers, Graphic Designers, Marketing Executives"
          }
          description={Content.content}
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32" id="why-Hiteshi">
        <IndustriesWeServe data={whyHiteshi} />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <Knowledge
          leftSymbol={BuildYourCareers.leftSymbol}
          text1={BuildYourCareers.content1}
          text2={BuildYourCareers.content2}
          text3={BuildYourCareers.content3}
          rightSymbol={BuildYourCareers.rightSymbol}
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <ThisIsUs button={thisisusbutton} />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <FollowYourDreams
          imageData={imageData}
          contentData={contentData}
          button={true}
          imageHeight={true}
        />
      </div>
      <div
        className="pt-20 sm:pt-24 md:pt-28 xl:pt-32"
        id="explore-life-at-Hiteshi"
      >
        <LifeAtHiteshi />
      </div>
      <div className="py-20 sm:py-24 md:py-28 xl:py-32">
        <FollowUS />
      </div>
    </>
  );
};

export default Career;
