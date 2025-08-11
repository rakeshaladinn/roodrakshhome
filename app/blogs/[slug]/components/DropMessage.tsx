"use client";
import MainHeading from "@/Components/Common/MainHeading";
import TextBox from "@/Components/Controls/TextBox";
import useAuth from "@/Components/CustomHooks/useAuth";

import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const DropMessage = () => {
  const { EnquiryFormik, EnquiryFormaData } = useAuth();
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 w-full">
      <div className="flex items-center justify-center mb-6 w-full">
        <MainHeading
          Title={"Drop Message for Book"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={"text-center justify-center capitalize lg:text-xl"}
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
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#ed2f59] hover:bg-[#ed2f59]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {EnquiryFormik?.isSubmitting ? "Sending...." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default DropMessage;
