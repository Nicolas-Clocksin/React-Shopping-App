/*
  Title: OrderSummary
  Created By: Nicolas Clocksin

  Description: Component used in order checkout to summarize the order total.
*/
import React, { useContext } from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { AddressConext } from "../context/AddressContext";
import { PaymentMethodContext } from "../context/PaymentMethodContext";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
function OrderSummary() {
  const { totalCost, cartItems } = useContext(CartContext);
  const { addAddress, address } = useContext(AddressConext);
  const { addPaymentMethod, paymentMethod } = useContext(PaymentMethodContext);
  const { createOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  return (
    <div className="order-summary p-3 border rounded">
      <h5 className="mb-3">Your Order</h5>

      <ListGroup className="mb-3">
        {cartItems.length === 0 && <div className="text-muted">No items</div>}
        {cartItems.map((cartItem) => (
          <ListGroup.Item
            key={cartItem.item.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="fw-semibold">{cartItem.item.name}</div>
              <small className="text-muted">Qty: {cartItem.quantity}</small>
            </div>
            <div>
              <Badge bg="light" text="dark">
                ${Number(cartItem.item.price * cartItem.quantity).toFixed(2)}
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <strong>Total</strong>
        <strong>${Number(totalCost || 0).toFixed(2)}</strong>
      </div>

      <Button
        variant="primary"
        className="w-100"
        onClick={() => {
          const newAddress = addAddress();
          const newPayment = addPaymentMethod();
          createOrder(newAddress, newPayment, cartItems, totalCost);
          navigate("/checkout/complete");
        }}
      >
        Complete Order
      </Button>
    </div>
  );
}

export default OrderSummary;
