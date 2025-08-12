"use client";
import TextBox from "@/components/Controls/TextBox";
import useAuth from "@/components/CustomHooks/useAuth";
import MainHeading from "@/components/UI/MainHeading";
import { FaDownload, FaEnvelope, FaPhone } from "react-icons/fa";

const EnquireNow = ({ projectsdata, id }: any) => {
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
    downloadButton: {
      text: "Download Brochure",
      url: "/brochure.pdf",
    },
  };

  const { EnquiryFormik, EnquiryFormaData } = useAuth({
    name: projectsdata?.title,
  });
  return (
    <div
      id={id}
      className="w-full  bg-white px-4 md:px-6 py-8 shadow-xl rounded-md"
    >
      <div className="text-center mb-6">
        <MainHeading
          Title={"Enquire Now"}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-3xl mb-2"
          }
        />
      </div>
      <form
        onSubmit={EnquiryFormik?.handleSubmit}
        className=" flex  flex-col gap-y-4 w-full"
      >
        {EnquiryFormaData?.map((item: any, index: any) => (
          <TextBox
            labelStyle={"text-lg "}
            key={index}
            placeholder={item?.placeholder}
            className="`w-full  px-4  py-3 border rounded-lg focus:outline-none text-sm border-gray-200 focus:border-[#ed2f59] "
            id={item.id}
            type={item.type}
            formik={EnquiryFormik}
            disabled={item.disabled}
            mainStyle={"w-full"}
          />
        ))}
        <div className="text-center">
          <button
            type="submit"
            className="w-fit cursor-pointer  bg-[#ed2f59] hover:bg-[#ed2f59]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {EnquiryFormik?.isSubmitting ? "Sending...." : "Send Message"}
          </button>
        </div>
      </form>
      <div className="mt-12 space-y-6">
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

        {/* Email */}
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

        {/* Download Button */}
        {projectsdata?.brochure_url && (
          <div className="mt-8">
            <a
              download
              href={`${projectsdata?.brochure_url}`}
              className="w-fit flex items-center justify-center space-x-2 bg-white border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 px-6 rounded-md transition-all duration-200 focus:outline-none  hover:-translate-y-2 cursor-pointer"
            >
              <FaDownload className="text-lg" />
              <span>{enquiryData.downloadButton.text}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquireNow;
