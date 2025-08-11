"use client";

import MainHeading from "@/components/UI/MainHeading";
import { useState } from "react";

const Location = ({ projectsdata, id }: any) => {
  const [activeTab, setActiveTab] = useState(1);
  console.log("data", projectsdata.location);
  const locationData = {
    title: "Location",
    tabs: [
      {
        id: 1,
        name: "Map View",
        isActive: true,
      },
      {
        id: 2,
        name: "Satellite View",
        isActive: false,
      },
      {
        id: 3,
        name: "Live View",
        isActive: false,
      },
    ],
    views: {
      mapView: {
        embedUrl: projectsdata?.location?.map_url,
      },
      satelliteView: {
        embedUrl: projectsdata?.location?.satellite_view,
      },
      liveView: {
        embedUrl: projectsdata?.location?.live_view,
      },
    },
  };

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div
      id={id}
      className="w-full px-4 md:px-10 rounded-md bg-white p-4 sm:p-6 lg:p-8"
    >
      <div className="mb-5 text-center">
        <MainHeading
          Title={"Location"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-3xl mb-2"
          }
        />
      </div>

      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <div className="flex bg-gray-100 rounded-sm gap-[2px]  ">
          {locationData?.tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => handleTabClick(tab?.id)}
              className={`px-3 sm:px-4 lg:px-12 py-3 sm:py-4  text-sm sm:text-base lg:text-lg font-medium  transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:text-white hover:bg-primary "
              }`}
            >
              {tab?.name}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {activeTab === 1 && (
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[500px]">
            {locationData?.views?.mapView?.embedUrl ? (
              <iframe
                src={locationData.views.mapView.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-center text-gray-500 font-medium text-lg">
                Map View URL not available.
              </div>
            )}
          </div>
        )}

        {activeTab === 2 && (
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[500px]">
            {locationData?.views?.satelliteView?.embedUrl ? (
              <iframe
                src={locationData.views.satelliteView.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Satellite View"
                className="rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-center text-gray-500 font-medium text-lg">
                Satellite View URL not available.
              </div>
            )}
          </div>
        )}

        {activeTab === 3 && (
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[500px]">
            {locationData?.views?.liveView?.embedUrl ? (
              <iframe
                src={locationData.views.liveView.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Live View"
                className="rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-center text-gray-500 font-medium text-lg">
                Live View URL not available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
