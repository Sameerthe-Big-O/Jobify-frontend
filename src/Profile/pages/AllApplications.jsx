import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../assets/Images/companylogo.jpg";
function AllApplications() {
  const [jobs, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const companyId = JSON.parse(token);
          console.log("DASDASD Id=>", companyId.data.id);
          const response = await fetch(
            `http://localhost:3000/api/company/applicants/${companyId.data.id}`
          );
          const { data } = await response.json();
          console.log(data);
          let { jobs } = data[0];
          console.log("jobs", jobs);
          setData(jobs);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate("/userProfile", {
      state: {
        id: id,
      },
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "border-yellow-500  border-2  text-yellow-500 ";
      case "Hired":
        return "border-green-500   border-2 text-green-500";
      case "Rejected":
        return "border-red-500   border-2 text-red-500";
      case "Interview":
        return "border-blue-500 text-blue-500  border-2";
      case "Shortlist":
        return "border-purple-500 text-purple-500  border-2";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    seStatus(true)
    try {
      const response = await fetch(`http://localhost:3000/api/application/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      console.log(await response.json());
    } catch (error) {
      console.error("Error updating status", error);
    }
  };
  


  return (
    <div>
      <div>
        <table className="w-full bg-white  overflow-scroll table-fixed">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                Job
              </th>
              <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                Applicant
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                status
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Applied Date
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {jobs.length > 0 &&
              jobs.map((job, _) => {
                const { title, applications } = job;

                return applications.map((application, index) => {
                  let {
                    status,
                    userId,
                    appliedDate,
                    _id,
                    applicant: {
                      email,
                      name,
                      // userprofile: { picture },
                    },
                  } = application;
                  console.log(status, userId, appliedDate, email, name, _id);

                  const statusColor = getStatusColor(status);
                  return (
                    <tr
                      key={index}
                      //*id alrady pass kar rha hoon bss tyjhy ye receiver karni aur use profile fetch kari ok
                      // onClick={() => handleClick(userId)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <td className="py-3 px-4">{title}</td>
                      <td className="flex items-center space-x-4 py-3 px-4">
                        <img
                          src={Avatar}
                          // alt={`${name}'s profile`}
                          className="w-10 h-10 rounded-full"
                        />
                        <span>{name}</span>
                      </td>
                      <td>
                      <div className={`py-3 px-4 ${statusColor} rounded-full outline-none`}>
                          <select
                            name="Status"
                            className="outline-none"
                            value={status}
                            onClick={()=>{}}
                            onChange={(e) => handleStatusChange(_id, e.target.value)}
                          >
                            <option value="Hired">Hired</option>
                            <option value="Shortlist">Shortlist</option>
                            <option value="Interview">Interview</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {new Date(appliedDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">{email}</td>
                    </tr>
                  );
                });
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllApplications;
