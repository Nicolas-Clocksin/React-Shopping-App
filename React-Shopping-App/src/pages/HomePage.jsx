
import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCarousel from '../components/ItemCarousel';
import CategoryList from '../components/CategoryList';
function HomePage({user, setUser, categories, setItemSelected, items}){
    return(
        <>
            <Header user={user} setUser={setUser} categories={categories} setItemSelected={setItemSelected}/>
            <ItemCarousel items={items} setItemSelected={setItemSelected}/>
            <CategoryList categories={categories} items={items} setItemSelected={setItemSelected}/>
            <Footer />
        </>
    )
}

export default HomePage