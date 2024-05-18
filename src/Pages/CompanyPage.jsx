import React, { useContext, useState } from "react";
import CompanyCard from "../Components/CompanyCard";
import Button from "../Components/Button";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";

function CompanyPage() {
  const [industry, setIndsutry] = useState("");
  const [employee, setEmployee] = useState("");
  const { filter, setFilter } = useContext(LoginContext);
  console.log("Filter Value=>", filter);
  const jobs = [
    {
      company_name: "ABC Tech Solutions",
      company_logo: "https://example.com/logo.png",
      job_title: "Software Engineer",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "80,000 USD",
      location_name: "New York City",
    },
    {
      company_name: "XYZ Marketing Agency",
      company_logo: "https://example.com/logo.png",
      job_title: "Marketing Specialist",
      position: "Remote",
      onsite: false,
      remote: true,
      salary: "60,000 USD",
      location_name: "Remote",
    },
    {
      company_name: "123 Finance Corp",
      company_logo: "https://example.com/logo.png",
      job_title: "Financial Analyst",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "75,000 USD",
      location_name: "Chicago",
    },
    {
      company_name: "Tech Innovators LLC",
      company_logo: "https://example.com/logo.png",
      job_title: "Data Scientist",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "90,000 USD",
      location_name: "San Francisco",
    },
    {
      company_name: "Global Marketing Solutions",
      company_logo: "https://example.com/logo.png",
      job_title: "Digital Marketing Manager",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "70,000 USD",
      location_name: "Los Angeles",
    },
    {
      company_name: "Tech Startup Innovations",
      company_logo: "https://example.com/logo.png",
      job_title: "Frontend Developer",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "85,000 USD",
      location_name: "Austin",
    },
    {
      company_name: "E-commerce Solutions Inc.",
      company_logo: "https://example.com/logo.png",
      job_title: "Product Manager",
      position: "Remote",
      onsite: false,
      remote: true,
      salary: "95,000 USD",
      location_name: "Remote",
    },
    {
      company_name: "Finance Wizards Group",
      company_logo: "https://example.com/logo.png",
      job_title: "Investment Analyst",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "80,000 USD",
      location_name: "New York City",
    },
    {
      company_name: "Healthcare Innovations Ltd.",
      company_logo: "https://example.com/logo.png",
      job_title: "Registered Nurse",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "75,000 USD",
      location_name: "Boston",
    },
    {
      company_name: "Creative Solutions Agency",
      company_logo: "https://example.com/logo.png",
      job_title: "Graphic Designer",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "65,000 USD",
      location_name: "Chicago",
    },
    {
      company_name: "Data Analytics Inc.",
      company_logo: "https://example.com/logo.png",
      job_title: "Data Analyst",
      position: "Remote",
      onsite: false,
      remote: true,
      salary: "70,000 USD",
      location_name: "Remote",
    },
    {
      company_name: "Tech Solutions Group",
      company_logo: "https://example.com/logo.png",
      job_title: "System Administrator",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "85,000 USD",
      location_name: "Seattle",
    },
    {
      company_name: "XYZ Logistics Inc.",
      company_logo: "https://example.com/logo.png",
      job_title: "Logistics Coordinator",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "60,000 USD",
      location_name: "Miami",
    },
    {
      company_name: "Education Innovations Corp.",
      company_logo: "https://example.com/logo.png",
      job_title: "Educational Consultant",
      position: "Remote",
      onsite: false,
      remote: true,
      salary: "75,000 USD",
      location_name: "Remote",
    },
    {
      company_name: "Tech Support Solutions",
      company_logo: "https://example.com/logo.png",
      job_title: "Technical Support Specialist",
      position: "Full-time",
      onsite: true,
      remote: false,
      salary: "55,000 USD",
      location_name: "Denver",
    },
  ];
  const handleCheckboxSalary = (value) => {
    if (salaryRange === value) {
      // Uncheck the checkbox
      setSalaryRange("");
    } else {
      // Check the checkbox and set the salary range
      setSalaryRange(value);
    }
  };
  const handleCheckboxJobType = (value) => {
    if (industry === value) {
      // Uncheck the checkbox
      setIndsutry("");
    } else {
      // Check the checkbox and set the salary range
      setIndsutry(value);
    }
  };
  console.log("indusrt ",industry);
  return (
    <>
      {filter && (
        <div className=" fixed w-[40%] font-inter  top-0 left-0 items-center h-screen  bg-white p-3 overflow-scroll z-50">
          <div className="flex flex-col  gap-5">
            <div className="flex justify-between items-center">
              Filter{" "}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setFilter(!filter);
                }}
              >
                <RxCrossCircled className="text-lg" />
              </div>
            </div>
            <div className="text-sky-500">Industry</div>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-5">
                <li>
                  <label>
                    <input
                      type="radio"
                      value="full-time"
                      checked={industry === "full-time"}
                      onChange={() => handleCheckboxJobType("")}
                    />{" "}
                    All Industry
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="part-time"
                      checked={industry === "Information Technology"}
                      onChange={() => handleCheckboxJobType("Information Technology")}
                    />{" "}
                    Information Technology
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="contractual-time"
                      checked={industry === "Telecommunication"}
                      onChange={() => handleCheckboxJobType("Telecommunication")}
                    />{" "}
                    Telecommunication
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="intern"
                      checked={industry === "Real Estate/Development"}
                      onChange={() => handleCheckboxJobType("Real Estate/Development")}
                    />{" "}
                    Real Estate/Development
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="freelancer"
                      checked={industry === "Pharmaceuticals"}
                      onChange={() => handleCheckboxJobType("Pharmaceuticals")}
                    />{" "}
                    Pharmaceuticals
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="freelancer"
                      checked={industry === "Garments/Textile"}
                      onChange={() => handleCheckboxJobType("Garments/Textile")}
                    />{" "}
                    Garments/Textile
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="freelancer"
                      checked={industry === "Security Service"}
                      onChange={() => handleCheckboxJobType("Security Service")}
                    />{" "}
                    Security Service
                  </label>
                </li>
              </ul>
              <hr />
              <div className="text-sky-500">Employee</div>
              <ul className="flex flex-col gap-5">
                <li>
                  <label>
                    <input
                      type="radio"
                      value="10-100"
                      checked={employee === "10-100"}
                      onChange={() => handleCheckboxSalary("10-100")}
                    />{" "}
                    10 - 100 Memeber
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="10-200"
                      checked={employee === "10-200"}
                      onChange={() => handleCheckboxSalary("10-200")}
                    />{" "}
                    10 - 200 Member
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="10-300"
                      checked={employee === "10-300"}
                      onChange={() => handleCheckboxSalary("10-300")}
                    />{" "}
                    10 - 300 Member
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="10-400"
                      checked={employee === "10-400"}
                      onChange={() => handleCheckboxSalary("10-400")}
                    />{" "}
                    10 - 400 Member
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="10-500"
                      checked={employee === "10-500"}
                      onChange={() => handleCheckboxSalary("10-500")}
                    />{" "}
                    10 - 500 Member
                  </label>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      )}
      <div className="w-[100%] ">
        <div className="lg:container mx-auto  w-[100%] ">
          <div className="bg-gray-200  px-8  py-6 text-2xl font-inter ">
            {" "}
            Find
          </div> 
          {/* <div className="w-full flex items-center gap-3 px-4  my-4 border">
        <div className="w-full border h-full rounded-lg">
          <input type="text" className="w-full px-4 py-6" placeholder="Job title ,Keyword"/>
        </div>
        <div className="w-full border rounded-lg">
          <input type="text" className="w-full px-4 py-6"  placeholder="Enter Location" />
        </div>
        <div className="flex gap-2">
          
          <Button
            text={"Filter"}
            className={"px-6 py-3 text-black bg-gray-300 text-xl font-medium w-[100%]"}
          />
          <Button
            text={"Search Job"}
            className={"px-6 py-3  text-white text-xl font-medium w-[150px]"}
          />
        </div>
      </div> */}
          <div className="flex md:flex-row sm:flex-col font-inter justify-center mt-2 border   md:gap-2 sm:gap-5 bg-white py-4 px-8  rounded-md md:w-full 4sm:w-[100%]">
            <div className="flex justify-start items-center border rounded-lg w-full">
              <div>
                <CiSearch className="text-sky-500 text-4xl" />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  onFocus={true}
                  className="py-2 px-2 outline-none    w-full"
                  placeholder="Company Title,Keyword"
                />
              </div>
            </div>
            <div className="flex justify-start items-center border rounded-lg  w-full">
              <div>
                <CiLocationOn className="text-sky-500 text-4xl" />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="py-2 px-2 w-full outline-none "
                  placeholder="Search Location"
                />
              </div>
            </div>
            <div className="w-full flex gap-2 6sm:flex-row flex-col">
              <div
                className="w-[100%]"
                onClick={() => {
                  setFilter(!filter);
                }}
              >
                <Button
                  text={"Filter"}
                  className="flex justify-center bg-gray-200 text-black  w-[100%] items-center  rounded-md px-4 py-4"
                />
              </div>

              <Button
                text={"Find Company "}
                className="flex justify-center bg-[#0a65cc] text-white  w-[100%] items-center  rounded-md px-2 py-4"
              />
            </div>
          </div>
          <div>
            <div className="grid xlg:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  gap-4 px-6  mt-10">
              {jobs.map((item) => (
                <div className="cursor-pointer read-only:true">
                  <CompanyCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyPage;
