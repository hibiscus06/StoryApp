import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/signin/Signin.jsx";
import Discover from "./components/discover/Discover.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Themes from "./components/themes/Themes.jsx";
import About from "./components/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/themes",
    element: <Themes />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
