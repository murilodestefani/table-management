import { Navigate } from "react-router-dom"; // Importa o componente Navigate do React Router
import { useAuth } from "@context/AuthContext"; // Importa o hook useAuth do contexto de autenticação
import { PrivateProps } from "@/interfaces"; // Importa a interface PrivateProps

// Componente para proteger rotas que requerem autenticação
export function Private({ children }: PrivateProps) {
  // Obtém o estado de autenticação do contexto de autenticação
  const { isAuthenticated } = useAuth();

  // Retorna os componentes filhos se o usuário estiver autenticado,
  // caso contrário, redireciona para a página de login
  return isAuthenticated ? children : <Navigate to="/login" />;
}
