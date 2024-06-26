import React, { useEffect, useState } from "react";
import logo from "../assets/Images/comlogo2.png";
import Button from "../Components/Button";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
function ComDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const ID = location?.state?.id;
  console.log("ID Fetch =>", ID);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobResponse = await fetch("http://localhost:3000/api/company");
        const jobData = await jobResponse.json();
        setData(jobData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const Filter = data.filter((item) => item.id === ID);
  // setFilterData([Filter])
  console.log("ID are Comapy Detail =>", Filter);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="py-6 px-8 bg-gray-200  text-xl font-inter">
        Job Detail
      </div>
      {Filter.map((ele, index) => (
        <div key={index}>
          <div className="flex p-10">
            <div className="w-[70%] flex gap-5">
              <div className="w-fit">
                <img src={ele.picture} alt="" className=" w-40 rounded-lg" />
              </div>
              <div className="flex flex-col justify-center gap-4 w-full">
                <div className="text-3xl font-inter font-bold">{ele.name}</div>
                <div className="flex gap-3">
                  <div className="text-lg font-light font-inter">
                    {ele.industryType}
                  </div>
                  <div className="bg-green-100 flex text-green-700 w-fit py-2 px-4 text-xs rounded-sm font-bold font-inter">
                    {ele.vision}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-[50%] flex justify-center">
              <div className="flex h-full w-[50%] justify-center items-center">
                <Button
                  text={"Apply Now"}
                  className="bg-sky-600 font-bold text-white w-[100%] h-12 px-[12px] py-[5px] flex items-center  justify-center"
                />
              </div>
            </div> */}
          </div>
          <hr />
          <div className="p-10">
            <div className="text-3xl font-medium font-inter">Description</div>
            <div className=" py-5">
              {ele.aboutUs}
              {/* Im a Passionate web developer experienced in building responsive
              and dynamic web applications using cutting-edge technologies.
              Specialized in React JS, JavaScript, jQuery, HTML, CSS, Bootstrap,
              Tailwind CSS, and Material Ul. Dedicated to delivering
              high-quality code and intuitive user interfaces that enhance user
              experiences. Proven track record of successfully collaborating
              with cross-functional teams to meet project objectives and
              deadlines. */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ComDetail;
