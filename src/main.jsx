/*
  Title: Main
  Created By: Nicolas Clocksin

  Description: Central entry point of the Shopping application.
*/
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
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { ItemProvider } from "./context/ItemContext.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import OrderCompletePage from "./pages/OrderCompletePage.jsx";
import { AddressProvider } from "./context/AddressContext.jsx";
import { PaymentMethodProvider } from "./context/PaymentMethodContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
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
          { path: "/checkout", element: <CheckoutPage /> },
          { path: "/checkout/complete", element: <OrderCompletePage /> },
          { path: "/profile", element: <ProfilePage /> },
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
            <AddressProvider>
              <PaymentMethodProvider>
                <OrderProvider>
                  <RouterProvider router={router} />
                </OrderProvider>
              </PaymentMethodProvider>
            </AddressProvider>
          </ItemProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
