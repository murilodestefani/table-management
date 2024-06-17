import { AuthContextProps } from "@/interfaces";
import { createContext, useContext, useState, ReactNode } from "react";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, email, setEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
