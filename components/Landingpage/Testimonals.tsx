"use client";
import React from "react";
import { FaHome, FaStar } from "react-icons/fa";
import Image from "next/image";
import Mainheading from "../Comman/Mainheading";
import Button from "../Controls/Button";
import Slider from "../UI/Slider";
import { TestimonialData } from "@/constants/Testimonial";

const testimonials = [
  {
    name: "Marvin McKinney",
    role: "Product Manager",
    message:
      "From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!",
  },
  {
    name: "Leslie Alexander",
    role: "UX Designer",
    message:
      "An unforgettable experience. The ambiance, the views, the service—everything was just perfect. Highly recommended!",
  },
  {
    name: "Marvin McKinney",
    role: "Product Manager",
    message:
      "From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!",
  },
  {
    name: "Leslie Alexander",
    role: "UX Designer",
    message:
      "An unforgettable experience. The ambiance, the views, the service—everything was just perfect. Highly recommended!",
  },
];

const avatarGroups = [
  ["/testimonial/dr_arunabha_debnath.jpeg"],
  ["/testimonial/constantine_thma.jpeg"],
  ["/testimonial/subhradeep_aich.jpeg"],
  ["/testimonial/soumita.jpeg"],
  ["/testimonial/dr_arunabha_debnath.jpeg"],
];

const Testimonials = () => {
  return (
    <section className="px-5 md:px-16 lg:px-20 py-14 md:py-20 xl:py-24 ">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between gap-10 ">
          <div className="w-full lg:w-1/2  xl:w-[50%] bg-[url('/testimonals/left-shape.png')] bg-left-bottom bg-no-repeat bg-contain">
            <Mainheading
              SubTitle="Happy Customers "
              Title="Residents Who Placed Their Trust in Us"
              Icon={<FaHome />}
              Description="The journey of our home buyers reflect our dedication to excellence, honesty, and delivering complete customer satisfaction.t"
            />
            <div className="mt-6">
              <Button
                text="View All Review"
                icon={<FaHome />}
                className="bg-black hover:bg-primary transition-all duration-300 text-white px-6 py-3 rounded-full text-base  font-medium"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[50%] flex flex-col gap-10  bg-[url('/testimonals/map-shape.png')] bg-left-bottom bg-no-repeat bg-contain">
            <Slider
              breakpoints={{ lg: 1, md: 1 }}
              navigatorDots={false}
              autoplay
              autoplayDelay={3000}
            >
              {TestimonialData.map((item, index) => (
                <div
                  key={index}
                  className=" border border-primary mx-2 rounded-xl  h-76 2xl:h-64  p-3 shadow-md relative "
                >
                  <div className="flex justify-center text-yellow-400 text-xl mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-center  text-sm md:text-lg text-gray-700 mb-3">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0C1F3F]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.position}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="max-w-xl mx-auto">
              <Slider
                breakpoints={{ lg: 4, md: 4, sm: 4, xs: 4, xss: 4 }}
                autoplay
                autoplayDelay={3000}
                navigatorDots={false}
              >
                {avatarGroups.map((group, index) => (
                  <div key={index} className=" w-full mx-1 gap-6 ">
                    {group.map((src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        alt={`user-${idx}`}
                        width={1920}
                        height={1080}
                        className="rounded-full object-cover h-20 w-20  border-2 border-white shadow-md"
                      />
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
