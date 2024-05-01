/* eslint-disable no-inner-declarations */
"use client";

import React, { useEffect, useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

//image
import logo from "../../assets/icons/hiteshi.webp";

//component

//json
import { headerData } from "@/json/common/common";
import { IconButton } from "@mui/material";

const navItems = headerData;
const Header = () => {

  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href.split("/").reverse()[1];
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  const [setPosition, setSelectPosition] = useState(-1);
  const [hover, setHover] = useState(-1);
  const flag = useRef(true);
  const router = useRouter()

  useEffect(() => {

    const handleScroll = () => {
      //const currentScrollPos = window.pageYOffset;
     // setIsScrollingDown(prevScrollPos < currentScrollPos);
      //prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerHeight = "70px";

  useEffect(() => {
    const urlIndex = headerData.findIndex(
      (element) => element.link === `/${url}`
    );

    setHover(urlIndex);
  }, [url]);

  useEffect(() => {
    if (window != undefined) {
      function handleResize() {
        if (window.innerWidth > 900) {
          setMobileOpen(false);
        } else {
          setMobileOpen(null);
        }
      }

      window.addEventListener("resize", handleResize);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMouseLeave = () => {
    setSelectPosition(-1);
  };

  const handleMouseEnter = (index) => {
    setSelectPosition(index);
  };

  const handleClick = (index) => {
    flag.current = false;
    setTimeout(() => (flag.current = true), 1000);
    setHover(index);
    handleMouseLeave();
  };

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#FFFFFF" }}
      className="w-full box-border"
    >
      <AppBar
        component="nav"
        className="bg-[#FFFFFF]  shadow-nonMegaMe"
        sx={{ boxShadow: "none" }}
      >
        <div
          className={`flex justify-between bg-[#FFFFFF] items-center 
            xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60 transition-all 
            duration-200 ease-out relative `}
          style={{ height: headerHeight }}
        >
          <Box>
            <Image
              src={logo}
              alt="Hiteshi Logo"
              className={`w-[120px] h-auto max-h-[100%] transition-all duration-200 ease-out max-w-[100px] cursor-pointer`}
              onClick={() => {
                router.push("/");
                setHover(-1);
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              border: "3px solid #ddd",
              borderRadius: "15%",
              padding: "5px 7px",
              marginTop: "0px",
              justifyContent: "end",
              fontSize: "80px",
              color: "#1da4e8",
            }}
          >
            <MenuIcon />
          </IconButton>

          <div
            className="transition-all duration-200 ease-out"
            style={{
              color: "black",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              position: "fixed",
              top: "60px",
              right: mobileOpen ? "0" : "-900px",
              width: "100%",
              // height: "100%",
              background: "#fff",
              transition: "right 0.5s ease",
            }}
          >
            <ul
              className={`flex p-2 items-left pl-8 md:hidden flex-col bg-[#ffff] h-[48vh] `}
              onMouseLeave={handleMouseLeave}
            >
              {navItems &&
                navItems.map((items, index) => (
                  <div key={items.id + Date.now()}>
                    {items.subMenu?.length > 0 ? (
                      <Box className="dropdown">
                        <Link href={items.link}>
                          <li
                            onMouseEnter={() => handleMouseEnter(index)}
                            onClick={() => {handleClick(index);
                              setMobileOpen(false)}}
                            className={` font-medium cursor-pointer 
                              transition-all duration-300 ease-out uppercase text-[18px] pt-8  subHeading xs:mx-0
                                lg:text-[18px]
                                
                              `}
                          >
                            {items.name}
                          </li>
                        </Link>
                      </Box>
                    ) : (
                      <Link href={items.link}>
                        <li
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onClick={() => {handleClick(index);
                            setMobileOpen(false)}}
                          className={` md:block font-medium  uppercase md:mt-0 
                            subHeading xs:mx-0
                            cursor-pointer 
                              transition-all duration-300 ease-out  text-[18px] pt-8  
                                
                            ${
                              setPosition === index || hover === index
                                ? "text-[#1da4e6]"
                                : "text-black"
                            }  cursor-pointer ${
                            navItems.length - 1 == index
                              ? "md:ml-[9px] lg:ml-5 xl:ml-6"
                              : "md:mx-[9px] lg:mx-5 xl:mx-6"
                          } 
                            `}
                        >
                          {items.name}
                        </li>
                      </Link>
                    )}
                  </div>
                ))}
            </ul>
          </div>

          <Box className="xs:hidden md:block flex">
            <ul
              className="flex h-[84px] items-center justify-end"
              onMouseLeave={handleMouseLeave}
            >
              {navItems &&
                navItems.map((items, index) => (
                  <div key={items.id + Date.now()}>
                    {items.subMenu?.length > 0 ? (
                      <Box className="dropdown">
                        <Link href={items.link}>
                          <li
                            onMouseEnter={() => handleMouseEnter(index)}
                            onClick={() => handleClick(index)}
                            className={`xs:hidden md:block font-medium cursor-pointer 
                              transition-all duration-300 ease-out uppercase text-[13px]  subHeading xs:mx-0
                                lg:text-[18px]
                              
                              ${
                                setPosition === index || hover === index
                                  ? "text-[#0E9CE8]"
                                  : "text-black"
                              } 
                                cursor-pointer 
                              ${
                                navItems.length - 1 == index
                                  ? "md:ml-[9px] lg:ml-5 xl:ml-6"
                                  : "md:mx-[9px] lg:mx-5 xl:mx-6"
                              }
                              `}
                          >
                            {items.name}
                          </li>
                        </Link>
                      </Box>
                    ) : (
                      <Link href={items.link}>
                        <li
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onClick={() => handleClick(index)}
                          className={`xs:hidden md:block font-medium  uppercase  text-[13px] lg:text-[14.5px] md:mt-0 
                            lg:mt-0 subHeading xs:mx-0 lg:text-[18px]
                            ${
                              setPosition === index || hover === index
                                ? "text-[#1da4e6]"
                                : "text-black"
                            }  cursor-pointer ${
                            navItems.length - 1 == index
                              ? "md:ml-[9px] lg:ml-5 xl:ml-6"
                              : "md:mx-[9px] lg:mx-5 xl:mx-6"
                          } 
                            `}
                        >
                          {items.name}
                        </li>
                      </Link>
                    )}
                  </div>
                ))}
            </ul>
          </Box>
        </div>
      </AppBar>
    </Box>
  );
};

export default Header;
