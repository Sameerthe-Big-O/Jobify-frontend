import React, { useEffect, useState } from "react";

function UserOverview() {
  const [jobs, setData] = useState([]);
  //   const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userId = JSON.parse(token);
          console.log("DASDASD Id=>", userId.data.id);
          //*ye tuny change kya huwa???? esi wja sy errora rha
          const response = await fetch(
            `http://localhost:3000/api/application/${userId.data.id}`
          );
          const { data } = await response.json();
          console.log("DATA=>", data);

          console.log("JOBS=>", jobs);
          setData(data);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    };
    fetchData();
  }, []);

  console.log("User Overview =>", jobs);
  return (
    <div className="overflow-x-scroll">
      <table className="w-[1500px] bg-white  overflow-x-scroll overflow-y-scroll">
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
            jobs.map((item) => (
              <tr
                // key={rowIndex}
                className=" border-b-[1.5px] border-[#DFE0EB]"
                // onClick={() => hadleClikc(_id, title)}
              >
                <td className="md:p-4 p-3 ">{item?.status}</td>
                <td className="md:p-4 p-3 ">
                  {/* {status === "true" ? "true" : "false"} */}
                </td>
                <td className="md:p-4 pt-3 ">{item.jobData.jobType}</td>
                <td className="md:p-4 p-3 ">
                  {item?.createdAt !== undefined && item?.createdAt?.substring(1, 10)}
                </td>
                <td className="md:p-4 p-3 ">
                  {item?.createdAt !== undefined && item?.createdAt.substring(1, 10)}
                </td>
                {/* <td className="md:p-4 p-3 ">{applications.length}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserOverview;
