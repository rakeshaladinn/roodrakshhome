"use client";

import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import React from "react";
import Button from "../Controls/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "../UI/Slider";
import { IoIosPlay } from "react-icons/io";

const bannerData = [
  {
    id: 1,
    src: Appassets.Hero1,
    title: "Elevate Lifestyle",
    subtitle: "Luxury Meets Comfort",
    description:
      "Bringing together a team with passion, dedication, and resources to help our clients reach their buying and selling goals. We are with you every step of the way.",
  },
];

const MainBanner = () => {
  return (
    <div className="relative mx-3 mt-22 rounded-b-2xl overflow-hidden">
      <Slider
        breakpoints={{ sm: 1, lg: 1 }}
        autoplayDelay={5000}
        autoplay={true}
      >
        {bannerData.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[90vh] xl:h-[100vh] 2xl:h-[80vh] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={item.src}
              alt="Banner image"
              width={1920}
              height={1080}
              className="object-cover w-full  h-full  rounded-3xl object-bottom md:object-center"
              priority
            />

            <div className="absolute inset-0 rounded-3xl bg-black/60 z-10" />

            <div className="absolute inset-0 z-20 flex flex-col md:flex-row  justify-evenly md:justify-center items-center md:items-center text-white px-5 sm:px-10 md:px-16 lg:px-24">
              <div className="w-full  md:w-[80%] xl:w-[60%] text-white flex flex-col  items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  {item.title} <br />
                  {item.subtitle}
                </h1>
                <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl font-medium text-white/90">
                  {item.description}
                </p>

                <Button
                  text="Explore Properties"
                  icon={<FaArrowRightLong />}
                  className="bg-primary text-white px-5 py-3 text-base sm:text-lg md:text-xl w-fit mt-6 clip-top-right"
                />
              </div>
              <div className="w-full md:w-[40%] flex justify-center items-center mt-8 md:mt-0">
                <div className="bg-white/20 text-white rounded-full p-6 cursor-pointer hover:scale-110 transition-transform">
                  <IoIosPlay className="text-5xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainBanner;
