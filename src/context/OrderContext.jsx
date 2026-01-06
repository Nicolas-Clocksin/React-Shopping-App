/*
  Title: OrderContext
  Created By: Nicolas Clocksin

  Description: Context used to handle the creation and addition to orders.
*/
import { createContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
export const OrderContext = createContext({});

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      setUserOrders(orders.filter((o) => o.userId === user.id));
    }
  }, [user, orders]);
  // Method used to define/create an order
  function createOrder(
    shipping,
    // billing,
    paymentMethod,
    cartItems,
    totalAmount
  ) {
    const newOrder = {
      id: Math.random(),
      userId: user.id,
      shippingAddress: shipping,
      billingAddress: shipping,
      paymentMethod,
      items: cartItems,
      totalAmount,
      date: new Date().toISOString(),
    };
    setOrder(newOrder);
    addToOrders(newOrder);
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
    }
  }
  return (
    <OrderContext.Provider value={{ order, orders, userOrders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
