"use client";
import React from "react";
import Modalform from "../Comman/Modalform";

const stats = [
  { number: "1200+", label: "Homes Delivered " },
  { number: "20+", label: "Years of Experience " },
  { number: "15+", label: "Lakh Sq.Ft. Constructed" },
  { number: "3+", label: "Lakh Sq. Ft. Under Construction " },
];

const StatsSection = () => {
  return (
    <section className="bg-white xl:bg-gray-100 relative -z-10 py-14">
      <div className="xl:grid hidden mt-20 px-4  grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-black">{stat.number}</h3>
            <p className="text-sm font-medium text-black uppercase mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-14 px-5 xl:hidden block bg-white">
        <Modalform title={"Enquire Now"} />
      </div>
    </section>
  );
};

export default StatsSection;
