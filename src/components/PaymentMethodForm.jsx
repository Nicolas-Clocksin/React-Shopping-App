/*
  Title: PaymentMethodForm
  Created By: Nicolas Clocksin

  Description: Component used to display payment method form on order checkout.
*/
import { Button, Form } from "react-bootstrap";
import { PaymentMethodContext } from "../context/PaymentMethodContext";
import { useContext } from "react";
function PaymentMethodForm() {
  const { updateCardNumber, updateExpirationDate, updateCvv } =
    useContext(PaymentMethodContext);

  return (
    <Form className="checkoutForm">
      <Form.Label>Payment Information</Form.Label>
      <Form.Group className="mb-4">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your card number"
          onChange={(event) => updateCardNumber(event)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/YY"
          onChange={(event) => updateExpirationDate(event)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>CVV</Form.Label>
        <Form.Control
          type="text"
          placeholder="CVV"
          onChange={(event) => updateCvv(event)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default PaymentMethodForm;
