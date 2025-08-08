"use client";
import React from "react";
import { FaHome, FaPersonBooth, FaHandHoldingUsd } from "react-icons/fa";
import Mainheading from "../Comman/Mainheading";
import Link from "next/link";

const services = [
  {
    icon: <FaHome size={40} />,
    title: "Property Sales & Leasing",
    description:
      "Buy, sell, or lease premium commercial apartment units with ease.",
  },
  {
    icon: <FaPersonBooth size={40} />,
    title: "Virtual Tours & Site Visits",
    description:
      "Buy, sell, or lease premium commercial apartment units with ease.",
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: "Investment Consultation",
    description:
      "Buy, sell, or lease premium commercial apartment units with ease.",
  },
];

const Vision = () => {
  return (
    <section className="py-14 md:py-20 px-5 md:px-16 lg:px-20 ">
      <div className="text-center flex items-center justify-center mb-8">
        <Mainheading
          SubTitle="Our Mission"
          Title="What We Offer"
          center={true}
          Icon={<FaHome className="text-primary" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/5 group p-8 hover:scale-105  border-0 border-primary hover:border-[2px] hover:border-primary rounded-xl text-center transition-all duration-500"
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
            <Link
              href=""
              className="text-black  group-hover:text-primary cursor-pointer font-semibold flex w-full items-center gap-2 justify-center text-sm"
            >
              <FaHome className="text-lg" />
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
