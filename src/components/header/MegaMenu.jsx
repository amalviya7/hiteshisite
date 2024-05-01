/* eslint-disable react/prop-types */
"use client";

import React from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

//image
import megaMenu from "../../assets/images/megaMenuBG.png";

const MegaMenu = ({ items, handleMouseLeave }) => {
  const [selectMegaMenuIndex, setSelectMegaMenuIndex] = React.useState(0);
  const router = useRouter();

  const handleMegaMenuMouseLeave = (e) => {
    e.stopPropagation();
    setSelectMegaMenuIndex(0);
  };

  const handleMegaMenuMouseEnter = (index, e) => {
    e.stopPropagation();
    setSelectMegaMenuIndex(index);
    MegaMenu;
  };
  MegaMenu;

  return (
    <motion.div
      initial={{ translateY: -380 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: -380 }}
      transition={{ duration: 0.3 }}
      className="bg-no-repeat bg-right megamenu h-[340px] w-full bg-[#f1f1f1] fixed left-0 z-[-1] text-black"
      style={{ backgroundImage: `url(${megaMenu.src})` }}
      onMouseLeave={() => handleMegaMenuMouseLeave}
    >
      <Box className="">
        <Box className={"lg:w-[77%] xs:w-[90%] mx-auto flex mt-12"}>
          <ul className="w-[430px]">
            {items?.subMenu?.map((ele, subIndex) => (
              <li
                key={Math.random() + subIndex}
                onClick={() => router.push(ele.path)}
                className={`py-[18px] px-4 border-b-[1.5px] border-[#70707099] flex justify-between cursor-pointer transition-all duration-200 hover:bg-[#ffffff] hover:text-[#0E9CE8] ${
                  subIndex == selectMegaMenuIndex
                    ? "text-[#0E9CE8] bg-[#ffffff]"
                    : ""
                }`}
                onMouseEnter={(e) => handleMegaMenuMouseEnter(subIndex, e)}
              >
                <span>{ele.name}</span>
                <ArrowForwardIosIcon />
              </li>
            ))}
          </ul>
          <Box className="w-full">
            {items?.subMenu?.map((ele, subIndex) => (
              <div className="mt-6 pl-24 w-full" key={Math.random() + subIndex}>
                {ele.megaMenu && subIndex == selectMegaMenuIndex && (
                  <>
                    {ele.megaMenu.heading && (
                      <h2 className="text-[36px] font-medium leading-10 mb-6">
                        {ele.megaMenu.heading}
                      </h2>
                    )}
                    {ele.megaMenu.subHeading && (
                      <h2 className="md:text-[20px] xl:text-[24px] font-medium mb-6 leading-8">
                        {ele.megaMenu.subHeading}
                      </h2>
                    )}
                    {ele.megaMenu.text && (
                      <p className="text-base font-light">
                        {ele.megaMenu.text}
                      </p>
                    )}
                    {ele.megaMenu.navLink && (
                      <ul
                        className={`list-disc ${
                          ele.megaMenu.navLink.length > 5 && "column-count-2"
                        }`}
                      >
                        {ele?.megaMenu?.navLink?.map((nav, navIndex) => {
                          return (
                            <Link
                              key={Math.random() + navIndex}
                              href={`${nav.path.includes("#") ? "" : ""}${
                                nav.path
                              }`}
                            >
                              <li
                                onClick={() => {
                                  handleMouseLeave();
                                }}
                                key={nav.text + navIndex + Date.now()}
                                className="mb-2 bodyText2 font-medium cursor-pointer transition-all hover:text-[#0E9CE8] "
                              >
                                {nav.text}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                    {ele.megaMenu.button && (
                      <button
                        className="border-2 border-[#707070] min-w-[170px] rounded-full px-3 py-3 text-[#707070] hover:bg-[#707070] hover:text-white transition-all cursor-pointer mt-[20px]"
                        onClick={() => {
                          handleMouseLeave();
                          router.push(ele.megaMenu.button.path);
                        }}
                      >
                        {ele.megaMenu.button.label}
                      </button>
                    )}
                  </>
                )}
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default MegaMenu;
