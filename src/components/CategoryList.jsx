/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
*/
import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import CardBody from "react-bootstrap/esm/CardBody";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";
import { CartContext } from "../context/CartContext";
import { ItemContext } from "../context/ItemContext";

function CategoryList() {
  const { inCart, addToCart, removeFromCart } = useContext(CartContext);
  const { items } = useContext(ItemContext);
  const { categories } = useContext(CategoryContext);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const getQuantityForItem = (itemId) => selectedQuantities[itemId] ?? 1;

  function updateQuantity(itemId, value) {
    setSelectedQuantities((prev) => ({ ...prev, [itemId]: value }));
  }

  function handleAddToCart(item) {
    const quantity = getQuantityForItem(item.id);
    addToCart(item, quantity);
  }

  return (
    <div className="categoryList">
      {categories.map((category) => (
        <div key={category.id}>
          <div className="categoryListHeader">
            <h1>{category.name}</h1>
            <Link className="seeAllLink" to={`/category/${category.id}`}>
              See All
            </Link>
          </div>
          <div className="categoryItems">
            <ul className="d-flex overflow-auto gap-3 px-1 list-unstyled m-0">
              {items
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <li key={item.id}>
                    <Card className="category-card h-100">
                      <Link
                        to={`/item/${item.id}`}
                        className="categoryCardLink"
                      >
                        <Card.Img variant="top" src={item.imgUrl} />
                      </Link>
                      <CardBody className="card-body d-flex flex-column">
                        <Link
                          to={`/item/${item.id}`}
                          className="categoryCardLink flex-grow-1 mb-3 text-reset text-decoration-none"
                        >
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>${item.price} USD</Card.Text>
                          <p className="text-muted mb-0">{item.description}</p>
                        </Link>

                        {!inCart(item.id) ? (
                          <div className="d-flex flex-column gap-2">
                            <DropdownButton
                              id={`quantity-dropdown-${item.id}`}
                              title={`Quantity: ${getQuantityForItem(item.id)}`}
                              variant="outline-secondary"
                            >
                              {[1, 2, 3, 4].map((quantity) => (
                                <Dropdown.Item
                                  as="button"
                                  key={quantity}
                                  active={
                                    quantity === getQuantityForItem(item.id)
                                  }
                                  onClick={() =>
                                    updateQuantity(item.id, quantity)
                                  }
                                >
                                  {quantity}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(item)}
                            >
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
                      </CardBody>
                    </Card>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
