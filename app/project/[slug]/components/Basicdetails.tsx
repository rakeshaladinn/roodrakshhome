import MainHeading from "@/components/UI/MainHeading";
import React from "react";
import { FaDownload, FaEnvelope, FaPhone } from "react-icons/fa6";

const Basicdetails = ({ projectsdata }: any) => {
  const enquiryData = {
    contactInfo: {
      phone: {
        label: "Call Us",
        number:
          projectsdata?.city?.toLowerCase() === "guwahati"
            ? "9164-67-9164"
            : "9057-64-4644",
      },
      email: {
        label: "Email Us",
        address: "info@roodraksh.co.in",
      },
    },
  };
  return (
    <div className="bg-white px-5 py-4 rounded-lg">
      <div className="text-center mb-3">
        <MainHeading
          Title={"Connent us"}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-2xl mb-2"
          }
        />
      </div>
      <div className=" space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaPhone className="text-primary text-sm" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              {enquiryData?.contactInfo?.phone?.label}
            </p>
            <a
              href={`tel:${enquiryData?.contactInfo?.phone?.number.replace(
                /-/g,
                ""
              )}`}
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {enquiryData?.contactInfo?.phone?.number}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaEnvelope className="text-primary text-sm" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              {enquiryData?.contactInfo?.email?.label}
            </p>
            <a
              href={`mailto:${enquiryData?.contactInfo?.email?.address}`}
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {enquiryData?.contactInfo?.email?.address}
            </a>
          </div>
        </div>

        {projectsdata?.brochure_url && (
          <div className="mt-8">
            <a
              download
              href={`${projectsdata?.brochure_url}`}
              className="w-full flex items-center justify-center space-x-2 bg-white border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 px-6 rounded-md transition-all duration-200 focus:outline-none  hover:-translate-y-2 cursor-pointer"
            >
              <FaDownload className="text-lg" />
              <span>Download Brochure</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basicdetails;
