import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaPhoneAlt, FaHome } from "react-icons/fa";
import Button from "../Controls/Button";
import Mainheading from "../Comman/Mainheading";

const features = [
  "Pontificate the client proactively",
  "Does the selected item have a waiting list?",
  "Instant 24-hour Emergency",
];

const Whoweare = () => {
  return (
    <div className="bg-[#FDF9F8]  py-10 md:py-20 px-5 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-5 2xl:gap-16 relative overflow-hidden bg-[url('/whoweare/right-shape.png')] bg-no-repeat bg-right-bottom">
      <div className="relative w-full md:w-1/2 lg:w-[52%] 2xl:w-1/2 overflow-hidden">
        <div className="absolute -left-12  md:-left-10 top-1/3 transform -rotate-90 z-10">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              697k+
            </h3>
            <p className="text-md tracking-widest text-gray-700 font-medium">
              LISTED PROPERTIES
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
      <div className=" w-full md:w-1/2 lg:w-[48%] 2xl:w-1/2">
        <div className="mb-6">
          <Mainheading
            SubTitle="  Who We Are"
            Icon={<FaHome className="text-primary" />}
            Title="   Where Finding A House  Feels Like Home"
            Description=" At our core, we believe finding a home should feel comforting, not
            complicated. That’s why we offer trusted listings, expert support,
            and a seamless experience tailored to your needs and dreams."
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
            text="About us more"
            icon={<FaHome />}
            className="bg-black hover:bg-primary transition-all duration-300 text-white px-6 py-4 rounded-full text-base md:text-lg font-medium"
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
