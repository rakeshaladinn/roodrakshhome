"use client";
import React from "react";
import Mainheading from "../Comman/Mainheading";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { Appassets } from "@/constants/Appassets";
import Button from "../Controls/Button";

const Cta = () => {
  return (
    <section className="bg-[#192f3e]   text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch z-10 relative">
        <div className="flex flex-col justify-center space-y-6 px-5 md:px-16 lg:pl-20 py-12 h-full">
          <Mainheading
            SubTitle="REAL ESTATE"
            color="text-white"
            Title="Your Luxury. Your Lifestyle."
            Icon={<FaHome />}
          />
          <p className="text-white/80  leading-relaxed text-base md:text-lg font-normal">
            At our core, we believe finding a home should feel comforting, not
            complicated. That’s why we offer trusted listings, expert support,
          </p>
          <Button
            text=" View properties"
            icon={<FaHome />}
            className="bg-transparent text-base w-fit text-white border border-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
          />
        </div>
        <div className="relative hidden   w-full h-full lg:flex justify-center items-center">
          <Image
            src={Appassets.Cta}
            alt="Luxury Villa"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
