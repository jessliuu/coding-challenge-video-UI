import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated);

  return <div>{isAuthenticated ? children : <p>Please log in first</p>}</div>;
};

export default ProtectedRoute;
