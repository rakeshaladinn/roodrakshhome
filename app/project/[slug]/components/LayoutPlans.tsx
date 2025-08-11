"use client";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa"; // Zoom-in icon
import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import MainHeading from "@/components/UI/MainHeading";
import Slider from "@/components/UI/Slider";

const LayoutPlans = ({ projectsdata, id }: any) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div id={id} className="px-4 md:px-10  bg-white py-10 rounded-md ">
      <div className="text-center mb-8 sm:mb-12">
        <MainHeading
          Title={"Layout Plans"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-3xl mb-2"
          }
        />
      </div>
      <Slider breakpoints={{ lg: 1, md: 1 }} navigation navigatorDots={false}>
        {projectsdata?.layout_plans?.map((item: any, index: any) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item?.title}
              width={1920}
              height={1080}
              priority
              className=" h-full md:h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                {item?.title}
              </h3>
              <p className="text-white text-sm mb-4">
                {item?.subtitle || "Roodraksh Pearl"}
              </p>
              <div
                onClick={(e) => openLightbox(index, e)}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <FaSearchPlus className="text-white text-lg" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={lightboxIndex}
        slides={projectsdata?.layout_plans?.map((item: any) => ({
          src:
            typeof item.image === "string"
              ? item.image
              : item.image?.default?.src || "/placeholder.svg",
        }))}
        plugins={[Thumbnails]}
      />
    </div>
  );
};

export default LayoutPlans;
