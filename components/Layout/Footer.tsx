"use client";

import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaVimeoV,
  FaPinterestP,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { navItems } from "./Sidebar";
import { FaInstagram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  const servicesLinks = [
    { label: "Strategy Services", href: "#" },
    { label: "Business Advice", href: "#" },
    { label: "Management", href: "#" },
    { label: "Financial Advice", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[url('/banners/footer.png')] text-white  bg-cover bg-center bg-no-repeat">
      <div className="px-4 sm:px-6 lg:px-8 pt-16 bg-[#0c151c]/20">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12">
          {/* Logo and newsletter */}
          <div className="w-full lg:w-[40%] flex flex-col items-start md:items-center lg:items-start text-center lg:text-left">
            <Image
              alt="Roodraksh group"
              src={Appassets.Logo}
              width={200}
              height={100}
              priority
              className="w-auto h-24 object-contain mb-6"
            />
            <p className=" text-base 2xl:text-lg  text-white text-start md:text-center lg:text-start tracking-wide max-w-lg mb-6">
              Discover why our residents love calling us home from breathtaking
              views and luxury finishes to unmatched service and community
              living, their stories reflect
            </p>
          </div>

          {/* Navigation + Contacts + Services */}
          <div className="w-full justify-center lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Useful Links */}
            <div className="flex flex-col items-start  w-full ">
              <h3 className="text-lg md:text-xl font-semibold text-center   mb-4">
                Useful Link
              </h3>
              <ul className="space-y-2 text-start text-white">
                {navItems.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-white text-start hover:text-primary transition-colors text-base md:text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-star tw-full">
              <h3 className="text-lg md:text-xl font-semibold  text-start  mb-4">
                Our Services
              </h3>
              <ul className="space-y-2 text-white">
                {servicesLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary transition-colors text-base md:text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col items-start text-center md:text-left w-full ">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <div>
                    <FaMapMarkerAlt className="w-4 h-4 text-white mt-1" />
                  </div>
                  <span className="text-base md:text-lg text-start">
                    Bhaskar Nagar, RGB ROAD Beside Bhaskar Vidyapeeth School
                    Guwahati - 781003
                  </span>
                </li>
                <a
                  href="mailto: info@roodraksh.co.in"
                  className="hidden lg:flex items-center gap-2 cursor-pointer text-white transition-colors"
                >
                  <FaEnvelope className="w-4 h-4 text-white" />
                  <span className="text-base hover:text-primary transition-all duration-300">
                    info@roodraksh.co.in
                  </span>
                </a>
                <a
                  href="tel:+91-9057644644"
                  className="hidden lg:flex items-center gap-2 cursor-pointer text-white transition-colors"
                >
                  <FiPhoneCall size={20} />
                  <span className="text-base hover:text-primary transition-all duration-300">
                    +91-9057-64-4644
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-border pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-base md:text-lg text-center sm:text-left">
            © 2025 <span className="text-primary">Roodraksh&nbsp;</span> All
            Rights Reserved
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.facebook.com/roodrakshgroup/"
              target="__blank"
              className=" bg-gray-700 hover:bg-primary hover:scale-110 transition-all duration-500 p-2 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/roodraksh_builders/"
              target="__blank"
              className="bg-gray-700 hover:bg-primary hover:scale-110 transition-all duration-500 p-2 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
