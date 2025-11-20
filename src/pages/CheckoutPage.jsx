import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import ShippingForm from "../components/ShippingForm";
import Button from "react-bootstrap/Button";

function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);

  return (
    <div className="checkoutPage d-flex flex-column gap-3 justify-content-center align-items-center">
      <ShippingForm typeShipment="shipping" />
      <ShippingForm typeShipment="billing" />
      <div className="text-center">
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}

export default CheckoutPage;
