import { ReactNode } from "react";

// Interface para as propriedades do componente que requer autenticação
export interface PrivateProps {
  children: ReactNode; // Os componentes filhos que serão renderizados dentro do componente privado
}

// Interface para o contexto de autenticação
export interface AuthContextProps {
  isAuthenticated: boolean; // Indica se o usuário está autenticado
  setIsAuthenticated: (isAuthenticated: boolean) => void; // Função para atualizar o estado de autenticação
  email: string | null; // Armazena o email do usuário
  setEmail: (email: string | null) => void; // Função para atualizar o email do usuário
}

// Interface para as propriedades do cliente
export interface ClientProps {
  id: string; // Identificador único do cliente
  name: string; // Nome do cliente
  telephone: string; // Telefone de contato do cliente
}

// Interface para as propriedades da mesa
export interface TableProps {
  id: string; // Identificador único da mesa
  number: string; // Número da mesa
  seats: string; // Número de assentos disponíveis na mesa
  isReserved: boolean; // Indica se a mesa está reservada
  clientId?: string; // Opcional: Identificador do cliente que reservou a mesa
}
