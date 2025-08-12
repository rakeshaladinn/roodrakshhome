"use client";
import Slider from "@/components/UI/Slider";
import Image from "next/image";
import React from "react";
import ProjectTabs from "./ProjectTabs";

const Banner = ({ projectsdata }: any) => {
  const banner = projectsdata?.banner_image
    ? [{ id: "banner", image: projectsdata?.banner_image }]
    : [];
  const gallery = projectsdata?.gallery || [];

  const allSlides = [...banner, ...gallery];
  console.log("allSlides", allSlides);
  return (
    <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[100vh] overflow-hidden ">
      <Slider
        breakpoints={{ sm: 1, lg: 1 }}
        navigation={true}
        navigatorDots={false}
      >
        {allSlides?.map((slide: any) => {
          return (
            <div key={slide?.id} className="relative w-full lg:h-[100vh] z-0">
              <Image
                src={slide?.image}
                alt="Banner image"
                width={1920}
                height={1080}
                className="object-bottom h-[70vh] md:h-[60vh] lg:h-full object-cover md:object-center w-full "
                priority={true}
              />
            </div>
          );
        })}
      </Slider>
      <div className="z-10 py-10 hidden md:block  md:py-5 md:absolute md:bottom-44 bg-white/80  w-full md:w-[50%] lg:w-[40%] px-4  rounded-lg md:left-[30%]">
        {projectsdata?.title && (
          <h1
            className={`text-xl md:text-2xl text-center 2xl:text-3xl text-primary  font-medium transition-opacity duration-700 `}
          >
            {projectsdata?.title}
          </h1>
        )}
        {projectsdata?.short_description && (
          <p
            className={`text-base md:text-lg leading-8 text-center text-zinc-900 mt-3  `}
          >
            {projectsdata?.short_description}
          </p>
        )}
      </div>
      <div className="absolute w-full bottom-0">
        <ProjectTabs />
      </div>
    </div>
  );
};

export default Banner;
