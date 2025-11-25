/*
  Title: ProtectedRoute
  Created By: Nicolas Clocksin

  Description: A component that protects routes that require authentication.
*/
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
