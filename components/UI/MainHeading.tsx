import React from "react";

interface MainHeading {
  Title?: any;
  Subtitle?: any;
  Description?: any;
  ClassNameTitle?: any;
  Lines?: any;
  ClassNameDescription?: any;
  BlackColor?: any;
}
const MainHeading = ({
  Title,
  Subtitle,
  Description,
  Lines,
  ClassNameTitle,
  ClassNameDescription,
  BlackColor = false,
}: MainHeading) => {
  return (
    <div className="flex flex-col gap-2">
      {Title && (
        <div className={`flex items-center gap-2 mb-1 ${ClassNameTitle}`}>
          {Lines && (
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[1.5px] bg-black"></span>
              <span className="w-7 h-[1.5px] bg-primary"></span>
            </div>
          )}
          <span
            className={` ${ClassNameTitle} ${
              BlackColor ? "text-zinc-800" : " text-primary"
            } font-medium capitalize text-xl w-fit `}
          >
            {Title}
          </span>
          {Lines && (
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[1.5px] bg-black"></span>
              <span className="w-7 h-[1.5px] bg-primary"></span>
            </div>
          )}
        </div>
      )}

      {Subtitle && (
        <h4
          className={`${ClassNameDescription} capitalize text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-10  md:leading-12 font-semibold "`}
        >
          {Subtitle}
        </h4>
      )}
      {Description && (
        <p
          className={`text-base md:text-lg font-normal text-black/60 mt-2 ${ClassNameDescription}`}
        >
          {Description}
        </p>
      )}
    </div>
  );
};

export default MainHeading;
