import { FaMapLocationDot } from "react-icons/fa6";

const AddressBar = ({ projectsdata }: any) => {
  const address = [
    {
      id: 1,
      name: projectsdata?.location?.address,
    },
  ];

  return (
    <div className="w-full  rounded-lg mx-auto bg-white px-4 md:px-10 py-4 md:py-10">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-pink-100 rounded-full flex items-center justify-center">
            <FaMapLocationDot className="text-primary text-xl sm:text-2xl lg:text-3xl" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="w-1 h-6 sm:h-8 bg-primary mr-3 sm:mr-4"></div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary tracking-wide uppercase">
              Address
            </h1>
          </div>

          <div className="ml-4 sm:ml-5">
            {address.map((item) => (
              <div key={item.id}>
                <p className="text-sm sm:text-base lg:text-medium font-normal text-gray-700 leading-relaxed">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
