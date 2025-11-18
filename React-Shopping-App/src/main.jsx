import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import CartPage from "./pages/CartPage.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { ItemProvider } from "./context/ItemContext.jsx";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/home", element: <HomePage /> },
          { path: "/item/:id", element: <ItemPage /> },
          { path: "/category/:id", element: <CategoryPage /> },
          { path: "/cart", element: <CartPage /> },
        ],
      },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <ItemProvider>
            <RouterProvider router={router} />
          </ItemProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
