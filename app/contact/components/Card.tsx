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
        <a href="tel: +91-9164-67-9164"> +91-9164-67-9164 (Guwahati)</a>
        <br />
        <a href="tel: +91-9057-64-4644"> +91-9057-64-4644 (Agartala)</a>
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
    <div className="bg-white py-10 px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="relative group border border-black/10 overflow-hidden py-14 px-4 bg-white"
          >
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0" />
            <span className="bg-primary translate-y-full inset-0 absolute group-hover:translate-y-0 transition-transform duration-700 z-0 ease-out"></span>
            <div className="relative z-10 px-10 text-black transition-colors duration-300 ">
              <div className="absolute left-15 p-5 rounded-full bg-primary w-fit transition-all duration-300 group-hover:bg-white"></div>
              <div className="relative p-2 text-4xl rounded-full">
                {item?.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2 group-hover:text-white">
                {item?.title}
              </h3>
              <div
                onClick={() => item?.href && router.push(item?.href)}
                className="text-lg text-black/70 group-hover:text-white cursor-pointer"
              >
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
