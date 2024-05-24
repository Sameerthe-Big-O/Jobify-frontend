import React, { useEffect, useState } from "react";

function Company() {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const comRes = await fetch("http://localhost:3000/api/company");
        const { data: companyData } = await comRes.json();
        setCompany(companyData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(company);
  return (
    <div className="overflow-x-scroll">
      <table className="w-[1500px] bg-white  overflow-x-scroll overflow-y-scroll">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
              title
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Employee
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Phone Number
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Website Url
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Image
            </th>
            
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {company?.map((item) => {
            return (
              <tr className="border-b-[1.5px] border-[#DFE0EB]" key={item.id}>
                <td className="md:p-4 p-3">{item.name}</td>
                <td className="md:p-4 p-3">{item.employees}</td>
                <td className="md:p-4 pt-3">{item.phoneNumber}</td>
                <td className="md:p-4 p-3">{item.websiteUrl}</td>
                <td className="md:p-4 p-3">
                  <img src={item.picture} alt="" className="w-10" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Company;
