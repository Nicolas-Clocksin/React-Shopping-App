/*
  Title: PaymentMethodContext
  Created By: Nicolas Clocksin

  Description: Context for payment method for the user to update and create.
*/
import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
export const PaymentMethodContext = createContext({});
export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const { user, setUser } = useAuth();

  useEffect(() => {
    setPaymentMethod(user?.paymentMethods ?? []);
  }, [user]);
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
  function updateIsDefault(value) {
    setIsDefault(value);
  }
  function updateUserPaymentMethods(updatedPayments) {
    setPaymentMethod(updatedPayments);
    if (user) setUser((u) => ({ ...u, paymentMethods: updatedPayments }));
  }
  function updateUserDefaultPaymentMethod(newDefaultId) {
    const updatedPayments = paymentMethod.map((payment) => ({
      ...payment,
      isDefault: payment.id === newDefaultId,
    }));
    updateUserPaymentMethods(updatedPayments);
  }
  // creates payment method
  function addPaymentMethod() {
    const newPayment = {
      id: Math.random(),
      cardNumber,
      expirationDate,
      cvv,
      nameOnCard,
      cardType,
      isDefault,
    };
    const hasDefault = paymentMethod.some((pm) => pm.isDefault);
    const updateDefault =
      isDefault || !hasDefault
        ? [
            ...paymentMethod.map((pm) => ({ ...pm, isDefault: false })),
            { ...newPayment, isDefault: true },
          ]
        : [...paymentMethod, newPayment];

    updateUserPaymentMethods(updateDefault);
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
        updateIsDefault,
        updateCardName,
        addPaymentMethod,
        isDefault,
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
