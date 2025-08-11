"use server";
import { BlogsData } from "@/constants/Data";
import LeftBlog from "./components/LeftBlog";
import CommanBanner from "@/components/Comman/CommanBanner";

const page = async ({ params }: any) => {
  const { slug } = await params;
  const filterdata = BlogsData?.find((item) => item?.slug === slug);
  if (!filterdata) {
    return <div className="p-10 text-center text-red-600">Blog not found.</div>;
  }

  return (
    <div className="overflow-hidden">
      <CommanBanner
        Title="Blog Details"
        background={"bg-[url('/banners/blogbanner.png')]"}
      />
      {/* <div className="flex flex-col xl:flex-row gap-6 px-4 xl:px-8  bg-gray-50 pt-10 lg:pt-0">
        <div className="w-full xl:w-[70%]  gap-6">
          <LeftBlog filterdata={filterdata} />
        </div>
        <div className="w-full xl:w-[30%]">
          <RightBlog projects={Lastestprojects} />
        </div>
      </div> */}
    </div>
  );
};

export default page;
