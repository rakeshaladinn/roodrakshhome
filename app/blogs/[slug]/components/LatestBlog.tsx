import Image from "next/image";
import React from "react";
import { HiCalendar } from "react-icons/hi";
import Link from "next/link";
import MainHeading from "@/components/UI/MainHeading";
import { BlogsData } from "@/constants/Data";
const LatestBlog = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-center mb-6">
        <MainHeading
          Title={"Latest Blog"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={"text-center justify-center capitalize lg:text-xl"}
        />
      </div>

      <div className="space-y-4">
        {BlogsData?.map((item, index) => (
          <Link
            href={`/blogs/$}`}
            key={index}
            className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
          >
            <div className="relative w-14 h-14  overflow-hidden flex-shrink-0">
              <Image
                src={item?.image}
                width={1920}
                height={1080}
                alt="Author"
                className="object-cover rounded-full w-14 h-14"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">
                {item?.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-[#ed2f59]">
                <HiCalendar className="w-3 h-3" />
                <span>June 22, 2020</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
