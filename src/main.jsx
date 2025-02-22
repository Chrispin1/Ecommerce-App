import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/Product.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product/:id?", element: <Product /> },
]);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>
);
