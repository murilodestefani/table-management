import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
