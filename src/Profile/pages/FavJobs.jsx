import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../assets/Images/companylogo.jpg";

function FavJobs() {
  const [applicants, setApplicants] = useState([]);
  const navigate=useNavigate()
  const location = useLocation();
  const id = location?.state?.id;
  const title = location?.state?.title;


  const handleProfile=(id)=>{
    console.log(id);
    navigate("/user/", {
      state: {
        id: id,
      },
    });
  }


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const companyId = JSON.parse(token);
          console.log("Company ID:", companyId.data.id);
          const response = await fetch(
            `http://localhost:3000/api/job/applicants/${id}`
          );
          const { data } = await response.json();
          console.log("Data=>",data);
          const { applications } = data[0];
          console.log("Applications:", applications);
          setApplicants(applications);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="mb-3 font-bold font-mono">
        {`Here are the details about ` + title}
      </h1>
      <table className="w-full bg-white overflow-scroll">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              User
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Email
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Status
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Applied At
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 cursor-pointer">
          {applicants.length > 0 &&
            applicants.map((application, index) => {
              const {
                applicant: {
                  email,
                  name,
                  userProfile: { picture },
                },
                status,
                _id,
                createdAt,
                
              } = application;

              console.log(name, email, picture, status, createdAt,_id);
              // console.log(application.applicant._id);

              return (
                <tr key={index} onClick={()=>{handleProfile(application.applicant._id)}}>
                  <td className="flex items-center space-x-4 py-3 px-4">
                    <img
                      src={Avatar}
                      // alt={`${name}'s profile`}
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
        </tbody>
      </table>
    </div>
  );
}

export default FavJobs;
