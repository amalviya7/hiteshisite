"use client";
import Head from "next/head";

import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

//json
import { techdomain } from "@/json/home/home_json";
import { IndustriesData } from "@/json/common/common";
const content = {
  text1: "What We Do",
  text2: "We Transform Intentions",
  text3: "Into Actions",
};
import { buttonLink, titleName } from "@/json/What_we_do/what_we_do";

//component
import Seo from "@/components/SEO/Seo";
import Hero from "@/components/common/Hero";
import TextAndImageSection from "@/components/common/TextAndImageSection";
import IndustriesWeServe from "@/components/common/IndustriesWeServe/IndustriesWeServe";
import TechDomain from "@/components/common/TechDomain";
import Meeting from "@/components/common/MeetingSetup";

//image
import child6 from "@/assets/images/child6.webp";
import Fostering from "@/assets/images/tomorrow.webp";

const WhatWeDo = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="What We Do - Discover Hiteshi's Diverse Offerings"
        />
        <meta property="og:site_name" content="hiteshi Infotech" />
        <meta
          property="og:url"
          content="https://ver4.hiteshi.com/what-we-do/"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive range of technology services, including AI, LCNC, IoT solutions, Custom Software Development, Mobile Development etc."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/What-we-do.png"
        />
      </Head>
      <Seo title={titleName.title} description={titleName.tagdescription} />

      <div>
        <Hero
          videoUrl={"/video/mp4/video5.mp4"}
          thumbnail={"/video/mp4/thumbnails/video5.jpeg"}
          firstHeading={content.text1}
          secondHeading={content.text2}
          thirdHeading={content.text3}
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <TextAndImageSection
          blackHeading={"Strong Beliefs,"}
          blueHeading={"Stronger Businesses"}
          description={
            "Through our Expertise, Dedication and Drive, we empower individuals and organizations to bridge the gap between intention and accomplishment. We provide the tools, guidance, and support necessary to move beyond mere intentions and make real progress."
          }
          image={Fostering}
          altName={
            "Empowering organisations and businesses through tools, guidance, and support "
          }
        />
      </div>
      <div className="pt-20 sm:pt-24 md:pt-28 xl:pt-32">
        <IndustriesWeServe data={IndustriesData} />
      </div>
      <div
        className={`${
          animate && "fade-in-down"
        } pt-20 sm:pt-24 md:pt-28 xl:pt-32`}
        ref={ref}
      >
        <h1 className=" flex justify-center pb-8 sm:pb-10 md:pb-14 xl:pb-16 bigHeading text-[#0E9CE8]">
          <span className="text-black mr-3 pb-1 md:pb-0">Services</span> We
          Provide
        </h1>
        <TechDomain cardData={techdomain} />
      </div>
      <div className="py-20 sm:py-24 md:py-28 xl:py-32">
        <Meeting
          heading={"Let's set up a meeting"}
          subHeading={
            "We're here to help you succeeed. Let us know what you need, and we'll do everything we can to make it happen."
          }
          btnText={"Let's talk"}
          reverse={false}
          image={child6}
          altName={"Contact Us"}
          data={buttonLink}
        />
      </div>
    </>
  );
};

export default WhatWeDo;
