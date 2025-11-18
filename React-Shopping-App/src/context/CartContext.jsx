import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); 
  const addToCart = (item, quantity) => {
  setCartItems(prev => [
    ...prev,
    {
      item,
      quantity,
      added: true
    },
  ]);
}


  const removeFromCart = (id)=>{
    setCartItems(prevCartItems => prevCartItems.filter(item => item.item.id !== id));
  }
 const totalCost = cartItems.reduce(
  (sum, cartEntry) => sum + Number(cartEntry.item.price || 0) * Number(cartEntry.quantity || 0),
  0
);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalCost}}>
      {children}
    </CartContext.Provider>
  );
}