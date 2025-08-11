import CommanBanner from "@/components/Comman/CommanBanner";
import About from "@/components/Landingpage/About";
import Vision from "@/components/Landingpage/Vision";
import Whoweare from "@/components/Landingpage/Whoweare";
import React from "react";

const page = () => {
  return (
    <div>
      <CommanBanner
        Title="About"
        background={"bg-[url('/banners/aboutbanner.png')]"}
      />
      <About />
      <Vision />
      <Whoweare />
    </div>
  );
};

export default page;
