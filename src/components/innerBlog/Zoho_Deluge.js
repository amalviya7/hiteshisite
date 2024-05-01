"use client";
import React from 'react';
import Colored_Heading from "../innerBlog_Common/Colored_Heading";
import Para from "../innerBlog_Common/Para";
import { Conclusion, Deluge_vs_Traditional_Languages, What_is_Deluge, Why_Choose_Hiteshi_Infotech,  Zoho_Deluge_Main_Heading } from "@/json/innerBlog/Common_Heading_json";
import {  What_is_Deluge_para,  Zoho_Conclusion, Zoho_Deluge_Journey_para, Zoho_Deluge_Main_para } from "@/json/innerBlog/para_json";
import Sub_Heading from "../innerBlog_Common/Sub_Heading";

export default function Zoho_Deluge() {
  
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-[90%] mx-auto pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Colored_Heading data={Zoho_Deluge_Main_Heading} />
      </div>

      <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Zoho_Deluge_Main_para} />
      </div>
         <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={ What_is_Deluge} /> 
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={What_is_Deluge_para} />
      </div>
       <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={ Deluge_vs_Traditional_Languages} /> 
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={What_is_Deluge_para} />
      </div>

      <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={ Why_Choose_Hiteshi_Infotech} /> 
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Zoho_Deluge_Journey_para} />
      </div>
         <div className="pb-6 sm:pb-4 md:pb-6 xl:pb-8">
          <Sub_Heading data={Conclusion} />  
       </div>
       <div className="pb-6 sm:pb-8 md:pb-10 xl:pb-14">
        <Para data={Zoho_Conclusion} />
      </div>
       
    </div>
  );
}
