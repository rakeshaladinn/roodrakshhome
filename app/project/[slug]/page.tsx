"use server";
import React from "react";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Amenities from "./components/Amenties";
import Location from "./components/Location";
import NearbyPlaces from "./components/NearbyPlaces";
import ImageGallery from "./components/ImageGallery";
import AddressBar from "./components/AddressBar";
import EnquireNow from "./components/EnquireNow";
import LayoutPlans from "./components/LayoutPlans";
import { projects } from "@/constants/Data";
import NotFound from "@/app/not-found";

const Page = async ({ params }: any) => {
  const { slug } = await params;
  const projectData: any = projects?.find((item) => item?.slug === slug);
  if (!projectData) {
    return (
      <div>
        {" "}
        <NotFound />{" "}
      </div>
    );
  }
  console.log("projectDataprojectData", projectData);
  return (
    <div className="bg-gray-100 overflow-hidden">
      <Banner projectsdata={projectData} />
      <div className="flex flex-col xl:flex-row gap-6 px-4 xl:px-8 py-10 relative">
        <div className="w-full xl:w-[70%] flex flex-col gap-6 ">
          <Overview projectsdata={projectData} />
          {projectData?.amenities?.length > 1 && (
            <Amenities projectsdata={projectData} />
          )}
          {projectData?.location?.map_url && (
            <Location projectsdata={projectData} />
          )}
          {projectData?.location?.address && (
            <AddressBar projectsdata={projectData} />
          )}
          {projectData?.nearby_places?.length > 1 && (
            <NearbyPlaces projectsdata={projectData} />
          )}
          {projectData?.layout_plans?.length > 1 && (
            <LayoutPlans projectsdata={projectData} />
          )}
          {projectData?.gallery?.length > 1 && (
            <ImageGallery projectsdata={projectData} />
          )}
        </div>
        <div className="w-full xl:w-[30%] flex flex-col gap-6 ">
          {/* {projectData?.status != "Completed" && ( */}
          <EnquireNow projectsdata={projectData} />
          {/* )} */}
          {/* <HomeLoanCalculator /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
