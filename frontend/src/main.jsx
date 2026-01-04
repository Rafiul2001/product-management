import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Dashboard/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
  {
    path: "/admin/login",
    Component: Login,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
