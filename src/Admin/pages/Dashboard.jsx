import React, { useState } from 'react'
import CardInfo from '../component/CardInfo'

function Dashboard() {
  const [company,setCompany]=useState([])
  const [Jobs,setJobs]=useState([])
  const [allUser,setAllUser]=useState([])
  const [applications,setAllApplications]=useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      // const comRes=await fetch
    
    } catch (error) {
      
    }
  }
  fetchData()
 
}, [])

  return (
    <div className='p-2'>
      <div className='text-2xl p-4'>Dashboard</div>
      <div className='grid   lg:grid-cols-3 xmd:grid-cols-2 px-2 gap-2'>
        {arr.map((i,index)=>(<CardInfo key={index}/>))}
      </div>
    </div>
  )
}

export default Dashboard