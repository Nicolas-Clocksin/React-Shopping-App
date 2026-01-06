/*
  Title: PaymentMethodContext
  Created By: Nicolas Clocksin

  Description: Context for payment method for the user to update and create.
*/
import { createContext, useState } from "react";
export const PaymentMethodContext = createContext({});
export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");
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
  // update name on card
  function updateCardName(event) {
    setNameOnCard(event.target.value);
  }
  // update card type
  function updateCardType(value) {
    setCardType(value);
  }
  // creates payment method
  function addPaymentMethod() {
    const newPayment = {
      cardNumber,
      expirationDate,
      cvv,
      nameOnCard,
      cardType,
    };
    setPaymentMethod(newPayment);
    return newPayment;
  }
  // context that is returned and used by the application
  return (
    <PaymentMethodContext.Provider
      value={{
        updateCardNumber,
        updateCardType,
        updateExpirationDate,
        updateCvv,
        updateCardName,
        addPaymentMethod,
        paymentMethod,
        cardNumber,
        expirationDate,
        cvv,
        nameOnCard,
        cardType,
      }}
    >
      {children}
    </PaymentMethodContext.Provider>
  );
}
