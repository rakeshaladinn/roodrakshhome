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
      const yOffset = -120; // adjust to match your tab/header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white shadow-lg px-6 py-4 flex flex-wrap justify-center gap-10">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleScroll(tab.id)}
          className="text-[#1d3557] text-sm font-semibold tracking-widest hover:text-primary cursor-pointer transition-colors duration-200"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
