import React from "react";
import Card from "./components/Card";
import Contactform from "./components/Contactform";
import Location from "./components/Location";
import CommanBanner from "@/components/Comman/CommanBanner";
export async function generateMetadata() {
  const title = "Contact Us | Roodraksh Group";
  const description =
    "Get in touch with Roodraksh Group. We'd love to hear from you. Reach out for project inquiries, partnerships, or any real estate-related questions.";
  const url = "https://roodraksh.co.in/contact";
  const image = "/banners/contactbanner.png";

  return {
    title,
    description,
    keywords: [
      "Contact Roodraksh",
      "Roodraksh Group Contact",
      "real estate inquiry",
      "Guwahati real estate",
      "property developers North East India",
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
          alt: "Roodraksh Group Contact",
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

const page = () => {
  return (
    <div className="overflow-hidden">
      <CommanBanner
        Title="Contact us"
        background={"bg-[url('/banners/contactbanner.png')]"}
      />
      {/* <Card /> */}
      <Contactform />
    </div>
  );
};

export default page;
