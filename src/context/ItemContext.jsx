/*
  Title: ItemContext
  Created By: Nicolas Clocksin

  Description: Defines how items are grabbed then used for availbiity for the application.
*/
import { createContext, useEffect, useState } from "react";
import { ItemList } from "../api/items";

export const ItemContext = createContext({});

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  // Useeffect gathers the item list from the api
  useEffect(() => {
    ItemList().then(setItems);
  }, []);
  // items are returned as the context value for the appication
  return (
    <ItemContext.Provider value={{ items }}>{children}</ItemContext.Provider>
  );
}
