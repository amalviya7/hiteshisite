"use client";

import React from "react"
import Hero from "@/components/common/Hero";
import Case_Studies_Card from "@/components/Case_Studies/Case_Studies_Card";
import { cardData, titleName } from "@/json/case_studies/case_studies_json";
import Seo from "@/components/SEO/Seo";

export default function caseStudies() {
  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video18.mp4"}
          thumbnail={"/video/mp4/thumbnails/video18.jpeg"}
          firstHeading={"Case Studies"}
          secondHeading={"The Answer is a Puzzle Piece"}
          thirdHeading={"Waiting to be Discovered"}
        />
      </div>
      <div className="pb-11 sm:pb-12 md:pb-14 xl:pb-16">
        <Case_Studies_Card data={cardData} />
      </div>
    </>
  );
}
