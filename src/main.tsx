import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
