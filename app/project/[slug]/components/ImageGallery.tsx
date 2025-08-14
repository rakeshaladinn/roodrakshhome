"use client";

import MainHeading from "@/components/UI/MainHeading";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({ projectsdata, id }: any) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  console.log("ImageData", projectsdata);
  const openLightbox = (index: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div id={id} className="w-full px-4 md:px-10  p-4 bg-white rounded-md">
      <div className="text-center mb-8 sm:mb-12">
        <MainHeading
          Title={"Image Gallery"}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize lg:text-3xl mb-2"
          }
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-4 sm:gap-6">
        {projectsdata?.gallery?.map((item: any, index: any) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100"
          >
            <Image
              src={item?.image || "/placeholder.svg"}
              alt={item?.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1">
                      {item?.title}
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-tight">
                      {projectsdata?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 cursor-pointer"
                onClick={(e) => openLightbox(index, e)}
              >
                <FaMagnifyingGlassPlus className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={lightboxIndex}
        slides={projectsdata?.gallery?.map((item: any) => ({
          src: item.image,
        }))}
        plugins={[Thumbnails]}
      />
    </div>
  );
}
