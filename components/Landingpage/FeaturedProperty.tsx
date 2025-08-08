"use client";
import Image from "next/image";
import { FaBed, FaStar } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import Mainheading from "../Comman/Mainheading";
import Button from "../Controls/Button";
import { GiBathtub } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { Appassets } from "@/constants/Appassets";

const properties = [
  {
    id: "2056",
    type: "Resort",
    title: "Alpina house",
    description:
      "Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.",
    price: "$1,960.00",
    rating: 0.0,
    beds: 4,
    baths: 2,
    sqft: 1500,
    agentName: "Juniatur Rahman",
    agentImage: Appassets.Project_agency,
    propertyImage: Appassets.Project_1,
  },
  {
    id: "2057",
    type: "Villa",
    title: "Sunset Paradise",
    description:
      "Proactively envisioneer top-line outsourcing for mission-critical solutions. Seamlessly deliver ubiquitous technologies.",
    price: "$2,450.00",
    rating: 4.5,
    beds: 5,
    baths: 3,
    sqft: 2000,
    agentName: "Maria Anderson",
    agentImage: Appassets.Project_agency,
    propertyImage: Appassets.Project_2,
  },
  {
    id: "2058",
    type: "Apartment",
    title: "Skyline Heights",
    description:
      "Efficiently streamline visionary networks with highly efficient paradigms for cross-unit initiatives.",
    price: "$1,350.00",
    rating: 3.8,
    beds: 3,
    baths: 2,
    sqft: 1200,
    agentName: "David Williams",
    agentImage: Appassets.Project_agency,
    propertyImage: Appassets.Project_3,
  },
];

export default function FeaturedProperty() {
  return (
    <section className="bg-[#292b2c] text-white py-14 md:py-20  xl:py-24 px-5 md:px-16 lg:px-20">
      <div>
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <Mainheading
              Title="Feature Property"
              color="text-white"
              Description=""
            />
            <p className="text-base md:text-lg text-white">
              We are a real estate firm with over 20 years of expertise, and our
              main goal is to provide amazing locations to our partners and
              clients.
            </p>
          </div>
          <Button
            text="All Properties"
            icon={<HiArrowNarrowRight />}
            className="bg-primary w-fit h-fit text-base transition-all duration-500 text-white hover:bg-black clip-top-right font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center gap-2"
          />
        </div>

        {/* Property Cards */}
        <div className=" space-y-20 md:space-y-24">
          {properties.map((property, index) => (
            <div key={index} className={`max-w-7xl relative mx-auto`}>
              <div
                className={`flex flex-col-reverse gap-8 md:gap-6  lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Property Content */}
                <div className="w-full lg:w-[60%] md:px-6 lg:px-10 text-white border-l md:border-l border-white/10">
                  <p className="text-primary mb-1 text-xs sm:text-sm font-medium">
                    {property.type}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                    <p className="text-xl sm:text-2xl font-semibold">
                      {property.price}
                    </p>
                    <div className="flex items-center gap-1 border border-white/30 rounded-md p-1 sm:p-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm sm:text-lg ${
                              i < Math.round(property.rating)
                                ? "text-yellow-400"
                                : "text-white"
                            }`}
                          />
                        ))}
                      <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-white">
                        {property.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Property Info */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center text-sm sm:text-base md:text-lg justify-between pb-5 sm:pb-7 border-b border-gray-700 pt-6 sm:pt-8 mb-4">
                    <div className="flex items-center gap-2 pr-6 sm:pr-10 border-r border-white/20">
                      <FaBed className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                      {property.beds} Beds
                    </div>
                    <div className="flex items-center gap-2 border-r border-white/20 pr-6 sm:pr-20 mt-2 sm:mt-0">
                      <GiBathtub className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                      {property.baths} Baths
                    </div>
                    <div className="flex items-center gap-2 pl-4 mt-2 sm:mt-0">
                      <BiExpand className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                      {property.sqft} sqft
                    </div>
                  </div>

                  {/* Agent & Button */}
                  <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={property.agentImage}
                        alt="Agent"
                        width={1920}
                        height={1080}
                        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 object-cover"
                      />
                      <span className="text-xs sm:text-sm">
                        {property.agentName}
                      </span>
                    </div>
                    <Button
                      text=" Details "
                      icon={<BsArrowRight className="w-4 h-4" />}
                      className="bg-white text-xs sm:text-base md:text-lg hover:bg-black transition-all duration-500 text-black hover:text-white px-5 py-2 rounded-full flex items-center"
                    />
                  </div>
                </div>

                {/* Property Image */}
                <div className="w-full lg:w-[45%] flex flex-col md:flex-row items-start gap-3 2xl:gap-10">
                  <div className="h-64 xl:h-80 w-full md:w-[80%] lg:w-88 ">
                    <Image
                      src={property.propertyImage}
                      alt="Property"
                      width={1920}
                      height={1080}
                      className="object-cover rounded-2xl h-full w-full clip-top-right-image"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <p className="uppercase text-center bg-white py-3 px-4 sm:py-4 text-black font-semibold rounded-2xl text-xs sm:text-base">
                      id-{property.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
