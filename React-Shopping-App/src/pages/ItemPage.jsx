import { itemList } from '../api/items';
import { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import { CartContext } from '../context/CartContext';
function ItemPage(){
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const {addToCart} = useContext(CartContext);
  useEffect(() => {
    let mounted = true;
    itemList()
      .then((items) => {
        const found = items.find((it) => Number(it.id) === Number(id));
        if (!mounted) return;
        if (found) setItem(found);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true));
    return () => { mounted = false; };
  }, [id]);

  if (notFound) return <h2>Item not found</h2>;
  if (!item) return <h2>Loading item…</h2>;
   return (
    <section className="itemPage">
      <div className="itemPage__image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="itemPage__details">
        <h1>{item.name}</h1>
        <p className="itemPage__price">${item.price} USD</p>
        <p className="itemPage__description">{item.description}</p>
         <Button size="sm" onClick={()=>addToCart(item)}>Add to Cart</Button>
      </div>
    </section>
  );
}

export default ItemPage