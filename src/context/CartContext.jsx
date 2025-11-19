import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item, quantity) => {
    if (quantity <= 0) return;
    if (cartItems.find((cartItem) => cartItem.item.id === item.id)) {
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          item,
          quantity,
          added: true,
          user: user,
        },
      ]);
    }
  };
  const cartQuantityTotal = cartItems.reduce(
    (sum, cartEntry) => sum + Number(cartEntry.quantity || 0),
    0
  );

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.item.id !== id)
    );
  };
  const totalCost = cartItems.reduce(
    (sum, cartEntry) =>
      sum + Number(cartEntry.item.price || 0) * Number(cartEntry.quantity || 0),
    0
  );
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
