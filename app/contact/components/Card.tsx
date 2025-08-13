"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMailOpenOutline } from "react-icons/io5";

const contactDetails = [
  {
    icon: <FaLocationDot />,
    title: "Address",
    description: "2nd Floor, ICICI Bank Building, M.G. Road, Guwahati",
  },
  {
    icon: <IoCallSharp />,
    title: "Call Us",
    description: (
      <>
        <a href="tel:+919164679164">+91-9164-67-9164 (Guwahati)</a>
        <br />
        <a href="tel:+919057644644">+91-9057-64-4644 (Agartala)</a>
      </>
    ),
  },
  {
    icon: <IoMailOpenOutline />,
    title: "E-Mail",
    description: "info@roodraksh.co.in",
    href: "mailto:info@roodraksh.co.in",
  },
];

const Card = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 py-12 px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl p-8 bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => item?.href && router.push(item.href)}
          >
            {/* Hover gradient overlay */}
            <span className="absolute inset-0 bg-gradient-to-tr from-primary to-pink-600 translate-y-65 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl mb-6 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:rotate-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <div
              className="relative z-10 text-lg text-gray-600 group-hover:text-white transition-colors duration-300 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              {item.description}
            </div>

            {/* Decorative underline */}
            <span className="absolute bottom-6 left-8 w-0 h-[2px] bg-white group-hover:w-[calc(100%-4rem)] transition-all duration-500 z-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
