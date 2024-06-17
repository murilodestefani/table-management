import ReactDOM from "react-dom/client";
import "@styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { AuthProvider } from "@context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextThemesProvider>
  </NextUIProvider>,
);
