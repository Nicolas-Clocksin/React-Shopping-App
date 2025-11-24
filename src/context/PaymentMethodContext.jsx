/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
*/
import { createContext } from "react";
export const PaymentMethodContext = createContext({});
export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  function updateCardNumber(event) {
    setCardNumber(event.target.value);
  }
  function updateExpirationDate(event) {
    setExpirationDate(event.target.value);
  }
  function updateCvv(event) {
    setCvv(event.target.value);
  }
  function addPaymentMethod() {
    setPaymentMethod([cardNumber, expirationDate, cvv]);
  }
  return (
    <PaymentMethodContext.Provider
      value={{
        updateSelectedMethod,
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
