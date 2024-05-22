import React from "react";
import logo from "../assets/Images/comlogo2.png";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function CompanyCard({ item }) {
  const navigate = useNavigate();
  const handleID = (ID) => {
    navigate("/companydetail", { state: { id: ID } });
    console.log("i am clicked", ID);
  };
  return (
    <div
      className="  hover:shadow-2xl h-full font-inter px-6 py-5  flex flex-col gap-3 border rounded-2xl  hover:border-sky-600  ease-in duration-200  delay-100 transition-all hover:-translate-y-[4px]"
      onClick={() => handleID(item?.id)}
    >
      <div>
        <img src={item?.picture} alt="" className="w-14" />
      </div>
      {/* <div className="text-xl font-medium">{item.name}</div> */}
      <div className="flex items-center gap-1 text-gray-400">
        <CiLocationOn className="text-base" /> {item?.locations}
      </div>
      <div className="flex  gap-2 ">
        <div className="bg-[#e7f0fa] text-[12px] w-fit py-[1px] px-[6px] rounded-full">
          {item?.techStack}
        </div>
        <div className="bg-[#e7f0fa] text-[12px] w-fit py-[1px] px-[6px] rounded-full">
          {item?.employees}
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
