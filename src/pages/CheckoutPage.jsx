/*
  Title: CheckoutPage
  Created By: Nicolas Clocksin

  Description: CheckoutPage is used for user to enter their shipping information/Payment information. The 
  Summary of their cart items are displayed to the user in OrderSummary. On submit the order is created
  and attached to the user.
*/
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import ShippingForm from "../components/ShippingForm";
import AddressDropdown from "../components/AddressDropdown";
import PaymentMethodDropdown from "../components/PaymentMethodDropdown.jsx";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import OrderSummary from "../components/OrderSummary";
import PaymentMethodForm from "../components/PaymentMethodForm";
import "../types.js";
import { useAuth } from "../context/AuthContext.jsx";
import { PaymentMethodContext } from "../context/PaymentMethodContext.jsx";
function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const [showShippingAddressDropdown, setShowShippingAddressDropdown] =
    useState(true);
  const [showBillingAddressDropdown, setShowBillingAddressDropdown] =
    useState(true);
  const { showPaymentMethodDropdown } = useContext(PaymentMethodContext);
  const { user } = useAuth();
  const [differentBilling, setDifferentBilling] = useState(false);
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 d-flex flex-column gap-3">
          {user &&
          user.addresses &&
          user.addresses.length > 0 &&
          showShippingAddressDropdown ? (
            <AddressDropdown
              setShowAddressDropdown={setShowShippingAddressDropdown}
              typeShipment="Shipping"
              setDifferentBilling={setDifferentBilling}
              differentBilling={differentBilling}
            />
          ) : (
            <ShippingForm
              typeShipment="Shipping"
              setShowAddressDropdown={setShowShippingAddressDropdown}
              setDifferentBilling={setDifferentBilling}
              differentBilling={differentBilling}
            />
          )}
          {differentBilling &&
            (user &&
            user.addresses &&
            user.addresses.length > 0 &&
            showBillingAddressDropdown ? (
              <AddressDropdown
                setShowAddressDropdown={setShowBillingAddressDropdown}
                typeShipment="Billing"
              />
            ) : (
              <ShippingForm
                typeShipment="Billing"
                setShowAddressDropdown={setShowBillingAddressDropdown}
              />
            ))}
          {user &&
          user.paymentMethods &&
          user.paymentMethods.length > 0 &&
          showPaymentMethodDropdown ? (
            <PaymentMethodDropdown />
          ) : (
            <PaymentMethodForm />
          )}
        </div>
        <div className="col-12 col-md-4">
          <OrderSummary
            cartItems={cartItems}
            totalAmount={totalAmount}
            showShippingAddressDropdown={showShippingAddressDropdown}
            showBillingAddressDropdown={showBillingAddressDropdown}
            showPaymentMethodDropdown={showPaymentMethodDropdown}
            differentBilling={differentBilling}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
