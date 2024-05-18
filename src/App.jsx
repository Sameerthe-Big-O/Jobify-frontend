import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import TopCategory from "./Pages/TopCategory";
import ProcessCard from "./Pages/ProcessCard";
import FeaturedJob from "./Pages/FeaturedJob";
import CompaniesCards from "./Pages/CompaniesCards";
import EmailSendCom from "./Components/EmailSendCom";
import Footer from "./Pages/Footer";
import Layout from "./Pages/Layout";
import { useEffect } from "react";
import axios from "axios";
import Country from "./Admin/pages/Country";
import Dashboard from "./Admin/pages/Dashboard";
import Candidate from "./Admin/pages/Candidate";
import Company from "./Admin/pages/Company";
import JobCategories from "./Admin/pages/JobCategories";
import JobRoles from "./Admin/pages/JobRoles";
import Jobs from "./Admin/pages/Jobs";
import Order from "./Admin/pages/Order";
import Settings from "./Admin/pages/Settings";
import AdminLayout from "./Admin/component/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "./feature/DarkSlice";
import JobPage from "./Pages/JobPage";
import CompanyPage from "./Pages/CompanyPage";
import ChatPage from "./Pages/ChatPage";
import PrivateRoute from "./Components/PrivateRoute";
import ProfileLayout from "./Profile/components/ProfileLayout";
import Overview from "./Profile/pages/Overview";
import AppliedJobs from "./Profile/pages/AppliedJobs";
import FavJobs from "./Profile/pages/FavJobs";
import JobAlerts from "./Profile/pages/JobAlerts";
import Message from "./Profile/pages/Message";
import Setting from "./Profile/pages/Setting";
import Logout from "./Profile/pages/Logout";
import LoginContext from "./ContextAPI/LoginContext/LoginContext";
import Page404 from "./Components/Page404";
import ForgetPassword from "./Pages/ForgetPassword";
import { io } from "socket.io-client";
import { RxCrossCircled } from "react-icons/rx";
import JobPostForm from "./Pages/JobPostForm";
import JobDetail from "./Pages/JobDetail";
import Zoom from "./Pages/Zoom";

function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const [user, setUser] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ user, setUser, io, filter, setFilter }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="jobdetail" element={<JobDetail />} />
              <Route element={<PrivateRoute />}>
                <Route path="jobs" element={<JobPage />} />
                <Route path="companies" element={<CompanyPage />} />
                <Route path="chat" element={<ChatPage />} />
                <Route element={<ProfileLayout />}>
                  <Route path="dashboard" element={<Overview />} />
                  <Route path="applied-jobs" element={<AppliedJobs />} />
                  <Route path="fav-jobs" element={<FavJobs />} />
                  <Route path="jobpost" element={<JobPostForm />} />
                  <Route path="job-alert" element={<JobAlerts />} />
                  <Route path="message" element={<Message />} />
                  <Route path="settings" element={<Setting />} />
                  <Route path="logout" element={<Logout />} />
                </Route>
              </Route>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="country" element={<Country />} />
              <Route path="auth" element={<Dashboard />} />
              <Route path="order" element={<Order />} />
              <Route path="settings" element={<Settings />} />
              <Route path="jobcategory" element={<JobCategories />} />
              <Route path="jobrole" element={<JobRoles />} />
              <Route path="candidate" element={<Candidate />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="company" element={<Company />} />
            </Route>

            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="interview" element={<Zoom />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
