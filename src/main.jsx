import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductContext.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>
);
