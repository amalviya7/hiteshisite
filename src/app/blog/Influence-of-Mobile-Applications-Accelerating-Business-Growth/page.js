/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Ai_InnerBlog from "@/components/innerBlog/Ai_InnerBlog";
import Hero from "@/components/common/Hero";
import Green_Revolution from "@/components/innerBlog/Green_Revolution";
import Web_Development_Strategy from "@/components/innerBlog/Web_Development_Strategy";
import Influence_Mobile_Applications from "@/components/innerBlog/Influence_Mobile_Applications";
import RPA from "@/components/innerBlog/RPA";
import UX_Design from "@/components/innerBlog/UX_Design";
import Ai_Chatbot from "@/components/innerBlog/Ai_Chatbot";
import BigCommerce_Website from "@/components/innerBlog/BigCommerce_Website";
import Business_Grow from "@/components/innerBlog/Business_Grow";
import Android_IOS from "@/components/innerBlog/Android_IOS";
import ECommerce_Store from "@/components/innerBlog/ECommerce_Store";
import NLP from "@/components/innerBlog/NLP";
import Seo from "@/components/SEO/Seo";

/// new added
import Automation_vs_Human from "@/components/innerBlog/Automation_Human";

import { cardData } from "@/json/blog/blog_json";
import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useInView } from "framer-motion";
import Goodfirms_Recog from "@/components/innerBlog/Goodfirms_Recog";
import Zoho_Deluge from "@/components/innerBlog/Zoho_Deluge";

const HeroData = {
  text1: "Blog",
  text2: "Stay Tuned and",
  text3: "Plugged In",
};

