"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { navItems } from "./Sidebar";
import { Appassets } from "../../constants/Appassets";

const Footer = () => {
  // const staticpages = [
  //   { id: 1, title: "Privacy Policy", link: "/" },
  //   { id: 1, title: "Terms and Condition", link: "/" },
  // ];
  return (
    <footer className=" relative bg-[url('/banners/footer.png')] text-white pt-16 px-4 ">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="flex items-center justify-center py-7">
                <Image
                  alt="Logo image"
                  src={Appassets.Logo}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full object-contain h-24"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-100  text-sm max-w-3xl mx-auto ">
            From vibrant living spaces to thoughtfully developed commercial
            areas, Roodraksh Group caters to evolving urban needs with a focus
            on long-term value and sustainability.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-14 mb-2 border-t-1 border-b-1 border-gray-700 py-4 ">
          {navItems?.map((item: any, index: number) => (
            <a
              href={item.url}
              key={index}
              className="text-gray-300 text-sm hover:text-primary transition-colors font-medium uppercase "
            >
              {item?.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center py-2 items-center">
          <div className="flex flex-row justify-center items-center gap-4 mb-2">
            <a
              href="https://www.facebook.com/roodrakshgroup/"
              target="__blank"
              className="bg-primary hover:scale-110 ease-in-out transition-all duration-700 p-2 rounded"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/roodraksh_builders/"
              target="__blank"
              className="bg-primary hover:scale-110 ease-in-out transition-all duration-700 p-2 rounded"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center py-8 border-t border-slate-700">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 <span className="text-primary">Roodraksh&nbsp;</span>
            All Rights Reserved
          </p>
          {/* <div className="flex flex-wrap justify-center gap-8 border-gray-700">
            {staticpages.map((item: any, index: number) => (
              <a
                href={item?.link}
                target="__blank"
                key={index}
                className="text-gray-300 text-sm hover:text-primary transition-colors font-medium uppercase "
              >
                {item?.title}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
