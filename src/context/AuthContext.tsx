import { AuthContextProps } from "@/interfaces";
import { createContext, useContext, useState, ReactNode } from "react";

// Cria o contexto de autenticação com um valor padrão indefinido
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Componente provedor do contexto de autenticação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Estado que controla se o usuário está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Estado que armazena o email do usuário
  const [email, setEmail] = useState<string | null>(null);

  return (
    // Provedor do contexto de autenticação que passa os estados e funções de atualização como valor
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, email, setEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = (): AuthContextProps => {
  // Obtém o contexto de autenticação
  const context = useContext(AuthContext);

  // Se o contexto for undefined, lança um erro indicando que o hook deve ser usado dentro de um AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Retorna o contexto de autenticação
  return context;
};
