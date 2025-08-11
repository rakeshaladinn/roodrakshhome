"use client";

import Image from "next/image";
import { HiCalendar, HiUser } from "react-icons/hi";

interface BlogItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  content: {
    heading: string;
    text: string;
  }[];
  promotion: {
    title: string;
    text: string;
  };
}
interface LeftBlogProps {
  filterdata: BlogItem;
}

const LeftBlog = ({ filterdata }: LeftBlogProps) => {
  const contentBeforePromo = filterdata?.content?.slice(0, 2);
  const contentAfterPromo = filterdata?.content?.slice(2);

  return (
    <article className="bg-white pb-5 lg:my-24 shadow-md">
      <div className="relative w-full h-64 md:h-80 lg:h-full overflow-hidden mb-6">
        <Image
          src={filterdata?.image}
          alt={filterdata?.title}
          width={1920}
          height={1080}
          priority
          className="object-cover "
        />
      </div>
      <div className="px-5">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <HiUser className="w-4 h-4" />
            <span>By Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCalendar className="w-4 h-4" />
            <span>5 Jan 2024</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
          {filterdata?.title}
        </h1>

        <div className="max-w-none text-gray-700">
          {contentBeforePromo.map((section, index) => (
            <div key={`before-${index}`} className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {section?.heading}
              </h2>
              <p className="leading-relaxed">{section?.text}</p>
            </div>
          ))}

          {filterdata?.promotion && (
            <div className="my-8">
              <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
                <div className="absolute top-4 left-6">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-tight">
                    {filterdata?.promotion?.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {filterdata?.promotion?.text}
                  </p>
                </div>
              </div>
            </div>
          )}

          {contentAfterPromo?.map((section, index) => (
            <div key={`after-${index}`} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {section?.heading}
              </h2>
              <p className="leading-relaxed">{section?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default LeftBlog;
