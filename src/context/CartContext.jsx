/*
  Title: CartContext
  Created By: Nicolas Clocksin

  Description: Context used to add/remove/update the cart. Also used to define the total
  of the cart items as well as their quantity.
*/
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(user?.cart ?? []);
  }, [user]);
  /*
     Method that take in an item/quantity and verifies it is more
     than 0 and verify if the item is in the cart. If it is in the cart,
     the quantity is update otherwise the item is added to the cart.
  */
  const syncUserCart = (updatedCart) => {
    setCartItems(updatedCart);
    if (user) setUser((u) => ({ ...u, cart: updatedCart }));
  };
  const addToCart = (item, quantity) => {
    if (quantity <= 0) return;
    const next = cartItems.find((c) => c.item.id === item.id)
      ? cartItems.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + quantity } : c
        )
      : [...cartItems, { item, quantity }];
    setCartItems(next);
  };
  // Method to sum up the quantity of each cart item
  const cartQuantityTotal = cartItems.reduce(
    (sum, cartEntry) => sum + Number(cartEntry.quantity || 0),
    0
  );
  // Method used to remove an item from the cart
  const removeFromCart = (id) => {
    syncUserCart(cartItems.filter((c) => c.item.id !== id));
  };
  // Method to sum up the total cost of each item and their quantity
  const totalCost = cartItems.reduce(
    (sum, cartEntry) =>
      sum + Number(cartEntry.item.price || 0) * Number(cartEntry.quantity || 0),
    0
  );
  // Method to vaidate if an item is in the cart
  const inCart = (itemId) =>
    cartItems.find((cartItem) => cartItem.item.id === itemId);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalCost,
        cartQuantityTotal,
        inCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
