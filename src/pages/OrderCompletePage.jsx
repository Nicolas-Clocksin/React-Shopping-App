import { Form } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
function OrderCompletePage() {
  const { order, userOrders } = useContext(OrderContext);
  const { user } = useAuth();

  useEffect(() => {
    console.log("Order Complete Page - User orders:", userOrders);
  }, [userOrders]);

  return (
    <div>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Order Complete</Form.Label>
            <Form.Text>
              Thank you for your order! Your order number is {order?.id}.
            </Form.Text>
          </Form.Group>
        </Form>
      </>
    </div>
  );
}

export default OrderCompletePage;
