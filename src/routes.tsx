import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Welcome } from "@pages/Welcome";
import { Login } from "@pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { Private } from "./routes/private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: (
          <Private>
            <Home />
          </Private>
        ),
      },
    ],
  },
]);
