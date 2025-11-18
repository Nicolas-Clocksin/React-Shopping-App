import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (item) =>
    setCartItems((prev) => (prev ? [...prev, item] : [item]));

  const removeFromCart = (id)=>{
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}