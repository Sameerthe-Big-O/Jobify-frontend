import React from "react";
import Button from "../Components/Button";
import { PiHandbagSimpleBold } from "react-icons/pi";
import FooterTag from "../Components/FooterTag";
import CountUp from "react-countup";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import bot from "../assets/Images/bot.jpg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate=useNavigate()
  return (
    <div className=" bg-[#18191c] mt-10 font-inter relative ">
      <div className="absolute z-10 right-10 cursor-pointer" onClick={()=>{navigate("/bot")}}><img src={bot} alt="" className="w-16 rounded-full"/></div>
      <div className="">
        <div className="flex xmd:flex-row sm:flex-col gap-8  xmd:justify-between w-[100%] xmd:px-16 sm:px-4 py-6 lg:container mx-auto ">
          <div className="flex xmd:w-[40%] md:flex-row sm:flex-col   gap-2 items-center ">
            <div className="w-full ">
              <input
                type="text"
                placeholder="Email"
                className=" py-[13px] px-4 text-xl text-slate-600 w-[100%] rounded-lg  border border-stone-700  bg-transparent "
              />
            </div>
            <div className="sm:w-full md:w-fit">
              <Button
                text={"Subcribe"}
                className={"px-6 py-3 text-white text-xl font-medium w-[100%]"}
              />
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:justify-around gap-5 xmd:w-[55%]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl text-white">
                <CountUp duration={2} start={0} end={460}></CountUp>
              </div>
              <div className="text-lg text-gray-500">Live Jobs</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl text-white">
                <CountUp duration={2} start={0} end={460}></CountUp>
              </div>
              <div className="text-lg text-gray-500">Live Jobs</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl text-white">
                <CountUp duration={2} start={0} end={460}></CountUp>
              </div>
              <div className="text-lg text-gray-500">Live Jobs</div>
            </div>
          </div>
        </div>
        <div>
          <hr className="underline underline-offset-1 " />
        </div>
        <div className=" xmd:px-16 sm:px-4 py-16 lg:container mx-auto w-full  grid grid-cols-12 gap-4">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 flex flex-col gap-3">
            <div className="text-2xl font-medium text-white font-inter flex items-center gap-2">
              <div className="text-sky-600">
                <PiHandbagSimpleBold />
              </div>
              <div>Jobpilot</div>
            </div>
            <div className="text-xl text-gray-600">
              Call Now: <span className="text-white"> 319-555-0115</span>
            </div>
            <div className="text-sm text-gray-600">
              Discover tailored opportunities for job seekers and top talent for
              employers
            </div>
          </div>
          {/* 1 */}
          <div className="lg:col-span-2 md:col-span-6 sm:col-span-12 ">
            <h2 className="mb-6 text-lg font-semibold  uppercase text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2 ">
              <li className="mb-4">
                <a href="">
                  <FooterTag text="About" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Contact" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Blog" />
                </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="lg:col-span-2 md:col-span-6 sm:col-span-12">
            <h2 className="mb-6 text-lg font-semibold  uppercase text-white">
              Candidate
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Browse Jobs" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Candidate Dashboard" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Saved Jobs" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Blog" />
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="lg:col-span-2 md:col-span-6 sm:col-span-12">
            <h2 className="mb-6 text-lg font-semibold  uppercase text-white ">
              Employer
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Post a Job" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Browse Companies" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Companies Dashboard" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Applications" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Blog" />
                </a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div className="lg:col-span-2 md:col-span-6 sm:col-span-12 ">
            <h2 className="mb-6 text-lg font-semibold  uppercase text-white">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-2">
              <li className="mb-4">
                <a href="">
                  <FooterTag text="FAQ" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Privacy & Policy" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Terms & Conditions" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Refund Policy" />
                </a>
              </li>
              <li className="mb-4">
                <a href="">
                  <FooterTag text="Blog" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="flex justify-between items-center gap-4 py-5 xmd:px-16 sm:px-4 lg:container mx-auto">
          <div className="text-gray-600 text-sm">© Jobpilot 2024 | All Rights Reserved</div>
          <div className="flex gap-4 text-2xl text-gray-600 hover:text-sky-600" >
            <div>
              <FaFacebookF className="text-gray-600 hover:text-sky-600"/>
            </div>
            <div>
              <FaInstagram className="text-gray-600 hover:text-sky-600"/>
            </div>
            <div>
              <FaYoutube className="text-gray-600 hover:text-sky-600"/>
            </div>
            <div>
              <FaXTwitter className="text-gray-600 hover:text-sky-600"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
