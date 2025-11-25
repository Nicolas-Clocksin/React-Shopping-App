/* 
  Title: App
  Created By: Nicolas Clocksin

  Description: Application root component for the Shopping application.
*/
import { useEffect, useState, useContext, createContext } from "react";
import Login from "./components/Login";
import "./App.css";
import { CategoriesList } from "./api/catergories";
import { UserList } from "./api/users";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";

const CartContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    CategoriesList().then((categories) => {
      setCategories(categories);
    });
  }, []);

  if (user === null) {
    return <Login users={users} setUser={setUser} setUsers={setUsers} />;
  } else {
    return (
      <Router>
        <Routes>
          <CartContext.Provider>
            <Route
              path="/"
              element={
                <HomePage
                  user={user}
                  setUser={setUser}
                  categories={categories}
                  setItemSelected={itemSelected}
                  items={items}
                />
              }
            />
            <Route path="/item" element={<ItemPage item={itemSelected} />} />
          </CartContext.Provider>
        </Routes>
      </Router>
    );
  }
}
export default App;
