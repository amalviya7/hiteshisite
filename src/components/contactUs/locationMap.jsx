"use client"
import React from "react";

function Map() {
  return (
    <div
      className="relative text-right mx-auto sm:mx-0 w-[80%] sm:w-[95%] md:w-[80%] h-[150px] md:h-[200px] lg:h-[250px] "
      style={{ borderRadius: "none" }}
    >
      <div className=" bg-none overflow-hidden  w-full h-full">
        <iframe
          className="rounded-3xl w-full h-full"
          id="gmap_canvas"
          src="https://www.google.com/maps/d/u/0/embed?mid=1mJekksJyXRON50S98t4_Mz-zfHwSwZpJ"
       
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
