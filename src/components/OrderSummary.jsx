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
function OrderSummary({
  showShippingAddressDropdown,
  showBillingAddressDropdown,
  showPaymentMethodDropdown,
  differentBilling,
}) {
  const { totalCost, cartItems } = useContext(CartContext);
  const { addAddress, selectedShippingAddress, selectedBillingAddress } =
    useContext(AddressConext);
  const { addPaymentMethod, selectedPaymentMethod } =
    useContext(PaymentMethodContext);
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
          const useSelectedShipping =
            showShippingAddressDropdown !== false && selectedShippingAddress;
          const useSelectedBilling =
            showBillingAddressDropdown !== false && selectedBillingAddress;
          const useSelectedPayment =
            showPaymentMethodDropdown !== false && selectedPaymentMethod;
          let shippingNewAddress = null;
          let billingNewAddress = null;
          const shippingAddress = useSelectedShipping
            ? selectedShippingAddress
            : (shippingNewAddress ??= addAddress("shipping"));
          const billingAddress = differentBilling
            ? useSelectedBilling
              ? selectedBillingAddress
              : (billingNewAddress ??= addAddress("billing"))
            : shippingAddress;
          const payment = useSelectedPayment
            ? selectedPaymentMethod
            : addPaymentMethod();
          createOrder(
            shippingAddress,
            billingAddress,
            payment,
            cartItems,
            totalCost
          );
          navigate("/checkout/complete");
        }}
      >
        Complete Order
      </Button>
    </div>
  );
}

export default OrderSummary;