const InnerBlog = ({ params }) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let filterdata = cardData.content2.filter(
      (e) => !e.link.includes(params.innerblog)
    );
    setData(filterdata);
  }, [params.innerblog]);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  useEffect(() => {
    ShuffleData(data);
  }, [data]);

  function ShuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderSwitch(params) {
    switch (params) {
      case "Plunge-your-Revenues-with-Trending-UIUX-Designs":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Plunge your Revenues with Trending UI/UX Designs "
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Plunge your Revenues with Trending UI/UX Designs "
                )[0].tagdescription
              }
            />
            <UX_Design />
          </>
        );

      /// new adds

      case "Automation-vs-Human-Expertise-Finding-the-Right-Balance-in-AI-Cybersecurity":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Automation vs. Human Expertise: Finding the Right Balance in AI Cybersecurity "
                ).title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Automation vs. Human Expertise: Finding the Right Balance in AI Cybersecurity - Blog"
                ).tagdescription
              }
            />
            <Automation_vs_Human />
          </>
        );

      case "GoodFirms-Recognizes-Hiteshi-As-The-Top-Custom-Software-Development-Companies-in-India":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "GoodFirms Recognizes Hiteshi As One Of The Top Custom Software Development Companies in India "
                ).title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "GoodFirms Recognizes Hiteshi As As One Of The Top Custom Software Development Companies in India - Blog"
                ).tagdescription
              }
            />
            <Goodfirms_Recog />
          </>
        );

      /// end new adds

      case "IOS-vs-ANDROID-for-Application-Development":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "IOS vs. ANDROID for Application Development"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "IOS vs. ANDROID for Application Development"
                )[0].tagdescription
              }
            />
            <Android_IOS />
          </>
        );

      case "Transforming-Customer-Experience-with-AI-Chatbots":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Transforming Customer Experience with AI Chatbots"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Transforming Customer Experience with AI Chatbots"
                )[0].tagdescription
              }
            />
            <Ai_Chatbot />
          </>
        );

      case "Hiteshi-Infotech-ranked-in-Top-BigCommerce-Website-Design-Companies":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Hiteshi Infotech ranked in Top 30 BigCommerce Website Design Companies"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Hiteshi Infotech ranked in Top 30 BigCommerce Website Design Companies"
                )[0].tagdescription
              }
            />
            <BigCommerce_Website />
          </>
        );

      case "How-Mobile-Application-Can-Help-A-Business-Grow":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "How Mobile Application Can Help A Business Grow"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "How Mobile Application Can Help A Business Grow"
                )[0].tagdescription
              }
            />
            <Business_Grow />
          </>
        );

      case "Best-Testing-Tips-for-Your-E-Commerce-Store":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Best Testing Tips for Your E-Commerce Store"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Best Testing Tips for Your E-Commerce Store"
                )[0].tagdescription
              }
            />
            <ECommerce_Store />
          </>
        );

      case "How-can-Businesses-use-Natural-Language-Processing-to-grow":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "How can Businesses use Natural Language Processing (NLP) to grow?"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "How can Businesses use Natural Language Processing (NLP) to grow?"
                )[0].tagdescription
              }
            />
            <NLP />
          </>
        );

      case "Tapping-into-the-Potential-of-AI-in-Healthcare":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Tapping into the Potential of AI in Healthcare"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Tapping into the Potential of AI in Healthcare"
                )[0].tagdescription
              }
            />
            <Ai_InnerBlog />
          </>
        );

      case "The-Green-Revolution-How-IoT-is-Driving-Eco-Friendly-Innovations":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "The Green Revolution: How IoT is Driving Eco-Friendly Innovations"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "The Green Revolution: How IoT is Driving Eco-Friendly Innovations"
                )[0].tagdescription
              }
            />
            <Green_Revolution />
          </>
        );

      case "All-you-need-to-know-about-Robotic-Process-Automation":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "All you need to know about Robotic Process Automation (RPA)"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "All you need to know about Robotic Process Automation (RPA)"
                )[0].tagdescription
              }
            />
            <RPA />
          </>
        );

      case "Key-Strategies-for-Web-Development-Enhancing-Security-and-Privacy":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Key Strategies for Web Development: Enhancing Security and Privacy"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Key Strategies for Web Development: Enhancing Security and Privacy"
                )[0].tagdescription
              }
            />
            <Web_Development_Strategy />
          </>
        );

      case "Influence-of-Mobile-Applications-Accelerating-Business-Growth":
        return (
          <>
            <Seo
              title={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Influence of Mobile Applications: Accelerating Business Growth"
                )[0].title
              }
              description={
                cardData.content2.filter(
                  (element) =>
                    element.description ===
                    "Influence of Mobile Applications: Accelerating Business Growth"
                )[0].tagdescription
              }
            />
            <Influence_Mobile_Applications />
          </>
        );
      
        case "Zoho-Deluge-Seamless-Integration-and-Customization":
        return (
          <>
            <Seo
              title={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Zoho Deluge: Seamless Integration and Customization"
                )[0].title
              }
              description={
                cardData.content1.filter(
                  (element) =>
                    element.description ===
                    "Zoho Deluge: Seamless Integration and Customization"
                )[0].tagdescription
              }
            />
            <Zoho_Deluge />
          </>
        );
    }
  }

  return (
    <>
      <div className="pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Hero
          videoUrl={"/video/mp4/video17.mp4"}
          thumbnail={"/video/mp4/thumbnails/video17.jpeg"}
          firstHeading={HeroData.text1}
          secondHeading={HeroData.text2}
          thirdHeading={HeroData.text3}
        />
      </div>
      <div
        ref={ref}
        className=" xs:mx-8 sm:mx-16 md:mx-24 lg:mx-44 xl:mx-60 custom-shadow -mt-[30vh] bg-white py-12 z-50 relative mb-14 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28"
        style={{ boxShadow: "box-shadow: 0 0 24px rgba(8,7,7,.06)" }}
      >
        {renderSwitch("Influence-of-Mobile-Applications-Accelerating-Business-Growth")}
      </div>
      <div className="xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 pb-20 sm:pb-24 md:pb-28 xl:pb-32">
        <Grid
          container
          spacing={{ xs: 3, lg: 6 }}
          ref={ref}
          className={` ${animate && "fade-in-down"}`}
        >
          {ShuffleData(data).map((item, index) =>
            index < 3 ? (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className=" h-[60%] hover:scale-110 transition duration-300"
                onClick={() => router.push(item.link)}
                key={index}
              >
                <div className=" group cursor-pointer mx-auto w-[300px] sm:w-full sm:h-[330px] md:h-[320px] lg:h-[340px] xl:h-[380px] xxl:h-[450px] border-2 border-gray-200 rounded-2xl xs:p-3 sm:p-4 md:p-3 lg:p-[18px]">
                  <div className=" xs:pb-1 sm:pb-[10px] lg:pb-[14px] xl:pb-[20px] ">
                    <Image
                      src={item.image}
                      alt={item.altName}
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div className="xs:text-[20px]  cursor-pointer lg:text-[17px] xl:text-[20px] font-none text-[#353739] mb-3  group-hover:text-[#0E9CE8] ">
                    <h3>{item.description}</h3>
                  </div>
                </div>
              </Grid>
            ) : null
          )}
        </Grid>
      </div>
    </>
  );
};

export default InnerBlog;
