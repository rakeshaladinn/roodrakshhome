"use client";
import { Appassets } from "@/constants/Appassets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

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

  return (
    <div
      className={`fixed inset-0 z-40 overflow-y-hidden h-screen bg-center bg-no-repeat md:bg-[url('/Banner01.png')] bg-cover transition-all duration-900 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end h-full w-full">
        <div className="w-[70%] block md:hidden md:w-[50%] bg-white relative text-white  md:bg-center md:bg-no-repeat md:bg-[url('/Banner02.png')] md:bg-cover">
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

            <nav
              ref={wrapperRef}
              className="flex flex-col md:hidden h-full justify-start mt-20 gap-6 text-lg tracking-wide"
            >
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
                          className={`transition-transform ${
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

                    {hasChildren && activeMenu === item.label && (
                      <div className="ml-4 overflow-hidden mt-2 space-y-2">
                        {item.children.map((location: any) => {
                          const isLocationOpen =
                            activeSubMenu === location?.label;
                          return (
                            <div key={location.label}>
                              <div
                                className="flex gap-10 text-black text-lg items-center cursor-pointer hover:text-primary"
                                onClick={() =>
                                  setActiveSubMenu((prev) =>
                                    prev === location.label
                                      ? null
                                      : location.label
                                  )
                                }
                              >
                                <span>{location.label}</span>
                                <BiChevronRight
                                  size={18}
                                  className={`transition-transform ${
                                    isLocationOpen ? "rotate-90" : ""
                                  }`}
                                />
                              </div>
                              {isLocationOpen && (
                                <div className="ml-4 mt-1 space-y-2 text-base text-black overflow-hidden">
                                  {location.nestchildren.map((type: any) => (
                                    <div key={type.label}>
                                      <Link
                                        href={type.url}
                                        onClick={() => setIsOpen(false)}
                                        className="block hover:text-primary"
                                      >
                                        {type.label}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              )}
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
        <div className="hidden md:flex md:w-[40%] bg-[#fdf9f8] text-center flex-col justify-center items-center px-10 text-black">
          <div
            className="flex items-end absolute right-2 text-sm top-2 text-black justify-end w-full cursor-pointer hover:opacity-80 transition-opacity"
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
          </div>
          <Image
            alt="Roodraksh Group Logo"
            src={Appassets.Logo}
            width={1920}
            height={1080}
            priority
            className="w-full object-contain h-16"
          />
          <div className="space-y-10 text-base mt-10">
            <div>
              <h4 className="text-xl font-medium mb-1">Locations</h4>
              <div className="flex gap-3">
                {" "}
                <p className="text-lg font-medium">Guwahati:</p>
                <p className="text-black/80 text-start">
                  Bhaskar Nagar, RGB ROAD Beside Bhaskar Vidyapeeth School
                  Guwahati - 781003
                </p>
              </div>
              <div className="flex gap-5">
                <p className="text-lg font-medium">Agartala:</p>
                <p className="text-black/80 text-start">
                  Dhaleswar, Near Prachya Bharati School North Side Shiv Mandir
                  Agartala - 799007, West Tripura
                </p>
              </div>
            </div>
            <div className="flex-col flex">
              <h4 className="text-xl font-medium mb-1">Phone Support</h4>
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="tel:+91-9164679164"
                  className="hidden lg:flex items-center gap-2 text-black/80 cursor-pointer hover:text-black transition-colors"
                >
                  <p className="text-lg font-medium">Guwahati:</p>
                  <CiPhone size={20} />
                  <span className="text-base  hover:text-primary transition-all duration-300">
                    +91-9164-67-9164
                  </span>
                </a>
                <a
                  href="tel:+91-9057644644"
                  className="hidden lg:flex items-center gap-2 cursor-pointer text-black/80 hover:text-black transition-colors"
                >
                  <p className="text-lg font-medium">Agartala:</p>
                  <CiPhone size={20} />
                  <span className="text-base hover:text-primary transition-all duration-300">
                    +91-9057-64-4644
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-1">Connect With Us</h4>
              <a
                href="mailto:info@roodraksh.co.in"
                className="text-black/80 hover:text-primary transition-all duration-300"
              >
                info@roodraksh.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
