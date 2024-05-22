import React, { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import Button from "../Components/Button";
import CompanyCard from "../Components/CompanyCard";
import Loading from "./Loading";

function CompaniesCards() {
  // const jobs = [
  //   {
  //     company_name: "ABC Tech Solutions",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Software Engineer",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "80,000 USD",
  //     location_name: "New York City",
  //   },
  //   {
  //     company_name: "XYZ Marketing Agency",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Marketing Specialist",
  //     position: "Remote",
  //     onsite: false,
  //     remote: true,
  //     salary: "60,000 USD",
  //     location_name: "Remote",
  //   },
  //   {
  //     company_name: "123 Finance Corp",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Financial Analyst",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "75,000 USD",
  //     location_name: "Chicago",
  //   },
  //   {
  //     company_name: "Tech Innovators LLC",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Data Scientist",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "90,000 USD",
  //     location_name: "San Francisco",
  //   },
  //   {
  //     company_name: "Global Marketing Solutions",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Digital Marketing Manager",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "70,000 USD",
  //     location_name: "Los Angeles",
  //   },
  //   {
  //     company_name: "Tech Startup Innovations",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Frontend Developer",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "85,000 USD",
  //     location_name: "Austin",
  //   },
  //   {
  //     company_name: "E-commerce Solutions Inc.",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Product Manager",
  //     position: "Remote",
  //     onsite: false,
  //     remote: true,
  //     salary: "95,000 USD",
  //     location_name: "Remote",
  //   },
  //   {
  //     company_name: "Finance Wizards Group",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Investment Analyst",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "80,000 USD",
  //     location_name: "New York City",
  //   },
  //   {
  //     company_name: "Healthcare Innovations Ltd.",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Registered Nurse",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "75,000 USD",
  //     location_name: "Boston",
  //   },
  //   {
  //     company_name: "Creative Solutions Agency",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Graphic Designer",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "65,000 USD",
  //     location_name: "Chicago",
  //   },
  //   {
  //     company_name: "Data Analytics Inc.",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Data Analyst",
  //     position: "Remote",
  //     onsite: false,
  //     remote: true,
  //     salary: "70,000 USD",
  //     location_name: "Remote",
  //   },
  //   {
  //     company_name: "Tech Solutions Group",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "System Administrator",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "85,000 USD",
  //     location_name: "Seattle",
  //   },
  //   {
  //     company_name: "XYZ Logistics Inc.",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Logistics Coordinator",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "60,000 USD",
  //     location_name: "Miami",
  //   },
  //   {
  //     company_name: "Education Innovations Corp.",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Educational Consultant",
  //     position: "Remote",
  //     onsite: false,
  //     remote: true,
  //     salary: "75,000 USD",
  //     location_name: "Remote",
  //   },
  //   {
  //     company_name: "Tech Support Solutions",
  //     company_logo: "https://example.com/logo.png",
  //     job_title: "Technical Support Specialist",
  //     position: "Full-time",
  //     onsite: true,
  //     remote: false,
  //     salary: "55,000 USD",
  //     location_name: "Denver",
  //   },
  // ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API call function
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/company"); // Replace with your API URL
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        const result = await response.json();
        console.log("Company =>1", result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="bg-white ">
      <div className="px-4 5sm:px-14 py-10 w-full container mx-auto">
        <div className="flex justify-between flex-col gap-4 5sm:flex-row  items-center">
          <div className="flex text-3xl gap-2">
            Top <span className="text-sky-600">Companies</span>
          </div>
          <div>
            <Button
              text={"View All"}
              className="border border-sky-600 bg-transparent text-[#426fe9] font-bold w-fit px-8 rounded-[3px] hover:bg-sky-100   py-[8px]"
            />
          </div>
        </div>
        <div className="grid xlg:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  gap-4  mt-10">
          {data.data.slice(0,6).map((item,index) => (
            <div className="cursor-pointer read-only:true" key={index}>
              <CompanyCard item={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompaniesCards;
