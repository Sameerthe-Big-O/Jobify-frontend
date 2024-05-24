import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import LoginContext from "../ContextAPI/LoginContext/LoginContext";
import { logout } from "../feature/authSlice";
function AdminPrivate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const {user,login,logout}=useContext(LoginContext)
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const LoginCheck = localStorage.getItem("Login");
  const LoginData = JSON.parse(localStorage.getItem("token"));
  console.log("Admin Private Route=>", LoginCheck.data.role);
  return (
    <>
      {LoginCheck && LoginCheck.data.role == "Admin" ? (
        <Outlet />
      ) : (
        <div
          onClick={() => {
            navigate("/signin");
          }}
        >
          <Navigate to={"/signin"} />
        </div>
      )}
    </>
  );
}

export default AdminPrivate;
