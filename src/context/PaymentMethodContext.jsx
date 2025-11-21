export function PaymentMethodProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  function updateSelectedMethod(event) {
    setSelectedMethod(event.target.value);
  }
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
    setPaymentMethod([selectedMethod, cardNumber, expirationDate, cvv]);
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
