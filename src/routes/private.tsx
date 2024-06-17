import { Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { PrivateProps } from "@/interfaces";

export function Private({ children }: PrivateProps) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}
