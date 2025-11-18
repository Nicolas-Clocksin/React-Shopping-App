import { createContext, useEffect, useState } from "react";
import { CategoriesList } from "../api/catergories";

export const CategoryContext = createContext({})

export function CategoryProvider({children}){
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoriesList().then(setCategories);
  }, []);

    return(
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    )

}