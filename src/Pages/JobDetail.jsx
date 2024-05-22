import React, { useEffect, useState } from "react";
import logo from "../assets/Images/comlogo2.png";
import Button from "../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function JobDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resume, setResume] = useState(null);
  const [applied, setApplied] = useState(false);
  const [application, setApplication] = useState({
    applicantId: "",
    jobId: "",
    resume: ""
  });
  const location = useLocation();
  const navigate = useNavigate();
  const ID = location?.state?.id;

  console.log("Job Detail=>", ID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobResponse = await fetch("http://localhost:3000/api/job/search");
        const jobData = await jobResponse.json();
        setData(jobData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const Filter = data.filter((item) => item.id === ID);

  console.log("ID are =>", Filter);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
    convertToBase64(file);
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      const token = JSON.parse(localStorage.getItem("token"));
      console.log("Token =>", token.data.id);

      if (!token) {
        console.error("No token found in local storage");
        return;
      }
      console.log("JOB ID=>", ID);
      setApplication({
        applicantId: token.data.id,
        jobId: ID,
        resume: base64String
      });
    };
    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
    };
  };

  console.log("Resume", resume);

  const handleApply = async () => {
    console.log("WEnter");

    if (!resume) {
      console.error("No resume file selected");
      return;
    }

    console.log("Form Data=>", application);

    try {
      const response = await fetch("http://localhost:3000/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(application)
      });
      console.log("Apply=>", application);

      if (response.ok) {
        console.log("Application submitted successfully");
        setApplied(true);
        // navigate("/success", { state: { message: "Successfully Applied" } });
      } else {
        console.error("Error submitting application", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting application", error);
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="py-6 px-8 bg-gray-200 text-xl font-inter">
        Job Detail
      </div>
      {Filter.map((ele) => (
        <div key={ele.id}>
          <div className="flex p-10">
            <div className="w-[70%] flex gap-5">
              <div className="w-fit">
                <img src={logo} alt="" className="w-40 rounded-lg" />
              </div>
              <div className="flex flex-col justify-center gap-4 w-full">
                <div className="text-3xl font-inter font-bold">{ele.title}</div>
                <div className="flex gap-3">
                  <div className="text-lg font-light font-inter">
                    {ele.country}
                  </div>
                  <div className="bg-green-100 flex text-green-700 w-fit py-2 px-4 text-xs rounded-sm font-bold font-inter">
                    {ele.jobLevel}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="hidden"
                id="resume-upload"
                disabled={applied}
              />
              <label htmlFor="resume-upload" className="cursor-pointer w-full">
                <Button
                  text={"Select Resume"}
                  className="bg-gray-500 font-bold text-white w-full h-12 px-4 py-2 flex items-center justify-center"
                />
              </label>
              <button
                className={`${
                  applied ? "bg-green-600" : "bg-sky-600"
                } font-bold text-white w-full h-12 px-4 py-2 flex items-center justify-center mt-4`}
                onClick={handleApply}
                disabled={applied}
              >
                {applied ? "Applied" : "Apply Now"}
              </button>
            </div>
          </div>
          <hr />
          <div className="p-10">
            <div className="text-3xl font-medium font-inter">Description</div>
            <div className="py-5">{ele.description}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default JobDetail;
