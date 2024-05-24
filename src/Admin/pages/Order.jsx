import React, { useEffect, useState } from "react";

function Order() {
  const [applications, setAllApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsRes = await fetch(
          "http://localhost:3000/api/application"
        );
        const app = await applicationsRes.json();

        const applicationsWithDetails = await Promise.all(
          app.data.map(async (application) => {
            const jobRes = await fetch(
              `http://localhost:3000/api/job/${application.jobId}`
            );
            const job = await jobRes.json();
            console.log(job?.data?.title);

            const applicantRes = await fetch(
              `http://localhost:3000/api/user/${application.applicantId}`
            );
            const applicant = await applicantRes.json();
            console.log(applicant);
            return {
              ...application,
              jobTitle: job?.data?.title,
              applicantName: applicant?.data?.name,
            };
          })
        );

        setAllApplications(applicationsWithDetails);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchApplications();
  }, []);
  console.log(applications);
  return (
    <div className="overflow-x-scroll">
      <table className="w-[1500px] bg-white  overflow-x-scroll overflow-y-scroll">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
              Job Title
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Status
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Applicant Name
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Posted Date
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {applications.map((item) => (
            <tr className="border-b-[1.5px] border-[#DFE0EB]" key={item.id}>
              <td className="md:p-4 p-3">{item.jobTitle}</td>
              <td className="md:p-4 p-3">{item.status}</td>
              <td className="md:p-4 pt-3">{item.applicantName}</td>
              <td className="md:p-4 p-3">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
