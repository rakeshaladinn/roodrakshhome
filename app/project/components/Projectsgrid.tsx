import Button from "@/components/Controls/Button";
import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import React from "react";
import { BiExpand } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBed, FaStar } from "react-icons/fa6";

const Projectsgrid = ({ projects }: any) => {
  return (
    <div className=" text-black py-14 md:py-20  xl:py-24 px-5 md:px-16 lg:px-20">
      <div className="space-y-20 md:space-y-28">
        {projects.map((property: any, index: any) => (
          <div
            key={property.id || index}
            className="max-w-7xl relative mx-auto"
          >
            <div
              className={`flex flex-col-reverse gap-8 md:gap-6 lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Property Content */}
              <div className="w-full lg:w-[60%] md:px-6 lg:px-10 text-white  md:border-l border-black/10">
                <p className="text-primary mb-1 text-xs sm:text-sm font-medium">
                  {property.type || "Residential"}
                </p>
                <h3 className="text-lg sm:text-xl text-black md:text-2xl font-semibold mb-2">
                  {property.title || "Untitled Project"}
                </h3>
                <p className="text-gray-900 text-sm sm:text-base md:text-lg mb-4">
                  {property.short_description || "No description available."}
                </p>

                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1 border border-black/30 rounded-md p-1 sm:p-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm sm:text-lg ${
                            i < Math.round(property.rating || 4.5)
                              ? "text-yellow-400"
                              : "text-black"
                          }`}
                        />
                      ))}
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-black">
                      {(property.rating || 4.5).toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex  text-black flex-wrap sm:flex-nowrap items-center text-sm sm:text-base md:text-lg justify-between pb-5 sm:pb-7 border-b border-black/20 pt-6 sm:pt-8 mb-4">
                  <div className="flex items-center gap-2 pr-6 sm:pr-10 ">
                    <FaBed className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                    {property.more_details?.bhk || "N/A"}
                  </div>
                  <span className="text-black/20 text-2xl">|</span>
                  <div className="flex items-center gap-2 pl-4 mt-2 sm:mt-0">
                    <BiExpand className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                    {property.more_details?.flat_sizes || "N/A"}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={Appassets.BlackLogo}
                      alt="Agent"
                      width={1920}
                      height={1080}
                      className="rounded-full border border-black/20 p-1 h-8 w-8 sm:h-11 sm:w-11 object-contain"
                    />
                    <span className="text-xs sm:text-sm">
                      {property?.agentName || "Roodraksh Group"}
                    </span>
                  </div>
                  <Button
                    link={`project/${property?.slug}`}
                    text="Details"
                    icon={<BsArrowRight className="w-4 h-4" />}
                    className=" text-xs font-medium sm:text-base md:text-lg bg-black transition-all duration-500 text-white px-5 py-2 rounded-full flex items-center"
                  />
                </div>
              </div>

              {/* Property Image */}
              <div className="w-full lg:w-[45%] flex flex-col md:flex-row items-start gap-3 2xl:gap-10">
                <div className="h-64 xl:h-80 w-full md:w-[80%] lg:w-88">
                  <Image
                    src={property?.feature_image || "/default-property.jpg"}
                    alt={property.title || "Property"}
                    width={1920}
                    height={1080}
                    className="object-cover rounded-2xl h-full w-full clip-top-right-image"
                  />
                </div>
                <div className="w-full md:w-28">
                  <p className="uppercase text-center line border border-black/10 bg-gray-100 py-3 px-4 sm:py-4 text-black font-semibold rounded-2xl text-xs ">
                    {property.city || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectsgrid;
