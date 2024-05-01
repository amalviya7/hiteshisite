"use client";

import React from "react"
//component
import HeroWithImage from "@/components/common/HeroWithImage";
import GetInTouch from "@/components/contactUs/ContactUs";
import HiteshiOnMap from "@/components/contactUs/HiteshiOnMap";
import Partnership from "@/components/contactUs/Partnership";
import Seo from "@/components/SEO/Seo";

//json
import { heroContentData, titleName } from "@/json/contactUs/contactUs_json";

const ContactUs = () => {
  return (
    <div>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HeroWithImage
          image={heroContentData.image}
          firstHeading={heroContentData.firstHeading}
          secondHeading={heroContentData.secondHeading}
          thirdHeading={""}
          altName={heroContentData.altName}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <GetInTouch />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Partnership />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <HiteshiOnMap />
      </div>
    </div>
  );
};

export default ContactUs;
