import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { PaymentMethodContext } from "../context/PaymentMethodContext";
import { Button, Form } from "react-bootstrap";
function PaymentMethodDropdown() {
  const {
    paymentMethods,
    selectedPaymentMethodIndex,
    updateSelectedPaymentMethod,
    setShowPaymentMethodDropdown,
  } = useContext(PaymentMethodContext);
  const { user } = useAuth();

  if (!user || !paymentMethods || paymentMethods.length === 0) {
    return null;
  }

  return (
    <Form>
      <Form.Label>Shipping Address</Form.Label>
      <Form.Select
        value={selectedPaymentMethodIndex}
        onChange={(event) =>
          updateSelectedPaymentMethod(Number(event.target.value))
        }
      >
        {paymentMethods.map((paymentMethod, index) => (
          <option key={index} value={index}>
            {paymentMethod.cardNumber} - {paymentMethod.nameOnCard}
          </option>
        ))}
      </Form.Select>
      <Button onClick={() => setShowPaymentMethodDropdown(false)}>
        Add New Payment Method
      </Button>
    </Form>
  );
}
export default PaymentMethodDropdown;
