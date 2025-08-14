"use client";

import { useEffect, useState } from "react";

export default function ProjectTabs() {
  const tabs = [
    { label: "OVERVIEW", id: "overview" },
    { label: "AMENITIES", id: "amenities" },
    { label: "LOCATION", id: "location" },
    { label: "LAYOUT PLANS", id: "layout-plans" },
    { label: "IMAGE GALLERY", id: "image-gallery" },
  ];

  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -130;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white px-2 flex flex-wrap justify-center gap-4 lg:gap-7 xl:gap-12 sticky top-0 z-50">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleScroll(tab.id)}
          className={`relative text-base font-semibold tracking-widest cursor-pointer transition-all duration-200 
            ${
              activeTab === tab.id
                ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
                : "hover:text-primary"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
