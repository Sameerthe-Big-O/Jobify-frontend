import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Overview() {
  const [jobs, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const companyId = JSON.parse(token);
          console.log("DASDASD Id=>", companyId.data.id);
          //*ye tuny change kya huwa???? esi wja sy errora rha
          const response = await fetch(
            `http://localhost:3000/api/company/jobs/${companyId.data.id}`
          );
          const { data } = await response.json();
          console.log(data);
          let { jobs } = data[0];
          console.log(jobs);
          setData(jobs);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    };
    fetchData();
  }, []);

  const hadleClikc = (id, title) => {
    console.log(id);
    navigate("/jobcandidate/", {
      state: {
        id: id,
        title: title,
      },
    });
  };
  return (
    <div>
      <table className="w-full bg-white  overflow-scroll">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
              title
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              status
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Job Type
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Due Date
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Posted Date
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Applications
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {jobs.length > 0 &&
            jobs.map(
              (
                {
                  _id,
                  title,
                  status,
                  jobType,
                  dueDate,
                  createdAt,
                  applications,
                },
                rowIndex
              ) => {
                return (
                  <tr
                    key={rowIndex}
                    className=" border-b-[1.5px] border-[#DFE0EB] 
 
                    "
                    onClick={() => hadleClikc(_id, title)}
                  >
                    <td className="md:p-4 p-3 ">{title}</td>
                    <td className="md:p-4 p-3 ">
                      {status === "true" ? "true" : "false"}
                    </td>
                    <td className="md:p-4 pt-3 ">{jobType}</td>
                    <td className="md:p-4 p-3 ">
                      {dueDate !== undefined && dueDate.substring(1, 10)}
                    </td>
                    <td className="md:p-4 p-3 ">
                      {createdAt !== undefined && createdAt.substring(1, 10)}
                    </td>
                    <td className="md:p-4 p-3 ">{applications.length}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
