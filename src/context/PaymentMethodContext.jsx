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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedPaymentMethodIndex, setSelectedPaymentMethodIndex] =
    useState(0);
  const [showPaymentMethodDropdown, setShowPaymentMethodDropdown] =
    useState(true);
  const [paymentMethods, setPaymentMethods] = useState([]);
  useState(0);
  useEffect(() => {
    const nextPaymentMethod = user?.paymentMethods ?? [];
    setPaymentMethod(nextPaymentMethod);
    if (nextPaymentMethod.length > 0) {
      setSelectedPaymentMethodIndex(0);
      setSelectedPaymentMethod(nextPaymentMethod[0]);
      setPaymentMethods(user.paymentMethods);
    } else {
      setSelectedPaymentMethodIndex(0);
      setSelectedPaymentMethod(null);
    }
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
  // update default payment method
  function updateIsDefault(value) {
    setIsDefault(value);
  }
  // updates user's payment methods
  function updateUserPaymentMethods(updatedPayments) {
    setPaymentMethod(updatedPayments);
    if (user) setUser((u) => ({ ...u, paymentMethods: updatedPayments }));
  }
  function updateSelectedAddress(index) {
    setSelectedPaymentMethodIndex(index);
    setSelectedPaymentMethod(paymentMethod[index] ?? null);
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
    setIsDefault(false);
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
        updateSelectedAddress,
        setShowPaymentMethodDropdown,
        showPaymentMethodDropdown,
        selectedPaymentMethod,
        paymentMethods,
        selectedPaymentMethodIndex,
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
