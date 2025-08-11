"use client";

import MainHeading from "@/components/UI/MainHeading";
import { useState, useMemo } from "react";
import {
  FaShoppingBag,
  FaUniversity,
  FaSchool,
  FaPaw,
  FaHospital,
  FaBus,
  FaLandmark,
  FaHotel,
  FaChevronRight,
} from "react-icons/fa";

const iconMap: Record<string, any> = {
  Market: FaShoppingBag,
  Transport: FaBus,
  Hospitals: FaHospital,
  Schools: FaSchool,
  University: FaUniversity,
  Zoo: FaPaw,
  Museum: FaLandmark,
  Hotel: FaHotel,
  Others: FaLandmark,
};

export default function NearbyPlaces({ projectsdata }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { nearby_places } = projectsdata;
  const categories = useMemo(() => {
    const all = [
      { id: "all", label: "All" },
      ...nearby_places.map((cat: any) => ({
        id: cat.title.toLowerCase(),
        label: cat.title,
      })),
    ];
    return all;
  }, [nearby_places]);

  const allPlaces = useMemo(() => {
    return nearby_places.flatMap((category: any) =>
      category?.places?.map((place: any, index: number) => ({
        id: `${category?.title}-${index}`,
        name: place?.title,
        distance: place?.distance,
        category: category?.title,
      }))
    );
  }, [nearby_places]);
  const filteredPlaces =
    selectedCategory === "all"
      ? allPlaces
      : allPlaces?.filter(
          (place: any) =>
            place?.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="w-full bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
      {/* Header */}
      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <MainHeading
          Title={"Near By places"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-3xl mb-2"
          }
        />
      </div>

      {/* Tabs */}
      <div className="pb-6">
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
          {categories.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category?.id
                  ? "bg-primary text-white shadow-md transform scale-105"
                  : "bg-white text-gray-700 hover:text-white hover:bg-primary border border-gray-200 cursor-pointer"
              }`}
            >
              {category?.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-4 sm:space-y-6 h-96 overflow-y-auto p-2 md:p-4 custom-scrollbar">
        {filteredPlaces?.length > 0 ? (
          filteredPlaces.map((place: any) => {
            const IconComponent = iconMap[place?.category] || FaLandmark;

            return (
              <div
                key={place.id}
                className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] shadow-md hover:shadow-lg cursor-pointer group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-6">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base leading-tight truncate sm:whitespace-normal">
                      {place?.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {place?.distance}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-sm sm:text-base">
              No places found in this category
            </p>
          </div>
        )}
      </div>

      {filteredPlaces?.length > 0 && (
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Showing {filteredPlaces?.length}{" "}
            {filteredPlaces.length === 1 ? "place" : "places"}
            {selectedCategory !== "all" &&
              ` in ${categories.find((c) => c.id === selectedCategory)?.label}`}
          </p>
        </div>
      )}
    </div>
  );
}
