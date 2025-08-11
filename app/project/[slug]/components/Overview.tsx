"use client";
import MainHeading from "@/components/UI/MainHeading";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaExpandArrowsAlt, FaHouseDamage } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa6";
import { GiBlockHouse, GiFamilyHouse } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { LiaNewspaper } from "react-icons/lia";

const OverviewCard = ({
  title,
  value,
  icon: Icon,
  index,
}: {
  title: string;
  value: string | number;
  icon: any;
  index: number;
}) => {
  return (
    <div className="group hover:shadow-md shadow-sm transition-all duration-300 hover:-translate-y-1 border-0  bg-gray-50 rounded-lg">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12  rounded-full bg-pink-100 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              {title}
            </p>
            <p className="  text-xs line-clamp-2 h-4 md:h-8 font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
              {value || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Overview = ({ projectsdata }: any) => {
  const overview =
    projectsdata?.status == "Completed"
      ? [
          { Title: "Status", value: projectsdata?.status, icon: GrStatusGood },
          {
            Title: "Type",
            value: projectsdata?.type,
            icon: GiFamilyHouse,
          },
          { Title: "City", value: projectsdata?.city, icon: CiLocationOn },
        ]
      : [
          { Title: "Status", value: projectsdata?.status, icon: GrStatusGood },
          {
            Title: "Area",
            value: projectsdata?.more_details?.area,
            icon: FaChartArea,
          },
          { Title: "City", value: projectsdata?.city, icon: CiLocationOn },
          {
            Title: "Type",
            value: projectsdata?.type,
            icon: GiFamilyHouse,
          },
          {
            Title: "Total Spaces",
            value: projectsdata?.more_details?.total_spaces,
            icon: FaHouseDamage,
          },
          {
            Title: "Total Towers",
            value: projectsdata?.more_details?.total_towers,
            icon: GiBlockHouse,
          },
          {
            Title: "Flat Sizes",
            value: projectsdata?.more_details?.flat_sizes,
            icon: FaExpandArrowsAlt,
          },
          {
            Title: "RERA No",
            value: projectsdata?.more_details?.rera_no,
            icon: LiaNewspaper,
          },
          {
            Title: "BHK",
            value: projectsdata?.more_details?.bhk,
            icon: FaBed,
          },
        ];
  return (
    <div className="bg-white py-10 px-4 md:px-10  w-full rounded-md">
      <div className="mb-5 text-center">
        <MainHeading
          Title={"Overview"}
          Lines={true}
          BlackColor={true}
          ClassNameTitle={
            "text-center justify-center capitalize text-2xl lg:text-3xl"
          }
        />
      </div>
      <div className=" leading-7 md:leading-8 text-center text-gray-600 mb-12">
        <p>
          <strong className="text-primary ">{projectsdata?.title}&nbsp;</strong>
          {projectsdata?.description}
        </p>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {overview.map((item, index) => (
          <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
            <OverviewCard
              title={item.Title}
              value={item.value}
              icon={item.icon}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
