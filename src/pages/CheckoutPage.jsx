import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import ShippingForm from "../components/ShippingForm";

function CheckoutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);
  const { user } = useAuth();

  return (
    <div className="checkoutPage">
      <ShippingForm />
    </div>
  );
}

export default CheckoutPage;
