import ReactDOM from "react-dom/client"; // Importa o método para criar a raiz do React
import "@styles/global.css"; // Importa o arquivo de estilos globais
import { RouterProvider } from "react-router-dom"; // Importa o provedor de roteador para React Router
import { router } from "@/routes"; // Importa o roteador configurado
import { AuthProvider } from "@context/AuthContext"; // Importa o provedor de contexto de autenticação
import { NextUIProvider } from "@nextui-org/react"; // Importa o provedor de UI do NextUI
import { ThemeProvider as NextThemesProvider } from "next-themes"; // Importa o provedor de temas do Next Themes

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextThemesProvider>
  </NextUIProvider>,
);
