import { useEffect, useState } from 'react'
import Login from './components/Login';
import Header from './components/Header';
import ItemCarousel from './components/ItemCarousel';
import Footer from './components/Footer';
import './App.css'
import CategoryList from './components/CategoryList';
import { CategoriesList } from './api/catergories';
import { UserList } from './api/users';
import { itemList } from './api/items';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

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
  console.log(user);
  if(user === null){
    return(
    
        <Login users={users} setUser={setUser} setUsers={setUsers} />
  
    )
  }
  else{
    return(
     <>
        <Header user={user} setUser={setUser}/>
        <ItemCarousel items={items} />
        <CategoryList categories={categories} items={items}/>
        <Footer />
     </>
    )
  }
}
export default App
