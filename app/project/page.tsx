"use server";
import React from "react";
import ProjectsGrid from "./components/Projectsgrid";
import { projects } from "@/constants/Data";
import CommanBanner from "@/components/Comman/CommanBanner";
export async function generateMetadata() {
  const title = "Roodraksh Group Projects– All Projects";
  const description =
    "Explore ongoing, ready-to-move, and completed residential and commercial projects by Roodraksh Group in Guwahati, Agartala, and across North East India.";
  const url = "https://roodraksh.co.in/projects";
  const image = "/banners/projectbanner.png";

  return {
    title,
    description,
    keywords: [
      "Roodraksh Projects",
      "real estate Guwahati",
      "commercial projects Agartala",
      "residential property North East India",
      "ready to move projects",
      "ongoing projects",
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
          alt: "Roodraksh Project Banner",
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

const Page = async ({ searchParams }: any) => {
  const { location, type, search, status }: any = await searchParams;
  console.log("status", status);
  const normalize = (str: any) =>
    str?.toLowerCase().replace(/[\s-]/g, "").trim();
  const projectsdata = projects?.filter((item) => {
    const matchCity = location
      ? item?.city?.toLowerCase() === location.toLowerCase()
      : true;

    const matchType = type
      ? item?.type?.toLowerCase().includes(type.toLowerCase())
      : true;

    const matchSearch = search
      ? item?.title?.toLowerCase().includes(search.toLowerCase()) ||
        item?.slug?.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchStatus = status
      ? normalize(item?.status) === normalize(status)
      : true;
    console.log("object", normalize(item?.status), normalize(status));
    return matchCity && matchType && matchSearch && matchStatus;
  });
  const ongoingprojects = projects.filter(
    (item: any) => item?.status?.toLowerCase() === "ongoing"
  );
  return (
    <div>
      {projectsdata?.length > 0 ? (
        <>
          <CommanBanner
            Title="Projects"
            background={"bg-[url('/banners/projectbanner.png')]"}
          />
          <ProjectsGrid projects={projectsdata} />
        </>
      ) : (
        <div>
          <CommanBanner
            Title=" Ongoing Projects"
            background={"bg-[url('/banners/projectbanner.png')]"}
          />
          <ProjectsGrid projects={ongoingprojects} />
        </div>
      )}
    </div>
  );
};

export default Page;
