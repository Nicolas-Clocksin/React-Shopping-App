import { useEffect, useState } from 'react'
import Login from './components/Login';
import Header from './components/Header';
import ItemCarousel from './components/ItemCarousel';
import Footer from './components/Footer';
import './App.css'
import CategoryList from './components/CategoryList';
import { itemList } from './api/items';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'username',
      role: 'user',
      email: 'email@email.com',
      password: 'test'
    },
    {
      id: 2,
      name: 'admin',
      role: 'admin',
      email: 'admin@email.com',
      password: 'test'
    },
  ]);
  const [categories, setCategories] = useState([{
    id: 1,
    name: 'Toys',
  },
  {
    id: 2,
    name: 'Video Games',
  }]);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    itemList().then((items)=>{
      setItems(items);
    })
  }, []);
  console.log(user);
  if(user === null){
    return(
    
        <Login users={users} setUser={setUser} />
  
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
