"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUser } from "react-icons/fa";
import Button from "../Controls/Button";
import { Appassets } from "@/constants/Appassets";
import Mainheading from "../Comman/Mainheading";

export default function BlogNewsSection() {
  const blogPosts = [
    {
      id: 1,
      image: Appassets.Blog1,
      date: { day: "17", month: "April" },
      author: "Admin",
      category: "PropertyTips",
      title: "Sustainable Features That Boost Property Value",
      link: "#",
    },
    {
      id: 2,
      image: Appassets.Blog2,
      date: { day: "17", month: "April" },
      author: "Admin",
      category: "PropertyTips",
      title: "How The Commercial Property Market Is Evolving",
      link: "#",
    },
    {
      id: 3,
      image: Appassets.Blog3,
      date: { day: "17", month: "April" },
      author: "Admin",
      category: "PropertyTips",
      title: "How To Spot A Profitable Commercial Location",
      link: "#",
    },
  ];

  return (
    <section className="w-full  py-14 md:py-20 px-5 md:px-16 lg:px-20 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 ">
        <div className="max-w-lg">
          <Mainheading
            SubTitle="Insights & Updates"
            Title="Commercial Real Estate News"
            Icon={<FaHome className="w-4 h-4" />}
          />
        </div>

        <Button
          text="View All Blog"
          icon={<FaHome className="w-4 h-4" />}
          className="bg-black w-fit hover:bg-primary text-white rounded-full px-6 py-3 text-base font-medium flex items-center gap-2"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden border-gray-100 group rounded-xl bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1920}
                height={1080}
                objectFit="cover"
                className="rounded-t-xl object-cover h-full w-full group-hover:scale-110 transition-all duration-700 cursor-pointer"
              />
            </div>
            <div className="absolute top-1/2 left-4 bg-primary px-4 py-3 rounded-md text-center text-white font-semibold text-sm shadow-md">
              <div className="text-lg leading-none">{post.date.day}</div>
              <div className="text-xs uppercase">{post.date.month}</div>
            </div>
            <div className="px-5 pt-3 pb-8 space-y-3 ">
              <div className="flex items-center gap-2 text-sm text-gray-600 ml-18">
                <FaUser className="text-gray-500" />
                <span>By {post?.author}</span>
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mx-1" />
                <span>{post?.category}</span>
              </div>

              <h3 className="text-xl pt-4 font-semibold text-black leading-snug">
                {post?.title}
              </h3>

              <Link
                href={post?.link}
                className="text-primary hover:text-black font-semibold text-base hover:decoration-black uppercase underline underline-offset-4 decoration-primary"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
