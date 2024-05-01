"use client";
import React from "react"

// import logo from "@/assets/icons/logo.svg";
import facebook from "@/assets/icons/facebook 1.svg";
import instagram from "@/assets/icons/instagram 1.svg";
import twitter from "@/assets/icons/twitter 1.svg";
import instagramwhite from "@/assets/icons/linked_in.webp";

import HiteshiLogo from "@/assets/icons/FooterHiteshiLogo.png";

import Image from "next/image";
import Link from "next/link";

const HomeData = [
  { title: "Home", link: "/" },
  { title: "Who We Are", link: "/who-we-are" },
  { title: "What We Do", link: "/what-we-do" },
  { title: "Case studies", link: "/caseStudies" },
  { title: "Insights", link: "/insights" },
  { title: "Careers", link: "/career" },
  { title: "Contact Us", link: "/contact-us" },
];

const ServicesData = [
  { title: "Artificial Intelligence", link: "/services/artificial-intelligence" },
  { title: "Low Code/ No Code", link: "/services/low-code" },
  { title: "Iot Solutions", link: "/services/iot-solutions" },
  { title: "Custom Software Development", link: "/services/custom-software-development" },
  { title: "Mobile App Development", link: "/services/mobile-development" },
  { title: "Process Automation", link: "/services/process-automation" },
  { title: "Metaverse Development", link: "/services/metaverse" },
  { title: "Cyber Security", link: "/services/cyber-security" },
  { title: "Devops", link: "/services/devops" }
];

const getToKnowUsBetterData = [
  { title: "CSR", link: "/csr" },
  { title: "Diversity & Inclusion", link: "/diversity" },
  { title: "Infra", link: "/infra" },
  { title: "Events & Celebrations", link: "/events" }
];

const getInTouchData = [
  { title: "Request for services", link: "/contact-us" },
  { title: "Partnership", link: "/contact-us" },
  { title: "Feedback", link: "/contact-us" }
];
export default function Footer() {
  return (
    <footer className="w-full  ">
      <div className="bg-[#212124] ">
        <div className="flex   h-auto md:pt-16 pb-6 px-10 md:pl-0">
          <div className="flex justify-around  flex-col md:flex-row py-[30px] lg:py-0  w-full h-auto gap-10 lg:gap-28">
            <div className="   w-1/8 xxl:1/6 flex justify-between h-full flex-row md:flex-col align-middle">
              <div className=" gap-x-[8px] md:mb-[30px] text-white">
            
                <Image
                  src={HiteshiLogo}
                  width={120}
                  height={30}
                  alt="image"
                  className="pr-[10px]"
                />
              </div>

     
                <div className="gap-2 lg:gap-4 flex justify-start xs:pb-2 md:pb-10">
                  <div className="rounded-full bg-white p-[6px] ">
                    <Link href="https://www.facebook.com/Hiteshi11/">
                      <Image className="" src={facebook} alt="image" />
                    </Link>
                  </div>
                  <div className="rounded-full bg-white p-[7px]">
                    <Link href="https://www.instagram.com/hiteshiinfotech/?hl=en">
                      <Image className="" src={instagram} alt="image" />
                    </Link>
                  </div>
                  <div className="rounded-full bg-white p-[7px]">
                    <Link href="https://twitter.com/hiteshi_?lang=en">
                      <Image className="" src={twitter} alt="image" />
                    </Link>
                  </div>
                  <div className="rounded-full bg-white p-[7px]">
                    <Link href="https://in.linkedin.com/company/hiteshi">
                      <Image className="" src={instagramwhite} alt="image" />
                    </Link>
                  </div>
                </div>
           
            </div>

            <div className="sm:flex justify-center sm:justify-between flex-wrap lg:flex-nowrap  gap-y-[20px] sm:gap-y-[60px] gap-x-[10px] md:gap-x-[20px] lg:gap-x-[90px]   lg:w-7/12">
              <div className="text-center sm:text-left lg:w-48 ">
                <div className="mb-[18px] text-white font-semibold text-[12px] select-none">
                  Explore
                </div>

                <ul className="flex flex-col gap-[20px] text-gray-200 text-[12px] sm:text-[9px] lg:text-[12px] xl:text-[13px] lg:w-32 ">
                  {HomeData.map((item,index) => (
                    <div key={index}>
                      <Link
                        href={item.link}
                      >
                        <li><p className="text-gray-300 hover:text-[#0e9ce8] inline-block cursor-pointer">{item.title}</p></li>
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left text-[12px] sm:text-[9px] lg:text-[12px] xl:text-[13px] sm:w-32 lg:w-full pt-6 sm:pt-0  ">
                <div className="  mb-[18px] text-white font-semibold text-[12px] select-none">
                  Services
                </div>

                <ul className="flex flex-col gap-[20px] text-gray-200 ">
                  {ServicesData.map((item,index)=>(
                    <div key={index}>
                      <Link
                    href={item.link}
                  >
                        <li><p className="text-gray-300 hover:text-[#0e9ce8] inline-block cursor-pointer ">{item.title}</p></li>
                  </Link>

                    </div>
                  ))}
                 
                </ul>
              </div>

              <div className="text-center sm:text-left text-[12px] sm:text-[10px] lg:text-[14px] xl:text-[13px] sm:w-24 xl:w-32 lg:w-100 pt-6 sm:pt-0 ">
                <div className="mb-[18px] text-white font-semibold text-[12px] select-none">
                  Get to know us Better
                </div>
                <ul className="flex flex-col gap-[20px] text-gray-200 w-100">

                {getToKnowUsBetterData.map((item,index) => (
                    <div key={index}>
                      <Link
                        href={item.link}
                      >
                        <li><p className="text-gray-300 hover:text-[#0e9ce8] inline-block cursor-pointer">{item.title}</p></li>
                      </Link>
                    </div>
                  ))}
                  
                </ul>
              </div>

              <div className="text-center sm:text-left text-[12px] sm:text-[9px] lg:text-[12px] xl:text-[13px] pt-6 sm:pt-0 ">
                <div className="mb-[18px] text-white font-semibold text-[12px] select-none">
                  Get in touch with us
                </div>
                <ul className="flex flex-col gap-[20px] text-gray-200 xl:w-[300px]">
                {getInTouchData.map((item,index) => (
                    <div key={index}>
                      <Link
                        href={item.link}
                      >
                        <li><p className="text-gray-300 hover:text-[#0e9ce8] inline-block cursor-pointer">{item.title}</p></li>
                      </Link>
                    </div>
                  ))}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row  pl-0 w-[90%] h-[100px] bg-[#212124] border-t border-gray-400 mx-auto ">
          <div className="text-gray-400 pl-0 text-[12px] sm:text-[10px] lg:text-[12px] xl:text-[14px]">
            © 2023 Hiteshi Infotech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}