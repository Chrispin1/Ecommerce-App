import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Error from "./components/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import { CartContext } from "./contexts/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/header",
    element: <Header />,
  },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <CartContext>
    <SidebarProvider>
      <ProductProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartContext>
);
