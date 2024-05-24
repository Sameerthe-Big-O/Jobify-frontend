import React, { useEffect, useState } from 'react';
import CardInfo from '../component/CardInfo';

function Dashboard() {
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [applications, setAllApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comRes = await fetch("http://localhost:3000/api/company");
        const { data: companyData } = await comRes.json();
        setCompany(companyData);

        const jobsRes = await fetch("http://localhost:3000/api/job");
        const { data: jobsData } = await jobsRes.json();
        setJobs(jobsData);

        const usersRes = await fetch("http://localhost:3000/api/user");
        const users = await usersRes.json();
        console.log(users);
        setAllUser(users);

        const applicationsRes = await fetch("http://localhost:3000/api/application");
        const app= await applicationsRes.json();
        setAllApplications(app);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  console.log(allUser);
  console.log(applications);
  return (
    <div className='p-2'>
      <div className='text-2xl p-4'>Dashboard</div>
      <div className='grid lg:grid-cols-3 xmd:grid-cols-2 px-2 gap-2'>
        <CardInfo title="Companies" count={company.length} />
        <CardInfo title="Jobs" count={jobs.length} />
        <CardInfo title="Users" count={allUser.data.length} />
        <CardInfo title="Applications" count={applications.data.length} />
      </div>
    </div>
  );
}

export default Dashboard;
