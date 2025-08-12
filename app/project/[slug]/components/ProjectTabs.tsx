"use client";

export default function ProjectTabs() {
  const tabs = [
    { label: "OVERVIEW", id: "overview" },
    { label: "AMENITIES", id: "amenities" },
    { label: "LOCATION", id: "location" },
    { label: "LAYOUT PLANS", id: "layout-plans" },
    { label: "IMAGE GALLERY", id: "image-gallery" },
    { label: "ENQUIRY & BROCHURE", id: "enquiry" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // adjust to match your tab/header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white shadow-lg px-2 py-4 flex flex-wrap justify-center gap-4 lg:gap-7  xl:gap-12">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleScroll(tab.id)}
          className="text-black text-sm font-semibold tracking-widest hover:text-primary cursor-pointer transition-colors duration-200"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
