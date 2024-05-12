import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";
import { logout } from "../feature/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // const isLogedIn = useSelector(selectLoginCheck);
  // const {logout}=useContext(LoginContext)
  // useEffect(() => {
  //   navigate('/')
  //   // localStorage.clear();
  // }, [isAuthenticated])
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Data = JSON.parse(localStorage.getItem("token"))
  console.log(Data);
  const [userData, setUserData] = useState([Data]);
  console.log(userData);
  // console.log("Navbar=>", JSON.parse(Data));
  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("Login");
    toggleDropdown();
    navigate("/");
    setIsOpen(!isOpen);
  };
  userData.map((data)=>(console.log(data.data.name)))

  return (
    <div className="relative inline-block z-50 text-left w-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-full focus:outline-none"
          onClick={toggleDropdown}
        >
          <img
            className="h-[20%] w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Avatar"
          />
        </button>
        {userData.map((data,index)=>(
          <div key={index}>{data.data.name}</div>
        ))}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              // onClick={() => handleItemClick("Dashboard")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Dashboard
            </button>
            <button
              // onClick={() => handleItemClick("Settings")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Settings
            </button>
            <button
              onClick={handleLogoutClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
