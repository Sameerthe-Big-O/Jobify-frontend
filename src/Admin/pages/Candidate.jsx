import React, { useEffect, useState } from 'react'

function Candidate() {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await fetch("http://localhost:3000/api/user");
        const users = await usersRes.json();
        console.log(users.data);
        setAllUser(users.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="overflow-x-scroll">
    <table className="w-[1500px] bg-white  overflow-x-scroll overflow-y-scroll">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
            Name
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Email
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            ID
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Image
          </th>
         
          
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {allUser?.map((item) => {
          return (
            <tr className="border-b-[1.5px] border-[#DFE0EB]" key={item?.id}>
              <td className="md:p-4 p-3">{item?.name}</td>
              <td className="md:p-4 p-3">{item?.email}</td>
              <td className="md:p-4 pt-3">{item?._id}</td>
              <td className="md:p-4 p-3"><img src={item?.user?.picture} alt="" className='w-10'/></td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Candidate