import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (item) =>
    setCartItems((prev) => (prev ? [...prev, item] : [item]));

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}