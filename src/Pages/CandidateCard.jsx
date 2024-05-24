import React, { useEffect } from 'react'
import { CiLocationOn } from 'react-icons/ci'

function CandidateCard({name,email,pic}) {


   
  return (
    <div className="w-[100%] h-[285px] cursor-pointer justify-center font-inter flex flex-col gap-3 px-5 py-5 bg-white rounded-lg hover:border border-sky-600 hover:bg-[#e7f0fa] ease-in duration-200  delay-100 transition-all hover:-translate-y-[4px]">
      <div className="flex flex-col font-inter gap-2">
        <div className="text-xl font-medium">{name}</div>
        {/* <div className="bg-green-100 text-green-700 w-fit p-1 text-xs rounded-sm font-bold font-inter">
          {obj.position}
        </div> */}
        <div className="text-gray-400 font-extralight">{email}</div>
      </div>
      {/* id  */}
      <div className="w-fit flex gap-2">
        <div className="w-fit flex items-center justify-center">
          <img src={pic} alt="logo" className="rounded-full w-14" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-[16px] flex flex-wrap">
            City
          </div>
          <div className="flex items-center gap-1 text-sky-600">
            <CiLocationOn className="text-xl" />
          </div>
        </div>
      </div>
      {/* btn  */}
      {/* <div onClick={() => handleID(obj.id)}> */}
        {/* <Button
          text={"Apply Now"}
          className="bg-sky-600 font-bold text-white w-fit px-[12px] py-[5px] flex items-center  justify-center"
        /> */}
      {/* </div> */}
    </div>
  )
}

export default CandidateCard