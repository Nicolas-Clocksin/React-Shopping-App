import { createContext, useState } from "react";
export const OrderContext = createContext({});

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
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
  function addToOrders(newOrder) {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  }
  return (
    <OrderContext.Provider value={{ order, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
