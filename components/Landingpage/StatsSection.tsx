import React from "react";

const stats = [
  { number: "850+", label: "Elegant Apartments" },
  { number: "950+", label: "Luxury Houses" },
  { number: "18K+", label: "Satisfied Guests" },
  { number: "2K+", label: "Happy Owners" },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 relative bottom-32 -z-10 py-20">
      <div className=" mt-32 px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-black">{stat.number}</h3>
            <p className="text-sm font-medium text-black uppercase mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
