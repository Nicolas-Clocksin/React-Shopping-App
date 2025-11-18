import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../context/CartContext";
import { ItemContext } from "../context/ItemContext";
function ItemPage() {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const found = items.find((it) => Number(it.id) === Number(id));
    setItem(found || null);
    setNotFound(!found);
  }, [items, id]);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

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
        <div className="itemPageQuantity">
          <Button size="sm" onClick={() => decreaseQuantity()}>
            <i class="bi bi-arrow-left"></i>
          </Button>
          <p>{quantity}</p>
          <Button size="sm" onClick={() => increaseQuantity()}>
            <i class="bi bi-arrow-right"></i>
          </Button>
        </div>
        <Button size="sm" onClick={() => addToCart(item, quantity)}>
          Add to Cart
        </Button>
      </div>
    </section>
  );
}

export default ItemPage;
