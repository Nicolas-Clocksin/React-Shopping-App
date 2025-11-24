/*
  Title: OrderContext
  Created By: Nicolas Clocksin

  Description: Context used to handle the creation and addition to orders.
*/
import { createContext, useState } from "react";
export const OrderContext = createContext({});

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  // Method used to define/create an order
  function createOrder(
    shipping,
    // billing,
    paymentMethod,
    cartItems,
    totalAmount
  ) {
    setOrder({
      id: Math.random(),
      userId: user.id,
      shippingAddress: shipping,
      // billingAddress: billing,
      paymentMethod,
      items: cartItems,
      totalAmount,
      date: new Date().toISOString(),
    });
    addToOrders(order);
  }
  // Method used to add the created order to the orders list
  function addToOrders(newOrder) {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  }
  return (
    <OrderContext.Provider value={{ order, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
