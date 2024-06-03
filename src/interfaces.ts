import { ReactNode } from "react";

export interface PrivateProps {
  children: ReactNode;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export interface ClientProps {
  id: string;
  name: string;
  telephone: string;
}

export interface TableProps {
  id: string;
  number: string;
  seats: string;
  isReserved: boolean;
  clientId?: string;
}
