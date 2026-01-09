/*
  Title: OrderContext
  Created By: Nicolas Clocksin

  Description: Context used to handle the creation and addition to orders.
*/
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useAuth } from "../context/AuthContext";
export const OrderContext = createContext({});

export function OrderProvider({ children }) {
  const { clearCart } = useContext(CartContext);
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const { user, setUser } = useAuth();
  useEffect(() => {
    if (user) {
      setUserOrders(orders.filter((o) => o.userId === user.id));
    }
  }, [user, orders]);
  // Method used to define/create an order
  function createOrder(
    shipping,
    billing,
    paymentMethod,
    cartItems,
    totalAmount
  ) {
    const newOrder = {
      id: Math.floor(Math.random() * 1000000),
      userId: user.id,
      shippingAddress: shipping,
      billingAddress: billing ?? shipping,
      paymentMethod,
      items: cartItems,
      totalAmount,
      date: new Date().toISOString(),
    };
    setOrder(newOrder);
    addToOrders(newOrder);
    clearCart();
  }

  // Method used to add the created order to the orders list
  function addToOrders(newOrder) {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    updateUserOrders(newOrder);
  }
  // Method used to update the user's orders when a new order is created
  function updateUserOrders(newOrder) {
    if (!user) return;
    if (newOrder.userId === user.id) {
      setUserOrders((prev) => [...prev, newOrder]);
      setUser((prevUser) => {
        if (!prevUser) return prevUser;
        const existingOrders = prevUser.orders ?? [];
        return { ...prevUser, orders: [...existingOrders, newOrder] };
      });
    }
  }
  return (
    <OrderContext.Provider value={{ order, orders, userOrders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
