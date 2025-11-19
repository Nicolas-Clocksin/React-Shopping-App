import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../context/CartContext";
import { ItemContext } from "../context/ItemContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function ItemPage() {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { addToCart, inCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const found = items.find((it) => Number(it.id) === Number(id));
    setItem(found || null);
    setNotFound(!found);
  }, [items, id]);

  function updateQuantity(value) {
    setQuantity(value);
  }

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
        {!inCart(item.id) ? (
          <div>
            <div className="itemPageQuantity">
              <DropdownButton
                title={`Quantity: ${quantity}`}
                variant="outline-secondary"
              >
                {[1, 2, 3, 4].map((input) => (
                  <Dropdown.Item
                    as="button"
                    key={input}
                    onClick={() => updateQuantity(input)}
                  >
                    {input}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <Button size="sm" onClick={() => addToCart(item, quantity)}>
              Add to Cart
            </Button>
          </div>
        ) : (
          <div>
            <Button
              size="sm"
              variant="danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove from Cart
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemPage;
