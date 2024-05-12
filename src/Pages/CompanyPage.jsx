import React from 'react'
import CompanyCard from '../Components/CompanyCard'
import Button from '../Components/Button'
import { CiLocationOn, CiSearch } from 'react-icons/ci'

function CompanyPage() {
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
  return (
    <div>
         <div className="lg:container mx-auto ">
      <div className="bg-gray-200  px-8  py-6 text-2xl font-inter "> Find</div>
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
          <Button
            text={"Filter"}
            className="flex justify-center bg-gray-200 text-black  w-[100%] items-center  rounded-md px-4 py-4"
          />
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
  )
}

export default CompanyPage