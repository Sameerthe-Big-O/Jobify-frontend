import React, { useEffect } from "react";
import { useState } from "react";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LuLayers } from "react-icons/lu";
import { PiBagLight } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { CiSearch, CiBookmark } from "react-icons/ci";
function ProfileLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [isCompany, setIsCompany] = useState(false);

  useEffect(() => {
    // Example: Replace this with your actual logic to check if the user is a company
    const user = JSON.parse(localStorage.getItem("token")); // Assuming user info is stored in local storage
    console.log(user.data.role);
    if (user && user.data.role === "Company") {
      setIsCompany(true);
    }
  }, []);
  const routes = [
    {
      path: "/dashboard",
      name: "Overview",
      icon: <LuLayers />,
    },
    {
      path: "/applied-jobs",
      name: "Applied Jobs",
      icon: <PiBagLight />,
    },
    {
      path: "/fav-jobs",
      name: "Favorite Jobs",
      icon: <CiBookmark />,
    },
    {
      path: isCompany ? "/jobpost" : "/job-alert",
      name: isCompany ? "Job Post" : "Job Alert",
      icon: isCompany ? <PiBagLight /> : <HiOutlineBellAlert />,
    },
    {
      path: "/message",
      name: "Message",
      icon: <FiMessageSquare />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <LuLogOut />,
    },
  ];
  const handleClick = (index) => {
    setActive(index); // Set activeIndex to the clicked item's index
    setIsOpen(!open);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex lg:container mx-auto">
      {/* Sidebar */}
      <aside className="relative bg-transparent h-[100vh] w-64 hidden 6sm:block shadow-xl">
        <div className="p-6 bg-[##3d68ff]">
          <a
            href="index.html"
            className="text-black text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Profile
          </a>
        </div>
        <nav className=" flex flex-col justify-between    bg-gray-100 text-black text-xl  font-semibold pt-3">
          {routes.map((route, index) => (
            <NavLink
              to={route.path}
              key={route.name}
              // onClick={() => handleClick(index)}
              className={({ isActive }) => {
                return isActive
                  ? "bg-blue-200 text-black border-r-4 border-blue-800"
                  : "";
              }}
            >
              <div className="flex gap-2 items-center hover:bg-blue-200 font-inter text-lg p-3  hover:text-black font-normal   ">
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
            {/* <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Lian</td>
                  <td className="w-1/3 text-left py-3 px-4">Smith</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Emma</td>
                  <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td className="w-1/3 text-left py-3 px-4">Williams</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td className="w-1/3 text-left py-3 px-4">Brown</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Lian</td>
                  <td className="w-1/3 text-left py-3 px-4">Smith</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Emma</td>
                  <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td className="w-1/3 text-left py-3 px-4">Williams</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td className="w-1/3 text-left py-3 px-4">Brown</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}
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

export default ProfileLayout;

// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import AdminNavbar from "./candidateNavbar";
// import { Outlet } from "react-router-dom";
// import AdminFooter from "./candidateFooter";
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
