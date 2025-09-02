import ItemCarousel from '../components/ItemCarousel';
import CategoryList from '../components/CategoryList';
import { useAuth } from '../auth/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { CategoriesList } from '../api/catergories.js';
import { itemList } from '../api/items';

function HomePage(){
    const { user } = useAuth();
    const [ categories, setCategories] = useState([]);

    useEffect(()=>{ CategoriesList().then(setCategories); },[]);
    useEffect(()=>{ itemList().then(setItems); },[]);
    return(
        <>
            
            <ItemCarousel />
            <CategoryList />
            
        </>
    )
}

export default HomePage