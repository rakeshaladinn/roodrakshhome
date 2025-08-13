"use client";
import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import React from "react";
import Button from "../Controls/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "../UI/Slider";
import { IoIosPlay } from "react-icons/io";
import { projects } from "@/constants/Data";
import Modalform from "../Comman/Modalform";

const bannerData = [
  {
    id: 1,
    src: Appassets.Project_roodraksh_kundan,
    title: "Elevate Lifestyle",
    subtitle: "Luxury Meets Comfort",
    description:
      "Bringing together a team with passion, dedication, and resources to help our clients reach their buying and selling goals. We are with you every step of the way.",
  },
  {
    id: 1,
    src: Appassets.Project_roodraksh_pride,
    title: "top nouch",
    subtitle: "Living space",
    description:
      "Bringing together a team with passion, dedication, and resources to help our clients reach their buying and selling goals. We are with you every step of the way.",
  },
  {
    id: 1,
    src: Appassets.Project_roodraksh_sapphire,
    title: "Discover Your ",
    subtitle: "Flexiable Living House",
    description:
      "Bringing together a team with passion, dedication, and resources to help our clients reach their buying and selling goals. We are with you every step of the way.",
  },
];

const MainBanner = () => {
  return (
    <div className="relative mx-3 top-24 rounded-3xl overflow-hidden ">
      <Slider
        breakpoints={{ sm: 1, lg: 1 }}
        autoplayDelay={5000}
        autoplay={true}
        // navigation
      >
        {projects.map((item: any) => (
          <div
            key={item.id}
            className="relative rounded-3xl w-full h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[90vh] xl:h-[100vh] 2xl:h-[80vh] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={item?.banner_image}
              alt="Banner image"
              width={1920}
              height={1080}
              className="object-cover w-full  h-full  rounded-3xl object-bottom md:object-center"
              priority
            />

            <div className="absolute inset-0 rounded-3xl bg-black/60 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col md:flex-row  justify-evenly md:justify-center items-center md:items-center text-white px-5 sm:px-10 md:px-16 lg:px-24">
              <div className="w-full   text-white flex flex-col  items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl capitalize md:text-4xl lg:text-5xl font-semibold leading-tight">
                  {item?.title}
                </h1>
                <p className="mt-4 max-w-xl text-base md:text-lg text-white/90">
                  {item?.short_description}
                </p>

                <Button
                  text="Explore Property"
                  link={`project/${item?.slug}`}
                  icon={<FaArrowRightLong />}
                  className="bg-primary hover:bg-black transition-all duration-500 text-white px-4 py-3 text-base  w-fit mt-6 clip-top-right"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-1/3 absolute right-24 top-1/2 -translate-y-1/2 bg-white rounded-md px-4 pb-3 xl:block hidden">
        <Modalform title={"Enquire Now"} />
      </div>
    </div>
  );
};

export default MainBanner;
