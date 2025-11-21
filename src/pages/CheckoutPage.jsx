import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import ShippingForm from "../components/ShippingForm";
import Button from "react-bootstrap/Button";
import OrderSummary from "../components/OrderSummary";
function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);
  const [diffBilling, setDiffBilling] = useState(false);
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 d-flex flex-column gap-3">
          <ShippingForm typeShipment="shipping" />
          {diffBilling ? <ShippingForm typeShipment="billing" /> : null}
        </div>
        <div className="col-12 col-md-4">
          <OrderSummary cartItems={cartItems} totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
