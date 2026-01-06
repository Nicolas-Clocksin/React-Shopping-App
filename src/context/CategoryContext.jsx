/*
  Title: CategoryContext
  Created By: Nicolas Clocksin

  Description: Context used to define the gathering of Categories list from api
  to be used in the application.
*/
import { createContext, useEffect, useState } from "react";
import { CategoriesList } from "../api/catergories";
import "../types.js";
/**
 * @typedef {import("../types.js").Category[]} Category[]
 */
export const CategoryContext = createContext({});
export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  // Call to API to get list of categories
  useEffect(() => {
    CategoriesList().then(setCategories);
  }, []);
  // categories are returned to be used in the application
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}
