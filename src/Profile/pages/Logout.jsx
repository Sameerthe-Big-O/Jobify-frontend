import React from 'react'
import ProfileDetail from './ProfileDetail'
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../feature/authSlice';
import { useDispatch } from 'react-redux';

function Logout() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogoutClick = () => {
    console.log("Logout");
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("Login");
    navigate("/");
    
  };

  return (
    <div onClick={()=>handleLogoutClick}>Logout</div>
  )
}

export default Logout