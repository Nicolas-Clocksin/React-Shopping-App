import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, totalCost, quantity } =
    useContext(CartContext);
  if (cartItems.length != 0) {
    return (
      <div>
        <ListGroup>
          {cartItems.map((cartItem) => (
            <ListGroup.Item key={cartItem.item.id} className="cartListItem">
              <div className="cartListItem-left">
                <img src={cartItem.item.imgUrl} alt={cartItem.item.name} />
                <p className="cartListItem-name">{cartItem.item.name}</p>
              </div>
              <div className="cartListItem-right">
                <p className="cartListItem-price">${cartItem.item.price}</p>
                <i
                  className="bi bi-trash cartListItem-delete"
                  onClick={() => removeFromCart(cartItem.item.id)}
                ></i>
                <p>Quantity: {cartItem.quantity}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="cartSummary">
          <span className="cartTotal">Total: ${totalCost}</span>
          <Button className="cartButton" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="emptyCart">
        <h1>Cart is empty</h1>
      </div>
    );
  }
}

export default CartPage;
