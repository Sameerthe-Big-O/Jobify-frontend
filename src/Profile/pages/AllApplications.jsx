import React, {useState} from 'react'
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          console.log(jobs);
          setData(jobs);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    };
    fetchData();
  }, []);

  // const hadleClikc = (id, title) => {
  //   console.log(id);
  //   navigate("/jobcandidate/", {
  //     state: {
  //       id: id,
  //       title:title
  //     },
  //   });
  
  return (
    <div>
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
       {/* <tbody className="text-gray-700">
       {applicants.length > 0 &&
            applicants.map((application, index) => {
              const {
                applicant: {
                  email,
                  name,
                  userProfile: { picture },
                },
                status,
                createdAt,
              } = application;

              console.log(name, email, picture, status, createdAt);

              return (
                <tr key={index}>
                  <td className="flex items-center space-x-4 py-3 px-4">
                    <img
                      src={Avatar}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{name}</span>
                  </td>
                  <td className="py-3 px-4">{email}</td>
                  <td className="py-3 px-4">{status}</td>
                  <td className="py-3 px-4">
                    {new Date(createdAt).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
        </tbody> */}
      </table>
    </div>
    </div>
  )
}

export default AllApplications