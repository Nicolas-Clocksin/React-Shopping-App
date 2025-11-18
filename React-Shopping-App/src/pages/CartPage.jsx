import React, {useContext} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    return(
        <div>
           <ListGroup>
                {cartItems.map(cartItem=> (
                    <ListGroup.Item key={cartItem.id} className="cartListItem">
                        <div className="cartListItem-left">
                            <img src={cartItem.imgUrl} alt={cartItem.name}/>
                            <p className="cartListItem-name">{cartItem.name}</p>
                        </div>
                        <div className="cartListItem-right">
                            <p className="cartListItem-price">${cartItem.price}</p>
                            <i className="bi bi-trash cartListItem-delete" onClick={()=> removeFromCart(cartItem.id)}></i>
                        </div>
                    </ListGroup.Item>
                ))}
           </ListGroup>
        </div>
    );
}

export default CartPage
