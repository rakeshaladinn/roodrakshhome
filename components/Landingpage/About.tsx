"use client";
import React from "react";
import Mainheading from "../Comman/Mainheading";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Appassets } from "@/constants/Appassets";
import Button from "../Controls/Button";
import { FaHome } from "react-icons/fa";

const features = [
  "Quality real estate services",
  "100% Satisfaction guarantee",
  "Highly professional team",
  "Dealing always on time",
];

const About = () => {
  return (
    <div className="bg-[#FDF9F8]  py-14 md:py-20   px-5 md:px-16 lg:px-20  flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 bg-[url('/About/shape-1.png')] bg-contain bg-right-bottom bg-no-repeat">
      {/* Left Image Section */}
      <div className="relative h-full w-full lg:w-1/2">
        {/* Bottom Image */}
        <Image
          width={1920}
          height={1080}
          src={Appassets.About}
          alt="building"
          className="rounded-lg w-full h-full md:h-150 object-contain"
        />

        {/* Top Image (Overlay) */}
        <div className="absolute  top-6  inset-0">
          <Image
            width={1920}
            height={1080}
            src={Appassets.Border}
            alt="overlay building"
            className="rounded-lg w-full h-full md:h-136 object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Mainheading
          SubTitle="AboutOurCompany"
          Icon={<FaHome />}
          Title="Experts In Commercial Living Solutions"
          Description="With years of industry experience, we specialize in delivering high-quality commercial apartments that blend business functionality with modern comfort—designed to support your growth, elevate your presence"
        />
        <div className="flex md:flex-row flex-col justify-start gap-10">
          <div className="space-y-8">
            <ul className="space-y-4 mt-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-base font-medium md:text-lg text-gray-800"
                >
                  <span className="text-primary mr-3 ">
                    <FaArrowRight />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              text="Learn More"
              icon={<FaArrowRight />}
              className="bg-primary text-base  hover:bg-black transition-all duration-500 text-white px-4 py-3 rounded-2xl items-center flex clip-top-right"
            />
          </div>
          {/* <div className="bg-lime-100 border-primary/60 flex justify-center items-center flex-col h-40 w-52 px-12  py-6 rounded-xl text-center">
            <h3 className="text-6xl font-medium text-black">20+</h3>
            <p className="text-gray-700 font-semibold mt-1">
              Years Of Experience
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
