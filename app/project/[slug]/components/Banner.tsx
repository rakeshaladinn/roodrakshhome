"use client";
import Slider from "@/components/UI/Slider";
import Image from "next/image";
import React from "react";
import EnquireNow from "./EnquireNow";

const Banner = ({ projectsdata }: any) => {
  const banner = projectsdata?.banner_image
    ? [{ id: "banner", image: projectsdata?.banner_image }]
    : [];
  const gallery = projectsdata?.gallery || [];

  const allSlides = [...banner, ...gallery];

  return (
    <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
      {/* Background Slider */}
      <Slider
        breakpoints={{ sm: 1, lg: 1 }}
        navigation={true}
        navigatorDots={false}
      >
        {allSlides?.map((slide: any) => (
          <div key={slide?.id} className="relative w-full lg:h-[100vh] z-0">
            <Image
              src={slide?.image}
              alt="Banner image"
              width={1920}
              height={1080}
              className="object-bottom h-[70vh] md:h-[60vh] lg:h-full object-cover md:object-center w-full"
              priority={true}
            />
          </div>
        ))}
      </Slider>

      {/* Foreground Content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        flex flex-col md:flex-row items-center justify-around w-full gap-6 z-10"
      >
        <div className="bg-white/80  w-[85%] md:w-[60%] max-w-xl xl:w-1/3 rounded-lg p-4   h-fit flex flex-col justify-center">
          {projectsdata?.title && (
            <h1 className="text-xl md:text-2xl 2xl:text-3xl text-primary font-medium">
              {projectsdata?.title}
            </h1>
          )}
          {projectsdata?.short_description && (
            <p className="text-base md:text-lg leading-8 text-zinc-900 mt-3">
              {projectsdata?.short_description}
            </p>
          )}
        </div>

        {/* Right Side - Enquire Form */}
        <div className=" w-[70%] hidden xl:block xl:w-1/3 max-w-md">
          <EnquireNow projectsdata={projectsdata} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
