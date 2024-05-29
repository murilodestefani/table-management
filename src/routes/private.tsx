import { Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

export function Private({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}
