/*
  Title: CheckoutPage
  Created By: Nicolas Clocksin

  Description: CheckoutPage is used for user to enter their shipping information/Payment information. The 
  Summary of their cart items are displayed to the user in OrderSummary. On submit the order is created
  and attached to the user.
*/
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import ShippingForm from "../components/ShippingForm";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import OrderSummary from "../components/OrderSummary";
import PaymentMethodForm from "../components/PaymentMethodForm";
import "../types.js";
function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);
  const [diffBilling, setDiffBilling] = useState(false);

  function updateDiffBilling() {
    setDiffBilling((prev) => !prev);
  }
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 d-flex flex-column gap-3">
          <ShippingForm typeShipment="shipping" />
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Billing Different from Shipping"
                onClick={() => updateDiffBilling()}
              />
            </Form.Group>
          </Form>
          {diffBilling ? <ShippingForm typeShipment="billing" /> : null} */}
          <PaymentMethodForm />
        </div>
        <div className="col-12 col-md-4">
          <OrderSummary cartItems={cartItems} totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
