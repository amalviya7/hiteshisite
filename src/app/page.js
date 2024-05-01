/* eslint-disable no-unused-vars */
"use client"
import React from "react";
// lazy loading Suspense
//component
import Seo from "@/components/SEO/Seo";
import Hero from "@/components/home/Hero";
import Journey from "@/components/journey/Journey";
import Enterprise from "@/components/home/Enterprise";
import OurClient from "@/components/ourClient/OurClient";
// import { Metadata } from 'next';
import KnowUsBetter from "@/components/know-us-better/KnowUsBetter"
import Services from "@/components/home/Services"
import TechDomain from "@/components/common/TechDomain"
import IndustriesWeServe from "@/components/common/IndustriesWeServe/IndustriesWeServe"
import KeyFeatures from "@/components/home/KeyFeatures"
import OurProject from "@/components/home/OurProject"
import Testimonial from "@/components/testimonial/Testimonial"
import KnowUsBetterNew from "@/components/whoweare/KnowUsBetter"
import Awards from "@/components/awards/Awards"
import WhyHiteshi from "@/components/why-hiteshi/WhyHiteshi"
import LetsCreate from "@/components/common/Letscreate"
import LatestBlogs from "@/components/common/Blogs"

//json
import {
  json_Journey,
  json_Clients,
  json_Testimonial,
  json_Awards,
  json_KnowUsBetter,
  json_WhyHiteshi,
} from "@/json/landingpageJson/page-json";
import { IndustriesData, Letscreate } from "@/json/common/common";
import { techdomain } from "@/json/home/home_json";
import { titleName } from "@/json/home/home_json";

import { Container } from "@mui/material";

const initialstate = {
  about: false,
  approach: false,
  casestudy: false,
  faq: false,
  service: false,
  awards: false,
};

export default function Home() { 

  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />

      <div className="">
        <Hero />
      </div>
      <div className="pb-20 sm:pb-10 md:pb-52 xl:pb-32 px-[20px] sm:px[100px] md:px-[150px] lg:px[20px] ">
        <Journey content={json_Journey} />
      </div>
      <div className=" xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60">
        <div className="pb-10 sm:pb-5 md:pb-1">
          <Enterprise />
          <OurClient content={json_Clients} />
        </div>
      </div>
        <div className="sm:pb-24 md:pb-28 xl:pb-102">
          <Container sx={{ pb: 10 }} maxWidth="xl">
            <KnowUsBetter
              content={json_KnowUsBetter}
              initialstate={initialstate}
            />
          </Container>
        </div>

        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <Services />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <TechDomain cardData={techdomain} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <IndustriesWeServe data={IndustriesData} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 xs:px-8 sm:px-16 md:px-28 lg:px-44 xl:px-60">
          <KeyFeatures />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <OurProject />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <Testimonial content={json_Testimonial} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <KnowUsBetterNew content={json_KnowUsBetter} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 xs:px-8 sm:px-16 md:px-28 lg:px-44 xl:px-60">
          <Awards content={json_Awards} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 w-[84%] md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[65%] m-auto">
          <WhyHiteshi content={json_WhyHiteshi} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[73%] m-auto">
          <LetsCreate title={Letscreate.title} text={Letscreate.text} />
        </div>
        <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
          <LatestBlogs />
        </div>
    </>
  );
}
