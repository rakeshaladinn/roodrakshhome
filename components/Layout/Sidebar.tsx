"use client";
import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronRight, BiMessageDetail } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const navItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  {
    label: "Projects",
    url: "/project",
    children: [
      {
        label: "Guwahati",
        url: "/project?location=guwahati",
        nestchildren: [
          {
            label: "Commercial",
            url: "/project?location=guwahati&type=commercial",
            status: [
              {
                label: "Completed",
                url: "/project?location=guwahati&type=commercial&status=completed",
              },
              {
                label: "Ready to Move",
                url: "/project?location=guwahati&type=commercial&status=ready-to-move-in",
              },
              {
                label: "Ongoing",
                url: "/project?location=guwahati&type=commercial&status=ongoing",
              },
            ],
          },
          {
            label: "Residential",
            url: "/project?location=guwahati&type=residential",
            status: [
              {
                label: "Completed",
                url: "/project?location=guwahati&type=residential&status=completed",
              },
              {
                label: "Ready to Move",
                url: "/project?location=guwahati&type=residential&status=ready-to-move-in",
              },
              {
                label: "Ongoing",
                url: "/project?location=guwahati&type=residential&status=ongoing",
              },
            ],
          },
        ],
      },
      {
        label: "Agartala",
        url: "/project?location=agartala",
        nestchildren: [
          {
            label: "Commercial",
            url: "/project?location=agartala&type=commercial",
            status: [
              {
                label: "Completed",
                url: "/project?location=agartala&type=commercial&status=completed",
              },
              {
                label: "Ready to Move",
                url: "/project?location=agartala&type=commercial&status=ready-to-move-in",
              },
              {
                label: "Ongoing",
                url: "/project?location=agartala&type=commercial&status=ongoing",
              },
            ],
          },
          {
            label: "Residential",
            url: "/project?location=agartala&type=residential",
            status: [
              {
                label: "Completed",
                url: "/project?location=agartala&type=residential&status=completed",
              },
              {
                label: "Ready to Move",
                url: "/project?location=agartala&type=residential&status=ready-to-move-in",
              },
              {
                label: "Ongoing",
                url: "/project?location=agartala&type=residential&status=ongoing",
              },
            ],
          },
        ],
      },
    ],
  },
  { label: "Blogs", url: "/blogs" },
  { label: "Contact Us", url: "/contact" },
];
const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const handleCloseSidebar = () => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && // only when sidebar is open
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveMenu(null);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40  h-screen  transition-all duration-900 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end h-full bg-black/80 w-full">
        <div className="w-[70%] block md:hidden md:w-[50%] bg-white relative text-white ">
          <div className="relative z-10   flex-col h-full justify-between px-10 py-8">
            <div
              className="flex items-center gap-2 text-black md:text-white cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsOpen(false);
                }
              }}
            >
              <IoClose size={24} />
              <span className="text-lg font-medium">CLOSE</span>
            </div>

            <nav className="flex flex-col md:hidden h-full justify-start mt-20 gap-6 text-lg tracking-wide">
              {navItems.map((item: any) => {
                const hasChildren = item.children?.length > 0;

                return (
                  <div key={item.label} className="w-full">
                    {hasChildren ? (
                      <div
                        className="flex justify-start text-xl gap-10 items-center cursor-pointer text-black hover:text-primary transition-colors"
                        onClick={() => {
                          setActiveMenu((prev) =>
                            prev === item.label ? null : item.label
                          );
                          setActiveSubMenu(null);
                        }}
                      >
                        <span>{item.label}</span>
                        <BiChevronRight
                          size={20}
                          className={`transition-transform duration-500 ${
                            activeMenu === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={handleCloseSidebar}
                        className="block hover:text-primary text-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* First Level Dropdown */}
                    {hasChildren && (
                      <div
                        className={`ml-4 transition-all duration-500 ease-in-out overflow-hidden ${
                          activeMenu === item.label
                            ? "max-h-[1000px] opacity-100 mt-2"
                            : "max-h-0  mt-0"
                        }`}
                      >
                        {item.children.map((location: any) => {
                          const isLocationOpen =
                            activeSubMenu === location?.label;
                          return (
                            <div key={location.label}>
                              <div
                                className="flex gap-10 text-black text-lg items-center cursor-pointer hover:text-primary transition-colors"
                                onClick={() =>
                                  setActiveSubMenu((prev) =>
                                    prev === location.label
                                      ? null
                                      : location.label
                                  )
                                }
                              >
                                <span className="text-black">
                                  {location.label}
                                </span>
                                <BiChevronRight
                                  size={18}
                                  className={`transition-transform duration-500 ${
                                    isLocationOpen ? "rotate-90" : ""
                                  }`}
                                />
                              </div>

                              {/* Second Level Dropdown */}
                              <div
                                className={`ml-4 transition-all duration-500 ease-in-out overflow-hidden ${
                                  isLocationOpen
                                    ? "max-h-[500px] opacity-100 mt-1"
                                    : "max-h-0  mt-0"
                                }`}
                              >
                                {location.nestchildren.map((type: any) => (
                                  <Link
                                    key={type.label}
                                    href={type.url}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-black hover:text-primary transition-colors text-base"
                                  >
                                    {type.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div />
          </div>
        </div>
        <div className="hidden pb-10 overflow-y-auto scrollbar-hide md:flex md:max-w-sm bg-white  text-center flex-col  items-start px-5 text-black">
          <Image
            alt="Roodraksh Group Logo"
            src={Appassets.BlackLogo}
            width={1920}
            height={1080}
            priority
            className="w-fit object-contain h-16 mt-10"
          />
          <div
            className="flex items-end absolute left-[96.5%] p-1 border-1 border-gray-500 rounded-full w-fit top-3  z-50  text-xl text-black justify-start  cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsOpen(false);
              }
            }}
          >
            <IoClose
              size={25}
              className="hover:scale-125 transition-all duration-500"
            />
          </div>
          <div className="space-y-8 text-base mt-6">
            <div className="text-start">
              At Roodraksh Group, we have been reshaping the urban landscapes of
              North-Eastern India especially in Guwahati and Agartala through
              meticulously envisioned residential and commercial developments.
            </div>
            <div className="flex-col justify-start items-start flex w-full">
              <h4 className="text-xl flex gap-2 items-center  font-medium text-start  border-b-2 w-full pb-3 mb-2 border-gray-300">
                Locations
                <span className="mt-1">
                  <FaLocationArrow size={20} />
                </span>
              </h4>
              <div className="flex flex-col items-center space-y-2">
                <div className="hidden lg:flex items-center gap-2 text-black/80 cursor-pointer hover:text-black transition-colors">
                  <p className="text-lg font-medium">Guwahati:</p>
                  <p className="text-black/80 text-start">
                    Bhaskar Nagar, RGB ROAD Beside Bhaskar Vidyapeeth School
                    Guwahati - 781003
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-2 cursor-pointer text-black/80 hover:text-black transition-colors">
                  <p className="text-lg font-medium">Agartala:</p>
                  <CiPhone size={20} />
                  <p className="text-black/80 text-start">
                    Dhaleswar, Near Prachya Bharati School North Side Shiv
                    Mandir Agartala - 799007, West Tripura
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start flex w-full">
              <h4 className="text-xl flex gap-2 items-center  font-medium text-start  border-b-2 w-full pb-3  mb-3 border-gray-300">
                Get in Touch
                <span className="mt-1">
                  <BiMessageDetail />
                </span>
              </h4>
              <div className="flex flex-col items-start  space-y-2">
                <a
                  href="tel:+91-9164679164"
                  className="hidden lg:flex items-center gap-2 text-black/80 cursor-pointer hover:text-black transition-colors"
                >
                  <p className="text-lg font-medium">Guwahati:</p>
                  <FiPhoneCall size={20} />
                  <span className="text-bas hover:text-primary transition-all duration-300">
                    +91-9164-67-9164
                  </span>
                </a>
                <a
                  href="tel:+91-9057644644"
                  className="hidden lg:flex items-center gap-2 cursor-pointer text-black/80 hover:text-black transition-colors"
                >
                  <p className="text-lg font-medium">Agartala:</p>
                  <FiPhoneCall size={20} />
                  <span className="text-base hover:text-primary transition-all duration-300">
                    +91-9057-64-4644
                  </span>
                </a>
                <a
                  href="mailto:info@roodraksh.co.in"
                  className="flex items-center justify-start text-start gap-2 cursor-pointer text-black  transition-colors"
                >
                  {" "}
                  <p className="text-lg font-medium">Email:</p>
                  <MdEmail size={20} />
                  <span className="hover:text-primary">
                    {" "}
                    info@roodraksh.co.in
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
