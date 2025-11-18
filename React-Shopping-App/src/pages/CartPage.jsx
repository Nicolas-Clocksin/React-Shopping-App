import React, {useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
function CartPage() {
    const { cartItems } = useContext(CartContext);
    return(
        <div>
            <h1>Cart Page</h1>
            <ul>
            {cartItems.map((cartItem)=>(
                <li>{cartItem.name}</li>
            ))}
            </ul>
        </div>
    );
}

export default CartPage