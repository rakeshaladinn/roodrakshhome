"use client";
import Image from "next/image";
import { FaBed, FaFileAlt, FaFileMedicalAlt, FaStar } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import Mainheading from "../Comman/Mainheading";
import Button from "../Controls/Button";
import { GiBathtub } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { Appassets } from "@/constants/Appassets";
import { projects } from "@/constants/Data";
import { FaAddressBook, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../Comman/Modal";
import Modalform from "../Comman/Modalform";

// const properties = [
//   {
//     id: "2056",
//     type: "Resort",
//     title: "Alpina house",
//     description:
//       "Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.",
//     price: "$1,960.00",
//     rating: 0.0,
//     beds: 4,
//     baths: 2,
//     sqft: 1500,
//     agentName: "Juniatur Rahman",
//     agentImage: Appassets.Project_agency,
//     propertyImage: Appassets.Project_1,
//   },
//   {
//     id: "2057",
//     type: "Villa",
//     title: "Sunset Paradise",
//     description:
//       "Proactively envisioneer top-line outsourcing for mission-critical solutions. Seamlessly deliver ubiquitous technologies.",
//     price: "$2,450.00",
//     rating: 4.5,
//     beds: 5,
//     baths: 3,
//     sqft: 2000,
//     agentName: "Maria Anderson",
//     agentImage: Appassets.Project_agency,
//     propertyImage: Appassets.Project_2,
//   },
//   {
//     id: "2058",
//     type: "Apartment",
//     title: "Skyline Heights",
//     description:
//       "Efficiently streamline visionary networks with highly efficient paradigms for cross-unit initiatives.",
//     price: "$1,350.00",
//     rating: 3.8,
//     beds: 3,
//     baths: 2,
//     sqft: 1200,
//     agentName: "David Williams",
//     agentImage: Appassets.Project_agency,
//     propertyImage: Appassets.Project_3,
//   },
// ];

export default function FeaturedProperty() {
  const [open, setOpen] = useState<{ project: string; open: boolean }>({
    project: "",
    open: false,
  });
  return (
    <section className="bg-[#292b2c]  py-14 md:py-20  xl:py-24 px-5 md:px-16 lg:px-20">
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
              All our projects carry a promise of quality, trust, and lasting
              value which we are proud to offer to our customers.
            </p>
          </div>
          <Button
            link={"/project"}
            text="All Properties"
            icon={<HiArrowNarrowRight />}
            className="bg-primary w-fit h-fit text-base transition-all duration-500 text-white hover:bg-black clip-top-right font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center gap-2"
          />
        </div>

        {/* Property Cards */}
        <div className="space-y-20 md:space-y-24">
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
                <div className="w-full lg:w-[60%] md:px-6 lg:px-10 text-white  md:border-l border-white/10">
                  <p className="text-primary mb-1 text-xs sm:text-sm font-medium">
                    {property.status || "Residential"}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                    {property.title || "Untitled Project"}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
                    {property.short_description || "No description available."}
                  </p>

                  <div className="flex flex-wrap py-3 sm:flex-nowrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4  ">
                      <FaLocationDot />
                      <span className=" text-xs sm:text-sm text-white">
                        {property?.location?.address || "Na"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center text-sm sm:text-base md:text-lg justify-between pb-5 sm:pb-7 border-b border-gray-700 pt-6 sm:pt-8 mb-4">
                    <div className="flex items-center text-sm gap-2 mt-2 sm:mt-0">
                      <FaFileAlt className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                      {property?.type || "N/A"}
                    </div>
                    <span className="text-white/20 text-2xl">|</span>

                    <div className="flex items-center text-sm gap-2 pr-6 sm:pr-10 ">
                      <FaFileMedicalAlt className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                      {property?.more_details?.rera_no || "N/A"}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      {" "}
                      <Button
                        onClick={() =>
                          setOpen({ project: property.title, open: true })
                        }
                        text="Enquire Now"
                        icon={<BsArrowRight className="w-4 h-4" />}
                        className="hover:bg-white border border-white/50 text-xs font-medium sm:text-base md:text-lg  transition-all duration-500 text-white hover:text-black px-5 py-2 rounded-full flex items-center"
                      />
                    </div>
                    <Button
                      link={`project/${property?.slug}`}
                      text="Details"
                      icon={<BsArrowRight className="w-4 h-4" />}
                      className="bg-white text-xs font-medium sm:text-base md:text-lg hover:bg-black transition-all duration-500 text-black hover:text-white px-5 py-2 rounded-full flex items-center"
                    />
                  </div>
                </div>

                {/* Property Image */}
                <div className="w-full lg:w-[45%] flex flex-col md:flex-row items-start gap-3 2xl:gap-10">
                  <div className="h-76  md:h-80 w-full md:w-[80%] lg:w-88">
                    <Image
                      src={property?.feature_image || "/default-property.jpg"}
                      alt={property.title || "Property"}
                      width={1920}
                      height={1080}
                      className="object-cover rounded-2xl h-full w-full clip-top-right-image"
                    />
                  </div>
                  <div className="w-full md:w-28">
                    <p className="uppercase text-center line bg-white py-3 px-4 sm:py-4 text-black font-semibold rounded-2xl text-xs ">
                      {property.city || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {open.open && (
        <Modal
          isOpen={open.open}
          onClose={() => setOpen({ project: "", open: false })}
          title="Enquire Now"
        >
          <div className="flex w-full h-full justify-center items-center">
            <Modalform name={open.project} />
          </div>
        </Modal>
      )}
    </section>
  );
}
