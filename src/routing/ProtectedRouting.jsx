import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouting = () => {
  const loginSelector = useSelector((state) => state.auth.login);
  const userLoggedIn = loginSelector.userLoggedIn;

  return userLoggedIn ? <Outlet /> : <Navigate to="/accounts/login" />;
};

export default ProtectedRouting;
