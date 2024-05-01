import Image from "next/image";
import icnFB from "@/assets/icons/icnFB.webp";
import InstagramIcon from "@/assets/icons/InstagramIcon.webp";
import linkedin from "@/assets/icons/linkedin.webp";
import Link from "next/link";
import React from "react"

export default function FollowUS() {
  return (
    <div className="xs:flex sm:flex-row xl:px-[235px] lg:px-[180px] md:px-[84px] sm:px-[75px] xs:px-9 justify-between items-center">
      <div className="text-[#1490D2] flex justify-center items-center">
        <div className="border-l-4 xxl:h-20 xl:h-16 lg:h-16 md:h-14 sm:h-12 xs:h-10  rounded-md border-[#1490D2]"></div>
        <h1 className=" xxl:text-5xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl xs:text-sm font-light pl-4  sm:pl-6">
          Follow Us to Know{" "}
          <span className="text-[#1490D2] xxl:text-5xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl xs:text-lg font-semibold ">
            #LifeAtHiteshi
          </span>
        </h1>
      </div>
      <div className="flex justify-end gap-4 md:gap-5 xs:pt-3 md:pt-0">
        <Link href={"https://www.facebook.com/Hiteshi11/"}>
          <Image
            className="xs:w-6 xs:h-6 sm:w-9 sm:h-9 md:w-11 md:h-11  xl:h-14 lg:w-12 lg:h-12 xl:w-14  "
            src={icnFB}
            alt="Facebook Icon/Logo"
          />
        </Link>
        <Link href={"https://www.instagram.com/hiteshiinfotech/?hl=en"}>
          <Image
            className="xs:w-6 xs:h-6 sm:w-9 sm:h-9 md:w-11 md:h-11  xl:h-14 lg:w-12 lg:h-12 xl:w-14  "
            src={InstagramIcon}
            alt="Instagram Icon/Logo"
          />
        </Link>
        <Link href={"https://in.linkedin.com/company/hiteshi"}>
          <Image
            className="xs:w-6 xs:h-6 sm:w-9 sm:h-9 md:w-11 md:h-11  xl:h-14 lg:w-12 lg:h-12 xl:w-14  "
            src={linkedin}
            alt="LinkedIn Icon/Logo"
          />
        </Link>
      </div>
    </div>
  );
}
