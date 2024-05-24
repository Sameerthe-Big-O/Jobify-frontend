import React, { useEffect, useState } from "react";

function Order() {
  const [applications, setAllApplications] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const applicationsRes = await fetch(
          "http://localhost:3000/api/application"
        );
        const app = await applicationsRes.json();
        setAllApplications(app);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(applications.data);
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
          {applications?.data?.map((item) => {
            return (
              <tr className="border-b-[1.5px] border-[#DFE0EB]" key={item.id}>
                <td className="md:p-4 p-3">{item.jobId}</td>
                <td className="md:p-4 p-3">{item.status }</td>
                <td className="md:p-4 pt-3">{item.applicantId}</td>
                <td className="md:p-4 p-3">{item.createdAt}</td>
                <td className="md:p-4 p-3">{item.createdAt}</td>
                <td className="md:p-4 p-3">{"applength"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
