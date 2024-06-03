import { Home } from "@pages/Home"; // Importa o componente da página Home
import { NotFound } from "@pages/NotFound"; // Importa o componente da página NotFound (404)
import { Welcome } from "@pages/Welcome"; // Importa o componente da página Welcome
import { Login } from "@pages/Login"; // Importa o componente da página Login
import { createBrowserRouter } from "react-router-dom"; // Importa a função para criar o roteador do navegador
import { Private } from "./routes/private"; // Importa o componente de rota privada

// Cria o roteador do navegador com as rotas definidas
export const router = createBrowserRouter([
  {
    path: "/", // Caminho para a página inicial
    element: <Welcome />, // Renderiza o componente Welcome
  },
  {
    path: "/login", // Caminho para a página de login
    element: <Login />, // Renderiza o componente Login
  },
  {
    path: "/home", // Caminho para a página Home
    element: (
      // Envolve a rota Home no componente Private, que verifica se o usuário está autenticado
      <Private>
        <Home /> {/* Renderiza o componente Home se o usuário estiver autenticado */}
      </Private>
    ),
  },
  {
    path: "*", // Caminho curinga para capturar todas as outras rotas não definidas
    element: <NotFound />, // Renderiza o componente NotFound (404)
  },
]);
