import { useEffect, useState } from 'react'
import Login from './components/Login';
import './App.css'
import { CategoriesList } from './api/catergories';
import { UserList } from './api/users';

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [cart, setCart] = useState([]);
  

  useEffect(()=>{
    CategoriesList().then((categories)=>{
      setCategories(categories);
    })
  }, []);
  
 
  if(user === null){
    return(
        <Login users={users} setUser={setUser} setUsers={setUsers} />
    )
  }
  else{
    return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage user={user} setUser={setUser} categories={categories} setItemSelected={itemSelected} items={items}/>}/>
        <Route path='/item' element={<ItemPage item={itemSelected}/>} />
      </Routes>
    </Router>
    )
  }
}
export default App
