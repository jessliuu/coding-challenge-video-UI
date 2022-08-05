import React from "react";
import { Link, Navigate } from "react-router-dom";

const ProtectedRoute = (props, { children }) => {
  const isAuthenticated = props.isAuthenticated;
  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        children
      ) : (
        <p>
          Please log in to access this page. Click <Link to={`/`}>here</Link> to
          log in.
        </p>
      )}
    </div>
  );
};

export default ProtectedRoute;
