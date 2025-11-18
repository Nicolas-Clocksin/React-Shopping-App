import { createContext, useEffect, useState } from "react";
import { ItemList } from "../api/items";

export const ItemContext = createContext({});

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ItemList().then(setItems);
  }, []);

  return (
    <ItemContext.Provider value={{ items }}>{children}</ItemContext.Provider>
  );
}
