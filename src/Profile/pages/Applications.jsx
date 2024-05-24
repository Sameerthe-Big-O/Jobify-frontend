import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/Images/companylogo.jpg";

function AllApplications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const companyId = JSON.parse(token);
          console.log("DASDASD Id=>", companyId.data.id);
          const response = await fetch(
            `http://localhost:3000/api/application/${companyId.data.id}`
          );
          const { data } = await response.json();

          console.log("applications", data);
          setApplications(data);
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
        <table className="w-full bg-white  overflow-scroll table-fixed">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                application status
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Job
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                applied Date
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {applications.length > 0 &&
              applications.map((application, _) => {
                return applications.map((application, index) => {
                  let {
                    status,
                    createdAt,
                    jobData: { title, status: JobStatus },
                  } = application;
                  console.log(JobStatus);

                  return (
                    <tr
                      key={index}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <td className=" items-center space-x-4 py-3 px-4">
                        {status}
                      </td>
                      <td className=" items-center space-x-4 py-3 px-4">
                        {title}
                      </td>
                      <td>{new Date(createdAt).toLocaleDateString()}</td>
                      <td
                        className="py-3 px-4 
                      space-x-4 text-black
                      "
                      >
                        {JobStatus === false}
                      </td>
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
