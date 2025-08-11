"use server";
import CommanBanner from "@/components/Comman/CommanBanner";
import LatestBlog from "./[slug]/components/LatestBlog";
import Blogcard from "./components/Blogcard";
import { BlogsData } from "@/constants/Data";
export async function generateMetadata() {
  const title = "Blogs | Roodraksh";
  const description =
    "Discover insights, updates, and articles on real estate, lifestyle, and Roodraksh Group's ongoing and completed projects across North East India.";
  const url = "https://roodraksh.co.in/blogs";
  const image = "/banners/blogbanner.png";

  return {
    title,
    description,
    keywords: [
      "Roodraksh blog",
      "real estate news Guwahati",
      "property updates Agartala",
      "Roodraksh projects",
      "luxury lifestyle blogs",
    ],
    metadataBase: new URL("https://roodraksh.co.in"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Roodraksh",
      images: [
        {
          url: image,
          width: 1200,
          height: 627,
          alt: "Roodraksh Blog Banner",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "@roodraksh",
      creator: "@roodraksh",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = async ({ searchParams }: any) => {
  const params: any = await searchParams;
  const categorySlug = await params?.category;
  const blogdata = BlogsData;

  return (
    <div className="overflow-hidden">
      <CommanBanner
        Title="Blogs"
        background={"bg-[url('/banners/blogbanner.png')]"}
      />
      <div className=" bg-gray-50 py-10 md:py-20 px-4  lg:px-8 flex flex-col lg:flex-row gap-8 ">
        <div className="w-full lg:w-[70%] space-y-12  md:space-y-16">
          {blogdata?.map((item: any, index: any) => (
            <div key={index} className="w-full ">
              <Blogcard item={item} index={index} />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[30%] flex flex-col gap-6">
          <LatestBlog />
          {/* <TopRated projects={Lastestprojects} /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
