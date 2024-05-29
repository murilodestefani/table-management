import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}
