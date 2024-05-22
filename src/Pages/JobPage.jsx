import React, { useContext, useEffect, useState } from "react";
import Button from "../Components/Button";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import JobCard from "../Components/JobCard";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import Loading from "./Loading";

function JobPage() {
  const [jobsData, setJobsData] = useState([]);
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState(0);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { filter, setFilter } = useContext(LoginContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const jobResponse = await fetch(
          `http://localhost:3000/api/job/search?jobType=${jobType}&jobLevel=${category}&numFilter=minSalary>=${salaryRange}`
        );
        const companyResponse = await fetch(
          "http://localhost:3000/api/company"
        );
        const jobData = await jobResponse.json();
        console.log("JobData=>1",jobData);
        const companyData = await companyResponse.json();
        setData(jobData.data);
        setJobsData(jobData.data);
        console.log("JobData=>2",jobsData);
        setCompanies(companyData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category, jobType, salaryRange]);
  function handleSearchClick() {
    console.log("Search =>", search);
    if (search === "") {
      setJobsData(data);
      return;
    } else {
      const filterBySearch =
        Array.isArray(jobsData) &&
        jobsData.filter((item) => {
          console.log(item);
          if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        });
      setJobsData(filterBySearch);
      setSearch("");
      // setJobsData(data)
    }
  }
  // const resetSearch = () => {
  //   setSearch(""); // Clear the search input
  //   fetchData(); // Restore the original full data set
  // };
  const findCompanyNameById = (companyId) => {
    const company = companies.filter((company) => company.id !== companyId);
    // console.log("Company ID=>", company);
    return company ? company[0].name : "Not Found";
  };
  const filteredJobs = jobsData.filter((job) =>
    companies.some((company) => company.id === job.company)
  );
  // console.log("ID=>", filteredJobs);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
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
    if (jobType === value) {
      // Uncheck the checkbox
      setJobType("");
    } else {
      // Check the checkbox and set the salary range
      setJobType(value);
    }
  };
  const handleCheckboxCategory = (value) => {
    if (category === value) {
      // Uncheck the checkbox
      setCategory("");
    } else {
      // Check the checkbox and set the salary range
      setCategory(value);
    }
  };

  return (
    <>
      {filter && (
        <div className=" fixed w-[100%] font-inter bg-slate-900/80  backdrop-brightness-50  top-0 left-0 items-center h-screen    overflow-scroll z-50">
          <div className="flex flex-col overflow-scroll w-[300px] p-3 bg-white  gap-5">
            <div className="flex justify-between items-center text-xl">
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
            <div className="text-sky-500">Job Type</div>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-5">
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Full Time"
                      checked={jobType === "Full Time"}
                      onChange={() => handleCheckboxJobType("Full Time")}
                    />{" "}
                    Full Time
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Part Time"
                      checked={jobType === "Part Time"}
                      onChange={() => handleCheckboxJobType("Part Time")}
                    />{" "}
                    Part Time
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="contractual-time"
                      checked={jobType === "Contractual"}
                      onChange={() => handleCheckboxJobType("Contractual")}
                    />{" "}
                    Contractual
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Internship"
                      checked={jobType === "Internship"}
                      onChange={() => handleCheckboxJobType("Internship")}
                    />{" "}
                    Internship
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Freelance"
                      checked={jobType === "Freelance"}
                      onChange={() => handleCheckboxJobType("Freelancer")}
                    />{" "}
                    Freelance
                  </label>
                </li>
              </ul>
              <hr />
              <div className="text-sky-500">Salary</div>
              <ul className="flex flex-col gap-5">
                <li>
                  <label>
                    <input
                      type="radio"
                      value={30000}
                      checked={salaryRange === 30000}
                      onChange={() => handleCheckboxSalary(30000)}
                    />{" "}
                    $10 - $30000
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value={60000}
                      checked={salaryRange === 60000}
                      onChange={() => handleCheckboxSalary(60000)}
                    />{" "}
                    $30000 - $60000
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value={90000}
                      checked={salaryRange === 90000}
                      onChange={() => handleCheckboxSalary(90000)}
                    />{" "}
                    $60000 - $90000
                  </label>
                </li>
                {/* <li>
                  <label>
                    <input
                      type="radio"
                      value="10-400"
                      checked={salaryRange === "10-400"}
                      onChange={() => handleCheckboxSalary("10-400")}
                    />{" "}
                    $10 - $400
                  </label>
                </li> */}
                {/* <li>
                  <label>
                    <input
                      type="radio"
                      value="10-500"
                      checked={salaryRange === "10-500"}
                      onChange={() => handleCheckboxSalary("10-500")}
                    />{" "}
                    $10 - $500
                  </label>
                </li> */}
              </ul>
              <hr />
              <div className="text-sky-500">Job Level</div>
              <ul className="flex flex-col gap-5">
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Senior"
                      checked={category === "Senior"}
                      onChange={() => handleCheckboxCategory("Senior")}
                    />{" "}
                    Senior
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Mid-Level"
                      checked={category === "Mid-Level"}
                      onChange={() => handleCheckboxCategory("Mid-Level")}
                    />{" "}
                    Mid-Level
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Fresher"
                      checked={category === "Fresher"}
                      onChange={() => handleCheckboxCategory("Fresher")}
                    />{" "}
                    Fresher
                  </label>
                </li>
              </ul>
            </div>
            <div
              className="p-3 bg-gray-300 rounded-lg flex justify-center font-inter font-medium cursor-pointer"
              onClick={() => {
                setJobType("");
                setCategory("");
                setSalaryRange("");
              }}
            >
              Reset All Filter
            </div>
          </div>
        </div>
      )}
      <div className="lg:container mx-auto ">
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
                value={search}
                className="py-2 px-2 outline-none  w-full"
                placeholder="Job Title,Keyword"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="flex justify-start items-center border rounded-lg  w-full">
            <div>
              <CiLocationOn className="text-sky-500 text-4xl" />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="py-2 px-2 w-full outline-none "
                placeholder="Job Title,Keyword"
              />
            </div>
          </div> */}
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
            <div className="w-full" onClick={handleSearchClick}>
              <Button
                text={"Find Job "}
                className="flex justify-center bg-[#0a65cc] text-white  w-[100%] items-center  rounded-md px-2 py-4"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid xlg:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  gap-4 px-6  mt-10">
            {jobsData.map((job, index) => (
              <JobCard
                key={index}
                obj={job}
              />
            ))}
            {/* {jobsData
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                <JobCard
                  obj={val}
                  company={findCompanyNameById(val.company)}
                />;
              })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPage;
