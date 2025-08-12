"use client";

import TextBox from "../Controls/TextBox";
import useAuth from "../CustomHooks/useAuth";

const Modalform = ({ name, title }: { name?: string; title?: any } = {}) => {
  const { EnquiryFormik, EnquiryFormaData } = useAuth({ name });
  return (
    <div className="bg-white p-2 w-full rounded-md">
      <div className="truncate text-center text-xl font-semibold w-full mb-5 mt-2">
        {title}
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

export default Modalform;
