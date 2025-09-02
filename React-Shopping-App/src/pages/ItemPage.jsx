import { itemList } from '../api/items';
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
function ItemPage(){
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [notFound, setNotFound] = useState(false);

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
    <>
        <h1>{item.name}</h1>
    </>
    )
}

export default ItemPage