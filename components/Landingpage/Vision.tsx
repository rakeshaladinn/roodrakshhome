"use client";
import React from "react";
import { FaHome, FaPersonBooth, FaHandHoldingUsd } from "react-icons/fa";
import Mainheading from "../Comman/Mainheading";
import Link from "next/link";

const services = [
  {
    icon: <FaHome size={40} />,
    title: "Our Vision",
    description:
      "To be recognized as the most reliable name in real estate by developing sustainable neighbourhoods that enhance and uplift everyday living.",
  },
  {
    icon: <FaPersonBooth size={40} />,
    title: "Our Mission",
    description:
      "To provide outstanding residences through creative design, top-notch construction, and a strong focus on customer satisfaction.",
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: "Our Values",
    description:
      "Honesty, openness, and a steadfast dedication to delivering excellence in every venture we pursue.",
  },
];

const Vision = () => {
  return (
    <section className="py-14 md:py-20 xl:py-24 px-5 md:px-16 lg:px-20  ">
      <div className="text-center flex items-center justify-center mb-8">
        <Mainheading
          SubTitle="Quality Meets Legacy"
          Title="Guided by Principles, Inspired by Purpose"
          center={true}
          Icon={<FaHome className="text-primary" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/5 group p-6 hover:scale-105  border-0 border-primary hover:border-[2px] hover:border-primary rounded-xl text-center transition-all duration-500"
          >
            <div className="w-20 h-20 group-hover:bg-primary transition-all duration-500  mx-auto mb-6 bg-white rounded-md flex items-center justify-center ">
              <span className="text-black transition-all duration-500 group-hover:text-white">
                {service?.icon}
              </span>
            </div>
            <h3 className=" text-xl md:text-2xl font-semibold text-[#0c1727] mb-3">
              {service?.title}
            </h3>
            <p className="text-[#5f6f81] text-base mb-6">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
