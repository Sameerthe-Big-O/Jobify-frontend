import React, { useContext, useEffect, useState } from "react";
import JobSlider from "./JobSlider";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Components/Button";
import CountUp from "react-countup";
import TopCategory from "./TopCategory";
import ProcessCard from "./ProcessCard";
import FeaturedJob from "./FeaturedJob";
import EmailSendCom from "../Components/EmailSendCom";
import CompaniesCards from "./CompaniesCards";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";
import HomeImg from "../assets/Images/Home.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  // const { user } = useContext(LoginContext);
  const { isAuthenticated } = useSelector((state) => state.auth);
// const [auth, setAuth] = useState(false)
  const LoginCheck = localStorage.getItem("Login");

  
  return (
    <>
      {LoginCheck ? (
        <div className="h-[100vh] bg-[url('./assets/Images/SignUp.jpg')] bg-center bg-no-repeat  ">
          <div className="h-[100vh] bg-slate-900/60 backdrop-brightness-50 flex justify-center items-center flex-col gap-4   ">
            <div className="text-[32px] 5sm:w-[55%]  flex flex-col  font-medium font-inter text-white justify-center items-center text-center lg:container mx-auto">
              The{" "}
              <span className="font-extrabold font-inter ">#1 Job Portal</span>
              for Hiring or Finding your next job
              <p className="text-[16px] text-center font-extralight">
                Each month, more than 3 million job seekers turn to website in
                their search for work, making over{" "}
                <CountUp duration={2} start={0} end={10000}></CountUp>{" "}
                applications every single day
              </p>
            </div>
            <div className="flex md:flex-row sm:flex-col font-inter justify-start  md:gap-2 sm:gap-5 bg-white py-2 px-2 rounded-md md:w-fit 4sm:w-[70%]">
              <div className="flex justify-start items-center  w-auto">
                <div>
                  <CiSearch className="text-sky-500 text-4xl" />
                </div>
                <div className="w-auto">
                  <input
                    type="text"
                    className="py-2 px-2  w-auto outline-none"
                    placeholder="Job Title,Keyword"
                  />
                </div>
              </div>
              <div className="flex justify-start items-center  w-full">
                <div>
                  <CiLocationOn className="text-sky-500 text-4xl" />
                </div>
                <div>
                  <input
                    type="text"
                    className="py-2 px-2 outline-none"
                    placeholder="Job Title,Keyword"
                  />
                </div>
              </div>
              <div className="w-full">
                <Button
                  text={"Find Job Now"}
                  className="flex justify-center bg-[#0a65cc] text-white  w-[100%] items-center  rounded-md px-4 py-4"
                />
              </div>
            </div>
            <div className="hidden md:block ">
              <JobSlider />
            </div>
          </div>
        </div>
      ) : (
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={HomeImg}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col font-inter justify-center p-2 text-center rounded-sm lg:max-w-xl xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                The #1  Jobs for Hiring or Finding your next job
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
              Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  to={'/signup'}
                  className="px-8 py-3 text-lg font-semibold hover:bg-[#e7f0fa] rounded dark:bg-violet-600 dark:text-gray-50"
                >
                  REGISTER
                </Link>
                <Link
                  to={'/signin'}
                  className="px-8 py-3 text-lg font-semibold border hover:bg-[#e7f0fa] rounded dark:border-gray-800"
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <TopCategory />
      <ProcessCard />
      <FeaturedJob />
      <CompaniesCards />
      <EmailSendCom />
    </>
  );
}

export default Home;
