"use client";
import MainHeading from "@/components/UI/MainHeading";
import Image from "next/image";
import React from "react";

const Amenities = ({ projectsdata, id }: any) => {
  return (
    <div
      id={id}
      className=" border-t px-4 md:px-10 py-4 border-gray-200 bg-white rounded-md"
    >
      <div className="my-10 text-center">
        <MainHeading
          Title={"Amenities"}
          BlackColor={true}
          ClassNameTitle={"text-center justify-center capitalize lg:text-3xl"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 w-full">
        {projectsdata?.amenities?.map((item: any, idx: any) => (
          <div
            className="  flex items-center p-2 gap-2  group hover:shadow-md shadow-sm transition-all duration-300 hover:-translate-y-1 border-0  bg-gray-50 rounded-lg"
            key={idx}
          >
            <div className=" h-16 w-16 flex justify-center items-center ">
              <Image
                src={item?.icon}
                alt={item?.title}
                width={1920}
                height={1080}
                className="w-12 h-12 object-contain p-2 bg-pink-100  rounded-full "
              />
            </div>
            <div>
              <h4 className="text-gray-900 capitalize font-normal  text-sm">
                {item?.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
