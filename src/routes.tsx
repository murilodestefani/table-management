import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Login } from "@pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { Private } from "./routes/private";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
