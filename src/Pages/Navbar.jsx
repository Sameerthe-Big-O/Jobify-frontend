import React, { useContext, useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Button from "../Components/Button";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiBagSimpleBold, PiHandbagSimpleBold } from "react-icons/pi";
import JobsDropdown from "../Components/JobDropDown";
import { CiSearch } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import ProfileMenu from "../Components/ProfileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import baglogo from "../assets/Images/Bug logo.svg";
import { Link, NavLink } from "react-router-dom";
import Buglogo from "../assets/Images/Bug logo.svg";
import { useDispatch, useSelector } from "react-redux";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";

function Navbar() {
  const [active, setActive] = useState(-1);
  const [open2, setOpen2] = useState(false);

  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const {user,setUser}=useContext(LoginContext)
  const dispatch = useDispatch();
  // console.log(isLogedIn);
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/jobs",
      name: "Find Job",
    },
    {
      path: "/companies",
      name: "Companies",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/jobs",
      name: "My Jobs",
    },
  ];

  const handleClick = (index) => {
    setActive(index); // Set activeIndex to the clicked item's index
    setOpen(!open);
  };
  const loginCheck = localStorage.getItem("Login");
 

  return (
    <div className="flex flex-col w-[100%] h-[100%]   ">
      <div className="py-3 relative  flex justify-between px-8 bg-white">
        <div className="flex  items-center gap-4 h-full justify-between  xmd:w-[70%]">
          <div className="text-3xl font-inter font-medium">Jobify</div>
          <div className="w-full xmd:flex hidden">
            <ul className="flex justify-evenly w-full  items-center gap-6 font-inter  text-black">
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? "bg-white text-sky-500" : "";
                }}
              >
                <li className="hover:text-sky-500 cursor-pointer">Home</li>
              </NavLink>
              <NavLink
                to={"/jobs"}
                className={({ isActive }) => {
                  return isActive ? "bg-white text-sky-500" : "";
                }}
              >
                <li className="hover:text-sky-500 cursor-pointer">Find Job</li>
              </NavLink>
              <NavLink
                to={"/companies"}
                className={({ isActive }) => {
                  return isActive ? "bg-white text-sky-500" : "";
                }}
              >
                <li className="hover:text-sky-500 cursor-pointer">Companies</li>
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) => {
                  return isActive ? "bg-white text-sky-500" : "";
                }}
              >
                <li className="hover:text-sky-500 cursor-pointer">Dashboard</li>
              </NavLink>
              <NavLink
                to={"/jobs"}
                className={({ isActive }) => {
                  return isActive ? "bg-white text-sky-500" : "";
                }}
              >
                <li className="hover:text-sky-500 cursor-pointer">My Job</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div
          className="xmd:hidden items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <RxCross1 className="text-3xl items-center flex" />
          ) : (
            <FiMenu className="text-3xl items-center flex" />
          )}
        </div>
        <div
          className={`absolute top-10 ${
            open ? "flex" : "hidden"
          } left-0 z-50 w-full`}
        >
          <div className="w-full fixed  h-[50vh] p-4">
            <ul className="flex flex-col bg-white w-full justify-start p-4  items-start gap-6 font-inter  text-black">
              {routes.map((route, index) => (
                <NavLink
                  to={route.path}
                  key={route.name}
                  onClick={() => handleClick(index)}
                  className="w-full"
                >
                  <li
                    className={`flex gap-2 items-center w-full ${
                      active == index
                        ? "bg-white border-r-4 w-full border-blue-800"
                        : ""
                    }   font-inter text-xl p-3 w-full  hover:bg-white hover:border-r-4 border-blue-800`}
                  >
                    {route.name}
                  </li>
                </NavLink>
              ))}

              <hr className="w-full" />
              <Link to={"/"} className="w-full">
                <li>
                  <div className="flex items-center w-full border rounded-lg bg-white">
                    <div className="text-3xl  text-sky-600 ">
                      <CiSearch />
                    </div>
                    <div className="w-full rounded-md">
                      <input
                        type="text"
                        placeholder="Job Title ,Keywords"
                        className="py-4 px-4 w-[100%] outline-none "
                      />
                    </div>
                  </div>
                </li>
              </Link>
              <hr className="w-full" />
              <Link to={"/chat"}>
                <li className="hover:text-sky-500 flex gap-2 cursor-pointer">
                  <BiMessageRoundedDetail className="text-3xl text-black" />
                  Message
                </li>
              </Link>
              <hr className="w-full" />
              <Link to={"/chat"} className="bg-sky-500 rounded-md w-full p-2">
                <li className="text-white items-center flex gap-2 cursor-pointer">
                  <CgProfile className="text-3xl text-white" />
                  Profile
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-[100%]  justify-between bg-[#0a65cc] py-5 xlg:px-24 lg:px-12 sm:px-6">
        <div className="flex w-full items-center gap-10 md:">
          <div className="flex items-center gap-2">
            <div>
              {/* <PiHandbagSimpleBold className="text-white text-2xl" /> */}
              <div>
                <img src={baglogo} alt="" />
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-6 border p-1 w-full mr-2  bg-white rounded-md 6sm:flex">
            <div className="z-10">
              <JobsDropdown />
            </div>
            <div>
              <hr className="h-10 w-[1px] bg-slate-700" />
            </div>
            <div className="flex items-center w-full bg-white">
              <div className="text-3xl text-sky-600 ">
                <CiSearch />
              </div>
              <div className="w-[100%] rounded-md">
                <input
                  type="text"
                  placeholder="Job Title ,Keywords"
                  className="py-4 px-4 w-[100%] outline-none "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-6">
            <div className="xmd:flex hidden">
              <HiOutlineBellAlert className="text-3xl text-white 5sm:flex hidden  " />
            </div>
            <div className="xmd:flex hidden">
              <BiMessageRoundedDetail className="text-3xl text-white 5sm:flex hidden " />
            </div>
            <div className="w-fit">
              {/* {isLogedIn} */}
              {loginCheck ? (
                <div
                  onClick={() => {
                    setUser(!user)
                  }}
                >
                  <ProfileMenu />
                </div>
              ) : (
                <Link to={"/signin"}>
                  <Button
                    text={"Sigin "}
                    className="flex justify-center bg-white text-lg font-medium font-inter text-black  w-[100%] items-center  rounded-md px-6 py-4"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[100%] h-[0.1px] border-gray-50 " />
    </div>
  );
}

export default Navbar;
