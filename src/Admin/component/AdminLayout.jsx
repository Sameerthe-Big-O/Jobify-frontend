import React from "react";
import { useState } from "react";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  MdContentPasteSearch,
  MdOutlineAddLocationAlt,
  MdOutlineBorderColor,
} from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { IoIosLogOut, IoIosPerson } from "react-icons/io";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const routes = [
    {
      path: "/admin/auth",
      name: "DashBoard",
      icon: <RxDashboard />,
    },
    {
      path: "/admin/order",
      name: "Order",
      icon: <MdOutlineBorderColor />,
    },
    {
      path: "/admin/company",
      name: "Company",
      icon: <BsBuildings />,
    },
    {
      path: "/admin/candidate",
      name: "Candidate",
      icon: <IoIosPerson />,
    },
    {
      path: "/admin/jobs",
      name: "Jobs",
      icon: <PiHandbagSimpleBold />,
    },
    {
      path: "/admin/jobcategory",
      name: "Job Category",
      icon: <BiCategory />,
    },
    {
      path: "/admin/jobrole",
      name: "Job Role",
      icon: <MdContentPasteSearch />,
    },
    {
      path: "/admin/country",
      name: "Country",
      icon: <MdOutlineAddLocationAlt />,
    },
    {
      path: "/admin/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/signin",
      name: "Logout",
      icon: <IoIosLogOut />,
    },
  ];
  const handleClick = (index) => {
    setActive(index); // Set activeIndex to the clicked item's index
    setIsOpen(!open);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex">
      {/* Sidebar */}
      <aside className="relative bg-[#3d68ff] h-screen w-64 hidden 6sm:block shadow-xl">
        <div className="p-6 bg-[##3d68ff]">
          <a
            href="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </a>
          <button className="w-full bg-[#f1f2f5]  font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button>
        </div>
        <nav className=" flex flex-col justify-between   bg-[#3d68ff] text-white text-xl  font-semibold pt-3">
          {routes.map((route, index) => (
            <NavLink
              to={route.path}
              key={route.name}
              // onClick={() => handleClick(index)}
              className={({ isActive }) => {
                return isActive
                  ? "bg-white text-black border-r-4 border-blue-800"
                  : "";
              }}
            >
              <div className="flex gap-2 items-center font-inter text-lg p-3  hover:text-black font-normal  hover:bg-gray-200 hover:border-r-4 border-blue-800">
                <div>{route.icon}</div>
                <div>{route.name}</div>
              </div>
            </NavLink>
          ))}
          {/* <Link to={}  className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Blank Page
          </Link>
          <Link to={}  className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Tables
          </Link>
          <Link  to={} className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Forms
          </Link>
          <Link  to={} className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Tabbed Content
          </Link>
          <Link to={}  className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            Calendar
          </Link> */}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Desktop Header */}
        <header className="w-full items-center bg-white py-2 px-6 hidden 6sm:flex">
          <div className="w-1/2">
            <div className="flex p-1 relative items-center border rounded-lg border-gray-200">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full h-full py-2 px-7 outline-none"
              />
              <CiSearch className="absolute top-3 text-sky-500 text-2xl" />
            </div>
          </div>
          <div className="relative w-1/2 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
              <img
                src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"
                alt="User"
              />
            </button>
            {isOpen && (
              <div
                className="fixed inset-0 cursor-default"
                onClick={() => handleClick(index)}
              ></div>
            )}
            {isOpen && (
              <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a href="#" className="block px-4 py-2 account-link hover:">
                  Account
                </a>
                <a href="#" className="block px-4 py-2 account-link hover:">
                  Support
                </a>
                <a href="#" className="block px-4 py-2 account-link hover:">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Mobile Header & Nav */}
        <header className="w-full bg-sidebar py-5 px-6 block 6sm:hidden">
          <div className="flex items-center justify-between ">
            <a className="text-black text-3xl font-semibold uppercase hover:text-gray-300">
              Admin
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-3xl focus:outline-none "
            >
              {isOpen ? <RxCross1 /> : <FiMenu />}
            </button>
          </div>

          {/* Dropdown Nav */}
          <nav className={isOpen ? "flex flex-col text-lg pt-4" : "hidden"}>
            {routes.map((route, index) => (
              <NavLink
                to={route.path}
                key={route.name}
                onClick={() => handleClick(index)}
                className={({ isActive }) => {
                  return isActive
                    ? "bg-white text-black border-r-4 border-blue-800"
                    : "";
                }}
              >
                <div className="flex items-center  py-4 pl-6 gap-3">
                  <div>{route.icon}</div>
                  <div>{route.name}</div>
                </div>
              </NavLink>
            ))}

            <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
              <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
            </button>
          </nav>
          {/* Uncomment if you want to add the "New Report" button */}
          {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
        <i className="fas fa-plus mr-3"></i> New Report
      </button> */}
        </header>

        {/* Main Content */}
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>
            <Outlet />
          </main>

          {/* Footer */}
          <footer className="w-full bg-white text-right p-4">
            Built by{" "}
            <a
              href="https://davidgrzyb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              David Grzyb
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import AdminNavbar from "./AdminNavbar";
// import { Outlet } from "react-router-dom";
// import AdminFooter from "./AdminFooter";
// import { motion, AnimatePresence } from "framer-motion";

// function AdminLayout() {
//   const [isHovered, setIsHovered] = useState(false);

//   const sidebarVariants = {
//     collapsed: {
//       width: "50px",
//       transition: {
//         type: "tween",
//         duration: 0.5, // Animation duration
//         ease: "easeOut",
//       },
//     },
//     expanded: {
//       width: "20%",
//       transition: {
//         type: "tween",
//         duration: 0.5, // Animation duration
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="w-full flex ">
//       <motion.div
//         className=" bg-[#f5f5f5]  "
//         variants={sidebarVariants}
//         initial="collapsed"
//         animate={isHovered ? "expanded" : "collapsed"}
//         onMouseEnter={() => {
//           setIsHovered(true);
//         }}
//         onMouseLeave={() => {
//           setIsHovered(false);
//         }}
//       >
//         <Sidebar hover={isHovered} />
//       </motion.div>

//       <div className={`${isHovered ? "w-[100%]" : "w-[100%]"}  flex flex-col justify-between `}>
//         <div className="">
//           <AdminNavbar />
//           <Outlet />
//         </div>
//         <div className="">
//           <AdminFooter />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;
