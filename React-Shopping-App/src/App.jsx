import { useEffect, useState } from 'react'
import Login from './components/Login';
import './App.css'
import { CategoriesList } from './api/catergories';
import { UserList } from './api/users';
import { itemList } from './api/items';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
// import ItemPage from './pages/ItemPage';
function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  useEffect(()=>{
    itemList().then((items)=>{
      setItems(items);
    })


  }, []);

  useEffect(()=>{
    CategoriesList().then((categories)=>{
      setCategories(categories);
    })
  }, []);
  useEffect(()=>{

    UserList().then((users)=>{
      setUsers(users);
    })
  }, []);
 
  if(user === null){
    return(
        <Login users={users} setUser={setUser} setUsers={setUsers} />
    )
  }
  // else if(itemSelected != null){
  //   return(
  //     <>
  //       <Header user={user} setUser={setUser} categories={categories} setItemSelected={setItemSelected}/>
  //       <ItemPage item={itemSelected}/>
  //       <Footer />
  //     </>
  //   )
  // }
  else{
    return(
    //  <>
    //     <Header user={user} setUser={setUser} categories={categories} setItemSelected={setItemSelected}/>
    //     <ItemCarousel items={items} setItemSelected={setItemSelected}/>
    //     <CategoryList categories={categories} items={items} setItemSelected={setItemSelected}/>
    //     <Footer />
    //  </>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage user={user} setUser={setUser} categories={categories} setItemSelected={itemSelected} items={items}/>}/>
      </Routes>
    </Router>
    )
  }
}
export default App
