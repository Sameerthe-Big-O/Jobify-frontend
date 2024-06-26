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
import ComDetail from "./Pages/ComDetail";
import UserAssiment from "./Profile/pages//UserAssistantBot";
import CompanyAssiment from "./Profile/pages/CompanyAssismentBot";
import Applications from "./Profile/pages/Applications";
import UserProfileForm from "./Profile/pages/UserProfileForm";
import { toast } from "react-toastify";
import AllApplications from "./Profile/pages/AllApplications";
import ProfileDetail from "./Profile/pages/ProfileDetail";
import UserApplication from "./Profile/pages/UserApplication";
import Userjobs from "./Profile/pages/Userjobs";
import UserOverview from "./Profile/pages/UserOverview";
import AdminPrivate from "./Components/AdminPrivate";
import Chat from "./Profile/pages/CompanyAssismentBot";
import CandidatePage from "./Pages/CandidatePage";

function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const [user, setUser] = useState(false);
  const [filter, setFilter] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const companyId = JSON.parse(token);
        console.log("App User Role=>", companyId.data.role);
        setUserData(companyId.data.role);
        // console.log("USER ID=>", formData);
        toast.success("ID Save successfully!");
      } catch (error) {
        console.error("Failed to parse token", error);
      }
    }
  }, []);
  console.log(userData);
  return (
    <>
      
        <LoginContext.Provider value={{ user, setUser, io, filter, setFilter }}>
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="jobdetail" element={<JobDetail />} />
                <Route path="companydetail" element={<ComDetail />} />
                <Route element={<PrivateRoute />}>
                  <Route path="jobs" element={<JobPage />} />
                  <Route path="bot" element={<UserAssiment />} />
                  <Route path="companyBot" element={<CompanyAssiment />} />
                  <Route path="applications" element={<Applications />} />
                  <Route path="companies" element={<CompanyPage />} />
                  <Route path="candidates" element={<CandidatePage />} />
                  <Route path="chat" element={<ChatPage />} />
                  <Route path="jobdetail" element={<JobDetail />} />
                  <Route path="companydetail" element={<ComDetail />} />
                  <Route element={<ProfileLayout />}>
                    <Route path="dashboard" element={<Overview />} />
                    <Route path="companydashbaord" element={<Overview />} />
                    <Route path="userdashbaord" element={<UserOverview />} />
                    <Route
                      path="allapplication"
                      element={<AllApplications />}
                    />
                    <Route path="jobcandidate" element={<FavJobs />} />
                    <Route path="alluserjob" element={<Userjobs />} />
                    <Route path="interview" element={<Zoom />} />
                    <Route path="botassit" element={<Chat />} />

                    <Route
                      path="userapplications"
                      element={<UserApplication />}
                    />
                    <Route path="jobpost" element={<JobPostForm />} />
                    <Route path="job-alert" element={<JobAlerts />} />
                    <Route path="message" element={<Message />} />
                    <Route path="settings" element={<Setting />} />
                    <Route path="user" element={<ProfileDetail />} />
                    <Route path="userprofile" element={<UserProfileForm />} />
                    <Route path="logout" element={<Logout />} />
                  </Route>
                </Route>
              </Route>

              <Route element={<AdminPrivate />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route path="country" element={<Country />} />
                  <Route path="auth" element={<Dashboard />} />
                  <Route path="applications" element={<Order />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="jobcategory" element={<JobCategories />} />
                  <Route path="jobrole" element={<JobRoles />} />
                  <Route path="candidate" element={<Candidate />} />
                  <Route path="jobs" element={<Jobs />} />
                  <Route path="company" element={<Company />} />
                </Route>
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
