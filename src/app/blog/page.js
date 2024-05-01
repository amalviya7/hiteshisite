"use client";

import React from "react"
import LatestCard from "@/components/Blog/LatestCard";
import Hero from "@/components/common/Hero";
import { HeroData } from "@/json/blog/blog_json";
import { cardData, titleName } from "@/json/blog/blog_json";
import Seo from "@/components/SEO/Seo";

export default function blog() {
  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video17.mp4"}
          thumbnail={"/video/mp4/thumbnails/video17.jpeg"}
          firstHeading={HeroData.text1}
          secondHeading={HeroData.text2}
          thirdHeading={HeroData.text3}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <LatestCard data={cardData} />
      </div>
    </>
  );
}
