"use client";
import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaPhoneAlt, FaHome } from "react-icons/fa";
import Button from "../Controls/Button";
import Mainheading from "../Comman/Mainheading";

const features = [
  "Timely handover through precise planning ",
  "Use superior materials from foundation to finishing",
  "Robust infrastructure using modern design concepts and frameworks",
];

const Whoweare = () => {
  return (
    <div className="bg-[#FDF9F8]  py-14 md:py-20 xl:py-24  px-5 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-5 2xl:gap-16 relative overflow-hidden bg-[url('/whoweare/right-shape.png')] bg-no-repeat bg-right-bottom">
      <div className="relative w-full  lg:w-[52%] 2xl:w-1/2 overflow-hidden">
        <div className="absolute -left-12  md:-left-10 top-1/3 transform -rotate-90 z-10">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              95%
            </h3>
            <p className="text-md tracking-widest text-gray-700 font-medium">
              On- Time Delivery{" "}
            </p>
          </div>
        </div>
        <div className="relative left-18 md:left-32 lg:left-24">
          <div className=" w-[81%] relative">
            <Image
              width={1920}
              height={1080}
              src={Appassets.Whoweare}
              alt="building"
              className="rounded-xl w-full object-contain"
            />
            <div className="bg-primary/40 h-20 absolute -left-20 bottom-20 w-full"></div>
          </div>

          <div className="absolute left-5 bottom-[-45px] md:bottom-[-40px] w-52 md:w-72">
            <Image
              width={1920}
              height={1080}
              src={Appassets.Magnify}
              alt="magnified house"
              className="rounded-full rotate-3 w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className=" w-full lg:w-[48%] 2xl:w-1/2">
        <div className="mb-6">
          <Mainheading
            SubTitle="Why Choose Us"
            Icon={<FaHome className="text-primary" />}
            Title="  Choosing Excellence With Every Step "
            Description="Our developments are living proof of exceptional construction standards and architectural designs showcasing our dedication to quality and detail. Also, as an esteemed member of the Assam Real Estate & Infrastructure Developers Association (AREIDA), we follow the highest standards and uphold the best practices of the industry."
          />
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-800 text-base md:text-lg"
            >
              <FaArrowRight className="text-primary mt-1" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA & Phone */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Button
            link={"/about"}
            text=" Know more"
            icon={<FaHome />}
            className="bg-black w-fit hover:bg-primary transition-all duration-300 text-white px-6 py-3 rounded-full text-base  font-medium"
          />
          <a
            href="tel:+91-9164-67-9164"
            className="flex items-center gap-3 group transition-all duration-500"
          >
            <div className="bg-black text-white group-hover:bg-primary transition-all duration-500 p-4 rounded-full">
              <FaPhoneAlt />
            </div>
            <div className="text-black transition-all duration-500 group-hover:text-primary">
              <p className="text-sm font-medium">Call Us 24/7</p>
              <h4 className="text-lg font-bold">+91-9164-67-9164</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
