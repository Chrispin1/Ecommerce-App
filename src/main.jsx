import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext.jsx";
import Home from "./pages/Home.jsx";
import Error from "./components/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
