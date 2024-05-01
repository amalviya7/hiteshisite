"use client";

import React from "react";
import Head from "next/head";
//component
import Hero from "@/components/common/Hero";
import LetsCreate from "@/components/common/Letscreate";
import Seo from "@/components/SEO/Seo";
import TalkOfTown from "@/components/insightss/TalkOfTown";
import Knowledge from "@/components/common/Knowledge";
import Meeting from "@/components/common/MeetingSetup";

//json
import { Letscreate } from "@/json/common/common";
import {
  buttonLink,
  titleName,
  ExploreInsights,
  knowledge,
} from "@/json/insights/insights_json";

const Insights = () => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Hiteshi Insights - A glimpse into our company's fascinating story, & vibrant culture."
        />
        <meta property="og:site_name" content="hiteshi Infotech" />
        <meta property="og:url" content="https://ver4.hiteshi.com/insights/" />
        <meta
          property="og:description"
          content="Take a look at our Behind-the -Scenes to undersatand where we come from, and what we seek."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/insights.png"
        />
      </Head>
      <Seo title={titleName.title} description={titleName.tagdescription} />
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video6.mp4"}
          thumbnail={"/video/mp4/thumbnails/video6.jpeg"}
          firstHeading={"Insights"}
          secondHeading={"Stay In Tune"}
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <TalkOfTown />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Meeting
          reverse={ExploreInsights.reverse}
          btnText={ExploreInsights.btnText}
          heading={ExploreInsights.heading}
          image={ExploreInsights.image}
          subHeading={ExploreInsights.subHeading}
          data={buttonLink}
          altName={
            "Company Insights, Case Studies, BLogs, Tech Information - Hiteshi Infotech"
          }
        />
      </div>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Knowledge
          leftSymbol={knowledge.leftSymbol}
          text1={knowledge.text1}
          text2={knowledge.text2}
          text3={knowledge.text3}
          rightSymbol={knowledge.rightSymbol}
        />
      </div>

      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32 md:w-[78%] lg:w-[72%] xl:w-[68%] xxl:w-[73%] m-auto">
        <LetsCreate title={Letscreate.title} text={Letscreate.text} />
      </div>
    </>
  );
};

export default Insights;
