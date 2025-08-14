"use client";
import TextBox from "@/components/Controls/TextBox";
import useAuth from "@/components/CustomHooks/useAuth";
import MainHeading from "@/components/UI/MainHeading";

const EnquireNow = ({ projectsdata, id }: any) => {
  const { EnquiryFormik, EnquiryFormaData } = useAuth({
    name: projectsdata?.title,
  });
  return (
    <div id={id} className="w-full  bg-white px-6 py-5 shadow-xl rounded-md">
      <div className="text-center mb-3">
        <MainHeading
          Title={"Enquire Now"}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-2xl mb-2"
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
            className="w-full cursor-pointer  bg-[#ed2f59] hover:bg-[#ed2f59]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {EnquiryFormik?.isSubmitting ? "Sending...." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquireNow;
