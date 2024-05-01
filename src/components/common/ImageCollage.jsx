/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


const ImageCollage = ({ content }) => {
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
      className={` ${animate && "fade-in-down"} flex gap-3 sm:gap-6`}
      ref={ref}
    >
      {content &&
        content.map((item, index) => (
          <div className="div1 flex flex-col gap-3 sm:gap-5" key={index}>
            {item?.images?.map((element, idx) => (
              <div className="inner-1" key={idx + element.key}>
                <Image
                  src={element.imagecolor}
                  alt={element.altName}
                  className="filter grayscale transition-all duration-600 ease-in-out transform hover:grayscale-0 "
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ImageCollage;
