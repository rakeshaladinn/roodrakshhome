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
import ProjectTabs from "./components/ProjectTabs";
import Basicdetails from "./components/Basicdetails";

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
  return (
    <div className="bg-gray-100 mt-10">
      <Banner projectsdata={projectData} />
      <div className=" sticky top-13 md:top-18 bg-white py-4  z-40 w-full">
        <ProjectTabs />
      </div>

      <div className="flex flex-col xl:flex-row gap-6 px-4 md:px-10 py-10">
        <div className="w-full xl:w-[70%]  flex flex-col gap-6">
          <div className=" xl:hidden block ">
            <EnquireNow projectsdata={projectData} />
          </div>
          <Overview id="overview" projectsdata={projectData} />

          {projectData?.amenities?.length >= 1 && (
            <Amenities id="amenities" projectsdata={projectData} />
          )}

          {projectData?.location?.map_url && (
            <Location id="location" projectsdata={projectData} />
          )}

          {projectData?.layout_plans?.length >= 1 && (
            <LayoutPlans id="layout-plans" projectsdata={projectData} />
          )}
          {projectData?.gallery?.length >= 1 && (
            <ImageGallery id="image-gallery" projectsdata={projectData} />
          )}
        </div>
        <div className="w-full xl:w-[30%]">
          <div className="sticky top-33">
            <Basicdetails projectsdata={projectData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
