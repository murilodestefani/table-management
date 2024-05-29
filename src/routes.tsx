import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "@pages/Welcome";
import { Login } from "@pages/Login";
import { Private } from "@routes/private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <Private>
            <Home />
          </Private>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
