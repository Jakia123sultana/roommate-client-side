import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";
import { AuthContext } from "../../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;

  //if-> user thake return children
  // navigate--> Login
};

export default PrivateRoute;