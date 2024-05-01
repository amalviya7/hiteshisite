"use client";

import React from "react"
//json
import {
  banner,
  project,
  requirment,
  requirmentsimage,
  keyfeatures,
  keyfeaturestitle,
  challengesfacedbyclient,
  challengesfacedbytheclient,
  solutionsproposedbyHiteshi,
  solutionsproposedbyHiteshititle,
  userexperience,
  titleName,
} from "@/json/casestudies_inner/mycook";
import { cardData } from "@/json/case_studies/case_studies_json";

//components
import CaseStudies_Inner1 from "@/components/CaseStudies_Inner/CaseStudies_Inner";
import Project from "@/components/CaseStudies_Inner/Project";
import Requirments from "@/components/CaseStudies_Inner/Requirments";
import KeyFeatures from "@/components/CaseStudies_Inner/KeyFeatures";
import ChallengesFacedBytheClient from "@/components/CaseStudies_Inner/ChallengesFacedClient";
import SolutionPorposedByHiteshi from "@/components/CaseStudies_Inner/SolutionPorposedByHiteshi";
import InnerCaseStudySlider from "@/components/CaseStudies_Inner/InnerCaseStudySlider";
import UserExperience from "@/components/CaseStudies_Inner/UserExperience";
import Seo from "@/components/SEO/Seo";

export default function CaseStudies_Inner() {
  return (
    <>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <CaseStudies_Inner1 data={banner} />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Project data={project} />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Requirments data={requirment} imagedata={requirmentsimage} />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <KeyFeatures data={keyfeatures} titleData={keyfeaturestitle} />
      </div>
      <div className="pb-11 sm:pb-12 md:pb-14 xl:pb-16">
        <ChallengesFacedBytheClient
          data={challengesfacedbyclient}
          dataClient={challengesfacedbytheclient}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <SolutionPorposedByHiteshi
          data={solutionsproposedbyHiteshi}
          titleData={solutionsproposedbyHiteshititle}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <UserExperience data={userexperience} />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <InnerCaseStudySlider data={cardData} />
      </div>
    </>
  );
}
