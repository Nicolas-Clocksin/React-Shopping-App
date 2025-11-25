/*
  Title: PaymentMethodContext
  Created By: Nicolas Clocksin

  Description: Context for payment method for the user to update and create.
*/
import { createContext, useState } from "react";
export const PaymentMethodContext = createContext({});
export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  // update the card number entered into field
  function updateCardNumber(event) {
    setCardNumber(event.target.value);
  }
  // update expiration date of payment method
  function updateExpirationDate(event) {
    setExpirationDate(event.target.value);
  }
  // update the ccv of payment method
  function updateCvv(event) {
    setCvv(event.target.value);
  }
  // creates payment method
  function addPaymentMethod() {
    setPaymentMethod([cardNumber, expirationDate, cvv]);
  }
  // context that is returned and used by the application
  return (
    <PaymentMethodContext.Provider
      value={{
        updateCardNumber,
        updateExpirationDate,
        updateCvv,
        addPaymentMethod,
        paymentMethod,
      }}
    >
      {children}
    </PaymentMethodContext.Provider>
  );
}
