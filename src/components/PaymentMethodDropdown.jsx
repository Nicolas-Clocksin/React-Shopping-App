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
    <Form className="d-flex flex-column gap-2">
      <Form.Group>
        <Form.Label>Payment Method</Form.Label>
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
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShowPaymentMethodDropdown(false)}>
          Add New Payment Method
        </Button>
      </div>
    </Form>
  );
}
export default PaymentMethodDropdown;
