"use client";

import React from "react";
import MainHeading from "@/Components/Common/MainHeading";
import { BlogsData } from "@/Constants/Blogs";
import Link from "next/link";

const TopCategories = () => {
  const uniqueCategories = Array.from(
    new Map(
      BlogsData.map((item) => [
        item.category.trim().toLowerCase(),
        {
          name: item.category.trim(),
          slug: item.categoryslug,
        },
      ])
    ).values()
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-center mb-6">
        <MainHeading
          Title={"Top Categories"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={"text-center justify-center capitalize lg:text-xl"}
        />
      </div>

      <div className="space-y-3">
        {uniqueCategories.map((item, index) => {
          const count = BlogsData.filter(
            (blog) =>
              blog?.category?.trim().toLowerCase() === item.name.toLowerCase()
          ).length;

          return (
            <Link
              href={`/blogs?category=${item?.slug}`}
              key={index}
              className="cursor-pointer flex items-center justify-between py-2 px-3 rounded hover:bg-gray-100 transition"
            >
              <span className="text-sm text-gray-700 capitalize">
                {item?.name}
              </span>
              <span className="text-sm text-gray-500">({count})</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
