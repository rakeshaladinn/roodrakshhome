"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { PiPhoneDisconnectLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar, { navItems } from "./Sidebar";
import { Appassets } from "../../constants/Appassets";
import { CiMenuFries } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Controls/Button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeDropdown, setActiveDropdown] = useState<any | null>(null);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header
      className={`  top-0 left-1/2 max-w-[2100px]  transform   duration-300 ease-in-out transition -translate-x-1/2  lg:flex ${
        isScrolled
          ? "bg-white shadow-lg  text-black"
          : "backdrop-blur-xl text-black"
      }   w-full  fixed z-50 border-b border-white/10 px-4 xl:px-6 2xl:px-14`}
    >
      <div className=" w-full relative   flex  items-center justify-between  ">
        <Link
          href={"/"}
          className={`flex items-start justify-start  transform duration-700 transition ${
            isScrolled ? " py-2 md:py-3 " : " py-3  "
          } w-full md:w-[10%] `}
        >
          <Image
            alt="Logo image"
            src={Appassets.BlackLogo}
            width={1920}
            height={1080}
            priority
            className={`w-full object-contain transform duration-500 delay-500 transition  mr-18 md:mr-0 ${
              isScrolled ? "h-9 md:h-12 " : "h-12  md:h-14"
            }`}
          />
        </Link>
        <div className="hidden lg:flex items-center justify-evenly     lg:w-[65%] mx-auto ">
          {navItems.map((item, index) => (
            <div key={index} className="relative flex">
              <Link
                href={item.url}
                onMouseEnter={() =>
                  setActiveDropdown(item.children ? true : false)
                }
                className="text-sm lg:text-base xl:text-lg  flex font-medium items-end gap-2  hover:text-primary hover:scale-125 transition-all duration-300"
              >
                {item.label}
                {item.children && <RiArrowDropDownLine className="text-2xl" />}
              </Link>

              {item?.children && activeDropdown === true && (
                <div
                  className="absolute mt-6 shadow-xl rounded-md top-full -left-30  bg-center bg-no-repeat bg-[url('/Banner01.png')] bg-cover   z-50"
                  onMouseLeave={() => setActiveDropdown(false)}
                  ref={wrapperRef}
                >
                  <div
                    className={`${
                      isScrolled ? "bg-white/90" : "bg-white/85"
                    } flex gap-16 max-w-6xl  p-7 rounded-md`}
                  >
                    {item?.children?.map((location, i) => (
                      <div key={i} className="w-full text-center  ">
                        <div className="  text-black my-2">
                          <Link
                            href={location?.url}
                            className="text-primary text-xl font-medium "
                            role="menuitem"
                          >
                            {location.label}
                          </Link>
                        </div>
                        <div className="flex gap-8 mt-3 items-start">
                          {location?.nestchildren?.map((type: any, j: any) => (
                            <div key={j} className="mb-4">
                              <div className="font-semibold text-black mb-1">
                                <Link
                                  href={type.url}
                                  className="hover:text-primary "
                                  role="menuitem"
                                >
                                  {type.label}
                                </Link>
                              </div>
                              <ul className="space-y-1 text-start pl-4 min-w-[115px] ">
                                {type.status?.map((statusItem: any, k: any) => (
                                  <li key={k}>
                                    <Link
                                      href={statusItem.url}
                                      className=" text-black/80 hover:text-primary text-sm  text-start  "
                                      role="menuitem"
                                    >
                                      {statusItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className=" flex items-center justify-end  gap-5 h-full w-full md:w-[42%] lg:w-[18%] ">
          <Button
            text="Add Listing"
            icon={<FaArrowRightLong />}
            className="bg-primary text-white px-4 py-2 rounded-2xl items-center flex clip-top-right"
          />
          <button
            className="flex hover:text-primary transition-all duration-500 items-center justify-end gap-2 cursor-pointer "
            onClick={() => setIsOpen(true)}
          >
            <span className="  font-medium   line-clamp-1 ">
              <CiMenuFries className="text-2xl " />
            </span>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
