"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import React from "react";
import MainHeading from "@/Components/Common/MainHeading";
import { FaMapPin } from "react-icons/fa6";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  slug: string;
  feature_image: string;
  status: string;
  short_description: string;
  city: string;
  more_details: {
    flat_sizes: string;
  };
}

const TopRated = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-center mb-6">
        <MainHeading
          Title="Projects"
          Lines={true}
          BlackColor={true}
          ClassNameTitle="text-center justify-center capitalize lg:text-xl"
        />
      </div>

      <div className="space-y-4">
        {projects?.map((project, i) => (
          <Link
            href={`/project/${project.slug}`}
            key={project.id}
            className={`flex items-start gap-3 pb-4 ${
              i !== projects.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="relative w-18 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={project.feature_image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">
                {project.title}
              </h4>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-4 w-4 text-primary  " />
                <p className="text-sm text-gray-600">{project?.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
