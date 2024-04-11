import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

const routes = [
  { path: "/", element: <Home /> },
  {
    path: "/products/:productId", //:productId is a variable path
    element: <Products />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
