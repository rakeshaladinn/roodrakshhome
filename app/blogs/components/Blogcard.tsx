"use client";
import MainHeading from "@/components/UI/MainHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Blogcard({ item, index }: any) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blogs/${item?.slug}`)}
      className={` bg-white flex items-center justify-center cursor-pointer shadow`}
    >
      <div
        className={`w-full flex flex-col md:flex-row ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        } gap-4 items-center`}
      >
        <div className="w-full md:w-[50%] h-full">
          <Image
            src={item?.image}
            alt="Real Estate Lobby"
            width={800}
            height={600}
            priority
            className="w-full h-76 2xl:h-96 object-cover "
          />
        </div>
        <div className="space-y-4 w-full  md:w-[50%] pb-5 md:pb-0 pl-5 ">
          <MainHeading Title={item?.category} Lines={true} />
          <h1 className="text-2xl md:text-3xl font-semibold  text-black hover:text-primary duration-500 transition-all">
            {item?.title}
          </h1>
          <div className="text-base text-black/70">
            <span>July 24, 2025</span>
          </div>
          <div className="flex gap-4 mb-2">
            <a
              href="https://www.facebook.com/roodrakshgroup/"
              target="__blank"
              className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 transition-all p-2 rounded-full "
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/roodraksh_builders/"
              target="__blank"
              className="bg-gray-200 text-black hover:text-white hover:bg-primary hover:scale-110 duration-500 p-2 rounded-full transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
