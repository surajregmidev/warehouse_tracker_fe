import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("Inside Requirw AUth");
  console.log(auth.accessToken);
  console.log("auth.user");
  console.log(auth.user);
  console.log("auth");
  console.log(auth);
  return auth.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={{ from: location }} />
  );
};

export default RequireAuth;
