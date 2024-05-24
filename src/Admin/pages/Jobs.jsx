import React, { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsRes = await fetch("http://localhost:3000/api/job");
        const { data: jobsData } = await jobsRes.json();
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(jobs);
  return (
    <div className="overflow-x-scroll">
      <table className="w-[1500px] bg-white  overflow-x-scroll overflow-y-scroll">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
              Title
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Description
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              City
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
             ID
            </th>
            {/* <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Image
            </th> */}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {jobs?.map((item) => {
            return (
              <tr className="border-b-[1.5px] border-[#DFE0EB]" key={item.id}>
                <td className="md:p-4 p-3">{item.title}</td>
                <td className="md:p-4 p-3">{item.description}</td>
                <td className="md:p-4 pt-3">{item.city}</td>
                <td className="md:p-4 p-3">{item.id}</td>
                {/* <td className="md:p-4 p-3">
                  <img src={item.picture} alt="" className="w-10" />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
