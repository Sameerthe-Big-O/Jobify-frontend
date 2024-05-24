import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";
import Loading from "./Loading";

function CandidatePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const jobResponse = await fetch(`http://localhost:3000/api/user`);
        // const companyResponse = await fetch(
        //   "http://localhost:3000/api/company"
        // );
        const jobData = await jobResponse.json();
        // console.log("JobData=>1",jobData);
        // const companyData = await companyResponse.json();
        setData(jobData.data);
        // setJobsData(jobData.data);
        // console.log("JobData=>2",jobsData);
        // setCompanies(companyData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
  console.log(data);

  return (
    <div className="grid xlg:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  gap-4 px-6  mt-10">
      {data.map((item) => {
        return (
          <div className="">
            <CandidateCard
              name={item.name}
              email={item.email}
              pic={item.user.picture}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CandidatePage;
