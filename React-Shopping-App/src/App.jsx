import { useState } from 'react'
import Login from './components/Login';
import Header from './components/Header';
import ItemCarousel from './components/ItemCarousel';
import Footer from './components/Footer';
import './App.css'

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
  const [items, setItems] = useState([{
    id: 1,
    category: 1,
    name: 'Toy',
    description: 'this is a toy',
    imgUrl: 'https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=',
    price: 30
  },
  {
    id: 2,
    category: 2,
    name: 'Game',
    description: 'this is a toy',
    imgUrl: 'https://store-images.s-microsoft.com/image/apps.808.14492077886571533.be42f4bd-887b-4430-8ed0-622341b4d2b0.c8274c53-105e-478b-9f4b-41b8088210a3?q=90&w=177&h=265',
    price: 30
  }]);
  console.log(user);
  if(user === null){
    return(
    
        <Login users={users} setUser={setUser} />
  
    )
  }
  else{
    return(
     <>
        <Header />
        <ItemCarousel items={items} />
        <Footer />
     </>
    )
  }
}
export default App
