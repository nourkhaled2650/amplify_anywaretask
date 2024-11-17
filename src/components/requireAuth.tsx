import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

function requireAuth(ProtectedComponent: React.ComponentType) {
  const ComponentWithAuth = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }

    return <ProtectedComponent />;
  };

  return ComponentWithAuth;
}

export default requireAuth;
