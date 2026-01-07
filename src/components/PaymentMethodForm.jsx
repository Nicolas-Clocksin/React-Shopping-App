/*
  Title: PaymentMethodForm
  Created By: Nicolas Clocksin

  Description: Component used to display payment method form on order checkout.
*/
import { Button, Col, Form, Row } from "react-bootstrap";
import { PaymentMethodContext } from "../context/PaymentMethodContext";
import { useContext } from "react";
function PaymentMethodForm() {
  const {
    updateCardNumber,
    updateCardName,
    updateCardType,
    updateExpirationDate,
    updateCvv,
    updateIsDefault,
  } = useContext(PaymentMethodContext);

  return (
    <Form className="checkoutForm">
      <Form.Label>Payment Information</Form.Label>
      <Row className="mb-4 g-3">
        <Col md={7}>
          <Form.Group>
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your card number"
              onChange={(event) => updateCardNumber(event)}
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group>
            <Form.Label>Card Type</Form.Label>
            <Form.Select
              onChange={(event) => updateCardType(event.target.value)}
            >
              <option value="">Select Card Type</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="amex">American Express</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label>Name on Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name on card"
          onChange={(event) => updateCardName(event)}
        ></Form.Control>
      </Form.Group>
      <Row className="mb-4 g-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              onChange={(event) => updateExpirationDate(event)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="CVV"
              onChange={(event) => updateCvv(event)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Set as default payment method"
              onChange={(event) => updateIsDefault(event.target.checked)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default PaymentMethodForm;
