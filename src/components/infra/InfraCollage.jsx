import React, { useEffect, useRef, useState } from "react";
import img1color from "@/assets/images/Component611.webp";
import img2color from "@/assets/images/Component621.webp";
import img3color from "@/assets/images/Component631.webp";
import img4color from "@/assets/images/color1.webp";
import img5color from "@/assets/images/color.webp";
import img6color from "@/assets/images/Component651.webp";
import Image from "next/image";
import { useInView } from "framer-motion";

const infraCollage = {
  mainheading: "Where innovation finds a home",
  section1: {
    maincontainer: [
      {
        key: 1,
        imagecolor: img1color,
        altName: "Hiteshi Infotech - Our Office Meeting rooms, Ongoing meeting",
      },
      {
        key: 4,
        imagecolor: img4color,
        altName: "Hiteshi Infotech - Office Entrance, Reception, 8th floor",
      },
    ],
  },

  section2: {
    maincontainer: [
      {
        key: 6,
        imagecolor: img6color,
        altName: "Hiteshi Infotech - Office Meeting Room, Ongoing meeting",
      },
    ],

    maincontainer2: [
      {
        key: 2,
        imagecolor: img2color,
        altName: "Hiteshi Infotech - Our Office from inside",
      },
    ],
    innercontainer: [
      {
        key: 3,
        imagecolor: img3color,
        altName:
          "Hiteshi Infotech - Our employees on their desks, Office Infra",
      },
      {
        key: 5,
        imagecolor: img5color,
        altName: "Hiteshi Infotech - Office Entrance, Reception, 7th floor",
      },
    ],
  },
};


const InfraCollage = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    }
  }, [isInView]);

  return (
    <div
      className={`${
        animate && "fade-in-down"
      } xs:px-8 sm:px-16 md:px-24 lg:px-44 xl:px-60`}
      ref={ref}
    >
      <h1 className="bigHeading pt-5 pb-12 md:pb-14 text-center text-[#0E9CE8]">
        {infraCollage?.mainheading}
      </h1>
      <div
        className="flex xs:gap-3 sm:gap-5  md:gap-7"
      >
        <div className="div-1 flex flex-col xs:gap-3 sm:gap-6 md:gap-6 lg:gap-11">
          {infraCollage?.section1?.maincontainer?.map((element, index) => (
            <div className="inner-1" key={index + element.key}>
              <Image
                src={element.imagecolor}
                alt={element.altName}
                className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
              />
            </div>
          ))}
        </div>
        <div className="div-2 flex flex-col xs:gap-3 sm:gap-5 lg:gap-8">
          <div className="flex  xs:gap-3 sm:gap-5  md:gap-7">
            {infraCollage?.section2?.maincontainer2?.map((element, index) => (
              <div className="inner-1" key={index + element.key}>
                <Image
                  src={element.imagecolor}
                  alt={element.altName}
                  priority
                  className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
                />
              </div>
            ))}
            <div className="inner-2 flex flex-col xs:gap-3 sm:gap-6  md:gap-8 lg:gap-10">
              {infraCollage?.section2?.innercontainer?.map((element, index) => (
                <div className="sub-inner" key={index + element.key}>
                  <Image
                    src={element.imagecolor}
                    alt={element.altName}
                    className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
                  />
                </div>
              ))}
            </div>
          </div>
          {infraCollage?.section2?.maincontainer?.map((item, index) => (
            <div className="inner-1" key={index + item.key}>
              <Image
                src={item.imagecolor}
                alt={item.altName}
                className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfraCollage;
