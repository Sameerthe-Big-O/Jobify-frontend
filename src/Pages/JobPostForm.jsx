import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { RxCrossCircled } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobPostForm() {
  const [tagValue, setTagValue] = useState("");
  const [responsibilityValue, setResponsibilityValue] = useState("");
  const [benefitValue, setBenefitValue] = useState("");
  const [requiredSkillValue, setRequiredSkillValue] = useState("");
  const [niceToHaveValue, setNiceToHaveValue] = useState("");
  const [profileExists, setProfileExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [companyProfile, setCompanyProfile] = useState(null);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    maxSalary: 0,
    minSalary: 0,
    experience: 0,
    jobType: "",
    country: "",
    description: "",
    dueDate: "",
    jobLevel: "",
    category: "",
    responsibilities: [],
    benefits: [],
    requiredSkills: [],
    niceToHave: [],
    city: "",
    companyId: "664789e697ecd60ed27b8be9",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const companyId = JSON.parse(token);
        console.log("Com ID=>", companyId.data.id);
        setFormData((prev) => ({
          ...prev,
          companyId: companyId.data.id,
        }));

        // const fetchData = async () => {
        //   try {
        //     const jobResponse = await fetch("http://localhost:3000/api/company");
        //     const jobData = await jobResponse.json();
            
            
        //     setData(jobData.data);
        //     setLoading(false);

        //     // Filter data based on companyId
        //     const filteredData = jobData.data.filter(item => item.id === companyId.data.id);
        //     console.log("Filter=>", filteredData);
        //     if (filteredData.length > 0) {
        //       setProfileExists(true);
        //       setCompanyProfile(filteredData[0]);
        //     } else {
        //       setProfileExists(false);
        //     }
        //   } catch (error) {
        //     console.error("Error fetching data:", error);
        //   }
        // };

        // fetchData();
      } catch (error) {
        console.error("Failed to parse token", error);
      }
    }
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       const companyId = JSON.parse(token);
  //       console.log("Company Id=>", companyId.data.id);
  //       setFormData((prev) => ({
  //         ...prev,
  //         companyId: companyId.data.id,
  //       }));
  //       toast.success("ID Save successfully!");
  //     } catch (error) {
  //       console.error("Failed to parse token", error);
  //     }
  //   }
  // }, []);

  const addTag = (e, type) => {
    if (e.keyCode === 13 && e.target.value) {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        [type]: [...prev[type], e.target.value],
      }));
      resetInputField(type);
    }
  };

  const resetInputField = (type) => {
    switch (type) {
      case "tags":
        setTagValue("");
        break;
      case "responsibilities":
        setResponsibilityValue("");
        break;
      case "benefits":
        setBenefitValue("");
        break;
      case "requiredSkills":
        setRequiredSkillValue("");
        break;
      case "niceToHave":
        setNiceToHaveValue("");
        break;
      default:
        break;
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  const [formattedDate, setFormattedDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const formatted = formatDate(currentDate);
      setFormattedDate(formatted);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("All Data=> ", formData);
    try {
      const response = await fetch("http://localhost:3000/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Job posted successfully!");
      } else {
        toast.error("Failed to post job. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Job Title*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter job title"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
            Tags (Search or write tag and hit enter)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            type="text"
            value={tagValue}
            placeholder="Enter tags"
            onChange={(e) => setTagValue(e.target.value)}
            onKeyDown={(e) => addTag(e, "tags")}
          />
        </div>
        <div className="flex gap-3">
          {formData.tags.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 w-fit flex gap-2 items-center font-inter bg-gray-300 border rounded-full"
            >
              {item}
              <RxCrossCircled
                className="bg-white rounded-full cursor-pointer text-lg"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    tags: prev.tags.filter((ele) => ele !== item),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="salary"
          >
            Salary
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              id="minSalary"
              type="number"
              placeholder="Minimum salary"
              min="50"
              onChange={handleInputChange}
            />
            <span className="text-gray-700 font-bold">-</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
              id="maxSalary"
              type="number"
              placeholder="Maximum salary"
              min="100"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experience"
            type="number"
            placeholder="Enter Experience in years"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="jobType"
          >
            Job Type *
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobType"
            onChange={handleInputChange}
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="Enter country"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-black dark:text-gray-200"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="dueDate"
          >
            Due Date
          </label>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dueDate"
              name="dueDate"
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={handleInputChange}
              placeholder="YYYY-MM-DD"
              required
            />
            <p className="text-sm text-gray-500 italic">Format: YYYY-MM-DD</p>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="jobLevel"
          >
            Job Level *
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobLevel"
            onChange={handleInputChange}
          >
            <option value="">Select Job Level</option>
            <option value="Internship">Internship</option>
            <option value="Fresher">Fresher</option>
            <option value="Senior">Senior</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Director">Director</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="category"
          >
            Category *
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Product Management">Product Management</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="responsibilities"
          >
            Responsibilities
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="responsibilities"
            type="text"
            value={responsibilityValue}
            placeholder="Enter responsibilities and hit enter"
            onChange={(e) => setResponsibilityValue(e.target.value)}
            onKeyDown={(e) => addTag(e, "responsibilities")}
          />
        </div>
        <div className="flex gap-3">
          {formData.responsibilities.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 w-fit flex gap-2 items-center font-inter bg-gray-300 border rounded-full"
            >
              {item}
              <RxCrossCircled
                className="bg-white rounded-full cursor-pointer text-lg"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    responsibilities: prev.responsibilities.filter(
                      (ele) => ele !== item
                    ),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="benefits"
          >
            Benefits
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="benefits"
            type="text"
            value={benefitValue}
            placeholder="Enter benefits and hit enter"
            onChange={(e) => setBenefitValue(e.target.value)}
            onKeyDown={(e) => addTag(e, "benefits")}
          />
        </div>
        <div className="flex gap-3">
          {formData.benefits.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 w-fit flex gap-2 items-center font-inter bg-gray-300 border rounded-full"
            >
              {item}
              <RxCrossCircled
                className="bg-white rounded-full cursor-pointer text-lg"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    benefits: prev.benefits.filter((ele) => ele !== item),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="requiredSkills"
          >
            Required Skills
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requiredSkills"
            type="text"
            value={requiredSkillValue}
            placeholder="Enter required skills and hit enter"
            onChange={(e) => setRequiredSkillValue(e.target.value)}
            onKeyDown={(e) => addTag(e, "requiredSkills")}
          />
        </div>
        <div className="flex gap-3">
          {formData.requiredSkills.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 w-fit flex gap-2 items-center font-inter bg-gray-300 border rounded-full"
            >
              {item}
              <RxCrossCircled
                className="bg-white rounded-full cursor-pointer text-lg"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    requiredSkills: prev.requiredSkills.filter(
                      (ele) => ele !== item
                    ),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="niceToHave"
          >
            Nice to Have
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="niceToHave"
            type="text"
            value={niceToHaveValue}
            placeholder="Enter nice to have skills and hit enter"
            onChange={(e) => setNiceToHaveValue(e.target.value)}
            onKeyDown={(e) => addTag(e, "niceToHave")}
          />
        </div>
        <div className="flex gap-3">
          {formData.niceToHave.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 w-fit flex gap-2 items-center font-inter bg-gray-300 border rounded-full"
            >
              {item}
              <RxCrossCircled
                className="bg-white rounded-full cursor-pointer text-lg"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    niceToHave: prev.niceToHave.filter((ele) => ele !== item),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
            City*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Enter city"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            text={"Post"}
            className={
              "px-6 py-3 text-black bg-gray-300 text-xl font-medium w-[100%]"
            }
          />
        </div>
      </form>
    </>
  );
}

export default JobPostForm;
